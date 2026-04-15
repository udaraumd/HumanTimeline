const eraColors = {
  Origins: "#9f4f2f",
  "Ancient Civilizations": "#ba8b2d",
  "Classical World": "#345c52",
  "Post-Classical": "#6f5c9a",
  "Early Modern": "#9a3f5b",
  "Age of Revolutions": "#5d6c2a",
  "Industrial World": "#2f6170",
  "World Wars": "#7e3c2f",
  "Cold War and Decolonization": "#3d5079",
  "Contemporary World": "#1f1a17",
};

const densityMap = {
  high: ["high", "medium", "low"],
  medium: ["high", "medium"],
  low: ["high"],
};

const state = {
  selectedYear: 2026,
  activeEras: new Set([...new Set(HISTORY_DATA.map((entry) => entry.era))]),
  activeReligions: null,
  density: "high",
  selectedEventId: null,
  locale: "en",
};

const timeline = document.getElementById("timeline");
const yearRange = document.getElementById("yearRange");
const yearValue = document.getElementById("yearValue");
const yearDistance = document.getElementById("yearDistance");
const yearContext = document.getElementById("yearContext");
const resultsHeading = document.getElementById("resultsHeading");
const resultsCount = document.getElementById("resultsCount");
const detailTitle = document.getElementById("detailTitle");
const detailDate = document.getElementById("detailDate");
const detailBody = document.getElementById("detailBody");
const detailMeta = document.getElementById("detailMeta");
const spotlightTitle = document.getElementById("spotlightTitle");
const eraFilters = document.getElementById("eraFilters");
const religionFilters = document.getElementById("religionFilters");
const heroStats = document.getElementById("heroStats");

const ALL_ERAS = [...new Set(HISTORY_DATA.map((entry) => entry.era))];
const PRESENT_YEAR = 2026;
const MAIN_RELIGION_ORDER = [
  "Ancient / Indigenous Traditions",
  "Buddhism",
  "Christianity",
  "Confucian / Chinese Traditions",
  "Hinduism",
  "Islam",
  "Judaism",
  "Secular / Multi-faith",
];

function toMainReligion(religion) {
  const label = religion.toLowerCase();
  if (label.includes("buddh")) return "Buddhism";
  if (label.includes("christ")) return "Christianity";
  if (label.includes("confuc")) return "Confucian / Chinese Traditions";
  if (label.includes("hindu")) return "Hinduism";
  if (label.includes("islam")) return "Islam";
  if (label.includes("jew")) return "Judaism";
  if (
    label.includes("ancient") ||
    label.includes("indigenous") ||
    label.includes("pre-religious") ||
    label.includes("shinto") ||
    label.includes("afro-atlantic")
  ) {
    return "Ancient / Indigenous Traditions";
  }
  return "Secular / Multi-faith";
}

const ALL_RELIGIONS = MAIN_RELIGION_ORDER.filter((religion) =>
  HISTORY_DATA.some((entry) => toMainReligion(entry.religion) === religion)
);
state.activeReligions = new Set(ALL_RELIGIONS);

function t(key) {
  return (
    UI_TRANSLATIONS?.[state.locale]?.[key] ??
    UI_TRANSLATIONS?.en?.[key] ??
    key
  );
}

function localizedLookup(map, key) {
  return map?.[key]?.[state.locale] ?? map?.[key]?.en ?? key;
}

function formatTemplate(template, count) {
  return String(template).replace("{count}", count.toLocaleString());
}

function formatYear(year) {
  if (year < 0) return `${Math.abs(year).toLocaleString()} ${t("bce")}`;
  if (year === 0) return "0";
  return `${year.toLocaleString()} ${t("ce")}`;
}

function formatYearsAgo(year) {
  const distance = PRESENT_YEAR - year;
  if (distance === 0) return t("thisYear");
  if (distance > 0) return formatTemplate(t("yearsAgo"), distance);
  return formatTemplate(t("yearsFromNow"), Math.abs(distance));
}

function localizeEra(era) {
  return localizedLookup(ERA_TRANSLATIONS, era);
}

function localizeReligion(religion) {
  return localizedLookup(RELIGION_TRANSLATIONS, religion);
}

function localizeImportance(importance) {
  return localizedLookup(IMPORTANCE_TRANSLATIONS, importance);
}

function getEventTitle(entry) {
  if (state.locale === "si") {
    return EVENT_TRANSLATIONS?.[entry.title]?.title || entry.title;
  }
  return entry.title;
}

function getEventSummary(entry) {
  if (state.locale === "si") {
    return (
      EVENT_TRANSLATIONS?.[entry.title]?.summary ||
      `${getEventTitle(entry)} ලෝක ඉතිහාසයේ වැදගත් සිදුවීමකි.`
    );
  }
  return entry.description;
}

function getDetailBody(entry) {
  if (state.locale === "si") {
    return (
      EVENT_TRANSLATIONS?.[entry.title]?.summary ||
      `${getEventTitle(entry)} ලෝක ඉතිහාසයේ වැදගත් සිදුවීමකි.`
    );
  }
  return `${entry.description} ${entry.impact}`;
}

