const BASE_HISTORY_DATA = [
  {
    year: -300000,
    title: "Earliest Known Homo sapiens",
    era: "Origins",
    region: "Africa",
    religion: "Pre-religious / Early Belief Systems",
    importance: "high",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jebel%20Irhoud%201.%20Homo%20Sapiens.jpg",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Jebel_Irhoud_1._Homo_Sapiens.jpg",
    imageCredit: "Image: Jebel Irhoud fossil reconstruction via Wikimedia Commons",
    description:
      "Early Homo sapiens emerge in Africa, marking the appearance of our species and the starting point for the shared human story.",
    impact:
      "This moment anchors the entire timeline because every later migration, culture, empire, and scientific breakthrough descends from these early communities.",
  },
  {
    year: -70000,
    title: "Major Human Migrations Expand Beyond Africa",
    era: "Origins",
    region: "Africa, Asia, Oceania",
    religion: "Pre-religious / Early Belief Systems",
    importance: "high",
    description:
      "Human groups spread across new continents over many generations, adapting to radically different climates and landscapes.",
    impact:
      "These migrations laid the foundations for global settlement and for the immense diversity of languages, societies, and cultural traditions that followed.",
  },
  {
    year: -12000,
    title: "Agricultural Revolution Begins",
    era: "Origins",
    region: "Multiple regions",
    religion: "Pre-religious / Early Belief Systems",
    importance: "high",
    description:
      "Communities in several regions begin domesticating plants and animals, shifting from purely mobile lifeways to farming settlements.",
    impact:
      "Agriculture enabled population growth, surplus food, cities, specialized labor, and eventually states and written records.",
  },
  {
    year: -3500,
    title: "Writing Emerges in Mesopotamia",
    era: "Ancient Civilizations",
    region: "Mesopotamia",
    religion: "Ancient Polytheism",
    importance: "high",
    description:
      "Some of the earliest writing systems appear as societies record trade, administration, and ritual life.",
    impact:
      "Written records transformed memory into archive and made complex states, legal codes, and historical continuity easier to sustain.",
  },
  {
    year: -3100,
    title: "Early Dynastic Egypt Consolidates",
    era: "Ancient Civilizations",
    region: "Nile Valley",
    religion: "Ancient Polytheism",
    importance: "medium",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Great%20Pyramid%20of%20Giza.jpg",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Great_Pyramid_of_Giza.jpg",
    imageCredit: "Image: Great Pyramid of Giza via Wikimedia Commons",
    description:
      "Upper and Lower Egypt come under unified rule, launching one of the ancient world's most enduring civilizations.",
    impact:
      "Egypt's centralized kingship, monumental building, and religious traditions influenced neighboring regions for millennia.",
  },
  {
    year: -2600,
    title: "Indus Valley Cities Flourish",
    era: "Ancient Civilizations",
    region: "South Asia",
    religion: "Early South Asian Traditions",
    importance: "medium",
    description:
      "Urban centers such as Harappa and Mohenjo-daro display planning, drainage, and long-distance trade networks.",
    impact:
      "These cities show that urban civilization developed in multiple world regions, not along a single path.",
  },
  {
    year: -1754,
    title: "Code of Hammurabi",
    era: "Ancient Civilizations",
    region: "Babylonia",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Babylonian rulers publicize legal standards and royal authority through one of history's most famous law codes.",
    impact:
      "The code became a symbol of how states used written law to order society and legitimize power.",
  },
  {
    year: -1200,
    title: "Late Bronze Age Collapse",
    era: "Ancient Civilizations",
    region: "Eastern Mediterranean",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Many palace-centered societies in the eastern Mediterranean fall into crisis through warfare, migration, and disruption.",
    impact:
      "The collapse reshaped trade, politics, and culture, opening the way for new states and social orders in the Iron Age.",
  },
  {
    year: -776,
    title: "Traditional Date of the First Olympic Games",
    era: "Classical World",
    region: "Greece",
    religion: "Ancient Polytheism",
    importance: "low",
    description:
      "Greek communities gather for athletic and religious festivals that become a lasting cultural symbol.",
    impact:
      "The games reflected the shared identity and rivalry of the Greek world and still resonate in global culture.",
  },
  {
    year: -563,
    title: "Life of Siddhartha Gautama, the Buddha",
    era: "Classical World",
    region: "South Asia",
    religion: "Buddhism",
    importance: "high",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Buddha%20in%20the%20Stupa%20Borobudur.jpg",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Buddha_in_the_Stupa_Borobudur.jpg",
    imageCredit: "Image: Buddha statue at Borobudur via Wikimedia Commons",
    description:
      "Teachings associated with the Buddha inspire a major religious and philosophical tradition across Asia.",
    impact:
      "Buddhism shaped ethical life, art, politics, and learning from India to East and Southeast Asia.",
  },
  {
    year: -551,
    title: "Confucius and Classical Chinese Thought",
    era: "Classical World",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "high",
    description:
      "Confucian teachings articulate influential ideas about moral conduct, family, education, and governance.",
    impact:
      "Confucian traditions deeply shaped East Asian statecraft, social values, and educational culture.",
  },
  {
    year: -509,
    title: "Roman Republic Begins",
    era: "Classical World",
    region: "Italy",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Rome transitions away from monarchy and develops republican institutions that evolve over centuries.",
    impact:
      "Roman law, politics, military expansion, and civic ideas later influenced much of Europe and beyond.",
  },
  {
    year: -336,
    title: "Alexander's Conquests Accelerate Cultural Exchange",
    era: "Classical World",
    region: "Mediterranean and Asia",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Macedonian expansion links regions from Greece to Egypt and into western Asia through conquest and exchange.",
    impact:
      "The Hellenistic world blended traditions, moved ideas across continents, and transformed politics and urban culture.",
  },
  {
    year: -221,
    title: "Qin Unification of China",
    era: "Classical World",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "high",
    description:
      "The Qin state unifies major rival kingdoms and establishes imperial frameworks across China.",
    impact:
      "Standardization, infrastructure, and centralized rule set patterns that later dynasties built upon.",
  },
  {
    year: -27,
    title: "Roman Empire Consolidates Under Augustus",
    era: "Classical World",
    region: "Mediterranean",
    religion: "Ancient Polytheism",
    importance: "high",
    description:
      "Augustus creates a new imperial order after decades of Roman civil war.",
    impact:
      "Imperial Rome became a dominant force in law, administration, warfare, architecture, and urban life.",
  },
  {
    year: 105,
    title: "Paper Production Spreads in Han China",
    era: "Post-Classical",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "medium",
    description:
      "Refinements in papermaking create cheaper, more practical writing material than many older media.",
    impact:
      "Paper helped states, religions, merchants, and scholars preserve and circulate knowledge more widely.",
  },
  {
    year: 313,
    title: "Edict of Milan",
    era: "Post-Classical",
    region: "Roman Empire",
    religion: "Christianity",
    importance: "medium",
    description:
      "Imperial tolerance for Christianity marks a dramatic change in religious politics within the Roman world.",
    impact:
      "Christian institutions later became central to European, Mediterranean, and global history.",
  },
  {
    year: 476,
    title: "Western Roman Imperial Rule Ends",
    era: "Post-Classical",
    region: "Western Europe",
    religion: "Christianity",
    importance: "medium",
    description:
      "The traditional date for the fall of the Western Roman Empire symbolizes a major political transition in Europe.",
    impact:
      "It marked the fragmentation of western imperial structures and the rise of successor kingdoms.",
  },
  {
    year: 570,
    title: "Birth of Muhammad",
    era: "Post-Classical",
    region: "Arabia",
    religion: "Islam",
    importance: "high",
    description:
      "Muhammad's life and teachings lead to the emergence of Islam, one of the world's major religions.",
    impact:
      "Islamic civilization became a major force in theology, science, trade, philosophy, law, and empire.",
  },
  {
    year: 618,
    title: "Tang Dynasty Begins",
    era: "Post-Classical",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "low",
    description:
      "The Tang era becomes a high point of Chinese cultural influence, statecraft, and cosmopolitan exchange.",
    impact:
      "Tang institutions and culture radiated across East Asia and connected to Silk Road trade networks.",
  },
  {
    year: 800,
    title: "Charlemagne Crowned Emperor",
    era: "Post-Classical",
    region: "Western Europe",
    religion: "Christianity",
    importance: "low",
    description:
      "The coronation symbolizes new relationships among kingship, empire, and religion in medieval Europe.",
    impact:
      "It shaped later ideas of European legitimacy, rulership, and Christian political order.",
  },
  {
    year: 960,
    title: "Song Dynasty Innovation Era",
    era: "Post-Classical",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "medium",
    description:
      "Song China sees major advances in urbanization, state finance, printing, navigation, and technical knowledge.",
    impact:
      "These developments made East Asia one of the most dynamic centers of premodern economic and intellectual life.",
  },
  {
    year: 1096,
    title: "Crusades Begin",
    era: "Post-Classical",
    region: "Europe and the Middle East",
    religion: "Christianity / Islam",
    importance: "medium",
    description:
      "Religious warfare links Europe, Byzantium, and the Islamic world in prolonged conflict and exchange.",
    impact:
      "The Crusades reshaped trade, politics, memory, and interfaith relations across wide regions.",
  },
  {
    year: 1206,
    title: "Mongol Empire Emerges",
    era: "Post-Classical",
    region: "Eurasia",
    religion: "Religiously Diverse",
    importance: "high",
    description:
      "Mongol expansion creates the largest contiguous land empire in history.",
    impact:
      "The empire remade trade, warfare, diplomacy, and cross-continental exchange from East Asia to Europe.",
  },
  {
    year: 1347,
    title: "Black Death Reaches Europe",
    era: "Post-Classical",
    region: "Eurasia and North Africa",
    religion: "Religiously Diverse",
    importance: "high",
    description:
      "Pandemic disease devastates populations and unsettles economies, institutions, and beliefs.",
    impact:
      "Labor shortages, social strain, and demographic collapse transformed societies across many regions.",
  },
  {
    year: 1453,
    title: "Ottomans Capture Constantinople",
    era: "Early Modern",
    region: "Eastern Mediterranean",
    religion: "Islam / Christianity",
    importance: "medium",
    description:
      "The Ottoman conquest of Constantinople ends Byzantine rule and turns the city into an imperial capital.",
    impact:
      "It reoriented power in the eastern Mediterranean and reinforced Ottoman influence across three continents.",
  },
  {
    year: 1492,
    title: "Columbus Reaches the Americas",
    era: "Early Modern",
    region: "Atlantic World",
    religion: "Christianity",
    importance: "high",
    description:
      "Atlantic voyages intensify sustained contact among Afro-Eurasia and the Americas, with immense human consequences.",
    impact:
      "Colonization, conquest, slavery, disease, and exchange remade ecosystems, economies, and world power.",
  },
  {
    year: 1517,
    title: "Protestant Reformation Begins",
    era: "Early Modern",
    region: "Europe",
    religion: "Christianity",
    importance: "medium",
    description:
      "Challenges to Catholic authority fracture western Christendom and trigger religious upheaval.",
    impact:
      "The Reformation transformed theology, literacy, state power, identity, and conflict in Europe and beyond.",
  },
  {
    year: 1600,
    title: "Global Trading Companies Rise",
    era: "Early Modern",
    region: "Europe, Asia, Africa",
    religion: "Religiously Diverse",
    importance: "medium",
    description:
      "Chartered companies become powerful tools of commerce, finance, diplomacy, and empire.",
    impact:
      "They linked markets across oceans and helped fuel colonial expansion and capitalist transformation.",
  },
  {
    year: 1644,
    title: "Qing Dynasty Established",
    era: "Early Modern",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "low",
    description:
      "The Qing create a major imperial order that governs vast territories and diverse populations.",
    impact:
      "Qing rule shaped East Asian geopolitics, trade, and political life into the modern era.",
  },
  {
    year: 1687,
    title: "Newton Publishes Principia",
    era: "Early Modern",
    region: "Europe",
    religion: "Christianity / Secular Thought",
    importance: "medium",
    description:
      "The Scientific Revolution crystallizes in a landmark work on motion and gravity.",
    impact:
      "The book helped redefine how knowledge about nature could be reasoned, tested, and mathematized.",
  },
  {
    year: 1776,
    title: "American Declaration of Independence",
    era: "Age of Revolutions",
    region: "North America",
    religion: "Christianity / Secular Thought",
    importance: "medium",
    description:
      "British colonies in North America declare independence, framing sovereignty in new political language.",
    impact:
      "The event influenced later debates about republicanism, rights, and empire across the world.",
  },
  {
    year: 1789,
    title: "French Revolution Begins",
    era: "Age of Revolutions",
    region: "Europe",
    religion: "Christianity / Secular Thought",
    importance: "high",
    description:
      "Revolution in France challenges monarchy, privilege, and social hierarchy while unleashing mass politics.",
    impact:
      "Its ideals and violence reshaped political thought, citizenship, nationalism, and war.",
  },
  {
    year: 1804,
    title: "Haitian Independence",
    era: "Age of Revolutions",
    region: "Caribbean",
    religion: "Christianity / Afro-Atlantic Traditions",
    importance: "high",
    description:
      "Formerly enslaved people establish Haiti after a successful revolution against colonial rule.",
    impact:
      "Haiti became a landmark in the history of abolition, anticolonial struggle, and Black freedom.",
  },
  {
    year: 1848,
    title: "Revolutions Sweep Europe",
    era: "Age of Revolutions",
    region: "Europe",
    religion: "Christianity / Secular Thought",
    importance: "low",
    description:
      "A wave of uprisings presses demands for representation, reform, and national self-determination.",
    impact:
      "Though many revolts fail immediately, they help shape modern political movements and states.",
  },
  {
    year: 1850,
    title: "Industrialization Accelerates Worldwide",
    era: "Industrial World",
    region: "Europe, North America, Asia",
    religion: "Religiously Diverse",
    importance: "high",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Steam%20locomotive.jpg",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Steam_locomotive.jpg",
    imageCredit: "Image: Steam locomotive via Wikimedia Commons",
    description:
      "Mechanized production, rail networks, fossil-fuel energy, and urban growth transform economies and labor.",
    impact:
      "Industrialization reorganized class, empire, environment, warfare, and everyday life on a global scale.",
  },
  {
    year: 1868,
    title: "Meiji Restoration",
    era: "Industrial World",
    region: "Japan",
    religion: "Shinto / Buddhism",
    importance: "medium",
    description:
      "Japan's political transformation drives rapid modernization, state reform, and military-industrial development.",
    impact:
      "It showed that industrial modernity could be adapted beyond western Europe and North America.",
  },
  {
    year: 1884,
    title: "Berlin Conference and the Partition of Africa",
    era: "Industrial World",
    region: "Africa and Europe",
    religion: "Christianity / Islam / Indigenous Traditions",
    importance: "high",
    description:
      "European powers formalize imperial competition over African territories without African consent.",
    impact:
      "Colonial borders and exploitation produced long-lasting political, economic, and social consequences.",
  },
  {
    year: 1914,
    title: "World War I Begins",
    era: "World Wars",
    region: "Global",
    religion: "Religiously Diverse",
    importance: "high",
    description:
      "A regional crisis escalates into industrialized global war among empires and alliances.",
    impact:
      "The war toppled dynasties, killed millions, and destabilized the international order.",
  },
  {
    year: 1917,
    title: "Russian Revolution",
    era: "World Wars",
    region: "Russia",
    religion: "Orthodox Christianity / Secular Thought",
    importance: "high",
    description:
      "Revolution and civil war overturn the Russian Empire and build a communist state.",
    impact:
      "The Soviet Union became a defining force in twentieth-century politics, ideology, and conflict.",
  },
  {
    year: 1939,
    title: "World War II Begins",
    era: "World Wars",
    region: "Global",
    religion: "Religiously Diverse",
    importance: "high",
    description:
      "A new global conflict begins with invasions, total war, genocide, and unprecedented mobilization.",
    impact:
      "World War II redrew borders, weakened empires, and set the stage for the Cold War and decolonization.",
  },
  {
    year: 1945,
    title: "United Nations Founded",
    era: "World Wars",
    region: "Global",
    religion: "Religiously Diverse",
    importance: "medium",
    description:
      "After World War II, states establish a new international body aimed at diplomacy, security, and cooperation.",
    impact:
      "The UN became central to postwar global governance, humanitarian work, and international law.",
  },
  {
    year: 1947,
    title: "India and Pakistan Gain Independence",
    era: "Cold War and Decolonization",
    region: "South Asia",
    religion: "Hinduism / Islam / Sikhism",
    importance: "high",
    description:
      "The end of British rule in South Asia creates new states amid partition, migration, and violence.",
    impact:
      "This moment symbolizes both decolonization and the deep costs of political division.",
  },
  {
    year: 1949,
    title: "People's Republic of China Established",
    era: "Cold War and Decolonization",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "high",
    description:
      "The Chinese Communist Party wins the civil war and establishes a new state.",
    impact:
      "This transformed Asian geopolitics and reshaped the balance of power in the Cold War world.",
  },
  {
    year: 1957,
    title: "Sputnik Launches the Space Age",
    era: "Cold War and Decolonization",
    region: "Global",
    religion: "Secular / Scientific World",
    importance: "medium",
    description:
      "The Soviet satellite launch turns space into a new arena of technological and ideological rivalry.",
    impact:
      "Space exploration accelerated science, engineering, communications, and symbolic competition.",
  },
  {
    year: 1969,
    title: "Humans Land on the Moon",
    era: "Cold War and Decolonization",
    region: "Global",
    religion: "Secular / Scientific World",
    importance: "medium",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Apollo%2011%20Moon%20Landing%20%2849595207591%29.jpg",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Apollo_11_Moon_Landing_(49595207591).jpg",
    imageCredit: "Image: Apollo 11 moon landing via Wikimedia Commons",
    description:
      "Apollo 11 places humans on the Moon, broadcasting a major technological achievement worldwide.",
    impact:
      "The landing became a signature moment of modern science, ambition, and global media culture.",
  },
  {
    year: 1989,
    title: "Berlin Wall Falls",
    era: "Contemporary World",
    region: "Europe",
    religion: "Christianity / Secular Thought",
    importance: "high",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Berlin-wall.jpg",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Berlin-wall.jpg",
    imageCredit: "Image: Berlin Wall in November 1989 via Wikimedia Commons",
    description:
      "The fall of the Berlin Wall signals the weakening of Soviet-aligned rule in eastern Europe.",
    impact:
      "It became a powerful symbol of the Cold War's end and of changing political orders in Europe.",
  },
  {
    year: 1991,
    title: "Soviet Union Dissolves",
    era: "Contemporary World",
    region: "Eurasia",
    religion: "Religiously Diverse",
    importance: "high",
    description:
      "The Soviet Union breaks apart, reshaping global politics, alliances, and economies.",
    impact:
      "Its collapse ended the bipolar world and triggered new regional conflicts and transitions.",
  },
  {
    year: 1995,
    title: "Internet Expansion Enters Public Life",
    era: "Contemporary World",
    region: "Global",
    religion: "Religiously Diverse",
    importance: "high",
    description:
      "The internet moves into mainstream daily use, changing communication, commerce, media, and knowledge sharing.",
    impact:
      "Digital connectivity reorganized work, culture, politics, and social life across the globe.",
  },
  {
    year: 2001,
    title: "September 11 Attacks",
    era: "Contemporary World",
    region: "United States and Global",
    religion: "Islam / Christianity / Global Politics",
    importance: "high",
    description:
      "The attacks in the United States provoke wars, security shifts, and global political consequences.",
    impact:
      "They transformed foreign policy, surveillance, security debates, and international conflict.",
  },
  {
    year: 2008,
    title: "Global Financial Crisis",
    era: "Contemporary World",
    region: "Global",
    religion: "Religiously Diverse",
    importance: "high",
    description:
      "Financial collapse spreads through banking systems and economies across the world.",
    impact:
      "The crisis reshaped trust in institutions, government policy, inequality debates, and global markets.",
  },
  {
    year: 2020,
    title: "COVID-19 Pandemic Disrupts the World",
    era: "Contemporary World",
    region: "Global",
    religion: "Religiously Diverse",
    importance: "high",
    description:
      "A global pandemic changes health systems, mobility, work, education, and social habits at once.",
    impact:
      "It exposed vulnerabilities in global systems and accelerated changes in science, labor, and digital life.",
  },
  {
    year: -10000,
    title: "Jericho Emerges as an Early Settlement",
    era: "Origins",
    region: "Levant",
    religion: "Pre-religious / Early Belief Systems",
    importance: "medium",
    description:
      "Jericho becomes one of the earliest known large settled communities, showing how permanent settlement developed before many states.",
    impact:
      "Its archaeology reveals the long transition from foraging societies to organized village life and built environments.",
  },
  {
    year: -9000,
    title: "Catalhoyuk Develops in Anatolia",
    era: "Origins",
    region: "Anatolia",
    religion: "Pre-religious / Early Belief Systems",
    importance: "medium",
    description:
      "Catalhoyuk grows into a dense Neolithic settlement with wall paintings, ritual spaces, and closely packed homes.",
    impact:
      "It offers evidence of how early farming communities organized domestic, symbolic, and economic life before cities and empires.",
  },
  {
    year: -4500,
    title: "Uruk Period Urbanization Accelerates",
    era: "Ancient Civilizations",
    region: "Mesopotamia",
    religion: "Ancient Polytheism",
    importance: "high",
    description:
      "The Uruk period sees rapid growth of cities, temples, administration, and long-distance exchange in southern Mesopotamia.",
    impact:
      "It marks one of the clearest early pathways from village society to urban civilization and state power.",
  },
  {
    year: -2900,
    title: "Sumerian City-States Compete for Power",
    era: "Ancient Civilizations",
    region: "Mesopotamia",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Independent Sumerian centers such as Ur, Uruk, and Lagash develop distinct political identities and rivalries.",
    impact:
      "These city-states shaped early kingship, warfare, temple economies, and the political vocabulary of civilization.",
  },
  {
    year: -2700,
    title: "Old Kingdom Pyramid Building Expands",
    era: "Ancient Civilizations",
    region: "Egypt",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Egyptian rulers mobilize labor and resources for monumental pyramids and mortuary complexes.",
    impact:
      "The projects demonstrated state capacity, divine kingship, and enduring engineering ambition.",
  },
  {
    year: -2334,
    title: "Akkadian Empire Forms Under Sargon",
    era: "Ancient Civilizations",
    region: "Mesopotamia",
    religion: "Ancient Polytheism",
    importance: "high",
    description:
      "Sargon of Akkad brings multiple Mesopotamian regions under imperial rule, creating one of the first major territorial empires.",
    impact:
      "The Akkadian model influenced later imperial strategies, administration, and royal ideology.",
  },
  {
    year: -2200,
    title: "4.2 Kiloyear Climate Event Strains Early States",
    era: "Ancient Civilizations",
    region: "Global",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Severe climatic disruption contributes to instability in several early complex societies.",
    impact:
      "The event highlights how climate stress could undermine agriculture, trade, and political order in ancient civilizations.",
  },
  {
    year: -2100,
    title: "Ur III Dynasty Rebuilds Mesopotamian Kingship",
    era: "Ancient Civilizations",
    region: "Mesopotamia",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "The rulers of Ur restore centralized administration, taxation, and monumental culture after earlier imperial collapse.",
    impact:
      "Ur III shows how bureaucratic statecraft evolved through cycles of collapse and reconstruction.",
  },
  {
    year: -2000,
    title: "Minoan Civilization Flourishes on Crete",
    era: "Ancient Civilizations",
    region: "Aegean",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Palatial centers on Crete expand maritime trade, storage systems, and artistic expression.",
    impact:
      "Minoan influence shaped Bronze Age exchange networks and later Aegean cultural development.",
  },
  {
    year: -1900,
    title: "Decline of Major Indus Urban Centers",
    era: "Ancient Civilizations",
    region: "South Asia",
    religion: "Early South Asian Traditions",
    importance: "medium",
    description:
      "Many Indus cities shrink or transform as settlement patterns and exchange systems shift.",
    impact:
      "The decline remains a key case study in how large urban systems can change without a single simple cause.",
  },
  {
    year: -1792,
    title: "Old Babylonian Kingdom Expands",
    era: "Ancient Civilizations",
    region: "Mesopotamia",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Babylon rises as a political center under Hammurabi and other rulers in the Old Babylonian period.",
    impact:
      "Babylon became one of the enduring symbolic capitals of ancient Near Eastern civilization.",
  },
  {
    year: -1600,
    title: "Shang Dynasty Consolidates in China",
    era: "Ancient Civilizations",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "high",
    description:
      "The Shang state develops bronzeworking, royal ritual, and early written inscriptions on oracle bones.",
    impact:
      "It anchors the early historical and archaeological record of Chinese civilization.",
  },
  {
    year: -1550,
    title: "New Kingdom Egypt Begins",
    era: "Ancient Civilizations",
    region: "Egypt",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Egypt enters a powerful imperial era marked by military expansion, wealth, and monumental architecture.",
    impact:
      "The New Kingdom became one of Egypt's most influential periods in diplomacy, religion, and state power.",
  },
  {
    year: -1500,
    title: "Vedic Traditions Expand in South Asia",
    era: "Ancient Civilizations",
    region: "South Asia",
    religion: "Hinduism",
    importance: "high",
    description:
      "Vedic culture and ritual traditions spread through parts of South Asia, shaping language, belief, and social structure.",
    impact:
      "These developments formed important foundations for later Hindu traditions and classical Indian thought.",
  },
  {
    year: -1450,
    title: "Mycenaean Palace Culture Grows",
    era: "Ancient Civilizations",
    region: "Greece",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Mycenaean centers expand in mainland Greece with palace administration, warfare, and long-distance trade.",
    impact:
      "Their world influenced later Greek memory, epic tradition, and regional political development.",
  },
  {
    year: -1274,
    title: "Battle of Kadesh",
    era: "Ancient Civilizations",
    region: "Near East",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Egyptians and Hittites clash in one of the best-documented battles of the ancient world.",
    impact:
      "The battle became famous for its propaganda, diplomacy, and the treaty traditions that followed.",
  },
  {
    year: -1200,
    title: "Phoenician Maritime Networks Expand",
    era: "Ancient Civilizations",
    region: "Eastern Mediterranean",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Phoenician traders and sailors build commercial links across the Mediterranean.",
    impact:
      "Their networks moved goods, artistic forms, and alphabetic traditions across multiple civilizations.",
  },
  {
    year: -1046,
    title: "Zhou Dynasty Replaces Shang",
    era: "Ancient Civilizations",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "high",
    description:
      "The Zhou defeat the Shang and articulate the doctrine later known as the Mandate of Heaven.",
    impact:
      "That political idea shaped Chinese theories of legitimacy for centuries.",
  },
  {
    year: -1000,
    title: "Olmec Civilization Emerges",
    era: "Ancient Civilizations",
    region: "Mesoamerica",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "The Olmec develop major ceremonial centers, sculpture, and elite culture in Mesoamerica.",
    impact:
      "They are often seen as foundational to later Mesoamerican artistic and religious traditions.",
  },
  {
    year: -969,
    title: "Traditional Reign of Solomon in Israelite Memory",
    era: "Ancient Civilizations",
    region: "Levant",
    religion: "Judaism",
    importance: "medium",
    description:
      "Biblical tradition associates Solomon with royal centralization, temple building, and literary memory.",
    impact:
      "The figure of Solomon became deeply influential in Jewish, Christian, and Islamic traditions.",
  },
  {
    year: -900,
    title: "Neo-Assyrian Power Rises",
    era: "Ancient Civilizations",
    region: "Mesopotamia",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Assyria begins a new period of military and administrative expansion.",
    impact:
      "Its imperial methods strongly influenced later statecraft and conquest in the Near East.",
  },
  {
    year: -814,
    title: "Traditional Founding of Carthage",
    era: "Ancient Civilizations",
    region: "North Africa",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Carthage emerges as a major Phoenician-descended power in the western Mediterranean.",
    impact:
      "It would later become Rome's greatest rival and a dominant commercial center.",
  },
  {
    year: -753,
    title: "Traditional Founding of Rome",
    era: "Classical World",
    region: "Italy",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Roman tradition marks this as the symbolic beginning of the city of Rome.",
    impact:
      "The date became central to Roman identity and later imperial historical memory.",
  },
  {
    year: -722,
    title: "Fall of the Kingdom of Israel",
    era: "Ancient Civilizations",
    region: "Levant",
    religion: "Judaism",
    importance: "medium",
    description:
      "The northern Israelite kingdom falls to Assyria, reshaping the political and religious landscape of the Levant.",
    impact:
      "The event became important to later Jewish memory, identity, and scriptural tradition.",
  },
  {
    year: -700,
    title: "Nok Culture Develops Ironworking Traditions",
    era: "Ancient Civilizations",
    region: "West Africa",
    religion: "Ancient Polytheism",
    importance: "low",
    description:
      "Nok communities in West Africa are associated with terracotta art and early ironworking.",
    impact:
      "They broaden the timeline's picture of ancient technological and artistic development beyond Eurasia.",
  },
  {
    year: -668,
    title: "Ashurbanipal Builds a Major Library",
    era: "Ancient Civilizations",
    region: "Assyria",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "The Assyrian royal library at Nineveh gathers texts from across Mesopotamian civilization.",
    impact:
      "It preserved crucial literature and records, including versions of the Epic of Gilgamesh.",
  },
  {
    year: -612,
    title: "Fall of Nineveh",
    era: "Ancient Civilizations",
    region: "Mesopotamia",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "The Assyrian capital falls, ending one of the ancient world's most formidable empires.",
    impact:
      "Its collapse shifted regional power toward Babylon and Media.",
  },
  {
    year: -586,
    title: "Babylonians Destroy the First Temple",
    era: "Ancient Civilizations",
    region: "Jerusalem",
    religion: "Judaism",
    importance: "high",
    description:
      "Babylon conquers Jerusalem and destroys the First Temple, sending elites into exile.",
    impact:
      "The exile became a defining moment in Jewish religious development and memory.",
  },
  {
    year: -550,
    title: "Achaemenid Persian Empire Expands",
    era: "Classical World",
    region: "Iran and Near East",
    religion: "Ancient Polytheism",
    importance: "high",
    description:
      "Cyrus the Great and his successors build a vast empire across western and central Asia.",
    impact:
      "Persia demonstrated sophisticated imperial governance, roads, taxation, and regional accommodation.",
  },
  {
    year: -508,
    title: "Athenian Democratic Reforms",
    era: "Classical World",
    region: "Greece",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Political reforms in Athens lay foundations for a distinctive model of citizen participation.",
    impact:
      "Athenian democracy influenced later debates about citizenship, governance, and public life.",
  },
  {
    year: -499,
    title: "Greco-Persian Conflicts Begin",
    era: "Classical World",
    region: "Eastern Mediterranean",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Ionian revolt and regional wars begin the long struggle between Persian power and Greek city-states.",
    impact:
      "These conflicts shaped Greek identity, imperial rivalry, and historical storytelling.",
  },
  {
    year: -480,
    title: "Battles of Thermopylae and Salamis",
    era: "Classical World",
    region: "Greece",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Key battles in the Persian Wars become central episodes in Greek historical memory.",
    impact:
      "They helped define later narratives of resistance, alliance, and classical identity.",
  },
  {
    year: -447,
    title: "Parthenon Construction Begins",
    era: "Classical World",
    region: "Athens",
    religion: "Ancient Polytheism",
    importance: "low",
    description:
      "Athens begins constructing the Parthenon during its period of artistic and political confidence.",
    impact:
      "The monument became one of the most enduring symbols of classical architecture and civic ambition.",
  },
  {
    year: -431,
    title: "Peloponnesian War Begins",
    era: "Classical World",
    region: "Greece",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Athens and Sparta enter a destructive long war that divides the Greek world.",
    impact:
      "The conflict weakened Greek political unity and remains a classic study of power politics.",
  },
  {
    year: -387,
    title: "Plato Founds the Academy",
    era: "Classical World",
    region: "Greece",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Plato's school becomes one of the most influential institutions in the history of philosophy.",
    impact:
      "The Academy helped shape traditions of formal intellectual inquiry across the western world.",
  },
  {
    year: -356,
    title: "Temple of Artemis Represents Classical Monumentality",
    era: "Classical World",
    region: "Anatolia",
    religion: "Ancient Polytheism",
    importance: "low",
    description:
      "The Temple of Artemis at Ephesus stands among the ancient world's most celebrated monuments.",
    impact:
      "It symbolized the fusion of religion, urban prestige, and monumental architecture.",
  },
  {
    year: -323,
    title: "Alexander Dies and Hellenistic Kingdoms Emerge",
    era: "Classical World",
    region: "Mediterranean and Asia",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Alexander's empire fragments into successor kingdoms that preserve and transform Hellenistic culture.",
    impact:
      "These kingdoms spread Greek language and institutions while blending them with local traditions.",
  },
  {
    year: -305,
    title: "Mauryan Empire Consolidates in India",
    era: "Classical World",
    region: "South Asia",
    religion: "Hinduism",
    importance: "high",
    description:
      "The Mauryan state unifies large parts of the Indian subcontinent through centralized rule.",
    impact:
      "It became one of South Asia's first great empires and shaped later models of kingship.",
  },
  {
    year: -273,
    title: "Ashoka's Reign Begins",
    era: "Classical World",
    region: "South Asia",
    religion: "Buddhism",
    importance: "high",
    description:
      "Ashoka rules the Mauryan Empire and later promotes Buddhist ethics and imperial inscriptions.",
    impact:
      "His reign became central to the spread of Buddhism and to ideals of moral kingship.",
  },
  {
    year: -264,
    title: "First Punic War Begins",
    era: "Classical World",
    region: "Mediterranean",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Rome and Carthage begin a major struggle for influence in the western Mediterranean.",
    impact:
      "The Punic Wars accelerated Roman military and imperial transformation.",
  },
  {
    year: -221,
    title: "Great Wall Precursors Expand Under Qin",
    era: "Classical World",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "low",
    description:
      "The Qin link and extend northern fortifications as part of border defense strategy.",
    impact:
      "These works later contributed to the broader historical image of the Great Wall.",
  },
  {
    year: -202,
    title: "Han Dynasty Founded",
    era: "Classical World",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "high",
    description:
      "The Han establish one of China's most influential dynasties after the fall of the Qin.",
    impact:
      "Han institutions, identity, and statecraft profoundly shaped later Chinese civilization.",
  },
  {
    year: -146,
    title: "Rome Defeats Carthage and Corinth",
    era: "Classical World",
    region: "Mediterranean",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Rome destroys Carthage and asserts overwhelming power over the Mediterranean world.",
    impact:
      "This victory marked a decisive expansion of Roman hegemony.",
  },
  {
    year: -130,
    title: "Silk Road Exchange Deepens",
    era: "Classical World",
    region: "Eurasia",
    religion: "Religiously Diverse",
    importance: "medium",
    description:
      "Long-distance trade routes increasingly connect East Asia, Central Asia, South Asia, and the Mediterranean.",
    impact:
      "The Silk Road moved goods, ideas, technologies, religions, and disease across continents.",
  },
  {
    year: -31,
    title: "Battle of Actium Ends Roman Civil War",
    era: "Classical World",
    region: "Mediterranean",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Octavian defeats Antony and Cleopatra, paving the way for imperial rule.",
    impact:
      "Actium marked the final transition from Roman republican struggle to stable empire.",
  },
  {
    year: 64,
    title: "Great Fire of Rome",
    era: "Post-Classical",
    region: "Rome",
    religion: "Ancient Polytheism",
    importance: "low",
    description:
      "A massive fire devastates parts of Rome during Nero's reign.",
    impact:
      "The event became entangled with politics, rebuilding, and later Christian memory.",
  },
  {
    year: 70,
    title: "Second Temple Destroyed by Rome",
    era: "Post-Classical",
    region: "Jerusalem",
    religion: "Judaism",
    importance: "high",
    description:
      "Roman forces destroy the Second Temple during the suppression of revolt in Judea.",
    impact:
      "This transformed Jewish religious life and helped shape diasporic identity.",
  },
  {
    year: 79,
    title: "Vesuvius Erupts Over Pompeii and Herculaneum",
    era: "Post-Classical",
    region: "Italy",
    religion: "Ancient Polytheism",
    importance: "low",
    description:
      "The eruption of Mount Vesuvius buries Roman towns in ash and volcanic debris.",
    impact:
      "Their preservation created an unparalleled archaeological window into Roman daily life.",
  },
  {
    year: 105,
    title: "Trajan's Roman Empire Reaches Its Greatest Extent",
    era: "Post-Classical",
    region: "Mediterranean",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Under Trajan, Roman control reaches a territorial peak.",
    impact:
      "The moment symbolizes the height of Roman imperial expansion and integration.",
  },
  {
    year: 220,
    title: "Han Dynasty Falls",
    era: "Post-Classical",
    region: "China",
    religion: "Confucian / Chinese Traditions",
    importance: "medium",
    description:
      "The Han collapse into warlordism and division after long internal strain.",
    impact:
      "Its fall marks the end of a formative classical age in Chinese history.",
  },
  {
    year: 250,
    title: "Teotihuacan Becomes a Major Urban Power",
    era: "Post-Classical",
    region: "Mesoamerica",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Teotihuacan grows into one of the largest cities in the ancient world.",
    impact:
      "Its influence reached across Mesoamerica through trade, urban planning, and religion.",
  },
  {
    year: 320,
    title: "Gupta Empire Begins",
    era: "Post-Classical",
    region: "South Asia",
    religion: "Hinduism",
    importance: "medium",
    description:
      "The Gupta period becomes associated with political consolidation and major achievements in mathematics, literature, and art.",
    impact:
      "It is often remembered as a classical age in South Asian civilization.",
  },
  {
    year: 330,
    title: "Constantinople Founded as Imperial Capital",
    era: "Post-Classical",
    region: "Eastern Mediterranean",
    religion: "Christianity",
    importance: "medium",
    description:
      "Constantine refounds Byzantium as Constantinople, a new capital of imperial power.",
    impact:
      "The city became a strategic and cultural center linking Europe and Asia for centuries.",
  },
  {
    year: 375,
    title: "Migration Era Intensifies in Eurasia",
    era: "Post-Classical",
    region: "Eurasia",
    religion: "Religiously Diverse",
    importance: "medium",
    description:
      "Population movements and new confederations reshape political landscapes across Europe and inner Asia.",
    impact:
      "These shifts transformed empires, frontiers, and ethnic identities.",
  },
  {
    year: 400,
    title: "Classic Maya Cities Reach High Development",
    era: "Post-Classical",
    region: "Mesoamerica",
    religion: "Ancient Polytheism",
    importance: "medium",
    description:
      "Classic Maya polities display advanced writing, astronomy, architecture, and dynastic politics.",
    impact:
      "The Maya represent one of the most sophisticated literate civilizations of the ancient Americas.",
  },
  {
    year: 525,
    title: "Kingdom of Aksum Peaks as Red Sea Power",
    era: "Post-Classical",
    region: "Horn of Africa",
    religion: "Christianity",
    importance: "medium",
    description:
      "Aksum's influence in trade, coinage, and regional politics reaches a high point.",
    impact:
      "Aksum demonstrates the importance of African states in late antique global exchange.",
  },
  {
    year: 2026,
    title: "The Present Day",
    era: "Contemporary World",
    region: "Global",
    religion: "Religiously Diverse",
    importance: "medium",
    description:
      "Humanity now lives in a deeply interconnected world shaped by climate pressure, rapid computing, migration, inequality, cultural exchange, and ongoing conflict.",
    impact:
      "Today's world history is still being written, and the decisions made now will define the next era on the timeline.",
  },
];

