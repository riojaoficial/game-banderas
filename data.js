// All 48 countries qualified for FIFA World Cup 2026
const countries = [
    {
        name: "Argentina",
        flag: "🇦🇷",
        confederation: "CONMEBOL"
    },
    {
        name: "Austria",
        flag: "🇦🇹",
        confederation: "UEFA"
    },
    {
        name: "Australia",
        flag: "🇦🇺",
        confederation: "AFC"
    },
    {
        name: "Belgium",
        flag: "🇧🇪",
        confederation: "UEFA"
    },
    {
        name: "Bosnia and Herzegovina",
        flag: "🇧🇦",
        confederation: "UEFA"
    },
    {
        name: "Brazil",
        flag: "🇧🇷",
        confederation: "CONMEBOL"
    },
    {
        name: "Canada",
        flag: "🇨🇦",
        confederation: "CONCACAF"
    },
    {
        name: "Colombia",
        flag: "🇨🇴",
        confederation: "CONMEBOL"
    },
    {
        name: "Croatia",
        flag: "🇭🇷",
        confederation: "UEFA"
    },
    {
        name: "Curaçao",
        flag: "🇨🇼",
        confederation: "CONCACAF"
    },
    {
        name: "Czechia",
        flag: "🇨🇿",
        confederation: "UEFA"
    },
    {
        name: "Cape Verde",
        flag: "🇨🇻",
        confederation: "CAF"
    },
    {
        name: "DR Congo",
        flag: "🇨🇩",
        confederation: "CAF"
    },
    {
        name: "Ecuador",
        flag: "🇪🇨",
        confederation: "CONMEBOL"
    },
    {
        name: "Egypt",
        flag: "🇪🇬",
        confederation: "CAF"
    },
    {
        name: "England",
        flag: "🇬🇧",
        confederation: "UEFA"
    },
    {
        name: "France",
        flag: "🇫🇷",
        confederation: "UEFA"
    },
    {
        name: "Germany",
        flag: "🇩🇪",
        confederation: "UEFA"
    },
    {
        name: "Ghana",
        flag: "🇬🇭",
        confederation: "CAF"
    },
    {
        name: "Haiti",
        flag: "🇭🇹",
        confederation: "CONCACAF"
    },
    {
        name: "Iran",
        flag: "🇮🇷",
        confederation: "AFC"
    },
    {
        name: "Iraq",
        flag: "🇮🇶",
        confederation: "AFC"
    },
    {
        name: "Ivory Coast",
        flag: "🇨🇮",
        confederation: "CAF"
    },
    {
        name: "Japan",
        flag: "🇯🇵",
        confederation: "AFC"
    },
    {
        name: "Jordan",
        flag: "🇯🇴",
        confederation: "AFC"
    },
    {
        name: "Mexico",
        flag: "🇲🇽",
        confederation: "CONCACAF"
    },
    {
        name: "Morocco",
        flag: "🇲🇦",
        confederation: "CAF"
    },
    {
        name: "Netherlands",
        flag: "🇳🇱",
        confederation: "UEFA"
    },
    {
        name: "New Zealand",
        flag: "🇳🇿",
        confederation: "OFC"
    },
    {
        name: "Norway",
        flag: "🇳🇴",
        confederation: "UEFA"
    },
    {
        name: "Panama",
        flag: "🇵🇦",
        confederation: "CONCACAF"
    },
    {
        name: "Paraguay",
        flag: "🇵🇾",
        confederation: "CONMEBOL"
    },
    {
        name: "Portugal",
        flag: "🇵🇹",
        confederation: "UEFA"
    },
    {
        name: "Qatar",
        flag: "🇶🇦",
        confederation: "AFC"
    },
    {
        name: "Saudi Arabia",
        flag: "🇸🇦",
        confederation: "AFC"
    },
    {
        name: "Scotland",
        flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        confederation: "UEFA"
    },
    {
        name: "Senegal",
        flag: "🇸🇳",
        confederation: "CAF"
    },
    {
        name: "South Africa",
        flag: "🇿🇦",
        confederation: "CAF"
    },
    {
        name: "South Korea",
        flag: "🇰🇷",
        confederation: "AFC"
    },
    {
        name: "Spain",
        flag: "🇪🇸",
        confederation: "UEFA"
    },
    {
        name: "Sweden",
        flag: "🇸🇪",
        confederation: "UEFA"
    },
    {
        name: "Switzerland",
        flag: "🇨🇭",
        confederation: "UEFA"
    },
    {
        name: "Tunisia",
        flag: "🇹🇳",
        confederation: "CAF"
    },
    {
        name: "Turkey",
        flag: "🇹🇷",
        confederation: "UEFA"
    },
    {
        name: "United States",
        flag: "🇺🇸",
        confederation: "CONCACAF"
    },
    {
        name: "Uruguay",
        flag: "🇺🇾",
        confederation: "CONMEBOL"
    },
    {
        name: "Uzbekistan",
        flag: "🇺🇿",
        confederation: "AFC"
    },
    {
        name: "Algeria",
        flag: "🇩🇿",
        confederation: "CAF"
    }
];

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get random countries for options
function getRandomCountries(correctCountry, count = 4) {
    const otherCountries = countries.filter(c => c.name !== correctCountry.name);
    const shuffled = shuffleArray(otherCountries);
    const options = shuffled.slice(0, count - 1);
    options.push(correctCountry);
    return shuffleArray(options);
}

// Hints for countries
const hints = {
    "Argentina": "Famous for tango, football, and Lionel Messi",
    "Austria": "Located in Central Europe, capital is Vienna",
    "Australia": "Oceania's largest country",
    "Belgium": "Home to Brussels and European institutions",
    "Bosnia and Herzegovina": "Balkan country",
    "Brazil": "Most successful World Cup team (5 titles)",
    "Canada": "North American country north of the USA",
    "Colombia": "Known for coffee and located in South America",
    "Croatia": "Balkan country, recent World Cup finalist",
    "Curaçao": "Caribbean island nation",
    "Czechia": "Central European country",
    "Cape Verde": "Island nation off the coast of West Africa",
    "DR Congo": "Largest country in Central Africa",
    "Ecuador": "Located on the equator in South America",
    "Egypt": "Home to the Nile River and pyramids",
    "England": "Part of the United Kingdom",
    "France": "Home of the Eiffel Tower, won 2 World Cups",
    "Germany": "Central European powerhouse",
    "Ghana": "West African nation",
    "Haiti": "Caribbean nation",
    "Iran": "Middle Eastern country",
    "Iraq": "Middle Eastern country",
    "Ivory Coast": "West African nation",
    "Japan": "Island nation in East Asia",
    "Jordan": "Middle Eastern country",
    "Mexico": "North American country south of USA",
    "Morocco": "North African country",
    "Netherlands": "European country, known for tulips",
    "New Zealand": "Island nation in Oceania",
    "Norway": "Scandinavian country",
    "Panama": "Central American country, home to the canal",
    "Paraguay": "South American country",
    "Portugal": "Western European country",
    "Qatar": "Small Gulf nation",
    "Saudi Arabia": "Largest Middle Eastern country",
    "Scotland": "Part of the United Kingdom",
    "Senegal": "West African nation",
    "South Africa": "Southern tip of Africa",
    "South Korea": "East Asian country",
    "Spain": "Southwestern European country",
    "Sweden": "Scandinavian country",
    "Switzerland": "Alpine European country",
    "Tunisia": "North African country",
    "Turkey": "Straddles Europe and Asia",
    "United States": "North American country",
    "Uruguay": "South American country",
    "Uzbekistan": "Central Asian country",
    "Algeria": "North African country"
};
