const HISTORY_DATA = [
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