function milestone(
  year,
  title,
  era,
  region,
  religion,
  importance,
  description,
  impact,
  wikipediaTitle,
  details
) {
  return {
    year,
    title,
    era,
    region,
    religion,
    importance,
    description,
    impact,
    wikipediaTitle,
    details,
  };
}

function buildWikipediaUrl(entry) {
  if (entry.wikipediaUrl) return entry.wikipediaUrl;
  if (entry.wikipediaTitle) {
    return `https://en.wikipedia.org/wiki/${encodeURIComponent(
      entry.wikipediaTitle.replaceAll(" ", "_")
    )}`;
  }
  return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
    entry.title
  )}`;
}

function buildEventDetails(entry) {
  if (entry.details) return entry.details;
  return `${entry.description} ${entry.impact} This milestone sits within the ${
    entry.era
  } era and is tracked in ${entry.region} under ${entry.religion}.`;
}

function normalizeHistoryEntry(entry) {
  return {
    ...entry,
    details: buildEventDetails(entry),
    wikipediaUrl: buildWikipediaUrl(entry),
  };
}

const SUPPLEMENTAL_HISTORY_DATA = [
  milestone(
    -400000,
    "Controlled Use of Fire Becomes Widespread",
    "Origins",
    "Africa and Eurasia",
    "Pre-religious / Early Belief Systems",
    "medium",
    "Regular use of fire changes diet, safety, social gathering, and migration possibilities for early humans.",
    "Fire became one of humanity's foundational technologies, supporting cooking, protection, and survival in new environments.",
    "Control_of_fire_by_early_humans"
  ),
  milestone(
    -100000,
    "Early Burials Suggest Symbolic Thought",
    "Origins",
    "Africa and Eurasia",
    "Pre-religious / Early Belief Systems",
    "medium",
    "Some early human communities appear to bury their dead intentionally, hinting at ritual or symbolic behavior.",
    "These practices suggest expanding capacities for memory, identity, and shared meaning in human communities.",
    "Intentional_burial"
  ),
  milestone(
    -40000,
    "Cave Art and Symbolic Culture Flourish",
    "Origins",
    "Europe, Africa, Asia",
    "Pre-religious / Early Belief Systems",
    "medium",
    "Painted caves, ornaments, and carved objects point to rich symbolic cultures among early humans.",
    "Visual culture, ritual, and storytelling became enduring parts of human social life.",
    "Cave_painting"
  ),
  milestone(
    -16000,
    "Human Communities Spread Across the Americas",
    "Origins",
    "North and South America",
    "Pre-religious / Early Belief Systems",
    "medium",
    "By the late Ice Age, human societies are established across wide parts of the Americas.",
    "This expansion created the foundations for the many civilizations and cultures of the American continents.",
    "Settlement_of_the_Americas"
  ),
  milestone(
    -9600,
    "Gobekli Tepe Ritual Complex Emerges",
    "Origins",
    "Anatolia",
    "Ancient / Indigenous Traditions",
    "medium",
    "Monumental stone enclosures at Gobekli Tepe suggest organized ritual activity before large settled states.",
    "The site reshaped debates about religion, labor, and social organization in prehistory.",
    "Gobekli_Tepe"
  ),
  milestone(
    -7500,
    "Catalhoyuk Develops as a Large Early Settlement",
    "Origins",
    "Anatolia",
    "Ancient / Indigenous Traditions",
    "medium",
    "Catalhoyuk becomes one of the best-known large Neolithic settlements with dense housing and wall art.",
    "It provides a major window into early village life, ritual, and changing social organization.",
    "Çatalhöyük"
  ),
  milestone(
    -3500,
    "Wheel and Wagon Technologies Spread",
    "Origins",
    "Eurasia",
    "Ancient / Indigenous Traditions",
    "medium",
    "Wheel-based transport and related technologies spread across parts of Eurasia.",
    "These innovations transformed mobility, agriculture, warfare, and long-distance exchange.",
    "Wheel"
  ),
  milestone(
    -3300,
    "Bronze Metallurgy Reshapes Early Societies",
    "Origins",
    "Southwest Asia and beyond",
    "Ancient / Indigenous Traditions",
    "medium",
    "Bronze tools and weapons become increasingly important in early complex societies.",
    "Metallurgy supported new forms of craft specialization, warfare, prestige, and trade.",
    "Bronze_Age"
  ),
  milestone(
    -4000,
    "Uruk Urban Expansion Marks the City Revolution",
    "Ancient Civilizations",
    "Mesopotamia",
    "Ancient Polytheism",
    "high",
    "Uruk grows into one of the world's earliest true cities with temples, officials, and specialized labor.",
    "It became a benchmark for urbanization, administration, and early state development.",
    "Uruk"
  ),
  milestone(
    -2900,
    "Sumerian City-States Compete for Power",
    "Ancient Civilizations",
    "Mesopotamia",
    "Ancient Polytheism",
    "medium",
    "Independent city-states such as Ur, Uruk, and Lagash dominate southern Mesopotamian politics.",
    "Their rivalry helped shape kingship, warfare, writing, and temple economies.",
    "Sumer"
  ),
  milestone(
    -2686,
    "Egyptian Old Kingdom Builds Monumental Kingship",
    "Ancient Civilizations",
    "Nile Valley",
    "Ancient Polytheism",
    "medium",
    "The Old Kingdom period saw the strengthening of pharaonic authority and the construction of monumental tombs.",
    "It set lasting models for Egyptian statecraft, religion, and architecture.",
    "Old_Kingdom_of_Egypt"
  ),
  milestone(
    -2334,
    "Akkadian Empire Unifies Much of Mesopotamia",
    "Ancient Civilizations",
    "Mesopotamia",
    "Ancient Polytheism",
    "medium",
    "Sargon of Akkad establishes one of history's earliest territorial empires.",
    "The Akkadian example showed how conquest and administration could bind multiple regions together.",
    "Akkadian_Empire"
  ),
  milestone(
    -2000,
    "Minoan Civilization Expands in the Aegean",
    "Ancient Civilizations",
    "Crete and the Aegean",
    "Ancient Polytheism",
    "medium",
    "Minoan palaces and maritime exchange shape early Bronze Age networks in the eastern Mediterranean.",
    "Their influence helped define the interconnected Aegean world before classical Greece.",
    "Minoan_civilization"
  ),
  milestone(
    -1600,
    "Shang Dynasty Consolidates Bronze Age Rule",
    "Ancient Civilizations",
    "China",
    "Confucian / Chinese Traditions",
    "medium",
    "The Shang dynasty strengthens royal rule, ritual bronze culture, and early Chinese writing traditions.",
    "It became a foundational reference point for later Chinese political and cultural history.",
    "Shang_dynasty"
  ),
  milestone(
    -1500,
    "Vedic Traditions Spread Across North India",
    "Ancient Civilizations",
    "South Asia",
    "Hinduism",
    "medium",
    "Vedic ritual culture and Sanskrit traditions develop across northern South Asia.",
    "These traditions became central to later Hindu thought, social practice, and literature.",
    "Vedic_period"
  ),
  milestone(
    -1200,
    "Phoenician Maritime Networks Connect the Mediterranean",
    "Ancient Civilizations",
    "Eastern Mediterranean",
    "Ancient Polytheism",
    "medium",
    "Phoenician traders and sailors help link ports, colonies, and exchange systems across the Mediterranean.",
    "Their networks accelerated commerce, cultural contact, and alphabetic transmission.",
    "Phoenicia"
  ),
  milestone(
    -1046,
    "Zhou Dynasty Establishes the Mandate of Heaven",
    "Ancient Civilizations",
    "China",
    "Confucian / Chinese Traditions",
    "medium",
    "The Zhou overthrow the Shang and articulate ideas of moral legitimacy in rulership.",
    "The Mandate of Heaven became one of East Asia's most enduring political concepts.",
    "Zhou_dynasty"
  ),
  milestone(
    -900,
    "Neo-Assyrian Power Expands Across the Near East",
    "Ancient Civilizations",
    "Mesopotamia and the Levant",
    "Ancient Polytheism",
    "medium",
    "Assyrian rulers build a formidable military empire across much of the Near East.",
    "Their imperial methods influenced later states in administration, warfare, and monumentality.",
    "Neo-Assyrian_Empire"
  ),
  milestone(
    -814,
    "Carthage Rises as a Western Mediterranean Power",
    "Ancient Civilizations",
    "North Africa",
    "Ancient Polytheism",
    "medium",
    "Carthage grows from Phoenician roots into a major commercial and naval center.",
    "It became Rome's greatest early rival and a defining force in Mediterranean history.",
    "Carthage"
  ),
  milestone(
    -753,
    "Traditional Founding of Rome",
    "Ancient Civilizations",
    "Italy",
    "Ancient Polytheism",
    "medium",
    "Roman tradition places the founding of the city in 753 BCE.",
    "Whether legendary or not, the date became central to Roman identity and later world memory.",
    "Founding_of_Rome"
  ),
  milestone(
    -722,
    "Kingdom of Israel Falls to Assyria",
    "Ancient Civilizations",
    "Levant",
    "Judaism",
    "medium",
    "The northern kingdom of Israel falls under Assyrian conquest.",
    "The event deeply shaped the political and religious history of the ancient Levant.",
    "Kingdom_of_Israel_(Samaria)"
  ),
  milestone(
    -612,
    "Fall of Nineveh Ends Assyrian Dominance",
    "Ancient Civilizations",
    "Mesopotamia",
    "Ancient Polytheism",
    "medium",
    "Coalitions overthrow Nineveh, shattering Assyrian imperial supremacy.",
    "Its collapse reordered power across Mesopotamia and the Near East.",
    "Fall_of_Nineveh"
  ),
  milestone(
    -550,
    "Achaemenid Persian Empire Forms",
    "Ancient Civilizations",
    "Iran and Southwest Asia",
    "Ancient Polytheism",
    "high",
    "Cyrus the Great creates a large imperial state across western Asia.",
    "Persia became a model of imperial administration, tolerance strategies, and long-distance governance.",
    "Achaemenid_Empire"
  ),
  milestone(
    -509,
    "Athenian Political Reforms Deepen Civic Participation",
    "Classical World",
    "Greece",
    "Ancient Polytheism",
    "medium",
    "Reforms associated with Cleisthenes reshape the institutions of Athens.",
    "Athens became a key historical reference for democracy, citizenship, and public debate.",
    "Cleisthenes"
  ),
  milestone(
    -490,
    "Battle of Marathon Enters Greek Memory",
    "Classical World",
    "Greece",
    "Ancient Polytheism",
    "medium",
    "Athenians defeat a Persian force at Marathon during the Greco-Persian Wars.",
    "The battle became a powerful symbol of civic endurance and political independence.",
    "Battle_of_Marathon"
  ),
  milestone(
    -480,
    "Persian Wars Transform the Greek World",
    "Classical World",
    "Greece and Persia",
    "Ancient Polytheism",
    "medium",
    "Major conflicts between Greek states and the Persian Empire reshape alliances and identity.",
    "These wars influenced the future of classical Greece and its political imagination.",
    "Greco-Persian_Wars"
  ),
  milestone(
    -461,
    "Athenian Golden Age of Building and Culture Begins",
    "Classical World",
    "Greece",
    "Ancient Polytheism",
    "medium",
    "Athens enters a period associated with drama, architecture, philosophy, and imperial confidence.",
    "Its cultural production became foundational to later Western canon formation.",
    "Age_of_Pericles"
  ),
  milestone(
    -431,
    "Peloponnesian War Weakens the Greek City-States",
    "Classical World",
    "Greece",
    "Ancient Polytheism",
    "medium",
    "Athens and Sparta lead rival coalitions into a long and devastating war.",
    "The conflict destabilized the Greek world and altered the balance of power.",
    "Peloponnesian_War"
  ),
  milestone(
    -399,
    "Trial and Death of Socrates",
    "Classical World",
    "Greece",
    "Ancient Polytheism",
    "low",
    "The execution of Socrates becomes one of the defining episodes in the history of philosophy.",
    "It raised lasting questions about citizenship, dissent, and truth in public life.",
    "Trial_of_Socrates"
  ),
  milestone(
    -327,
    "Mauryan Expansion Begins in South Asia",
    "Classical World",
    "South Asia",
    "Hinduism",
    "medium",
    "The Mauryan state expands under Chandragupta, building one of the largest early South Asian empires.",
    "Its institutions influenced kingship, administration, and political thought across the subcontinent.",
    "Maurya_Empire"
  ),
  milestone(
    -264,
    "Punic Wars Begin Between Rome and Carthage",
    "Classical World",
    "Mediterranean",
    "Ancient Polytheism",
    "medium",
    "Rome and Carthage enter a series of major wars over trade, territory, and military power.",
    "The conflict accelerated Rome's transformation into a Mediterranean empire.",
    "Punic_Wars"
  ),
  milestone(
    -202,
    "Han Dynasty Consolidates Imperial China",
    "Classical World",
    "China",
    "Confucian / Chinese Traditions",
    "high",
    "The Han dynasty stabilizes imperial rule and expands state institutions.",
    "Han governance, scholarship, and identity deeply shaped East Asian history.",
    "Han_dynasty"
  ),
  milestone(
    -146,
    "Rome Destroys Carthage",
    "Classical World",
    "Mediterranean",
    "Ancient Polytheism",
    "medium",
    "Rome's destruction of Carthage confirms its dominance in the western Mediterranean.",
    "This moment symbolized the violent expansion of Roman imperial power.",
    "Siege_of_Carthage_(149–146_BC)"
  ),
  milestone(
    -130,
    "Silk Road Exchange Begins to Deepen",
    "Classical World",
    "Eurasia",
    "Religiously Diverse",
    "medium",
    "Routes linking East Asia, Central Asia, and western Eurasia become more active in trade and diplomacy.",
    "These connections moved goods, religions, technologies, and diseases across continents.",
    "Silk_Road"
  ),
  milestone(
    -44,
    "Julius Caesar Is Assassinated",
    "Classical World",
    "Rome",
    "Ancient Polytheism",
    "medium",
    "Caesar's assassination triggers a new cycle of civil wars in Rome.",
    "The event hastened the collapse of the Roman Republic and rise of imperial rule.",
    "Assassination_of_Julius_Caesar"
  ),
  milestone(
    4,
    "Approximate Lifetime of Jesus Shapes Christian Memory",
    "Classical World",
    "Roman Judea",
    "Christianity",
    "high",
    "The life and teachings of Jesus become the foundation of Christianity.",
    "Christianity would grow into one of the world's largest religions with global historical impact.",
    "Jesus"
  ),
  milestone(
    70,
    "Second Temple Is Destroyed in Jerusalem",
    "Post-Classical",
    "Levant",
    "Judaism",
    "high",
    "Roman forces destroy the Second Temple after revolt in Judea.",
    "The event transformed Jewish religious life and remains central to Jewish historical memory.",
    "Siege_of_Jerusalem_(70_CE)"
  ),
  milestone(
    220,
    "Three Kingdoms Era Begins in China",
    "Post-Classical",
    "China",
    "Confucian / Chinese Traditions",
    "medium",
    "The Han collapse gives way to a famous age of competing states.",
    "The era became deeply influential in East Asian literature, memory, and political culture.",
    "Three_Kingdoms"
  ),
  milestone(
    376,
    "Christianity Becomes State Religion of the Roman Empire",
    "Post-Classical",
    "Roman Empire",
    "Christianity",
    "medium",
    "Imperial power now formally aligns with Nicene Christianity.",
    "This helped entrench Christian institutions across late antiquity and medieval Europe.",
    "State_church_of_the_Roman_Empire"
  ),
  milestone(
    410,
    "Sack of Rome Shocks the Late Roman World",
    "Post-Classical",
    "Western Europe",
    "Christianity",
    "medium",
    "The Visigothic sack of Rome unsettles assumptions about Roman permanence.",
    "It became a symbol of the empire's vulnerability and transformation.",
    "Sack_of_Rome_(410)"
  ),
  milestone(
    476,
    "Western Roman Empire Formally Ends",
    "Post-Classical",
    "Western Europe",
    "Christianity",
    "high",
    "The deposition of Romulus Augustulus traditionally marks the fall of the Western Roman Empire.",
    "It became one of the most famous dividing points in European historical narratives.",
    "Fall_of_the_Western_Roman_Empire"
  ),
  milestone(
    527,
    "Justinian's Reign Renews Byzantine Ambition",
    "Post-Classical",
    "Eastern Mediterranean",
    "Christianity",
    "medium",
    "The Byzantine emperor Justinian pursues reconquest, law reform, and monumental building.",
    "His reign left major marks on legal history, imperial ideology, and Christian architecture.",
    "Justinian_I"
  ),
  milestone(
    622,
    "Hijra Marks the Beginning of the Islamic Calendar",
    "Post-Classical",
    "Arabia",
    "Islam",
    "high",
    "Muhammad's migration from Mecca to Medina becomes a founding moment in Islamic history.",
    "It marks the beginning of the Islamic calendar and a new religious-political community.",
    "Hijrah"
  ),
  milestone(
    632,
    "Rashidun Caliphate Expands Islam Rapidly",
    "Post-Classical",
    "Middle East and North Africa",
    "Islam",
    "high",
    "After Muhammad's death, early caliphs guide rapid religious and political expansion.",
    "These decades permanently transformed the Middle East and beyond.",
    "Rashidun_Caliphate"
  ),
  milestone(
    661,
    "Umayyad Caliphate Builds a Transregional Empire",
    "Post-Classical",
    "Middle East, North Africa, Iberia",
    "Islam",
    "medium",
    "The Umayyads rule an empire stretching from Iberia to Central Asia.",
    "Islamic governance, trade, and culture took on durable imperial form under their rule.",
    "Umayyad_Caliphate"
  ),
  milestone(
    750,
    "Abbasid Revolution Moves the Center of Islamic Power",
    "Post-Classical",
    "Middle East",
    "Islam",
    "medium",
    "The Abbasids overthrow the Umayyads and foster new political and intellectual centers.",
    "Baghdad and the Abbasid world became major hubs of scholarship and exchange.",
    "Abbasid_Revolution"
  ),
  milestone(
    868,
    "Printed Diamond Sutra Demonstrates Early Printing",
    "Post-Classical",
    "China",
    "Buddhism",
    "medium",
    "The Diamond Sutra is one of the oldest known dated printed books.",
    "Printing transformed how texts, doctrine, and learning could circulate.",
    "Diamond_Sutra"
  ),
  milestone(
    960,
    "Song Dynasty Begins a New Era of Innovation",
    "Post-Classical",
    "China",
    "Confucian / Chinese Traditions",
    "medium",
    "Song rule is associated with commercial growth, urban change, and technological innovation.",
    "It became one of the world's most dynamic premodern economies.",
    "Song_dynasty"
  ),
  milestone(
    1054,
    "Great Schism Deepens East-West Christian Division",
    "Post-Classical",
    "Eastern Mediterranean and Europe",
    "Christianity",
    "medium",
    "Tensions between Latin and Greek Christian authorities harden into lasting division.",
    "The split helped shape the later histories of Roman Catholicism and Eastern Orthodoxy.",
    "East–West_Schism"
  ),
  milestone(
    1066,
    "Norman Conquest Transforms England",
    "Post-Classical",
    "England",
    "Christianity",
    "medium",
    "William of Normandy conquers England and remakes elite power structures.",
    "The conquest influenced language, law, aristocracy, and the English state.",
    "Norman_Conquest"
  ),
  milestone(
    1206,
    "Mongol Empire Forms Under Genghis Khan",
    "Post-Classical",
    "Inner Asia and Eurasia",
    "Religiously Diverse",
    "high",
    "Genghis Khan unites Mongol groups and launches a vast imperial expansion.",
    "The Mongol Empire reordered Eurasian politics, exchange, and mobility on a continental scale.",
    "Mongol_Empire"
  ),
  milestone(
    1236,
    "Mali Empire Expands in West Africa",
    "Post-Classical",
    "West Africa",
    "Islam",
    "medium",
    "The Mali Empire grows into a major West African power with strong trade links.",
    "It highlights the central role of African states in gold, scholarship, and regional politics.",
    "Mali_Empire"
  ),
  milestone(
    1324,
    "Mansa Musa's Pilgrimage Draws Global Attention",
    "Post-Classical",
    "West Africa and the Middle East",
    "Islam",
    "medium",
    "Mansa Musa's pilgrimage to Mecca becomes famous for wealth, diplomacy, and prestige.",
    "It made Mali widely known across Afro-Eurasian networks.",
    "Mansa_Musa"
  ),
  milestone(
    1405,
    "Zheng He's Voyages Project Ming Power Overseas",
    "Post-Classical",
    "Indian Ocean",
    "Confucian / Chinese Traditions",
    "medium",
    "Large Ming fleets sail across the Indian Ocean under Zheng He.",
    "These voyages demonstrated maritime capacity, diplomacy, and exchange on a grand scale.",
    "Zheng_He"
  ),
  milestone(
    1438,
    "Inca Empire Consolidates in the Andes",
    "Early Modern",
    "Andes",
    "Ancient / Indigenous Traditions",
    "medium",
    "The Inca state expands through administration, roads, labor systems, and military force.",
    "It became the largest empire in pre-Columbian South America.",
    "Inca_Empire"
  ),
  milestone(
    1450,
    "Printing Press Accelerates Text Culture in Europe",
    "Early Modern",
    "Europe",
    "Christianity",
    "high",
    "Movable type printing spreads rapidly in Europe after Gutenberg's innovations.",
    "Print transformed religion, science, literacy, administration, and political debate.",
    "Printing_press"
  ),
  milestone(
    1498,
    "Sea Route to India Reorients Global Trade",
    "Early Modern",
    "Indian Ocean",
    "Religiously Diverse",
    "medium",
    "Vasco da Gama's voyage by sea to India links Atlantic and Indian Ocean ambitions.",
    "It intensified maritime empire, trade competition, and colonial expansion.",
    "Vasco_da_Gama"
  ),
  milestone(
    1519,
    "Magellan-Elcano Expedition Circles the Globe",
    "Early Modern",
    "Global Oceans",
    "Christianity",
    "medium",
    "The first circumnavigation demonstrates the global scale of oceanic navigation.",
    "It made worldwide maritime connection more concrete and strategic.",
    "Magellan_expedition"
  ),
  milestone(
    1526,
    "Mughal Empire Establishes a New Imperial Order",
    "Early Modern",
    "South Asia",
    "Islam",
    "medium",
    "Babur's victory at Panipat lays the foundation for Mughal rule in South Asia.",
    "The Mughal Empire profoundly shaped art, architecture, governance, and economy.",
    "Mughal_Empire"
  ),
  milestone(
    1600,
    "English East India Company Is Chartered",
    "Early Modern",
    "Atlantic and Indian Ocean worlds",
    "Christianity",
    "medium",
    "A chartered trading company becomes a major vehicle for empire and commerce.",
    "It helped link corporate power, colonial expansion, and global capitalism.",
    "East_India_Company"
  ),
  milestone(
    1603,
    "Tokugawa Shogunate Brings Long Internal Stability",
    "Early Modern",
    "Japan",
    "Confucian / Chinese Traditions",
    "medium",
    "Tokugawa rule stabilizes Japan after long conflict.",
    "The shogunate shaped social order, urban culture, and Japan's path into modernity.",
    "Tokugawa_shogunate"
  ),
  milestone(
    1687,
    "Newton's Principia Reframes Natural Philosophy",
    "Early Modern",
    "Europe",
    "Christianity / Secular Thought",
    "medium",
    "Newton's Principia presents a mathematically unified account of motion and gravitation.",
    "It became one of the landmark texts of the Scientific Revolution.",
    "Philosophiæ_Naturalis_Principia_Mathematica"
  ),
  milestone(
    1707,
    "Kingdom of Great Britain Is Formed",
    "Early Modern",
    "British Isles",
    "Christianity",
    "medium",
    "The union of England and Scotland creates Great Britain.",
    "The new state became a major imperial, commercial, and industrial power.",
    "Kingdom_of_Great_Britain"
  ),
  milestone(
    1751,
    "Encyclopedie Spreads Enlightenment Thought",
    "Early Modern",
    "Europe",
    "Christianity / Secular Thought",
    "medium",
    "The Encyclopedie gathers and circulates Enlightenment knowledge and criticism.",
    "It became a major symbol of reason, critique, and intellectual modernity.",
    "Encyclopédie"
  ),
  milestone(
    1804,
    "Haiti Becomes the First Black Republic",
    "Age of Revolutions",
    "Caribbean",
    "Christianity / Afro-Atlantic Traditions",
    "high",
    "The Haitian Revolution ends in independence after defeating slavery and colonial rule.",
    "It transformed Atlantic politics and remains one of the most radical revolutions in history.",
    "Haiti"
  ),
  milestone(
    1804,
    "Napoleon Crowns Himself Emperor",
    "Age of Revolutions",
    "Europe",
    "Christianity / Secular Thought",
    "medium",
    "Napoleon turns revolutionary France toward imperial rule under his authority.",
    "Napoleonic warfare and reform reshaped Europe and its political order.",
    "Napoleon"
  ),
  milestone(
    1815,
    "Congress of Vienna Redraws Post-Napoleonic Europe",
    "Age of Revolutions",
    "Europe",
    "Christianity / Secular Thought",
    "medium",
    "European powers attempt to restore balance after the Napoleonic Wars.",
    "The settlement influenced diplomacy, legitimacy, and international order for decades.",
    "Congress_of_Vienna"
  ),
  milestone(
    1821,
    "Greek War of Independence Begins",
    "Age of Revolutions",
    "Southeastern Europe",
    "Christianity",
    "medium",
    "Greek rebels challenge Ottoman rule in a war that draws transnational support.",
    "It became a major nationalist milestone in nineteenth-century Europe.",
    "Greek_War_of_Independence"
  ),
  milestone(
    1830,
    "Revolutions of 1830 Spread Constitutional Pressure",
    "Age of Revolutions",
    "Europe",
    "Christianity / Secular Thought",
    "medium",
    "Political uprisings push against conservative post-1815 settlements.",
    "They kept constitutionalism and nationalism at the center of European politics.",
    "Revolutions_of_1830"
  ),
  milestone(
    1848,
    "Revolutions of 1848 Shake Europe",
    "Age of Revolutions",
    "Europe",
    "Christianity / Secular Thought",
    "high",
    "Revolutionary movements challenge monarchies and demand political reform across Europe.",
    "Although many failed immediately, they influenced nationalism, labor politics, and constitutional change.",
    "Revolutions_of_1848"
  ),
  milestone(
    1861,
    "Italian Unification Advances Under the Kingdom of Italy",
    "Age of Revolutions",
    "Italy",
    "Christianity",
    "medium",
    "The kingdom of Italy is proclaimed amid the Risorgimento.",
    "Italian unification helped redefine nationalism and state-building in Europe.",
    "Unification_of_Italy"
  ),
  milestone(
    1868,
    "Meiji Restoration Launches Rapid State Transformation",
    "Age of Revolutions",
    "Japan",
    "Confucian / Chinese Traditions",
    "high",
    "Political change restores imperial rule and accelerates modernization in Japan.",
    "Japan's institutions, military, and industry changed at remarkable speed.",
    "Meiji_Restoration"
  ),
  milestone(
    1837,
    "Telegraph Networks Begin a New Communications Age",
    "Industrial World",
    "Europe and North America",
    "Secular / Multi-faith",
    "medium",
    "Electrical telegraphy allows information to travel much faster than physical transport.",
    "It transformed war, trade, news, and governance through near-instant long-distance messaging.",
    "Electrical_telegraph"
  ),
  milestone(
    1853,
    "Perry Expedition Forces Japan's Opening",
    "Industrial World",
    "Japan",
    "Confucian / Chinese Traditions",
    "medium",
    "American naval pressure compels Japan to open to new diplomatic and trade arrangements.",
    "The event helped set the stage for later Japanese transformation and imperial competition.",
    "Perry_Expedition"
  ),
  milestone(
    1859,
    "Darwin Publishes On the Origin of Species",
    "Industrial World",
    "Europe",
    "Christianity / Secular Thought",
    "medium",
    "Darwin's work presents a groundbreaking account of evolution by natural selection.",
    "It changed biology and generated profound philosophical, religious, and social debates.",
    "On_the_Origin_of_Species"
  ),
  milestone(
    1861,
    "American Civil War Begins",
    "Industrial World",
    "North America",
    "Christianity",
    "high",
    "The United States descends into civil war over union, slavery, and political power.",
    "The conflict reshaped the American state and the future of slavery in the Atlantic world.",
    "American_Civil_War"
  ),
  milestone(
    1869,
    "Suez Canal Opens Between Mediterranean and Red Sea",
    "Industrial World",
    "Egypt",
    "Islam",
    "medium",
    "The canal radically shortens the sea route between Europe and Asia.",
    "It became one of the most strategic waterways in modern global trade and empire.",
    "Suez_Canal"
  ),
  milestone(
    1871,
    "German Empire Is Proclaimed",
    "Industrial World",
    "Central Europe",
    "Christianity",
    "medium",
    "German unification under Prussian leadership creates a powerful new European state.",
    "Its rise altered the balance of power that shaped later European conflict.",
    "German_Empire"
  ),
  milestone(
    1876,
    "Telephone Enters Modern Communications History",
    "Industrial World",
    "North America and Europe",
    "Secular / Multi-faith",
    "medium",
    "The telephone becomes a transformative new communications technology.",
    "Voice communication over distance changes business, domestic life, and infrastructure.",
    "Telephone"
  ),
  milestone(
    1884,
    "Berlin Conference Formalizes the Scramble for Africa",
    "Industrial World",
    "Africa and Europe",
    "Christianity / Secular Thought",
    "high",
    "European powers negotiate rules for colonial claims in Africa without African consent.",
    "The conference became a major symbol of imperial partition and colonial violence.",
    "Berlin_Conference"
  ),
  milestone(
    1903,
    "Powered Flight Becomes a Reality",
    "Industrial World",
    "North America",
    "Secular / Multi-faith",
    "medium",
    "The Wright brothers achieve controlled powered flight.",
    "Air travel, warfare, logistics, and global connectivity would all be transformed.",
    "Wright_brothers"
  ),
  milestone(
    1911,
    "Xinhai Revolution Ends Qing Imperial Rule",
    "Industrial World",
    "China",
    "Confucian / Chinese Traditions",
    "high",
    "Revolutionary movements topple the Qing dynasty and end imperial rule in China.",
    "The event opened a new and turbulent era in modern Chinese politics.",
    "1911_Revolution"
  ),
  milestone(
    1917,
    "Russian Revolution Topples the Tsarist Order",
    "World Wars",
    "Russia",
    "Christianity / Secular Thought",
    "high",
    "Revolution in Russia overturns monarchy and eventually brings Bolshevik rule to power.",
    "It reshaped global politics, ideology, and the twentieth century state system.",
    "Russian_Revolution"
  ),
  milestone(
    1918,
    "World War I Ends After Vast Destruction",
    "World Wars",
    "Europe and Global",
    "Religiously Diverse",
    "high",
    "The armistice ends a catastrophic industrial war that destroyed empires and societies.",
    "Its aftermath helped produce new states, resentments, and international experiments.",
    "Armistice_of_11_November_1918"
  ),
  milestone(
    1919,
    "Treaty of Versailles Attempts to Redefine Peace",
    "World Wars",
    "Europe and Global",
    "Religiously Diverse",
    "medium",
    "The treaty imposes terms on Germany and redraws parts of the postwar order.",
    "It became one of the most debated settlements in modern diplomatic history.",
    "Treaty_of_Versailles"
  ),
  milestone(
    1929,
    "Great Depression Spreads Through the Global Economy",
    "World Wars",
    "Global",
    "Religiously Diverse",
    "high",
    "Financial collapse and economic contraction destabilize governments and daily life worldwide.",
    "The depression helped reshape economic policy and intensified political extremism.",
    "Great_Depression"
  ),
  milestone(
    1941,
    "Attack on Pearl Harbor Globalizes the Pacific War",
    "World Wars",
    "Pacific",
    "Religiously Diverse",
    "medium",
    "Japan's attack on Pearl Harbor draws the United States directly into World War II.",
    "The war becomes even more deeply global in scale and consequence.",
    "Attack_on_Pearl_Harbor"
  ),
  milestone(
    1945,
    "United Nations Is Founded",
    "World Wars",
    "Global",
    "Secular / Multi-faith",
    "high",
    "The United Nations is established after World War II to create a new international framework.",
    "It became the most important intergovernmental institution of the postwar era.",
    "United_Nations"
  ),
  milestone(
    1945,
    "Atomic Bombings Reveal the Nuclear Age",
    "World Wars",
    "Japan",
    "Secular / Multi-faith",
    "high",
    "The bombings of Hiroshima and Nagasaki demonstrate unprecedented destructive power.",
    "Nuclear weapons permanently altered warfare, diplomacy, and existential risk.",
    "Atomic_bombings_of_Hiroshima_and_Nagasaki"
  ),
  milestone(
    1947,
    "Partition and Independence Reshape South Asia",
    "Cold War and Decolonization",
    "South Asia",
    "Hinduism / Islam",
    "high",
    "British India is partitioned as India and Pakistan become independent states.",
    "The event transformed South Asian politics through freedom, migration, and violence.",
    "Partition_of_India"
  ),
  milestone(
    1949,
    "People's Republic of China Is Proclaimed",
    "Cold War and Decolonization",
    "China",
    "Secular / Multi-faith",
    "high",
    "Communist victory in the Chinese Civil War leads to the proclamation of the People's Republic of China.",
    "This became one of the defining political shifts of the twentieth century.",
    "People's_Republic_of_China"
  ),
  milestone(
    1955,
    "Bandung Conference Elevates the Postcolonial World",
    "Cold War and Decolonization",
    "Asia and Africa",
    "Religiously Diverse",
    "medium",
    "Leaders from Asia and Africa gather in Bandung to discuss solidarity and independence.",
    "The meeting became an emblem of decolonization and non-alignment.",
    "Bandung_Conference"
  ),
  milestone(
    1957,
    "Sputnik Opens the Space Age",
    "Cold War and Decolonization",
    "Global",
    "Secular / Multi-faith",
    "medium",
    "The Soviet launch of Sputnik shocks rivals and begins the space age in earnest.",
    "Space exploration became a major arena of science, prestige, and strategic competition.",
    "Sputnik_1"
  ),
  milestone(
    1960,
    "Year of Africa Accelerates Decolonization",
    "Cold War and Decolonization",
    "Africa",
    "Religiously Diverse",
    "high",
    "Seventeen African countries gain independence in 1960.",
    "The year symbolizes the rapid collapse of European colonial rule in Africa.",
    "Year_of_Africa"
  ),
  milestone(
    1962,
    "Cuban Missile Crisis Brings Nuclear Brinkmanship to a Peak",
    "Cold War and Decolonization",
    "Caribbean and Global",
    "Secular / Multi-faith",
    "high",
    "The United States and Soviet Union confront each other over missiles in Cuba.",
    "It remains one of the most dangerous moments of the nuclear era.",
    "Cuban_Missile_Crisis"
  ),
  milestone(
    1963,
    "Organization of African Unity Is Founded",
    "Cold War and Decolonization",
    "Africa",
    "Religiously Diverse",
    "medium",
    "Independent African states create a continental political organization.",
    "The institution aimed to coordinate decolonization, diplomacy, and African cooperation.",
    "Organisation_of_African_Unity"
  ),
  milestone(
    1971,
    "Bangladesh Emerges as an Independent State",
    "Cold War and Decolonization",
    "South Asia",
    "Islam",
    "medium",
    "War and secession lead to the independence of Bangladesh.",
    "The event reshaped the political geography of South Asia.",
    "Bangladesh_Liberation_War"
  ),
  milestone(
    1973,
    "Oil Crisis Shows the Power of Energy Politics",
    "Cold War and Decolonization",
    "Global",
    "Religiously Diverse",
    "medium",
    "Oil embargoes and price shocks create major economic disruption.",
    "Energy vulnerability becomes a defining issue in modern geopolitics.",
    "1973_oil_crisis"
  ),
  milestone(
    1979,
    "Iranian Revolution Overthrows the Shah",
    "Cold War and Decolonization",
    "Iran",
    "Islam",
    "high",
    "Mass upheaval ends the Pahlavi monarchy and establishes the Islamic Republic.",
    "The revolution had lasting regional and global effects on politics and religion.",
    "Iranian_Revolution"
  ),
  milestone(
    1991,
    "Soviet Union Dissolves",
    "Cold War and Decolonization",
    "Eurasia",
    "Secular / Multi-faith",
    "high",
    "The Soviet Union formally collapses at the end of the Cold War.",
    "Its dissolution transformed global power, ideology, and international relations.",
    "Dissolution_of_the_Soviet_Union"
  ),
  milestone(
    1994,
    "Apartheid Ends in South Africa",
    "Cold War and Decolonization",
    "South Africa",
    "Christianity / Indigenous Traditions",
    "high",
    "South Africa holds its first fully democratic election after apartheid.",
    "The transition became a defining landmark in the global history of racial justice and democracy.",
    "1994_South_African_general_election"
  ),
  milestone(
    1995,
    "World Trade Organization Begins Global Operations",
    "Cold War and Decolonization",
    "Global",
    "Secular / Multi-faith",
    "medium",
    "The WTO begins operating as a major institution governing global trade rules.",
    "It became central to debates about globalization, sovereignty, and economic integration.",
    "World_Trade_Organization"
  ),
  milestone(
    2001,
    "September 11 Attacks Reshape Global Security Politics",
    "Contemporary World",
    "United States and Global",
    "Secular / Multi-faith",
    "high",
    "The attacks of September 11, 2001 trigger wars, surveillance expansion, and new security doctrines.",
    "Their consequences shaped geopolitics, migration, and civil liberties in the twenty-first century.",
    "September_11_attacks"
  ),
  milestone(
    2004,
    "Indian Ocean Tsunami Reveals Shared Global Vulnerability",
    "Contemporary World",
    "Indian Ocean",
    "Religiously Diverse",
    "medium",
    "A massive tsunami kills large numbers of people across multiple countries.",
    "The disaster underscored the importance of warning systems, aid coordination, and climate resilience.",
    "2004_Indian_Ocean_earthquake_and_tsunami"
  ),
  milestone(
    2007,
    "Smartphone Era Accelerates Mobile Digital Life",
    "Contemporary World",
    "Global",
    "Secular / Multi-faith",
    "medium",
    "The modern smartphone becomes a central device for communication, media, and everyday life.",
    "Mobile computing reshaped attention, politics, work, and social interaction worldwide.",
    "IPhone_(1st_generation)"
  ),
  milestone(
    2008,
    "Global Financial Crisis Shakes World Economies",
    "Contemporary World",
    "Global",
    "Secular / Multi-faith",
    "high",
    "The financial crisis triggers recession, bank failures, and major policy responses.",
    "Its effects altered politics, inequality debates, and trust in institutions.",
    "2007–2008_financial_crisis"
  ),
  milestone(
    2011,
    "Arab Spring Uprisings Sweep Multiple States",
    "Contemporary World",
    "Middle East and North Africa",
    "Islam",
    "high",
    "Popular uprisings challenge regimes across the Arab world.",
    "The outcomes varied sharply, but the uprisings reshaped regional politics and public life.",
    "Arab_Spring"
  ),
  milestone(
    2015,
    "Paris Climate Agreement Sets a Shared Global Framework",
    "Contemporary World",
    "Global",
    "Secular / Multi-faith",
    "medium",
    "Governments adopt a major international framework for addressing climate change.",
    "It became a central reference point for contemporary climate politics.",
    "Paris_Agreement"
  ),
  milestone(
    2016,
    "Brexit Referendum Opens a New Chapter in European Politics",
    "Contemporary World",
    "United Kingdom and Europe",
    "Secular / Multi-faith",
    "medium",
    "Voters in the United Kingdom choose to leave the European Union.",
    "The result triggered years of negotiation and wider debate about sovereignty and integration.",
    "2016_United_Kingdom_European_Union_membership_referendum"
  ),
  milestone(
    2022,
    "Russia's Full-Scale Invasion of Ukraine Reorders European Security",
    "Contemporary World",
    "Europe",
    "Christianity",
    "high",
    "The 2022 invasion triggers major war, displacement, sanctions, and global political consequences.",
    "It reshaped debates about sovereignty, alliance systems, and energy security.",
    "Russian_invasion_of_Ukraine"
  ),
];

const HISTORY_DATA = [...BASE_HISTORY_DATA, ...SUPPLEMENTAL_HISTORY_DATA].map(
  normalizeHistoryEntry
);