function renderImageBlock(entry) {
  if (!entry.imageUrl) return "";
  return `
    <figure class="timeline-image-wrap">
      <img
        class="timeline-image"
        src="${entry.imageUrl}"
        alt="${getEventTitle(entry)}"
        loading="lazy"
        referrerpolicy="no-referrer"
      />
      <a
        class="timeline-image-credit"
        href="${entry.imageSource}"
        target="_blank"
        rel="noreferrer"
      >
        ${entry.imageCredit}
      </a>
    </figure>
  `;
}

function buildStats() {
  const earliest = Math.min(...HISTORY_DATA.map((item) => item.year));
  const latest = Math.max(...HISTORY_DATA.map((item) => item.year));
  const statItems = [
    { value: `${HISTORY_DATA.length}`, label: t("historyMilestones") },
    { value: `${ALL_ERAS.length}`, label: t("erasCount") },
    { value: `${Math.abs(earliest).toLocaleString()}+`, label: t("yearsCovered") },
    { value: formatYear(latest), label: t("latestPoint") },
  ];

  heroStats.innerHTML = statItems
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${item.value}</strong>
          <p>${item.label}</p>
        </article>
      `
    )
    .join("");
}

function buildEraFilters() {
  eraFilters.innerHTML = ALL_ERAS
    .map(
      (era) => `
        <label class="filter-pill">
          <input type="checkbox" data-era="${era}" ${state.activeEras.has(era) ? "checked" : ""} />
          <span>${localizeEra(era)}</span>
        </label>
      `
    )
    .join("");

  eraFilters.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const era = input.dataset.era;
      if (input.checked) state.activeEras.add(era);
      else state.activeEras.delete(era);
      render();
    });
  });
}

function buildReligionFilters() {
  religionFilters.innerHTML = ALL_RELIGIONS
    .map(
      (religion) => `
        <label class="filter-pill">
          <input type="checkbox" data-religion="${religion}" ${state.activeReligions.has(religion) ? "checked" : ""} />
          <span>${localizeReligion(religion)}</span>
        </label>
      `
    )
    .join("");

  religionFilters.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const religion = input.dataset.religion;
      if (input.checked) state.activeReligions.add(religion);
      else state.activeReligions.delete(religion);
      render();
    });
  });
}

function getFilteredData() {
  return HISTORY_DATA.filter(
    (entry) =>
      state.activeEras.has(entry.era) &&
      state.activeReligions.has(toMainReligion(entry.religion)) &&
      densityMap[state.density].includes(entry.importance)
  ).sort((a, b) => a.year - b.year);
}

function describeYearPosition(year, entries) {
  const nearest = [...entries].sort(
    (a, b) => Math.abs(a.year - year) - Math.abs(b.year - year)
  )[0];

  if (!nearest) return t("noMatchContext");

  const direction =
    nearest.year === year
      ? t("exactPoint")
      : nearest.year > year
        ? formatTemplate(t("yearsLater"), nearest.year - year)
        : formatTemplate(t("yearsEarlier"), year - nearest.year);

  return `${getEventTitle(nearest)} (${formatYear(nearest.year)}). ${direction}`;
}

function renderTimeline(entries) {
  resultsCount.textContent = formatTemplate(t("resultsCount"), entries.length);
  resultsHeading.textContent =
    state.activeEras.size === ALL_ERAS.length &&
    state.activeReligions.size === ALL_RELIGIONS.length
      ? t("allResultsHeading")
      : t("filteredResultsHeading");

  timeline.innerHTML = entries
    .map((entry, index) => {
      const isActive =
        state.selectedEventId === `${entry.year}-${entry.title}` ||
        (!state.selectedEventId &&
          Math.abs(entry.year - state.selectedYear) < 50 &&
          index === 0);

      return `
        <article
          class="timeline-card ${isActive ? "is-active" : ""}"
          data-id="${entry.year}-${entry.title}"
          data-year="${entry.year}"
          style="--card-color:${eraColors[entry.era] || "#9f4f2f"}"
        >
          <p class="eyebrow">${localizeEra(entry.era)}</p>
          <div class="card-date-row">
            <strong>${formatYear(entry.year)}</strong>
            <span class="timeline-years-ago">${formatYearsAgo(entry.year)}</span>
          </div>
          <h3>${getEventTitle(entry)}</h3>
          ${renderImageBlock(entry)}
          <p>${getEventSummary(entry)}</p>
          <div class="timeline-meta">
            <span>${entry.region}</span>
            <span>${localizeReligion(toMainReligion(entry.religion))}</span>
            <span>${localizeImportance(entry.importance)}</span>
          </div>
        </article>
      `;
    })
    .join("");

  timeline.querySelectorAll(".timeline-card").forEach((card) => {
    card.addEventListener("click", () => {
      const matched = HISTORY_DATA.find(
        (entry) => `${entry.year}-${entry.title}` === card.dataset.id
      );
      if (!matched) return;
      state.selectedEventId = card.dataset.id;
      state.selectedYear = matched.year;
      yearRange.value = String(matched.year);
      updateSelectedDetail(matched);
      render();
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

function updateSelectedDetail(event) {
  detailTitle.textContent = getEventTitle(event);
  detailDate.textContent = `${formatYear(event.year)} • ${formatYearsAgo(
    event.year
  )} • ${localizeEra(event.era)}`;
  detailBody.textContent = getDetailBody(event);
  detailMeta.innerHTML = `
    <span>${t("regionLabel")}: ${event.region}</span>
    <span>${t("religionLabel")}: ${localizeReligion(
      toMainReligion(event.religion)
    )}</span>
    <span>${t("importanceLabel")}: ${localizeImportance(event.importance)}</span>
  `;
}

function syncNearestEvent(entries) {
  const nearest = [...entries].sort(
    (a, b) => Math.abs(a.year - state.selectedYear) - Math.abs(b.year - state.selectedYear)
  )[0];

  yearValue.textContent = formatYear(state.selectedYear);
  yearDistance.textContent = formatYearsAgo(state.selectedYear);
  yearContext.textContent = describeYearPosition(state.selectedYear, entries);

  if (spotlightTitle) {
    spotlightTitle.textContent = nearest ? getEventTitle(nearest) : t("noEventTitle");
  }

  if (nearest) {
    state.selectedEventId = `${nearest.year}-${nearest.title}`;
    updateSelectedDetail(nearest);
  } else {
    state.selectedEventId = null;
    detailTitle.textContent = t("noEventTitle");
    detailDate.textContent = t("noEventDate");
    detailBody.textContent = t("noEventBody");
    detailMeta.innerHTML = "";
  }
}

function applyStaticTranslations() {
  document.getElementById("appEyebrow").textContent = t("appEyebrow");
  document.getElementById("heroTitle").textContent = t("heroTitle");
  document.getElementById("heroText").textContent = t("heroText");
  document.getElementById("jumpToOrigins").textContent = t("jumpToOrigins");
  document.getElementById("jumpToToday").textContent = t("jumpToToday");
  document.getElementById("spotlightEyebrow").textContent = t("spotlightEyebrow");
  document.getElementById("yearRangeLabel").textContent = t("yearRangeLabel");
  document.getElementById("yearSearchLabel").textContent = t("yearSearchLabel");
  document.getElementById("yearSearch").placeholder = t("yearSearchPlaceholder");
  document.getElementById("goToYear").textContent = t("goToYear");
  document.getElementById("yearSearchHelp").textContent = t("yearSearchHelp");
  document.getElementById("densityLabel").textContent = t("densityLabel");
  document.querySelector('[data-density="high"]').textContent = t("densityHigh");
  document.querySelector('[data-density="medium"]').textContent = t("densityMedium");
  document.querySelector('[data-density="low"]').textContent = t("densityLow");
  document.getElementById("filterLibraryLabel").textContent = t("filterLibraryLabel");
  document.getElementById("filtersCaption").textContent = t("filtersCaption");
  document.getElementById("eraFiltersLabel").textContent = t("eraFiltersLabel");
  document.getElementById("religionFiltersLabel").textContent = t("religionFiltersLabel");
  document.getElementById("timelineEyebrow").textContent = t("timelineEyebrow");
  document.getElementById("selectedMomentEyebrow").textContent = t("selectedMomentEyebrow");
  document.getElementById("readingGuideEyebrow").textContent = t("readingGuideEyebrow");
  document.getElementById("guideItem1").textContent = t("guideItem1");
  document.getElementById("guideItem2").textContent = t("guideItem2");
  document.getElementById("guideItem3").textContent = t("guideItem3");
  document.getElementById("guideItem4").textContent = t("guideItem4");

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.locale);
  });
}

function render() {
  applyStaticTranslations();
  buildStats();
  buildEraFilters();
  buildReligionFilters();
  const entries = getFilteredData();
  syncNearestEvent(entries);
  renderTimeline(entries);
}

yearRange.value = String(state.selectedYear);
yearRange.addEventListener("input", (event) => {
  state.selectedYear = Number(event.target.value);
  state.selectedEventId = null;
  render();
});

document.getElementById("goToYear").addEventListener("click", () => {
  const input = document.getElementById("yearSearch");
  const year = Number(input.value);
  if (Number.isNaN(year)) return;
  const clamped = Math.max(-300000, Math.min(2026, year));
  state.selectedYear = clamped;
  state.selectedEventId = null;
  yearRange.value = String(clamped);
  render();
});

document.getElementById("yearSearch").addEventListener("keydown", (event) => {
  if (event.key === "Enter") document.getElementById("goToYear").click();
});

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mode-button").forEach((item) => {
      item.classList.remove("active");
    });
    button.classList.add("active");
    state.density = button.dataset.density;
    state.selectedEventId = null;
    render();
  });
});

document.getElementById("jumpToToday").addEventListener("click", () => {
  state.selectedYear = PRESENT_YEAR;
  state.selectedEventId = null;
  yearRange.value = String(PRESENT_YEAR);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("jumpToOrigins").addEventListener("click", () => {
  state.selectedYear = -300000;
  state.selectedEventId = null;
  yearRange.value = "-300000";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.locale = button.dataset.lang;
    render();
  });
});

render();
