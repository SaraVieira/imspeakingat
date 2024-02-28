import { PrismaClient } from "@prisma/client";
export const countries = [
  {
    name: "Afghanistan",
    code: "AF",
  },
  {
    name: "Åland Islands",
    code: "AX",
  },
  {
    name: "Albania",
    code: "AL",
  },
  {
    name: "Algeria",
    code: "DZ",
  },
  {
    name: "American Samoa",
    code: "AS",
  },
  {
    name: "AndorrA",
    code: "AD",
  },
  {
    name: "Angola",
    code: "AO",
  },
  {
    name: "Anguilla",
    code: "AI",
  },
  {
    name: "Antarctica",
    code: "AQ",
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
  },
  {
    name: "Argentina",
    code: "AR",
  },
  {
    name: "Armenia",
    code: "AM",
  },
  {
    name: "Aruba",
    code: "AW",
  },
  {
    name: "Australia",
    code: "AU",
  },
  {
    name: "Austria",
    code: "AT",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
  },
  {
    name: "Bahamas",
    code: "BS",
  },
  {
    name: "Bahrain",
    code: "BH",
  },
  {
    name: "Bangladesh",
    code: "BD",
  },
  {
    name: "Barbados",
    code: "BB",
  },
  {
    name: "Belarus",
    code: "BY",
  },
  {
    name: "Belgium",
    code: "BE",
  },
  {
    name: "Belize",
    code: "BZ",
  },
  {
    name: "Benin",
    code: "BJ",
  },
  {
    name: "Bermuda",
    code: "BM",
  },
  {
    name: "Bhutan",
    code: "BT",
  },
  {
    name: "Bolivia",
    code: "BO",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
  },
  {
    name: "Botswana",
    code: "BW",
  },
  {
    name: "Bouvet Island",
    code: "BV",
  },
  {
    name: "Brazil",
    code: "BR",
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
  },
  {
    name: "Brunei Darussalam",
    code: "BN",
  },
  {
    name: "Bulgaria",
    code: "BG",
  },
  {
    name: "Burkina Faso",
    code: "BF",
  },
  {
    name: "Burundi",
    code: "BI",
  },
  {
    name: "Cambodia",
    code: "KH",
  },
  {
    name: "Cameroon",
    code: "CM",
  },
  {
    name: "Canada",
    code: "CA",
  },
  {
    name: "Cape Verde",
    code: "CV",
  },
  {
    name: "Cayman Islands",
    code: "KY",
  },
  {
    name: "Central African Republic",
    code: "CF",
  },
  {
    name: "Chad",
    code: "TD",
  },
  {
    name: "Chile",
    code: "CL",
  },
  {
    name: "China",
    code: "CN",
  },
  {
    name: "Christmas Island",
    code: "CX",
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC",
  },
  {
    name: "Colombia",
    code: "CO",
  },
  {
    name: "Comoros",
    code: "KM",
  },
  {
    name: "Congo",
    code: "CG",
  },
  {
    name: "Congo, The Democratic Republic of the",
    code: "CD",
  },
  {
    name: "Cook Islands",
    code: "CK",
  },
  {
    name: "Costa Rica",
    code: "CR",
  },
  {
    name: "Cote D'Ivoire",
    code: "CI",
  },
  {
    name: "Croatia",
    code: "HR",
  },
  {
    name: "Cuba",
    code: "CU",
  },
  {
    name: "Cyprus",
    code: "CY",
  },
  {
    name: "Czech Republic",
    code: "CZ",
  },
  {
    name: "Denmark",
    code: "DK",
  },
  {
    name: "Djibouti",
    code: "DJ",
  },
  {
    name: "Dominica",
    code: "DM",
  },
  {
    name: "Dominican Republic",
    code: "DO",
  },
  {
    name: "Ecuador",
    code: "EC",
  },
  {
    name: "Egypt",
    code: "EG",
  },
  {
    name: "El Salvador",
    code: "SV",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
  },
  {
    name: "Eritrea",
    code: "ER",
  },
  {
    name: "Estonia",
    code: "EE",
  },
  {
    name: "Ethiopia",
    code: "ET",
  },
  {
    name: "Falkland Islands (Malvinas)",
    code: "FK",
  },
  {
    name: "Faroe Islands",
    code: "FO",
  },
  {
    name: "Fiji",
    code: "FJ",
  },
  {
    name: "Finland",
    code: "FI",
  },
  {
    name: "France",
    code: "FR",
  },
  {
    name: "French Guiana",
    code: "GF",
  },
  {
    name: "French Polynesia",
    code: "PF",
  },
  {
    name: "French Southern Territories",
    code: "TF",
  },
  {
    name: "Gabon",
    code: "GA",
  },
  {
    name: "Gambia",
    code: "GM",
  },
  {
    name: "Georgia",
    code: "GE",
  },
  {
    name: "Germany",
    code: "DE",
  },
  {
    name: "Ghana",
    code: "GH",
  },
  {
    name: "Gibraltar",
    code: "GI",
  },
  {
    name: "Greece",
    code: "GR",
  },
  {
    name: "Greenland",
    code: "GL",
  },
  {
    name: "Grenada",
    code: "GD",
  },
  {
    name: "Guadeloupe",
    code: "GP",
  },
  {
    name: "Guam",
    code: "GU",
  },
  {
    name: "Guatemala",
    code: "GT",
  },
  {
    name: "Guernsey",
    code: "GG",
  },
  {
    name: "Guinea",
    code: "GN",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
  },
  {
    name: "Guyana",
    code: "GY",
  },
  {
    name: "Haiti",
    code: "HT",
  },
  {
    name: "Heard Island and Mcdonald Islands",
    code: "HM",
  },
  {
    name: "Holy See (Vatican City State)",
    code: "VA",
  },
  {
    name: "Honduras",
    code: "HN",
  },
  {
    name: "Hong Kong",
    code: "HK",
  },
  {
    name: "Hungary",
    code: "HU",
  },
  {
    name: "Iceland",
    code: "IS",
  },
  {
    name: "India",
    code: "IN",
  },
  {
    name: "Indonesia",
    code: "ID",
  },
  {
    name: "Iran, Islamic Republic Of",
    code: "IR",
  },
  {
    name: "Iraq",
    code: "IQ",
  },
  {
    name: "Ireland",
    code: "IE",
  },
  {
    name: "Isle of Man",
    code: "IM",
  },
  {
    name: "Israel",
    code: "IL",
  },
  {
    name: "Italy",
    code: "IT",
  },
  {
    name: "Jamaica",
    code: "JM",
  },
  {
    name: "Japan",
    code: "JP",
  },
  {
    name: "Jersey",
    code: "JE",
  },
  {
    name: "Jordan",
    code: "JO",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
  },
  {
    name: "Kenya",
    code: "KE",
  },
  {
    name: "Kiribati",
    code: "KI",
  },
  {
    name: "Korea, Democratic People'S Republic of",
    code: "KP",
  },
  {
    name: "Korea, Republic of",
    code: "KR",
  },
  {
    name: "Kosovo",
    code: "XK",
  },
  {
    name: "Kuwait",
    code: "KW",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
  },
  {
    name: "Lao People'S Democratic Republic",
    code: "LA",
  },
  {
    name: "Latvia",
    code: "LV",
  },
  {
    name: "Lebanon",
    code: "LB",
  },
  {
    name: "Lesotho",
    code: "LS",
  },
  {
    name: "Liberia",
    code: "LR",
  },
  {
    name: "Libyan Arab Jamahiriya",
    code: "LY",
  },
  {
    name: "Liechtenstein",
    code: "LI",
  },
  {
    name: "Lithuania",
    code: "LT",
  },
  {
    name: "Luxembourg",
    code: "LU",
  },
  {
    name: "Macao",
    code: "MO",
  },
  {
    name: "Macedonia, The Former Yugoslav Republic of",
    code: "MK",
  },
  {
    name: "Madagascar",
    code: "MG",
  },
  {
    name: "Malawi",
    code: "MW",
  },
  {
    name: "Malaysia",
    code: "MY",
  },
  {
    name: "Maldives",
    code: "MV",
  },
  {
    name: "Mali",
    code: "ML",
  },
  {
    name: "Malta",
    code: "MT",
  },
  {
    name: "Marshall Islands",
    code: "MH",
  },
  {
    name: "Martinique",
    code: "MQ",
  },
  {
    name: "Mauritania",
    code: "MR",
  },
  {
    name: "Mauritius",
    code: "MU",
  },
  {
    name: "Mayotte",
    code: "YT",
  },
  {
    name: "Mexico",
    code: "MX",
  },
  {
    name: "Micronesia, Federated States of",
    code: "FM",
  },
  {
    name: "Moldova, Republic of",
    code: "MD",
  },
  {
    name: "Monaco",
    code: "MC",
  },
  {
    name: "Mongolia",
    code: "MN",
  },
  {
    name: "Montserrat",
    code: "MS",
  },
  {
    name: "Morocco",
    code: "MA",
  },
  {
    name: "Mozambique",
    code: "MZ",
  },
  {
    name: "Myanmar",
    code: "MM",
  },
  {
    name: "Namibia",
    code: "NA",
  },
  {
    name: "Nauru",
    code: "NR",
  },
  {
    name: "Nepal",
    code: "NP",
  },
  {
    name: "Netherlands",
    code: "NL",
  },
  {
    name: "Netherlands Antilles",
    code: "AN",
  },
  {
    name: "New Caledonia",
    code: "NC",
  },
  {
    name: "New Zealand",
    code: "NZ",
  },
  {
    name: "Nicaragua",
    code: "NI",
  },
  {
    name: "Niger",
    code: "NE",
  },
  {
    name: "Nigeria",
    code: "NG",
  },
  {
    name: "Niue",
    code: "NU",
  },
  {
    name: "Norfolk Island",
    code: "NF",
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
  },
  {
    name: "Norway",
    code: "NO",
  },
  {
    name: "Oman",
    code: "OM",
  },
  {
    name: "Pakistan",
    code: "PK",
  },
  {
    name: "Palau",
    code: "PW",
  },
  {
    name: "Palestinian Territory, Occupied",
    code: "PS",
  },
  {
    name: "Panama",
    code: "PA",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
  },
  {
    name: "Paraguay",
    code: "PY",
  },
  {
    name: "Peru",
    code: "PE",
  },
  {
    name: "Philippines",
    code: "PH",
  },
  {
    name: "Pitcairn",
    code: "PN",
  },
  {
    name: "Poland",
    code: "PL",
  },
  {
    name: "Portugal",
    code: "PT",
  },
  {
    name: "Puerto Rico",
    code: "PR",
  },
  {
    name: "Qatar",
    code: "QA",
  },
  {
    name: "Reunion",
    code: "RE",
  },
  {
    name: "Romania",
    code: "RO",
  },
  {
    name: "Russian Federation",
    code: "RU",
  },
  {
    name: "RWANDA",
    code: "RW",
  },
  {
    name: "Saint Helena",
    code: "SH",
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
  },
  {
    name: "Saint Lucia",
    code: "LC",
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
  },
  {
    name: "Samoa",
    code: "WS",
  },
  {
    name: "San Marino",
    code: "SM",
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
  },
  {
    name: "Senegal",
    code: "SN",
  },
  {
    name: "Serbia and Montenegro",
    code: "CS",
  },
  {
    name: "Seychelles",
    code: "SC",
  },
  {
    name: "Sierra Leone",
    code: "SL",
  },
  {
    name: "Singapore",
    code: "SG",
  },
  {
    name: "Slovakia",
    code: "SK",
  },
  {
    name: "Slovenia",
    code: "SI",
  },
  {
    name: "Solomon Islands",
    code: "SB",
  },
  {
    name: "Somalia",
    code: "SO",
  },
  {
    name: "South Africa",
    code: "ZA",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "GS",
  },
  {
    name: "Spain",
    code: "ES",
  },
  {
    name: "Sri Lanka",
    code: "LK",
  },
  {
    name: "Sudan",
    code: "SD",
  },
  {
    name: "Suriname",
    code: "SR",
  },
  {
    name: "Svalbard and Jan Mayen",
    code: "SJ",
  },
  {
    name: "Swaziland",
    code: "SZ",
  },
  {
    name: "Sweden",
    code: "SE",
  },
  {
    name: "Switzerland",
    code: "CH",
  },
  {
    name: "Syrian Arab Republic",
    code: "SY",
  },
  {
    name: "Taiwan, Province of China",
    code: "TW",
  },
  {
    name: "Tajikistan",
    code: "TJ",
  },
  {
    name: "Tanzania, United Republic of",
    code: "TZ",
  },
  {
    name: "Thailand",
    code: "TH",
  },
  {
    name: "Timor-Leste",
    code: "TL",
  },
  {
    name: "Togo",
    code: "TG",
  },
  {
    name: "Tokelau",
    code: "TK",
  },
  {
    name: "Tonga",
    code: "TO",
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
  },
  {
    name: "Tunisia",
    code: "TN",
  },
  {
    name: "Turkey",
    code: "TR",
  },
  {
    name: "Turkmenistan",
    code: "TM",
  },
  {
    name: "Turks and Caicos Islands",
    code: "TC",
  },
  {
    name: "Tuvalu",
    code: "TV",
  },
  {
    name: "Uganda",
    code: "UG",
  },
  {
    name: "Ukraine",
    code: "UA",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
  },
  {
    name: "United Kingdom",
    code: "GB",
  },
  {
    name: "United States",
    code: "US",
  },
  {
    name: "United States Minor Outlying Islands",
    code: "UM",
  },
  {
    name: "Uruguay",
    code: "UY",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
  },
  {
    name: "Vanuatu",
    code: "VU",
  },
  {
    name: "Venezuela",
    code: "VE",
  },
  {
    name: "Viet Nam",
    code: "VN",
  },
  {
    name: "Virgin Islands, British",
    code: "VG",
  },
  {
    name: "Virgin Islands, U.S.",
    code: "VI",
  },
  {
    name: "Wallis and Futuna",
    code: "WF",
  },
  {
    name: "Western Sahara",
    code: "EH",
  },
  {
    name: "Yemen",
    code: "YE",
  },
  {
    name: "Zambia",
    code: "ZM",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
  },
];
export const confs = [
  {
    name: "DevGamm Gdansk",
    description: "Game dev conference in Gdansk, Poland",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-02-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gdansk",
        addressRegion: "Poland",
      },
      name: "Gdansk, Poland",
    },
  },
  {
    name: "FiNext Conference 2024",
    description: "Fintech conference in Dubai, United Arab Emirates",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-02-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "JSWorld Conference",
    description: "JavaScript conference in Amsterdam, Netherlands",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-03-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "PGConf India 2024",
    description: "Postgres conference in Bengaluru, India",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-03-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "RoboCon 2024 Online",
    description: "Testing / QA conference Online",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-03-01T00:00:00.000+00:00",
  },
  {
    name: "SuperAI",
    description: "AI / ML conference in Singapore, Singapore",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-02-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressRegion: "Singapore",
      },
      name: "Singapore, Singapore",
    },
  },
  {
    name: "Vuejs Amsterdam",
    description: "Vue conference in Amsterdam, Netherlands",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-02-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "C++ONLINE 2024",
    description: "C/C++ conference Online",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
  },
  {
    name: "CyberOT Secure Summit",
    description:
      "Cybersecurity / InfoSec conference in Dubai, United Arab Emirates",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-02-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "GDS CIO Insight Summit (USA)",
    description: "CIO conference in Boston, United States",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-02-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boston",
        addressRegion: "United States",
      },
      name: "Boston, United States",
    },
  },
  {
    name: "Tech Talks ATX",
    description: "Software architecture conference in Austin, United States",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-02-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "Vilnius.js Meetup February 2024",
    description: "React conference in Vilnius, Lithuania",
    startDate: "2024-02-28T00:00:00.000+00:00",
    endDate: "2024-02-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vilnius",
        addressRegion: "Lithuania",
      },
      name: "Vilnius, Lithuania",
    },
  },
  {
    name: "Conf42: Python 2024",
    description: "Python conference Online",
    startDate: "2024-02-29T00:00:00.000+00:00",
    endDate: "2024-02-29T00:00:00.000+00:00",
  },
  {
    name: "DevWorld",
    description: "Full-stack conference in Amsterdam, Netherlands",
    startDate: "2024-02-29T00:00:00.000+00:00",
    endDate: "2024-03-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "DEVWorld 2024",
    description: "Full-stack conference in Amsterdam, Netherlands",
    startDate: "2024-02-29T00:00:00.000+00:00",
    endDate: "2024-03-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "ME Banking  AI & Analytics Summit 2024",
    description: "Fintech conference in Dubai, United Arab Emirates",
    startDate: "2024-02-29T00:00:00.000+00:00",
    endDate: "2024-02-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "App Growth Summit LA 2024",
    description: "Mobile conference in Los Angeles, United States",
    startDate: "2024-02-29T00:00:00.000+00:00",
    endDate: "2024-02-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Los Angeles",
        addressRegion: "United States",
      },
      name: "Los Angeles, United States",
    },
  },
  {
    name: "SANS OSINT Summit 2024",
    description:
      "Cybersecurity / InfoSec conference in Arlington, United States",
    startDate: "2024-02-29T00:00:00.000+00:00",
    endDate: "2024-03-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Arlington",
        addressRegion: "United States",
      },
      name: "Arlington, United States",
    },
  },
  {
    name: "CODE100",
    description: "Full-stack hackaton in Amsterdam, Netherlands",
    startDate: "2024-02-29T00:00:00.000+00:00",
    endDate: "2024-02-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "SharpCoding 2024",
    description: "Microsoft conference in Rome, Italy",
    startDate: "2024-03-01T00:00:00.000+00:00",
    endDate: "2024-03-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rome",
        addressRegion: "Italy",
      },
      name: "Rome, Italy",
    },
  },
  {
    name: "Global AI Bootcamp 2024 Bangkok",
    description: "AI / ML conference in Bangkok, Thailand",
    startDate: "2024-03-01T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangkok",
        addressRegion: "Thailand",
      },
      name: "Bangkok, Thailand",
    },
  },
  {
    name: "Global AI Bootcamp 2024 Sao Paolo",
    description: "AI / ML conference in Sao Paulo, Brazil",
    startDate: "2024-03-01T00:00:00.000+00:00",
    endDate: "2024-03-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sao Paulo",
        addressRegion: "Brazil",
      },
      name: "Sao Paulo, Brazil",
    },
  },
  {
    name: "DDX Innovation & UX Conference",
    description: "UI / UX conference in Dubai, United Arab Emirates",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "Kubernetes Community Day Costa Rica 2024",
    description: "Docker / Kubernetes conference in Heredia, Costa Rica",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Heredia",
        addressRegion: "Costa Rica",
      },
      name: "Heredia, Costa Rica",
    },
  },
  {
    name: "test:fest 2024",
    description: "Testing / QA conference in Wroclaw, Poland",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wroclaw",
        addressRegion: "Poland",
      },
      name: "Wroclaw, Poland",
    },
  },
  {
    name: "DDD North 2024",
    description: "Tech conference in Hull, United Kingdom",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hull",
        addressRegion: "United Kingdom",
      },
      name: "Hull, United Kingdom",
    },
  },
  {
    name: "Women Techmakers Belfast 2024",
    description: "Tech conference in Belfast, United Kingdom",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belfast",
        addressRegion: "United Kingdom",
      },
      name: "Belfast, United Kingdom",
    },
  },
  {
    name: "Global AI Bootcamp 2024 Houston",
    description: "AI / ML conference in Houston, United States",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "United States",
      },
      name: "Houston, United States",
    },
  },
  {
    name: "Global AI Bootcamp 2024 Toronto",
    description: "AI / ML conference in Toronto, Canada",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "Global AI Bootcamp 2024 Chennai",
    description: "AI / ML conference in Chennai, India",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "India",
      },
      name: "Chennai, India",
    },
  },
  {
    name: "Global AI Bootcamp 2024 Mumbai",
    description: "AI / ML conference in Mumbai, India",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "India",
      },
      name: "Mumbai, India",
    },
  },
  {
    name: "Global AI Bootcamp 2024 Nairobi",
    description: "AI / ML conference in Nairobi, Kenya",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressRegion: "Kenya",
      },
      name: "Nairobi, Kenya",
    },
  },
  {
    name: "Global AI Bootcamp 2024 Uyo",
    description: "AI / ML conference in Uyo, Nigeria",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Uyo",
        addressRegion: "Nigeria",
      },
      name: "Uyo, Nigeria",
    },
  },
  {
    name: "Global AI Bootcamp 2024 Jalandhar",
    description: "AI / ML conference in Jalandhar, India",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jalandhar",
        addressRegion: "India",
      },
      name: "Jalandhar, India",
    },
  },
  {
    name: "Global AI Bootcamp 2024 Shanghai",
    description: "AI / ML conference in Shanghai, China",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shanghai",
        addressRegion: "China",
      },
      name: "Shanghai, China",
    },
  },
  {
    name: "Open Data Day Flensburg 2024",
    description: "Data / Database conference in Flensburg, Germany",
    startDate: "2024-03-02T00:00:00.000+00:00",
    endDate: "2024-03-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Flensburg",
        addressRegion: "Germany",
      },
      name: "Flensburg, Germany",
    },
  },
  {
    name: "Fintech Meetup",
    description: "Fintech conference in Las Vegas, United States",
    startDate: "2024-03-03T00:00:00.000+00:00",
    endDate: "2024-03-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Fintech Nexus",
    description: "Fintech conference in Las Vegas, United States",
    startDate: "2024-03-03T00:00:00.000+00:00",
    endDate: "2024-03-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Pink24",
    description: "IT service management conference in Las Vegas, United States",
    startDate: "2024-03-03T00:00:00.000+00:00",
    endDate: "2024-03-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "VSLive! Las Vegas 2024",
    description: ".NET conference in Las Vegas, United States",
    startDate: "2024-03-03T00:00:00.000+00:00",
    endDate: "2024-03-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "SHARE Orlando 2024",
    description: "Tech conference in Orlando, United States",
    startDate: "2024-03-03T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "United States",
      },
      name: "Orlando, United States",
    },
  },
  {
    name: "FOSS Backstage 2024",
    description: "Open Source conference in Berlin, Germany",
    startDate: "2024-03-04T00:00:00.000+00:00",
    endDate: "2024-03-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "FOSS Backstage 2024 Online",
    description: "Open Source conference Online",
    startDate: "2024-03-04T00:00:00.000+00:00",
    endDate: "2024-03-05T00:00:00.000+00:00",
  },
  {
    name: "SANS ICS UK Summit 2024",
    description: "Cybersecurity / InfoSec conference in London, United Kingdom",
    startDate: "2024-03-04T00:00:00.000+00:00",
    endDate: "2024-03-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "PyCon Namibia 2024",
    description: "Python conference in Windhoek, Namibia",
    startDate: "2024-03-04T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Windhoek",
        addressRegion: "Namibia",
      },
      name: "Windhoek, Namibia",
    },
  },
  {
    name: "Global AI Bootcamp 2024 Zurich",
    description: "AI / ML conference in Zurich, Switzerland",
    startDate: "2024-03-04T00:00:00.000+00:00",
    endDate: "2024-03-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zurich",
        addressRegion: "Switzerland",
      },
      name: "Zurich, Switzerland",
    },
  },
  {
    name: "IBM TechXchange: zStack Day",
    description: "IBM conference in Cairo, Egypt",
    startDate: "2024-03-04T00:00:00.000+00:00",
    endDate: "2024-03-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressRegion: "Egypt",
      },
      name: "Cairo, Egypt",
    },
  },
  {
    name: "Future of Work Canada",
    description: "HR / Hiring / Recruiting conference in Toronto, Canada",
    startDate: "2024-03-05T00:00:00.000+00:00",
    endDate: "2024-03-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "HR Vision London",
    description:
      "HR / Hiring / Recruiting conference in London, United Kingdom",
    startDate: "2024-03-05T00:00:00.000+00:00",
    endDate: "2024-03-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "HRWest 2024",
    description:
      "HR / Hiring / Recruiting conference in Oakland, United States",
    startDate: "2024-03-05T00:00:00.000+00:00",
    endDate: "2024-03-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oakland",
        addressRegion: "United States",
      },
      name: "Oakland, United States",
    },
  },
  {
    name: "Industrial IMMERSIVE Week",
    description: "AR / VR / XR conference in Houston, United States",
    startDate: "2024-03-05T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "United States",
      },
      name: "Houston, United States",
    },
  },
  {
    name: "Vue.js Global Summit 24",
    description: "Vue conference Online",
    startDate: "2024-03-05T00:00:00.000+00:00",
    endDate: "2024-03-06T00:00:00.000+00:00",
  },
  {
    name: "Global AI Bootcamp 2024 Auckland",
    description: "AI / ML conference in Auckland, New Zealand",
    startDate: "2024-03-05T00:00:00.000+00:00",
    endDate: "2024-03-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Auckland",
        addressRegion: "New Zealand",
      },
      name: "Auckland, New Zealand",
    },
  },
  {
    name: "IBM Storage Scale Days 2024",
    description: "IBM conference in Sindelfingen, Germany",
    startDate: "2024-03-05T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sindelfingen",
        addressRegion: "Germany",
      },
      name: "Sindelfingen, Germany",
    },
  },
  {
    name: "IBM TechXchange: DevOps Automation Oslo Summit",
    description: "IBM conference in Oslo, Norway",
    startDate: "2024-03-05T00:00:00.000+00:00",
    endDate: "2024-03-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressRegion: "Norway",
      },
      name: "Oslo, Norway",
    },
  },
  {
    name: "Code BEAM America 2024",
    description: "Elixir conference in San Francisco, United States",
    startDate: "2024-03-06T00:00:00.000+00:00",
    endDate: "2024-03-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "MoneyLIVE Summit",
    description: "Fintech conference in London, United Kingdom",
    startDate: "2024-03-06T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "ScanAgile24",
    description: "Agile conference in Helsinki, Finland",
    startDate: "2024-03-06T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Helsinki",
        addressRegion: "Finland",
      },
      name: "Helsinki, Finland",
    },
  },
  {
    name: "TrailblazerDX 2024",
    description: "Salesforce conference in San Francisco, United States",
    startDate: "2024-03-06T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "Cloud Expo Europe",
    description: "Cloud conference in London, United Kingdom",
    startDate: "2024-03-06T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "IntelliJ IDEA Conf 2024",
    description: "Kotlin conference Online",
    startDate: "2024-03-06T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
  },
  {
    name: "FlowCon 2024",
    description: "Agile conference in Paris, France",
    startDate: "2024-03-06T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "heise devSec 2024 Hanover",
    description: "Cybersecurity / InfoSec conference in Hanover, Germany",
    startDate: "2024-03-06T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hanover",
        addressRegion: "Germany",
      },
      name: "Hanover, Germany",
    },
  },
  {
    name: "Chief AI Officer",
    description: "AI / ML conference in Copenhagen, Denmark",
    startDate: "2024-03-06T00:00:00.000+00:00",
    endDate: "2024-03-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Copenhagen",
        addressRegion: "Denmark",
      },
      name: "Copenhagen, Denmark",
    },
  },
  {
    name: "FOSS Backstage Design",
    description: "UI / UX conference in Berlin, Germany",
    startDate: "2024-03-06T00:00:00.000+00:00",
    endDate: "2024-03-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "BITKOM Transform 2024",
    description: "CIO conference in Berlin, Germany",
    startDate: "2024-03-06T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "DeFi Retreat APAC",
    description: "Fintech conference in Tokyo, Japan",
    startDate: "2024-03-07T00:00:00.000+00:00",
    endDate: "2024-03-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokyo",
        addressRegion: "Japan",
      },
      name: "Tokyo, Japan",
    },
  },
  {
    name: "Open Source Day 2024",
    description: "Open Source conference in Florence, Italy",
    startDate: "2024-03-07T00:00:00.000+00:00",
    endDate: "2024-03-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Florence",
        addressRegion: "Italy",
      },
      name: "Florence, Italy",
    },
  },
  {
    name: "Voxxed Days Zürich 2024",
    description: "Full-stack conference in Zurich, Switzerland",
    startDate: "2024-03-07T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zurich",
        addressRegion: "Switzerland",
      },
      name: "Zurich, Switzerland",
    },
  },
  {
    name: "WIPM Summit 2024",
    description: "Project management / PMO conference in Dublin, Ireland",
    startDate: "2024-03-07T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressRegion: "Ireland",
      },
      name: "Dublin, Ireland",
    },
  },
  {
    name: "WordCamp Asia 2024",
    description: "Wordpress conference in Taipei, Taiwan",
    startDate: "2024-03-07T00:00:00.000+00:00",
    endDate: "2024-03-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Taipei",
        addressRegion: "Taiwan",
      },
      name: "Taipei, Taiwan",
    },
  },
  {
    name: "NextGen Payments & RegTech Forum",
    description: "Fintech conference in Zurich, Switzerland",
    startDate: "2024-03-07T00:00:00.000+00:00",
    endDate: "2024-03-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zurich",
        addressRegion: "Switzerland",
      },
      name: "Zurich, Switzerland",
    },
  },
  {
    name: "App Growth Summit NYC",
    description: "Mobile conference in New York, United States",
    startDate: "2024-03-07T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "IWD'24 - Impact the Future",
    description: "Google conference in Poznan, Poland",
    startDate: "2024-03-07T00:00:00.000+00:00",
    endDate: "2024-03-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Poznan",
        addressRegion: "Poland",
      },
      name: "Poznan, Poland",
    },
  },
  {
    name: "DKNOG14",
    description: "Telecom / 5G conference in Copenhagen, Denmark",
    startDate: "2024-03-07T00:00:00.000+00:00",
    endDate: "2024-03-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Copenhagen",
        addressRegion: "Denmark",
      },
      name: "Copenhagen, Denmark",
    },
  },
  {
    name: "DataTune Nashville 2024",
    description: "Data / Database conference in Nashville, United States",
    startDate: "2024-03-08T00:00:00.000+00:00",
    endDate: "2024-03-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nashville",
        addressRegion: "United States",
      },
      name: "Nashville, United States",
    },
  },
  {
    name: "DecompileD",
    description: "Mobile conference in Dresden, Germany",
    startDate: "2024-03-08T00:00:00.000+00:00",
    endDate: "2024-03-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dresden",
        addressRegion: "Germany",
      },
      name: "Dresden, Germany",
    },
  },
  {
    name: "Frontrunners 2024",
    description: "JavaScript conference in Washington, United States",
    startDate: "2024-03-08T00:00:00.000+00:00",
    endDate: "2024-03-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Washington",
        addressRegion: "United States",
      },
      name: "Washington, United States",
    },
  },
  {
    name: "Women In Tech Day",
    description: "Tech conference Online",
    startDate: "2024-03-08T00:00:00.000+00:00",
    endDate: "2024-03-08T00:00:00.000+00:00",
  },
  {
    name: "W3Summit",
    description: "Web3 conference in Bengaluru, India",
    startDate: "2024-03-08T00:00:00.000+00:00",
    endDate: "2024-03-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "Tech & Innovation Summit 2024",
    description: "Tech conference in Bengaluru, India",
    startDate: "2024-03-08T00:00:00.000+00:00",
    endDate: "2024-03-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "AI HACKATHON",
    description: "AI / ML hackaton in London, United Kingdom",
    startDate: "2024-03-08T00:00:00.000+00:00",
    endDate: "2024-03-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Women WordPress Day 2024",
    description: "Wordpress conference in San Jose, Costa Rica",
    startDate: "2024-03-08T00:00:00.000+00:00",
    endDate: "2024-03-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Jose",
        addressRegion: "Costa Rica",
      },
      name: "San Jose, Costa Rica",
    },
  },
  {
    name: "MCT Summit 2024 Middle East",
    description: "Microsoft conference in Riyadh, Saudi Arabia",
    startDate: "2024-03-09T00:00:00.000+00:00",
    endDate: "2024-03-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Riyadh",
        addressRegion: "Saudi Arabia",
      },
      name: "Riyadh, Saudi Arabia",
    },
  },
  {
    name: "PyCon Pakistan 2024",
    description: "Python conference in Lahore, Pakistan",
    startDate: "2024-03-09T00:00:00.000+00:00",
    endDate: "2024-03-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Pakistan",
      },
      name: "Lahore, Pakistan",
    },
  },
  {
    name: "Django Girls CDO 2024",
    description: "Django masterclass in Cagayan de Oro, Philippines",
    startDate: "2024-03-09T00:00:00.000+00:00",
    endDate: "2024-03-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cagayan de Oro",
        addressRegion: "Philippines",
      },
      name: "Cagayan de Oro, Philippines",
    },
  },
  {
    name: "CITE 2024",
    description: "Tech conference Online",
    startDate: "2024-03-09T00:00:00.000+00:00",
    endDate: "2024-03-10T00:00:00.000+00:00",
  },
  {
    name: "Lafayette InnCon",
    description: "Tech conference in Lafayette, United States",
    startDate: "2024-03-09T00:00:00.000+00:00",
    endDate: "2024-03-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lafayette",
        addressRegion: "United States",
      },
      name: "Lafayette, United States",
    },
  },
  {
    name: "GDG SHEDEV",
    description: "Google conference in Warsaw, Poland",
    startDate: "2024-03-09T00:00:00.000+00:00",
    endDate: "2024-03-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warsaw",
        addressRegion: "Poland",
      },
      name: "Warsaw, Poland",
    },
  },
  {
    name: "HackCon RD",
    description:
      "Cybersecurity / InfoSec conference in Santo Domingo, Dominican Republic",
    startDate: "2024-03-09T00:00:00.000+00:00",
    endDate: "2024-03-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santo Domingo",
        addressRegion: "Dominican Republic",
      },
      name: "Santo Domingo, Dominican Republic",
    },
  },
  {
    name: "StrimziCon",
    description: "DevOps conference Online",
    startDate: "2024-03-10T00:00:00.000+00:00",
    endDate: "2024-03-10T00:00:00.000+00:00",
  },
  {
    name: "Austin API Summit 2024",
    description: "API conference in Austin, United States",
    startDate: "2024-03-11T00:00:00.000+00:00",
    endDate: "2024-03-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "Nullcon Berlin 2024",
    description: "Cybersecurity / InfoSec conference in Berlin, Germany",
    startDate: "2024-03-11T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Software Architecture Summit",
    description: "Software architecture conference in Munich, Germany",
    startDate: "2024-03-11T00:00:00.000+00:00",
    endDate: "2024-03-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "ICGSDT 2024",
    description: "Testing / QA conference in Istanbul, Turkey",
    startDate: "2024-03-11T00:00:00.000+00:00",
    endDate: "2024-03-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressRegion: "Turkey",
      },
      name: "Istanbul, Turkey",
    },
  },
  {
    name: "ICSTM 2024",
    description: "Testing / QA conference in Miami, United States",
    startDate: "2024-03-11T00:00:00.000+00:00",
    endDate: "2024-03-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Miami",
        addressRegion: "United States",
      },
      name: "Miami, United States",
    },
  },
  {
    name: "Gartner Data & Analytics Summit",
    description: "Data / Database conference in Orlando, United States",
    startDate: "2024-03-11T00:00:00.000+00:00",
    endDate: "2024-03-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "United States",
      },
      name: "Orlando, United States",
    },
  },
  {
    name: "‹Programming› 2024",
    description: "Full-stack conference in Lund, Sweden",
    startDate: "2024-03-11T00:00:00.000+00:00",
    endDate: "2024-03-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lund",
        addressRegion: "Sweden",
      },
      name: "Lund, Sweden",
    },
  },
  {
    name: "Appdevcon",
    description: "Mobile conference in Amsterdam, Netherlands",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "Azure Security Fundamentals",
    description: "Azure conference in Arlington, United States",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Arlington",
        addressRegion: "United States",
      },
      name: "Arlington, United States",
    },
  },
  {
    name: "CISO Kanect",
    description:
      "Cybersecurity / InfoSec conference in Cape Town, South Africa",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cape Town",
        addressRegion: "South Africa",
      },
      name: "Cape Town, South Africa",
    },
  },
  {
    name: "Dutch PHP Conference 2024",
    description: "PHP conference in Amsterdam, Netherlands",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "Explore DDD",
    description: "DDD conference in Denver, United States",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "United States",
      },
      name: "Denver, United States",
    },
  },
  {
    name: "Nordic PGDay 2024",
    description: "Postgres conference in Oslo, Norway",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressRegion: "Norway",
      },
      name: "Oslo, Norway",
    },
  },
  {
    name: "Webdevcon 2024",
    description: "Web / Frontend conference in Amsterdam, Netherlands",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "AI in Marketing Conference 24",
    description: "AI / ML conference Online",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-12T00:00:00.000+00:00",
  },
  {
    name: "Gartner CIO Leadership Forum",
    description: "CIO conference in London, United Kingdom",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Navigate 2024",
    description: "Software architecture conference Online",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-12T00:00:00.000+00:00",
  },
  {
    name: "ZANOG",
    description: "Tech conference in Cape Town, South Africa",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cape Town",
        addressRegion: "South Africa",
      },
      name: "Cape Town, South Africa",
    },
  },
  {
    name: "IBM TechXchange: Software Day",
    description: "IBM conference in Zagreb, Croatia",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zagreb",
        addressRegion: "Croatia",
      },
      name: "Zagreb, Croatia",
    },
  },
  {
    name: "IBM TechXchange: IBM Security.next",
    description: "IBM conference in Puteaux, France",
    startDate: "2024-03-12T00:00:00.000+00:00",
    endDate: "2024-03-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Puteaux",
        addressRegion: "France",
      },
      name: "Puteaux, France",
    },
  },
  {
    name: "HRcoreLAB Summit",
    description: "HR / Hiring / Recruiting conference in Barcelona, Spain",
    startDate: "2024-03-13T00:00:00.000+00:00",
    endDate: "2024-03-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "OC3",
    description: "Cybersecurity / InfoSec conference Online",
    startDate: "2024-03-13T00:00:00.000+00:00",
    endDate: "2024-03-13T00:00:00.000+00:00",
  },
  {
    name: "Open Confidential Computing Conference",
    description: "Cybersecurity / InfoSec conference Online",
    startDate: "2024-03-13T00:00:00.000+00:00",
    endDate: "2024-03-13T00:00:00.000+00:00",
  },
  {
    name: "SafeCode 2024",
    description: "Cybersecurity / InfoSec conference Online",
    startDate: "2024-03-13T00:00:00.000+00:00",
    endDate: "2024-03-14T00:00:00.000+00:00",
  },
  {
    name: "Salt Lake City DevOps Days 2024",
    description: "DevOps conference in Salt Lake City, United States",
    startDate: "2024-03-13T00:00:00.000+00:00",
    endDate: "2024-03-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salt Lake City",
        addressRegion: "United States",
      },
      name: "Salt Lake City, United States",
    },
  },
  {
    name: "CISO-CIO Forum",
    description:
      "Cybersecurity / InfoSec conference in Redondo Beach, United States",
    startDate: "2024-03-13T00:00:00.000+00:00",
    endDate: "2024-03-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Redondo Beach",
        addressRegion: "United States",
      },
      name: "Redondo Beach, United States",
    },
  },
  {
    name: "Redgate Summit: The Database Landscape - Atlanta",
    description: "Data / Database conference in Atlanta, United States",
    startDate: "2024-03-13T00:00:00.000+00:00",
    endDate: "2024-03-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "United States",
      },
      name: "Atlanta, United States",
    },
  },
  {
    name: "IBM TechXchange: Informix Technology Days",
    description: "IBM conference in Munich, Germany",
    startDate: "2024-03-13T00:00:00.000+00:00",
    endDate: "2024-03-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "dxday 2024",
    description: "Full-stack conference in Bologna, Italy",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bologna",
        addressRegion: "Italy",
      },
      name: "Bologna, Italy",
    },
  },
  {
    name: "emBO++ 2024",
    description: "C/C++ conference in Bochum, Germany",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bochum",
        addressRegion: "Germany",
      },
      name: "Bochum, Germany",
    },
  },
  {
    name: "GoFunc 2024",
    description: "Golang conference Online",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
  },
  {
    name: "pgDay Paris 2024",
    description: "Postgres conference in Paris, France",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Postgres@SCaLE",
    description: "Postgres conference in Pasadena, United States",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pasadena",
        addressRegion: "United States",
      },
      name: "Pasadena, United States",
    },
  },
  {
    name: "SCALE 21x",
    description: "Linux / OS conference in Pasadena, United States",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pasadena",
        addressRegion: "United States",
      },
      name: "Pasadena, United States",
    },
  },
  {
    name: "T3chFest 2024",
    description: "Tech conference in Madrid, Spain",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madrid",
        addressRegion: "Spain",
      },
      name: "Madrid, Spain",
    },
  },
  {
    name: "Wasm I/O",
    description: "Web / Frontend conference in Barcelona, Spain",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "Testing Peers Conference 2024",
    description: "Testing / QA conference in Nottingham, United Kingdom",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nottingham",
        addressRegion: "United Kingdom",
      },
      name: "Nottingham, United Kingdom",
    },
  },
  {
    name: "Cyber Security Global Summit 24",
    description: "Cybersecurity / InfoSec conference Online",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
  },
  {
    name: "The DEVOPS Conference - Global",
    description: "DevOps conference in London, United Kingdom",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "The DEVOPS Conference - Global Online",
    description: "DevOps conference Online",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-14T00:00:00.000+00:00",
  },
  {
    name: "India CIO Summit 2024",
    description: "CIO conference in New Delhi, India",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressRegion: "India",
      },
      name: "New Delhi, India",
    },
  },
  {
    name: "T3chfest",
    description: "Full-stack conference in Madrid, Spain",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madrid",
        addressRegion: "Spain",
      },
      name: "Madrid, Spain",
    },
  },
  {
    name: "IBM TechXchange: Mainframe Software Roadshow Tokyo",
    description: "IBM conference in Tokyo, Japan",
    startDate: "2024-03-14T00:00:00.000+00:00",
    endDate: "2024-03-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokyo",
        addressRegion: "Japan",
      },
      name: "Tokyo, Japan",
    },
  },
  {
    name: "Devopsdays Los Angeles",
    description: "DevOps conference in Los Angeles, United States",
    startDate: "2024-03-15T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Los Angeles",
        addressRegion: "United States",
      },
      name: "Los Angeles, United States",
    },
  },
  {
    name: "Incontro DevOps Italia 2024",
    description: "DevOps conference in Bologna, Italy",
    startDate: "2024-03-15T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bologna",
        addressRegion: "Italy",
      },
      name: "Bologna, Italy",
    },
  },
  {
    name: "PyCon SK 2024",
    description: "Python conference in Bratislava, Slovakia",
    startDate: "2024-03-15T00:00:00.000+00:00",
    endDate: "2024-03-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bratislava",
        addressRegion: "Slovakia",
      },
      name: "Bratislava, Slovakia",
    },
  },
  {
    name: "Rome .NET Conference 2024",
    description: ".NET conference in Rome, Italy",
    startDate: "2024-03-15T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rome",
        addressRegion: "Italy",
      },
      name: "Rome, Italy",
    },
  },
  {
    name: "Canadian Power Platform Summit 2024",
    description: "Microsoft conference in Vancouver, Canada",
    startDate: "2024-03-15T00:00:00.000+00:00",
    endDate: "2024-03-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vancouver",
        addressRegion: "Canada",
      },
      name: "Vancouver, Canada",
    },
  },
  {
    name: "GitHub Constellation 2024",
    description: "Open Source conference in Bengaluru, India",
    startDate: "2024-03-15T00:00:00.000+00:00",
    endDate: "2024-03-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "DDD Melbourne 2024",
    description: "DDD conference in Melbourne, Australia",
    startDate: "2024-03-16T00:00:00.000+00:00",
    endDate: "2024-03-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "Australia",
      },
      name: "Melbourne, Australia",
    },
  },
  {
    name: "IEEE VR 2024",
    description: "AR / VR / XR conference in Orlando, United States",
    startDate: "2024-03-16T00:00:00.000+00:00",
    endDate: "2024-03-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "United States",
      },
      name: "Orlando, United States",
    },
  },
  {
    name: "Soft Skills fwdays'24",
    description: "Tech leadership conference in Kyiv, Ukraine",
    startDate: "2024-03-16T00:00:00.000+00:00",
    endDate: "2024-03-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kyiv",
        addressRegion: "Ukraine",
      },
      name: "Kyiv, Ukraine",
    },
  },
  {
    name: "Chemnitz Linux Days",
    description: "Linux / OS conference in Chemnitz, Germany",
    startDate: "2024-03-16T00:00:00.000+00:00",
    endDate: "2024-03-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chemnitz",
        addressRegion: "Germany",
      },
      name: "Chemnitz, Germany",
    },
  },
  {
    name: "System Architect Conference China",
    description: "Software architecture conference in Guangzhou, China",
    startDate: "2024-03-16T00:00:00.000+00:00",
    endDate: "2024-03-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Guangzhou",
        addressRegion: "China",
      },
      name: "Guangzhou, China",
    },
  },
  {
    name: "Py4AI 2024",
    description: "Python conference in Pavia, Italy",
    startDate: "2024-03-16T00:00:00.000+00:00",
    endDate: "2024-03-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pavia",
        addressRegion: "Italy",
      },
      name: "Pavia, Italy",
    },
  },
  {
    name: "LAMP 2024",
    description: "Cybersecurity / InfoSec conference in Denver, United States",
    startDate: "2024-03-17T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "United States",
      },
      name: "Denver, United States",
    },
  },
  {
    name: "Rethink! IT Security 2024",
    description: "Cybersecurity / InfoSec conference in Berlin, Germany",
    startDate: "2024-03-17T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Cloud Native Rejekts EU 2024",
    description: "Cloud conference in Paris, France",
    startDate: "2024-03-17T00:00:00.000+00:00",
    endDate: "2024-03-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Bank Automation Summit US",
    description: "Fintech conference in Nashville, United States",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nashville",
        addressRegion: "United States",
      },
      name: "Nashville, United States",
    },
  },
  {
    name: "GDC 2024",
    description: "Game dev conference in San Francisco, United States",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "GTC Conference",
    description: "AI / ML conference in San Jose, United States",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Jose",
        addressRegion: "United States",
      },
      name: "San Jose, United States",
    },
  },
  {
    name: "Internet 2.0 Conference USA",
    description: "Tech conference in Las Vegas, United States",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "JavaScript Days",
    description: "JavaScript conference in Munich, Germany",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "JavaScript Days Online",
    description: "JavaScript conference Online",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
  },
  {
    name: "ng-conf 2024",
    description: "Angular conference in Salt Lake City, United States",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salt Lake City",
        addressRegion: "United States",
      },
      name: "Salt Lake City, United States",
    },
  },
  {
    name: "PG Connects San Francisco 2024",
    description: "Game dev conference in San Francisco, United States",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "SREcon24 Americas",
    description: "SRE conference in San Francisco, United States",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "CloudFest 2024",
    description: "Cloud conference in Rust, Germany",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rust",
        addressRegion: "Germany",
      },
      name: "Rust, Germany",
    },
  },
  {
    name: "SAPinsider Vegas 2024",
    description: "SAP conference in Las Vegas, United States",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Gartner Security & Risk Management Summit",
    description: "Cybersecurity / InfoSec conference in Sydney, Australia",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "Australia",
      },
      name: "Sydney, Australia",
    },
  },
  {
    name: "Southeast Women in Fintech: Nashville Breakfast Panel",
    description: "Fintech conference in Nashville, United States",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-03-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nashville",
        addressRegion: "United States",
      },
      name: "Nashville, United States",
    },
  },
  {
    name: "Carbon Hack 2024",
    description: "Open Source hackaton Online",
    startDate: "2024-03-18T00:00:00.000+00:00",
    endDate: "2024-04-08T00:00:00.000+00:00",
  },
  {
    name: "A&D Summit 2024",
    description: "Data / Database conference in Redwood Shores, United States",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Redwood Shores",
        addressRegion: "United States",
      },
      name: "Redwood Shores, United States",
    },
  },
  {
    name: "Analytics and Data Summit",
    description: "Data / Database conference in Redwood City, United States",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Redwood City",
        addressRegion: "United States",
      },
      name: "Redwood City, United States",
    },
  },
  {
    name: "Apres Cyber Slopes Summit",
    description:
      "Cybersecurity / InfoSec conference in Park City, United States",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Park City",
        addressRegion: "United States",
      },
      name: "Park City, United States",
    },
  },
  {
    name: "AWS Public Sector Day",
    description: "AWS conference in London, United Kingdom",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "FTT Lending 3.0",
    description: "Fintech conference in London, United Kingdom",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Future of Work UAE",
    description:
      "HR / Hiring / Recruiting conference in Dubai, United Arab Emirates",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "Kafka Summit London 2024",
    description: "Software architecture conference in London, United Kingdom",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "KubeCon+CloudNativeCon",
    description: "Docker / Kubernetes conference in Paris, France",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Mastering GitOps 2024",
    description: "DevOps conference Online",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
  },
  {
    name: "PAY360",
    description: "Fintech conference in London, United Kingdom",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Programmable Melbourne",
    description: "Full-stack conference in Melbourne, Australia",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "Australia",
      },
      name: "Melbourne, Australia",
    },
  },
  {
    name: "SQLBits",
    description: "SQL conference in Farnborough, United Kingdom",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Farnborough",
        addressRegion: "United Kingdom",
      },
      name: "Farnborough, United Kingdom",
    },
  },
  {
    name: "betterCode() Clean Architecture 2024",
    description: "Software architecture conference Online",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
  },
  {
    name: "Typescript Global Summit 24",
    description: "TypeScript conference Online",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-20T00:00:00.000+00:00",
  },
  {
    name: "Automating FinOps",
    description: "Fintech conference in Stockholm, Sweden",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "AppDeveloperCon",
    description: "Cloud conference in Paris, France",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "ArgoCon",
    description: "Docker / Kubernetes conference in Paris, France",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Cloud Native StartupFest Europe",
    description: "Cloud conference in Paris, France",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Data on Kubernetes Day",
    description: "Data / Database conference in Paris, France",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Put AI to work",
    description: "IBM conference in Amsterdam, Netherlands",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "Codemotion Workshop Fest",
    description: "Full-stack masterclass Online",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-20T00:00:00.000+00:00",
  },
  {
    name: "IBM TechXchange Dallas: AI and the Mainframe",
    description: "IBM conference in Coppell, United States",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coppell",
        addressRegion: "United States",
      },
      name: "Coppell, United States",
    },
  },
  {
    name: "Kubernetes on Edge Day Europe",
    description: "Docker / Kubernetes conference in Paris, France",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Kubeflow Summit Europe",
    description: "AI / ML conference in Paris, France",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "CloudNativeHacks",
    description: "Cloud hackaton in Paris, France",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "ThanosCon Europe",
    description: "SRE conference in Paris, France",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "OpenTofu Day Europe",
    description: "DevOps conference in Paris, France",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "DE{CODE} 2024",
    description: "Wordpress conference Online",
    startDate: "2024-03-19T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
  },
  {
    name: "Agile Open Northwest 2024",
    description: "Agile conference in Portland, United States",
    startDate: "2024-03-20T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portland",
        addressRegion: "United States",
      },
      name: "Portland, United States",
    },
  },
  {
    name: "UX Copenhagen",
    description: "UI / UX conference in Copenhagen, Denmark",
    startDate: "2024-03-20T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Copenhagen",
        addressRegion: "Denmark",
      },
      name: "Copenhagen, Denmark",
    },
  },
  {
    name: "UX Copenhagen Online",
    description: "UI / UX conference Online",
    startDate: "2024-03-20T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
  },
  {
    name: "WebDev Day",
    description: "Web / Frontend conference Online",
    startDate: "2024-03-20T00:00:00.000+00:00",
    endDate: "2024-03-20T00:00:00.000+00:00",
  },
  {
    name: "Democratize AI and Web3 Summit",
    description: "AI / ML conference in San Francisco, United States",
    startDate: "2024-03-20T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "MidCamp 2024",
    description: "Drupal conference in Chicago, United States",
    startDate: "2024-03-20T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "IBM TechXchange: AI Governance",
    description: "IBM conference in Brussels, Belgium",
    startDate: "2024-03-20T00:00:00.000+00:00",
    endDate: "2024-03-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brussels",
        addressRegion: "Belgium",
      },
      name: "Brussels, Belgium",
    },
  },
  {
    name: "Agile NIORT 2024",
    description: "Agile conference in Niort, France",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Niort",
        addressRegion: "France",
      },
      name: "Niort, France",
    },
  },
  {
    name: "Conf42: Cloud Native 2024",
    description: "Cloud conference Online",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
  },
  {
    name: "DevOps Talks Melbourne",
    description: "DevOps conference in Melbourne, Australia",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "Australia",
      },
      name: "Melbourne, Australia",
    },
  },
  {
    name: "Devopsdays Singapore",
    description: "DevOps conference in Singapore, Singapore",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressRegion: "Singapore",
      },
      name: "Singapore, Singapore",
    },
  },
  {
    name: "Michigan Technology Conference 2024",
    description: "Tech conference in Pontiac, United States",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pontiac",
        addressRegion: "United States",
      },
      name: "Pontiac, United States",
    },
  },
  {
    name: "Programmable Sydney",
    description: "Full-stack conference in Sydney, Australia",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "Australia",
      },
      name: "Sydney, Australia",
    },
  },
  {
    name: "Sin City Ruby 2024",
    description: "Ruby conference in Las Vegas, United States",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "CDAO APEX Mexico",
    description: "Data / Database conference in Cancun, Mexico",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cancun",
        addressRegion: "Mexico",
      },
      name: "Cancun, Mexico",
    },
  },
  {
    name: "Days of Knowledge UK 2024",
    description: "Tech conference in Birmingham, United Kingdom",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Birmingham",
        addressRegion: "United Kingdom",
      },
      name: "Birmingham, United Kingdom",
    },
  },
  {
    name: "Chief BI Officer",
    description: "AI / ML conference in Oslo, Norway",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressRegion: "Norway",
      },
      name: "Oslo, Norway",
    },
  },
  {
    name: "IA & Data Day Strasbourg",
    description: "AI / ML conference in Strasbourg, France",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Strasbourg",
        addressRegion: "France",
      },
      name: "Strasbourg, France",
    },
  },
  {
    name: "IBM TechXchange: FinOps and Turbonomic",
    description: "IBM conference in Coppell, United States",
    startDate: "2024-03-21T00:00:00.000+00:00",
    endDate: "2024-03-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coppell",
        addressRegion: "United States",
      },
      name: "Coppell, United States",
    },
  },
  {
    name: "Fest.dev: Krakow 2024",
    description: "JavaScript conference in Krakow, Poland",
    startDate: "2024-03-22T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "React Paris",
    description: "React conference in Paris, France",
    startDate: "2024-03-22T00:00:00.000+00:00",
    endDate: "2024-03-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "try! Swift Tokyo",
    description: "iOS / Swift conference in Tokyo, Japan",
    startDate: "2024-03-22T00:00:00.000+00:00",
    endDate: "2024-03-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokyo",
        addressRegion: "Japan",
      },
      name: "Tokyo, Japan",
    },
  },
  {
    name: "Agile Games France",
    description: "Agile conference in Valence, France",
    startDate: "2024-03-22T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valence",
        addressRegion: "France",
      },
      name: "Valence, France",
    },
  },
  {
    name: "Data Saturday Phoenix 2024",
    description: "Data / Database conference in Phoenix, United States",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Phoenix",
        addressRegion: "United States",
      },
      name: "Phoenix, United States",
    },
  },
  {
    name: "Data SQL Saturday Phoenix",
    description: "SQL conference in Phoenix, United States",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Phoenix",
        addressRegion: "United States",
      },
      name: "Phoenix, United States",
    },
  },
  {
    name: "LaraconIN 2024",
    description: "Laravel conference in Udaipur, India",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Udaipur",
        addressRegion: "India",
      },
      name: "Udaipur, India",
    },
  },
  {
    name: "Soft Skills fwdays'24",
    description: "Tech leadership conference in Kyiv, Ukraine",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kyiv",
        addressRegion: "Ukraine",
      },
      name: "Kyiv, Ukraine",
    },
  },
  {
    name: "Soft Skills fwdays'24 Online",
    description: "Tech leadership conference Online",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
  },
  {
    name: "WordCamp Torrelodones 2024",
    description: "Wordpress conference in Torrelodones, Spain",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Torrelodones",
        addressRegion: "Spain",
      },
      name: "Torrelodones, Spain",
    },
  },
  {
    name: "BSides Transylvania",
    description: "Cybersecurity / InfoSec conference in Cluj-Napoca, Romania",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cluj-Napoca",
        addressRegion: "Romania",
      },
      name: "Cluj-Napoca, Romania",
    },
  },
  {
    name: "Atlanta Cloud Conference",
    description: "Cloud conference in Atlanta, United States",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "United States",
      },
      name: "Atlanta, United States",
    },
  },
  {
    name: "IWD2024 Douala",
    description: "Google conference in Douala, Cameroon",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Douala",
        addressRegion: "Cameroon",
      },
      name: "Douala, Cameroon",
    },
  },
  {
    name: "BSides Sofia 2024",
    description: "Cybersecurity / InfoSec conference in Sofia, Bulgaria",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sofia",
        addressRegion: "Bulgaria",
      },
      name: "Sofia, Bulgaria",
    },
  },
  {
    name: "Python Barcamp Karlsruhe",
    description: "Python conference in Karlsruhe, Germany",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karlsruhe",
        addressRegion: "Germany",
      },
      name: "Karlsruhe, Germany",
    },
  },
  {
    name: "DMML 2024",
    description: "Data / Database conference in Sydney, Australia",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "Australia",
      },
      name: "Sydney, Australia",
    },
  },
  {
    name: "Netcoreconf 2024",
    description: "Cloud conference in Barcelona, Spain",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "Scotland Biggest Tech Conference for Black Women",
    description: "Tech conference in Glasgow, United Kingdom",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Glasgow",
        addressRegion: "United Kingdom",
      },
      name: "Glasgow, United Kingdom",
    },
  },
  {
    name: "Switzerland Community Day",
    description: "Wordpress conference in Murten, Switzerland",
    startDate: "2024-03-23T00:00:00.000+00:00",
    endDate: "2024-03-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Murten",
        addressRegion: "Switzerland",
      },
      name: "Murten, Switzerland",
    },
  },
  {
    name: "Microsoft Fabric Community Conference",
    description: "Microsoft conference in Las Vegas, United States",
    startDate: "2024-03-24T00:00:00.000+00:00",
    endDate: "2024-03-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Advancing Research 2024",
    description: "UI / UX conference in New York, United States",
    startDate: "2024-03-25T00:00:00.000+00:00",
    endDate: "2024-03-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "i4cp 2024 Next Practices Now",
    description:
      "HR / Hiring / Recruiting conference in Scottsdale, United States",
    startDate: "2024-03-25T00:00:00.000+00:00",
    endDate: "2024-03-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Scottsdale",
        addressRegion: "United States",
      },
      name: "Scottsdale, United States",
    },
  },
  {
    name: "Australian Cyber Conference Canberra",
    description: "Cybersecurity / InfoSec conference in Canberra, Australia",
    startDate: "2024-03-25T00:00:00.000+00:00",
    endDate: "2024-03-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Canberra",
        addressRegion: "Australia",
      },
      name: "Canberra, Australia",
    },
  },
  {
    name: "Ultimate Software Design with K8s",
    description: "Docker / Kubernetes masterclass in London, United Kingdom",
    startDate: "2024-03-25T00:00:00.000+00:00",
    endDate: "2024-03-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Gartner CIO Leadership Forum",
    description: "CIO conference in Hollywood, United States",
    startDate: "2024-03-25T00:00:00.000+00:00",
    endDate: "2024-03-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hollywood",
        addressRegion: "United States",
      },
      name: "Hollywood, United States",
    },
  },
  {
    name: "Linux Meeting 2024 Palermo",
    description: "Linux / OS conference in Palermo, Italy",
    startDate: "2024-03-25T00:00:00.000+00:00",
    endDate: "2024-03-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Palermo",
        addressRegion: "Italy",
      },
      name: "Palermo, Italy",
    },
  },
  {
    name: "Women in DevOps Virtual Hackathon",
    description: "DevOps hackaton in New York, United States and Online",
    startDate: "2024-03-25T00:00:00.000+00:00",
    endDate: "2024-04-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "Adobe Summit North America 2024",
    description: "Tech conference in Las Vegas, United States",
    startDate: "2024-03-25T00:00:00.000+00:00",
    endDate: "2024-03-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Microsoft Data & AI Conference",
    description: "Microsoft conference in Las Vegas, United States",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Rust Nation",
    description: "Rust conference in London, United Kingdom",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "CISO Adelaide",
    description: "Cybersecurity / InfoSec conference in Adelaide, Australia",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Adelaide",
        addressRegion: "Australia",
      },
      name: "Adelaide, Australia",
    },
  },
  {
    name: "CDAO Canada",
    description: "Data / Database conference in Toronto, Canada",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "AI In Web Design Conference 24",
    description: "UI / UX conference Online",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-26T00:00:00.000+00:00",
  },
  {
    name: "INCYBER Europe",
    description: "Cybersecurity / InfoSec conference in Lille, France",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lille",
        addressRegion: "France",
      },
      name: "Lille, France",
    },
  },
  {
    name: "WOW Summit Hong Kong",
    description: "Web3 conference in Hong Kong, Hong Kong",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hong Kong",
        addressRegion: "Hong Kong",
      },
      name: "Hong Kong, Hong Kong",
    },
  },
  {
    name: "CIX Summit",
    description: "Product management conference in Toronto, Canada",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "Chief AI Officer Stockholm",
    description: "AI / ML conference in Stockholm, Sweden",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "Conferência Gartner Data & Analytics",
    description: "Data / Database conference in Sao Paulo, Brazil",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sao Paulo",
        addressRegion: "Brazil",
      },
      name: "Sao Paulo, Brazil",
    },
  },
  {
    name: "IBM TechXchange: IBM Security Strategy & Roadmap",
    description: "IBM conference in Warsaw, Poland",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warsaw",
        addressRegion: "Poland",
      },
      name: "Warsaw, Poland",
    },
  },
  {
    name: "IBM TechXchange: Canada - Automation",
    description: "IBM conference in Markham, Canada",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Markham",
        addressRegion: "Canada",
      },
      name: "Markham, Canada",
    },
  },
  {
    name: "International Odoo Programming Contest",
    description: "Open Source hackaton Online",
    startDate: "2024-03-26T00:00:00.000+00:00",
    endDate: "2024-03-26T00:00:00.000+00:00",
  },
  {
    name: "Microsoft Java Developer Conference",
    description: "Java conference Online",
    startDate: "2024-03-27T00:00:00.000+00:00",
    endDate: "2024-03-28T00:00:00.000+00:00",
  },
  {
    name: "Voxxed Days Bucharest",
    description: "Full-stack conference in Bucharest, Romania",
    startDate: "2024-03-27T00:00:00.000+00:00",
    endDate: "2024-03-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bucharest",
        addressRegion: "Romania",
      },
      name: "Bucharest, Romania",
    },
  },
  {
    name: "Web Day 2024",
    description: "Web / Frontend conference in Milan, Italy",
    startDate: "2024-03-27T00:00:00.000+00:00",
    endDate: "2024-03-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Milan",
        addressRegion: "Italy",
      },
      name: "Milan, Italy",
    },
  },
  {
    name: "phpday PUG edition",
    description: "PHP conference Online",
    startDate: "2024-03-27T00:00:00.000+00:00",
    endDate: "2024-03-27T00:00:00.000+00:00",
  },
  {
    name: "GDG CloudFest Poland",
    description: "Cloud conference in Bydgoszcz, Poland",
    startDate: "2024-03-27T00:00:00.000+00:00",
    endDate: "2024-03-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bydgoszcz",
        addressRegion: "Poland",
      },
      name: "Bydgoszcz, Poland",
    },
  },
  {
    name: "IBM TechXchange: Canada - Data and AI",
    description: "IBM conference in Markham, Canada",
    startDate: "2024-03-27T00:00:00.000+00:00",
    endDate: "2024-03-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Markham",
        addressRegion: "Canada",
      },
      name: "Markham, Canada",
    },
  },
  {
    name: "Data and AI Summit",
    description: "Data / Database conference in Richmond, United States",
    startDate: "2024-03-28T00:00:00.000+00:00",
    endDate: "2024-03-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Richmond",
        addressRegion: "United States",
      },
      name: "Richmond, United States",
    },
  },
  {
    name: "SymfonyLive Paris 2024",
    description: "PHP conference in Paris, France",
    startDate: "2024-03-28T00:00:00.000+00:00",
    endDate: "2024-03-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "DevDay 2024",
    description: "Full-stack conference in Mons, Belgium",
    startDate: "2024-03-28T00:00:00.000+00:00",
    endDate: "2024-03-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mons",
        addressRegion: "Belgium",
      },
      name: "Mons, Belgium",
    },
  },
  {
    name: "Agile Mammoths Games",
    description: "Agile conference in Cluj-Napoca, Romania",
    startDate: "2024-03-28T00:00:00.000+00:00",
    endDate: "2024-03-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cluj-Napoca",
        addressRegion: "Romania",
      },
      name: "Cluj-Napoca, Romania",
    },
  },
  {
    name: "Lead Innovation Day 2024",
    description: "Tech leadership conference in Paris, France",
    startDate: "2024-03-28T00:00:00.000+00:00",
    endDate: "2024-03-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "DrupalCamp Roazhon",
    description: "Drupal conference in Rennes, France",
    startDate: "2024-03-28T00:00:00.000+00:00",
    endDate: "2024-03-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rennes",
        addressRegion: "France",
      },
      name: "Rennes, France",
    },
  },
  {
    name: "PyCamp España",
    description: "Python conference in Girona, Spain",
    startDate: "2024-03-29T00:00:00.000+00:00",
    endDate: "2024-04-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Girona",
        addressRegion: "Spain",
      },
      name: "Girona, Spain",
    },
  },
  {
    name: "Let's visionOS 2024",
    description: "AR / VR / XR conference in Beijing, China",
    startDate: "2024-03-30T00:00:00.000+00:00",
    endDate: "2024-03-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Beijing",
        addressRegion: "China",
      },
      name: "Beijing, China",
    },
  },
  {
    name: "Global AI Bootcamp Valencia",
    description: "AI / ML conference in Valencia, Spain",
    startDate: "2024-03-30T00:00:00.000+00:00",
    endDate: "2024-03-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressRegion: "Spain",
      },
      name: "Valencia, Spain",
    },
  },
  {
    name: "Future Digital Finance",
    description: "Fintech conference in New Orleans, United States",
    startDate: "2024-04-02T00:00:00.000+00:00",
    endDate: "2024-04-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Orleans",
        addressRegion: "United States",
      },
      name: "New Orleans, United States",
    },
  },
  {
    name: "MAU Vegas",
    description: "Mobile conference in Las Vegas, United States",
    startDate: "2024-04-02T00:00:00.000+00:00",
    endDate: "2024-04-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "PyCon Lithuania 2024",
    description: "Python conference in Vilnius, Lithuania",
    startDate: "2024-04-02T00:00:00.000+00:00",
    endDate: "2024-04-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vilnius",
        addressRegion: "Lithuania",
      },
      name: "Vilnius, Lithuania",
    },
  },
  {
    name: "Kernelcon 2024",
    description: "Cybersecurity / InfoSec conference in Omaha, United States",
    startDate: "2024-04-02T00:00:00.000+00:00",
    endDate: "2024-04-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Omaha",
        addressRegion: "United States",
      },
      name: "Omaha, United States",
    },
  },
  {
    name: "XtremeJ Online Conference",
    description: "Java conference Online",
    startDate: "2024-04-02T00:00:00.000+00:00",
    endDate: "2024-04-02T00:00:00.000+00:00",
  },
  {
    name: "Web3 Day",
    description: "Web3 conference Online",
    startDate: "2024-04-03T00:00:00.000+00:00",
    endDate: "2024-04-03T00:00:00.000+00:00",
  },
  {
    name: "BSides Oklahoma",
    description:
      "Cybersecurity / InfoSec conference in Glenpool, United States",
    startDate: "2024-04-03T00:00:00.000+00:00",
    endDate: "2024-04-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Glenpool",
        addressRegion: "United States",
      },
      name: "Glenpool, United States",
    },
  },
  {
    name: "Doing Digital Forum",
    description: "Tech conference in Yerevan, Armenia",
    startDate: "2024-04-03T00:00:00.000+00:00",
    endDate: "2024-04-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Yerevan",
        addressRegion: "Armenia",
      },
      name: "Yerevan, Armenia",
    },
  },
  {
    name: "Illinois Web Con 2024",
    description: "Web / Frontend conference in Champaign, United States",
    startDate: "2024-04-04T00:00:00.000+00:00",
    endDate: "2024-04-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Champaign",
        addressRegion: "United States",
      },
      name: "Champaign, United States",
    },
  },
  {
    name: "Node Congress",
    description: "JavaScript conference Online",
    startDate: "2024-04-04T00:00:00.000+00:00",
    endDate: "2024-04-05T00:00:00.000+00:00",
  },
  {
    name: "Tropical.rb",
    description: "Ruby conference in Sao Paulo, Brazil",
    startDate: "2024-04-04T00:00:00.000+00:00",
    endDate: "2024-04-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sao Paulo",
        addressRegion: "Brazil",
      },
      name: "Sao Paulo, Brazil",
    },
  },
  {
    name: "App Growth Summit Singapore 2024",
    description: "Mobile conference in Singapore, Singapore",
    startDate: "2024-04-04T00:00:00.000+00:00",
    endDate: "2024-04-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressRegion: "Singapore",
      },
      name: "Singapore, Singapore",
    },
  },
  {
    name: "SANS New2Cyber Summit 2024",
    description: "Cybersecurity / InfoSec conference Online",
    startDate: "2024-04-04T00:00:00.000+00:00",
    endDate: "2024-04-04T00:00:00.000+00:00",
  },
  {
    name: "BSides Prague 2024",
    description: "Cybersecurity / InfoSec conference in Prague, Czech Republic",
    startDate: "2024-04-04T00:00:00.000+00:00",
    endDate: "2024-04-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prague",
        addressRegion: "Czech Republic",
      },
      name: "Prague, Czech Republic",
    },
  },
  {
    name: "Rising 2024",
    description: "Tech conference in Bengaluru, India",
    startDate: "2024-04-04T00:00:00.000+00:00",
    endDate: "2024-04-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "SoCraTes Rennes 2024",
    description: "Testing / QA conference in Rennes, France",
    startDate: "2024-04-04T00:00:00.000+00:00",
    endDate: "2024-04-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rennes",
        addressRegion: "France",
      },
      name: "Rennes, France",
    },
  },
  {
    name: "Toulouse Hacking Convention",
    description: "Cybersecurity / InfoSec conference in Toulouse, France",
    startDate: "2024-04-04T00:00:00.000+00:00",
    endDate: "2024-04-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toulouse",
        addressRegion: "France",
      },
      name: "Toulouse, France",
    },
  },
  {
    name: "CityJS London",
    description: "JavaScript conference in London, United Kingdom",
    startDate: "2024-04-05T00:00:00.000+00:00",
    endDate: "2024-04-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Gateway Software Symposium",
    description: "Full-stack conference in St. Louis, United States",
    startDate: "2024-04-05T00:00:00.000+00:00",
    endDate: "2024-04-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "St. Louis",
        addressRegion: "United States",
      },
      name: "St. Louis, United States",
    },
  },
  {
    name: "Ghost Day",
    description: "AI / ML conference in Poznan, Poland",
    startDate: "2024-04-05T00:00:00.000+00:00",
    endDate: "2024-04-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Poznan",
        addressRegion: "Poland",
      },
      name: "Poznan, Poland",
    },
  },
  {
    name: "cssday 2024",
    description: "Web / Frontend conference in Faenza, Italy",
    startDate: "2024-04-05T00:00:00.000+00:00",
    endDate: "2024-04-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Faenza",
        addressRegion: "Italy",
      },
      name: "Faenza, Italy",
    },
  },
  {
    name: "SLC SQL Saturday",
    description: "SQL conference in Sandy, United States",
    startDate: "2024-04-05T00:00:00.000+00:00",
    endDate: "2024-04-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sandy",
        addressRegion: "United States",
      },
      name: "Sandy, United States",
    },
  },
  {
    name: "PyCascades 2024",
    description: "Python conference in Seattle, United States",
    startDate: "2024-04-05T00:00:00.000+00:00",
    endDate: "2024-04-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "WordCamp Vienna 2024",
    description: "Wordpress conference in Vienna, Austria",
    startDate: "2024-04-05T00:00:00.000+00:00",
    endDate: "2024-04-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressRegion: "Austria",
      },
      name: "Vienna, Austria",
    },
  },
  {
    name: "WordCamp Chiclana 2024",
    description: "Wordpress conference in Chiclana de la Frontera, Spain",
    startDate: "2024-04-05T00:00:00.000+00:00",
    endDate: "2024-04-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chiclana de la Frontera",
        addressRegion: "Spain",
      },
      name: "Chiclana de la Frontera, Spain",
    },
  },
  {
    name: "SQL Saturday Joinville 2024",
    description: "SQL conference in Joinville, Brazil",
    startDate: "2024-04-06T00:00:00.000+00:00",
    endDate: "2024-04-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Joinville",
        addressRegion: "Brazil",
      },
      name: "Joinville, Brazil",
    },
  },
  {
    name: "Devopsdays Goiânia",
    description: "DevOps conference in Goiania, Brazil",
    startDate: "2024-04-06T00:00:00.000+00:00",
    endDate: "2024-04-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Goiania",
        addressRegion: "Brazil",
      },
      name: "Goiania, Brazil",
    },
  },
  {
    name: "Women Techmakers Sherbrooke IWD 2024",
    description: "Google conference in Sherbrooke, Canada",
    startDate: "2024-04-06T00:00:00.000+00:00",
    endDate: "2024-04-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sherbrooke",
        addressRegion: "Canada",
      },
      name: "Sherbrooke, Canada",
    },
  },
  {
    name: "Women Techmakers Montreal",
    description: "Tech conference in Montreal, Canada",
    startDate: "2024-04-06T00:00:00.000+00:00",
    endDate: "2024-04-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montreal",
        addressRegion: "Canada",
      },
      name: "Montreal, Canada",
    },
  },
  {
    name: "WordPress in Education Showcase",
    description: "Wordpress conference in Masaka, Uganda",
    startDate: "2024-04-06T00:00:00.000+00:00",
    endDate: "2024-04-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Masaka",
        addressRegion: "Uganda",
      },
      name: "Masaka, Uganda",
    },
  },
  {
    name: "API Conference",
    description: "API conference in London, United Kingdom",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "API Conference Online",
    description: "API conference Online",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
  },
  {
    name: "DevOpsCon London",
    description: "DevOps conference in London, United Kingdom",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "DevOpsCon Online",
    description: "DevOps conference Online",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
  },
  {
    name: "International JavaScript Conference London",
    description: "JavaScript conference in London, United Kingdom",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Paris Blockchain Week",
    description: "Crypto / Blockchain conference in Paris, France",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "PowerShell + DevOps Global Summit",
    description: "Microsoft conference in Bellevue, United States",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bellevue",
        addressRegion: "United States",
      },
      name: "Bellevue, United States",
    },
  },
  {
    name: "QCon London 2024",
    description: "Full-stack conference in London, United Kingdom",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "SAFe Summit Berlin",
    description: "Agile conference in Berlin, Germany",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Serverless Architecture Conference",
    description: "Serverless conference in London, United Kingdom",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Serverless Architecture Conference Online",
    description: "Serverless conference Online",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
  },
  {
    name: "Lyon Craft",
    description: "Full-stack conference in Lyon, France",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressRegion: "France",
      },
      name: "Lyon, France",
    },
  },
  {
    name: "ITASEC24",
    description: "Cybersecurity / InfoSec conference in Salerno, Italy",
    startDate: "2024-04-08T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salerno",
        addressRegion: "Italy",
      },
      name: "Salerno, Italy",
    },
  },
  {
    name: "Devnexus 2024",
    description: "Java conference in Atlanta, United States",
    startDate: "2024-04-09T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "United States",
      },
      name: "Atlanta, United States",
    },
  },
  {
    name: "IAC24",
    description: "AI / ML conference in Seattle, United States",
    startDate: "2024-04-09T00:00:00.000+00:00",
    endDate: "2024-04-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "IAC 2024: Designing Intelligent Information",
    description: "AI / ML conference in Seattle, United States",
    startDate: "2024-04-09T00:00:00.000+00:00",
    endDate: "2024-04-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "Google Next ’24",
    description: "Google conference in Las Vegas, United States",
    startDate: "2024-04-09T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "ISC West 2024",
    description:
      "Cybersecurity / InfoSec conference in Las Vegas, United States",
    startDate: "2024-04-09T00:00:00.000+00:00",
    endDate: "2024-04-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Data Architecture New Zealand",
    description: "Data / Database conference in Auckland, New Zealand",
    startDate: "2024-04-09T00:00:00.000+00:00",
    endDate: "2024-04-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Auckland",
        addressRegion: "New Zealand",
      },
      name: "Auckland, New Zealand",
    },
  },
  {
    name: "Chef Roadshow ’24",
    description: "DevOps conference in Hannover, Germany",
    startDate: "2024-04-09T00:00:00.000+00:00",
    endDate: "2024-04-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hannover",
        addressRegion: "Germany",
      },
      name: "Hannover, Germany",
    },
  },
  {
    name: "XtremeJS online conference",
    description: "JavaScript conference Online",
    startDate: "2024-04-09T00:00:00.000+00:00",
    endDate: "2024-04-09T00:00:00.000+00:00",
  },
  {
    name: "GrafanaCon 2024",
    description: "SRE conference in Amsterdam, Netherlands",
    startDate: "2024-04-09T00:00:00.000+00:00",
    endDate: "2024-04-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "AI Week 2024",
    description: "AI / ML conference in Rimini, Italy",
    startDate: "2024-04-09T00:00:00.000+00:00",
    endDate: "2024-04-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rimini",
        addressRegion: "Italy",
      },
      name: "Rimini, Italy",
    },
  },
  {
    name: "Agile en Chile 2024",
    description: "Agile conference in Santiago, Chile",
    startDate: "2024-04-10T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Chile",
      },
      name: "Santiago, Chile",
    },
  },
  {
    name: "Devopsdays Raleigh",
    description: "DevOps conference in Raleigh, United States",
    startDate: "2024-04-10T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raleigh",
        addressRegion: "United States",
      },
      name: "Raleigh, United States",
    },
  },
  {
    name: "Empire Fintech Conference",
    description: "Fintech conference in New York, United States",
    startDate: "2024-04-10T00:00:00.000+00:00",
    endDate: "2024-04-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "Laval Virtual 2024",
    description: "AR / VR / XR conference in Laval, France",
    startDate: "2024-04-10T00:00:00.000+00:00",
    endDate: "2024-04-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Laval",
        addressRegion: "France",
      },
      name: "Laval, France",
    },
  },
  {
    name: "NYSwifty 2024",
    description: "iOS / Swift conference in New York, United States",
    startDate: "2024-04-10T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "PMI® Global Summit Series 2024 Europe",
    description: "Project management / PMO conference in Berlin, Germany",
    startDate: "2024-04-10T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "TEAMZ WEB3 / AI SUMMIT 2024",
    description: "Web3 conference in Tokyo, Japan",
    startDate: "2024-04-10T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokyo",
        addressRegion: "Japan",
      },
      name: "Tokyo, Japan",
    },
  },
  {
    name: "Agile in Chile 2024",
    description: "Agile conference in Santiago, Chile",
    startDate: "2024-04-10T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Chile",
      },
      name: "Santiago, Chile",
    },
  },
  {
    name: "CI/CDay",
    description: "DevOps conference in Paris, France",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Conf42: Large Language Models (LLM) 2024",
    description: "AI / ML conference Online",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
  },
  {
    name: "jsday 2024",
    description: "JavaScript conference in Verona, Italy",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Verona",
        addressRegion: "Italy",
      },
      name: "Verona, Italy",
    },
  },
  {
    name: "RubyConf AU 2024",
    description: "Ruby conference in Sydney, Australia",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "Australia",
      },
      name: "Sydney, Australia",
    },
  },
  {
    name: "UX Healthcare London 2024",
    description: "UI / UX conference in London, United Kingdom",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "eazyBI Community Days 2024",
    description: "Data / Database conference in Berlin, Germany",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "WiCyS 2024",
    description:
      "Cybersecurity / InfoSec conference in Nashville, United States",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nashville",
        addressRegion: "United States",
      },
      name: "Nashville, United States",
    },
  },
  {
    name: "DevOps Midwest 2024",
    description: "DevOps conference in Webster Groves, United States",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Webster Groves",
        addressRegion: "United States",
      },
      name: "Webster Groves, United States",
    },
  },
  {
    name: "SUGCON Europe 2024",
    description: "Tech conference in Dublin, Ireland",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressRegion: "Ireland",
      },
      name: "Dublin, Ireland",
    },
  },
  {
    name: "AWS Community Day Poland 2024",
    description: "AWS conference in Warsaw, Poland",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warsaw",
        addressRegion: "Poland",
      },
      name: "Warsaw, Poland",
    },
  },
  {
    name: "BSidesSLC",
    description:
      "Cybersecurity / InfoSec conference in Salt Lake City, United States",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salt Lake City",
        addressRegion: "United States",
      },
      name: "Salt Lake City, United States",
    },
  },
  {
    name: "Nerdearla Chile",
    description: "Tech conference in Santiago, Chile",
    startDate: "2024-04-11T00:00:00.000+00:00",
    endDate: "2024-04-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Chile",
      },
      name: "Santiago, Chile",
    },
  },
  {
    name: "KCD Texas 2024",
    description: "Docker / Kubernetes conference in Austin, United States",
    startDate: "2024-04-12T00:00:00.000+00:00",
    endDate: "2024-04-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "Lone Star Software Symposium",
    description: "Full-stack conference in Dallas, United States",
    startDate: "2024-04-12T00:00:00.000+00:00",
    endDate: "2024-04-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dallas",
        addressRegion: "United States",
      },
      name: "Dallas, United States",
    },
  },
  {
    name: "Texas Linux Festival 2024",
    description: "Linux / OS conference in Austin, United States",
    startDate: "2024-04-12T00:00:00.000+00:00",
    endDate: "2024-04-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "wroclove.rb 2024",
    description: "Ruby conference in Wroclaw, Poland",
    startDate: "2024-04-12T00:00:00.000+00:00",
    endDate: "2024-04-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wroclaw",
        addressRegion: "Poland",
      },
      name: "Wroclaw, Poland",
    },
  },
  {
    name: "PostgreSQL Conference Germany",
    description: "Postgres conference in Munich, Germany",
    startDate: "2024-04-12T00:00:00.000+00:00",
    endDate: "2024-04-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "Days of Knowledge Nordic 2024",
    description: "Tech conference in Odense, Denmark",
    startDate: "2024-04-12T00:00:00.000+00:00",
    endDate: "2024-04-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Odense",
        addressRegion: "Denmark",
      },
      name: "Odense, Denmark",
    },
  },
  {
    name: "KCD Pune 2024",
    description: "Docker / Kubernetes conference in Pune, India",
    startDate: "2024-04-13T00:00:00.000+00:00",
    endDate: "2024-04-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "India",
      },
      name: "Pune, India",
    },
  },
  {
    name: "WordCamp Gliwice 2024",
    description: "Wordpress conference in Gliwice, Poland",
    startDate: "2024-04-13T00:00:00.000+00:00",
    endDate: "2024-04-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gliwice",
        addressRegion: "Poland",
      },
      name: "Gliwice, Poland",
    },
  },
  {
    name: "Directions North America 2024",
    description: "Microsoft conference in San Diego, United States",
    startDate: "2024-04-14T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "United States",
      },
      name: "San Diego, United States",
    },
  },
  {
    name: "ACCU 2024",
    description: "C/C++ conference in Bristol, United Kingdom",
    startDate: "2024-04-15T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bristol",
        addressRegion: "United Kingdom",
      },
      name: "Bristol, United Kingdom",
    },
  },
  {
    name: "Blockchain Life 2024",
    description:
      "Crypto / Blockchain conference in Dubai, United Arab Emirates",
    startDate: "2024-04-15T00:00:00.000+00:00",
    endDate: "2024-04-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "IT Security Camp Berlin",
    description: "Cybersecurity / InfoSec conference in Berlin, Germany",
    startDate: "2024-04-15T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "The German Perl/Raku Workshop Conference",
    description: "Open Source conference in Frankfurt, Germany",
    startDate: "2024-04-15T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Frankfurt",
        addressRegion: "Germany",
      },
      name: "Frankfurt, Germany",
    },
  },
  {
    name: "UXinsight Festival 2024",
    description: "UI / UX conference in Breda, Netherlands",
    startDate: "2024-04-15T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Breda",
        addressRegion: "Netherlands",
      },
      name: "Breda, Netherlands",
    },
  },
  {
    name: "UXinsight Festival 2024 Online",
    description: "UI / UX conference Online",
    startDate: "2024-04-15T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
  },
  {
    name: "Workhuman Live 2024",
    description: "HR / Hiring / Recruiting conference in Austin, United States",
    startDate: "2024-04-15T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "SANS Cybersecurity Leadership UK Summit 2024",
    description: "Cybersecurity / InfoSec conference in London, United Kingdom",
    startDate: "2024-04-15T00:00:00.000+00:00",
    endDate: "2024-04-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Digital Assets Forum",
    description: "Crypto / Blockchain conference in London, United Kingdom",
    startDate: "2024-04-15T00:00:00.000+00:00",
    endDate: "2024-04-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Container Plumbing Days",
    description: "Docker / Kubernetes conference in Seattle, United States",
    startDate: "2024-04-15T00:00:00.000+00:00",
    endDate: "2024-04-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "GitOpsCon North America 2024",
    description: "DevOps conference in Seattle, United States",
    startDate: "2024-04-15T00:00:00.000+00:00",
    endDate: "2024-04-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "Devopsdays Aarhus",
    description: "DevOps conference in Aarhus, Denmark",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Aarhus",
        addressRegion: "Denmark",
      },
      name: "Aarhus, Denmark",
    },
  },
  {
    name: "Devopsdays Tokyo",
    description: "DevOps conference in Tokyo, Japan",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokyo",
        addressRegion: "Japan",
      },
      name: "Tokyo, Japan",
    },
  },
  {
    name: "Devopsdays Zurich",
    description: "DevOps conference in Zurich, Switzerland",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zurich",
        addressRegion: "Switzerland",
      },
      name: "Zurich, Switzerland",
    },
  },
  {
    name: "Heisenbug 2024 Online",
    description: "Testing / QA conference Online",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-16T00:00:00.000+00:00",
  },
  {
    name: "Global Blockchain Show",
    description:
      "Crypto / Blockchain conference in Dubai, United Arab Emirates",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "Black Hat Asia 2024",
    description: "Cybersecurity / InfoSec conference in Singapore, Singapore",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressRegion: "Singapore",
      },
      name: "Singapore, Singapore",
    },
  },
  {
    name: "CISO Perth",
    description: "Cybersecurity / InfoSec conference in Perth, Australia",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Perth",
        addressRegion: "Australia",
      },
      name: "Perth, Australia",
    },
  },
  {
    name: "CDAO Singapore",
    description: "Data / Database conference in Singapore, Singapore",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressRegion: "Singapore",
      },
      name: "Singapore, Singapore",
    },
  },
  {
    name: "Open Source Summit North America",
    description: "Open Source conference in Seattle, United States",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "Civo Navigate Tampa",
    description: "Cloud conference in Tampa, United States",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tampa",
        addressRegion: "United States",
      },
      name: "Tampa, United States",
    },
  },
  {
    name: "Embedded Open Source Summit 2024",
    description: "Open Source conference in Seattle, United States",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "XtremePython Online Conference",
    description: "Python conference Online",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-16T00:00:00.000+00:00",
  },
  {
    name: "Mobidictum Network Lisbon",
    description: "Game dev conference in Lisbon, Portugal",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisbon",
        addressRegion: "Portugal",
      },
      name: "Lisbon, Portugal",
    },
  },
  {
    name: "Future Net World 2024",
    description: "Telecom / 5G conference in London, United Kingdom",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Implementing Agile in Automotive 2024",
    description: "Agile conference in Berlin, Germany",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Everything Open 2024",
    description: "Open Source conference in Gladstone, Australia",
    startDate: "2024-04-16T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gladstone",
        addressRegion: "Australia",
      },
      name: "Gladstone, Australia",
    },
  },
  {
    name: "Devopsdays Birmingham Al",
    description: "DevOps conference in Birmingham, United States",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Birmingham",
        addressRegion: "United States",
      },
      name: "Birmingham, United States",
    },
  },
  {
    name: "JPoint 2024 Online",
    description: "Java conference Online",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
  },
  {
    name: "SOAHR 2024",
    description:
      "HR / Hiring / Recruiting conference in Atlanta, United States",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "United States",
      },
      name: "Atlanta, United States",
    },
  },
  {
    name: "The Service Desk & IT Support Show",
    description: "IT service management conference in London, United Kingdom",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Vue.js Day",
    description: "Vue conference Online",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
  },
  {
    name: "Apidays Singapore",
    description: "API conference in Singapore, Singapore",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressRegion: "Singapore",
      },
      name: "Singapore, Singapore",
    },
  },
  {
    name: "Shiny Conf",
    description: "Data / Database conference Online",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
  },
  {
    name: "Devoxx France",
    description: "Java conference in Paris, France",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Embedded Day",
    description: "C/C++ conference Online",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
  },
  {
    name: "Future Tech 2024",
    description: ".NET conference in Utrecht, Netherlands",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Utrecht",
        addressRegion: "Netherlands",
      },
      name: "Utrecht, Netherlands",
    },
  },
  {
    name: "Azure Cosmos DB Conf 2024",
    description: "Azure conference Online",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
  },
  {
    name: "MongoDB .local Toronto",
    description: "MongoDB conference in Toronto, Canada",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "PromptUX",
    description: "AI / ML conference in Berlin, Germany",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Azure Cosmos DB Conf",
    description: "Microsoft conference Online",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
  },
  {
    name: "Global AI & Blockchain",
    description: "AI / ML conference in Dubai, United Arab Emirates",
    startDate: "2024-04-17T00:00:00.000+00:00",
    endDate: "2024-04-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "ColorCloud Hamburg 2024",
    description: "Microsoft conference in Hamburg, Germany",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hamburg",
        addressRegion: "Germany",
      },
      name: "Hamburg, Germany",
    },
  },
  {
    name: "dotnetdays.ro",
    description: ".NET conference in Iasi, Romania",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Iasi",
        addressRegion: "Romania",
      },
      name: "Iasi, Romania",
    },
  },
  {
    name: "ElixirConf EU",
    description: "Elixir conference in Lisbon, Portugal",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisbon",
        addressRegion: "Portugal",
      },
      name: "Lisbon, Portugal",
    },
  },
  {
    name: "ElixirConf EU Online",
    description: "Elixir conference Online",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
  },
  {
    name: "Global Azure 2024",
    description: "Azure conference Online",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
  },
  {
    name: "Mobidictum Meetup Barcelona",
    description: "Game dev conference in Barcelona, Spain",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "Open Source Camp for Kubernetes",
    description: "Docker / Kubernetes conference in Nuremberg, Germany",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nuremberg",
        addressRegion: "Germany",
      },
      name: "Nuremberg, Germany",
    },
  },
  {
    name: "Postgres Conference 2024",
    description: "Postgres conference in San Jose, United States",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Jose",
        addressRegion: "United States",
      },
      name: "San Jose, United States",
    },
  },
  {
    name: "Project Management Symposium 2024",
    description:
      "Project management / PMO conference in College Park, United States",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "College Park",
        addressRegion: "United States",
      },
      name: "College Park, United States",
    },
  },
  {
    name: "TOKEN2049 Dubai",
    description:
      "Crypto / Blockchain conference in Dubai, United Arab Emirates",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "AI in Finance Summit New York",
    description: "AI / ML conference in New York, United States",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "HIT Games Conference",
    description: "Game dev conference in Istanbul, Turkey",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressRegion: "Turkey",
      },
      name: "Istanbul, Turkey",
    },
  },
  {
    name: "Devoxx Greece 2024",
    description: "Java conference in Athens, Greece",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Athens",
        addressRegion: "Greece",
      },
      name: "Athens, Greece",
    },
  },
  {
    name: "Tech Summit Europe",
    description: "Tech conference in Amsterdam, Netherlands",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "UmeDev 2024",
    description: "Full-stack conference in Umea, Sweden",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Umea",
        addressRegion: "Sweden",
      },
      name: "Umea, Sweden",
    },
  },
  {
    name: "Generative AI",
    description: "AI / ML conference in Amsterdam, Netherlands",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "Linux Security Summit North America",
    description: "Linux / OS conference in Seattle, United States",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "Swift Heroes 2024",
    description: "iOS / Swift conference in Turin, Italy and Online",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Turin",
        addressRegion: "Italy",
      },
      name: "Turin, Italy",
    },
  },
  {
    name: "Global Azure Milano 2024",
    description: "Azure conference in Milan, Italy",
    startDate: "2024-04-18T00:00:00.000+00:00",
    endDate: "2024-04-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Milan",
        addressRegion: "Italy",
      },
      name: "Milan, Italy",
    },
  },
  {
    name: "Agile Tour Luxembourg 2024",
    description: "Agile conference in Luxembourg, Luxembourg",
    startDate: "2024-04-19T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Luxembourg",
        addressRegion: "Luxembourg",
      },
      name: "Luxembourg, Luxembourg",
    },
  },
  {
    name: "Commit 2024",
    description: "Cloud conference in Madrid, Spain",
    startDate: "2024-04-19T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madrid",
        addressRegion: "Spain",
      },
      name: "Madrid, Spain",
    },
  },
  {
    name: "PM In The Age Of AI",
    description:
      "Project management / PMO conference in College Park, United States",
    startDate: "2024-04-19T00:00:00.000+00:00",
    endDate: "2024-04-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "College Park",
        addressRegion: "United States",
      },
      name: "College Park, United States",
    },
  },
  {
    name: "PyTexas Conference",
    description: "Python conference in Austin, United States",
    startDate: "2024-04-19T00:00:00.000+00:00",
    endDate: "2024-04-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "Brisbane Cyber Security Conference",
    description: "Cybersecurity / InfoSec conference in Brisbane, Australia",
    startDate: "2024-04-19T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brisbane",
        addressRegion: "Australia",
      },
      name: "Brisbane, Australia",
    },
  },
  {
    name: "React Miami",
    description: "React conference in Miami, United States",
    startDate: "2024-04-19T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Miami",
        addressRegion: "United States",
      },
      name: "Miami, United States",
    },
  },
  {
    name: "Chicago Global Azure 2024",
    description: "Azure conference in Chicago, United States",
    startDate: "2024-04-19T00:00:00.000+00:00",
    endDate: "2024-04-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "18 Linux Session",
    description: "Linux / OS conference in Wroclaw, Poland",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wroclaw",
        addressRegion: "Poland",
      },
      name: "Wroclaw, Poland",
    },
  },
  {
    name: "Devopsdays Istanbul",
    description: "DevOps conference in Istanbul, Turkey",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressRegion: "Turkey",
      },
      name: "Istanbul, Turkey",
    },
  },
  {
    name: "Python + DS fwdays'24 conference",
    description: "Python conference in Kyiv, Ukraine",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kyiv",
        addressRegion: "Ukraine",
      },
      name: "Kyiv, Ukraine",
    },
  },
  {
    name: "Python + DS fwdays'24 Online",
    description: "Python conference Online",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
  },
  {
    name: "Tech Pro Camp",
    description: "Tech conference in Sarasota, United States",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sarasota",
        addressRegion: "United States",
      },
      name: "Sarasota, United States",
    },
  },
  {
    name: "SQL Saturday Atlanta 2024",
    description: "SQL conference in Alpharetta, United States",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Alpharetta",
        addressRegion: "United States",
      },
      name: "Alpharetta, United States",
    },
  },
  {
    name: "Global Azure Portugal 2024",
    description: "Azure conference in Lisbon, Portugal",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisbon",
        addressRegion: "Portugal",
      },
      name: "Lisbon, Portugal",
    },
  },
  {
    name: "Global Azure Bulgaria 2024",
    description: "Azure conference in Sofia, Bulgaria",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sofia",
        addressRegion: "Bulgaria",
      },
      name: "Sofia, Bulgaria",
    },
  },
  {
    name: "Global Azure Bootcamp 2024 Pordenone",
    description: "Azure conference in Pordenone, Italy",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pordenone",
        addressRegion: "Italy",
      },
      name: "Pordenone, Italy",
    },
  },
  {
    name: "BSides Charm",
    description: "Cybersecurity / InfoSec conference in Towson, United States",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Towson",
        addressRegion: "United States",
      },
      name: "Towson, United States",
    },
  },
  {
    name: "Global Azure 2024 Málaga",
    description: "Azure conference in Malaga, Spain",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malaga",
        addressRegion: "Spain",
      },
      name: "Malaga, Spain",
    },
  },
  {
    name: "WordCamp Bilbao 2024",
    description: "Wordpress conference in Bilbao, Spain",
    startDate: "2024-04-20T00:00:00.000+00:00",
    endDate: "2024-04-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bilbao",
        addressRegion: "Spain",
      },
      name: "Bilbao, Spain",
    },
  },
  {
    name: "WN Connect Dubrovnik'24",
    description: "Game dev conference in Dubrovnik, Croatia and Online",
    startDate: "2024-04-21T00:00:00.000+00:00",
    endDate: "2024-04-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubrovnik",
        addressRegion: "Croatia",
      },
      name: "Dubrovnik, Croatia",
    },
  },
  {
    name: "Heisenbug 2024",
    description: "Testing / QA conference in Moscow, Russia",
    startDate: "2024-04-22T00:00:00.000+00:00",
    endDate: "2024-04-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Moscow",
        addressRegion: "Russia",
      },
      name: "Moscow, Russia",
    },
  },
  {
    name: "JAX 2024",
    description: "Java conference in Mainz, Germany",
    startDate: "2024-04-22T00:00:00.000+00:00",
    endDate: "2024-04-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mainz",
        addressRegion: "Germany",
      },
      name: "Mainz, Germany",
    },
  },
  {
    name: "PyCon DE & PyData Berlin 2024",
    description: "Python conference in Berlin, Germany",
    startDate: "2024-04-22T00:00:00.000+00:00",
    endDate: "2024-04-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Reboot Develop Blue 2024",
    description: "Game dev conference in Dubrovnik, Croatia",
    startDate: "2024-04-22T00:00:00.000+00:00",
    endDate: "2024-04-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubrovnik",
        addressRegion: "Croatia",
      },
      name: "Dubrovnik, Croatia",
    },
  },
  {
    name: "World Blockchain Summit",
    description:
      "Crypto / Blockchain conference in Dubai, United Arab Emirates",
    startDate: "2024-04-22T00:00:00.000+00:00",
    endDate: "2024-04-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "React Connection",
    description: "React conference in Paris, France",
    startDate: "2024-04-22T00:00:00.000+00:00",
    endDate: "2024-04-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Running Remote",
    description: "Tech conference in Lisbon, Portugal",
    startDate: "2024-04-22T00:00:00.000+00:00",
    endDate: "2024-04-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisbon",
        addressRegion: "Portugal",
      },
      name: "Lisbon, Portugal",
    },
  },
  {
    name: "Great International Developer Summit",
    description: "Full-stack conference in Bengaluru, India",
    startDate: "2024-04-23T00:00:00.000+00:00",
    endDate: "2024-04-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "php[tek] 2024",
    description: "PHP conference in Chicago, United States",
    startDate: "2024-04-23T00:00:00.000+00:00",
    endDate: "2024-04-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "Shift Miami",
    description: "Full-stack conference in Miami, United States",
    startDate: "2024-04-23T00:00:00.000+00:00",
    endDate: "2024-04-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Miami",
        addressRegion: "United States",
      },
      name: "Miami, United States",
    },
  },
  {
    name: "CDAO Spring",
    description: "Data / Database conference in San Francisco, United States",
    startDate: "2024-04-23T00:00:00.000+00:00",
    endDate: "2024-04-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "CDAO Germany",
    description: "Data / Database conference in Munich, Germany",
    startDate: "2024-04-23T00:00:00.000+00:00",
    endDate: "2024-04-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "React Native Connection",
    description: "React conference in Paris, France",
    startDate: "2024-04-23T00:00:00.000+00:00",
    endDate: "2024-04-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Cardano Buidler Fest #1",
    description: "Crypto / Blockchain conference in Toulouse, France",
    startDate: "2024-04-23T00:00:00.000+00:00",
    endDate: "2024-04-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toulouse",
        addressRegion: "France",
      },
      name: "Toulouse, France",
    },
  },
  {
    name: "mDevCamp Prague 2024",
    description: "Mobile conference in Prague, Czech Republic",
    startDate: "2024-04-23T00:00:00.000+00:00",
    endDate: "2024-04-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prague",
        addressRegion: "Czech Republic",
      },
      name: "Prague, Czech Republic",
    },
  },
  {
    name: "Cloud Day",
    description: "Cloud conference Online",
    startDate: "2024-04-24T00:00:00.000+00:00",
    endDate: "2024-04-24T00:00:00.000+00:00",
  },
  {
    name: "Enterprise Leadership Summit Europe",
    description: "Tech leadership conference Online",
    startDate: "2024-04-24T00:00:00.000+00:00",
    endDate: "2024-04-25T00:00:00.000+00:00",
  },
  {
    name: "JPoint 2024",
    description: "Java conference in Moscow, Russia",
    startDate: "2024-04-24T00:00:00.000+00:00",
    endDate: "2024-04-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Moscow",
        addressRegion: "Russia",
      },
      name: "Moscow, Russia",
    },
  },
  {
    name: "Minds Mastering Machines 2024",
    description: "Data / Database conference in Cologne, Germany",
    startDate: "2024-04-24T00:00:00.000+00:00",
    endDate: "2024-04-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cologne",
        addressRegion: "Germany",
      },
      name: "Cologne, Germany",
    },
  },
  {
    name: "Software Quality Days",
    description: "Testing / QA conference in Vienna, Austria",
    startDate: "2024-04-24T00:00:00.000+00:00",
    endDate: "2024-04-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressRegion: "Austria",
      },
      name: "Vienna, Austria",
    },
  },
  {
    name: "Flutter Connection",
    description: "Flutter conference in Paris, France",
    startDate: "2024-04-24T00:00:00.000+00:00",
    endDate: "2024-04-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "M3-konferenz",
    description: "AI / ML conference in Cologne, Germany",
    startDate: "2024-04-24T00:00:00.000+00:00",
    endDate: "2024-04-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cologne",
        addressRegion: "Germany",
      },
      name: "Cologne, Germany",
    },
  },
  {
    name: "Gartner Data & Analytics Summit",
    description: "Data / Database conference in Mumbai, India",
    startDate: "2024-04-24T00:00:00.000+00:00",
    endDate: "2024-04-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "India",
      },
      name: "Mumbai, India",
    },
  },
  {
    name: "AndroidMakers by Droidcon",
    description: "Android conference in Paris, France",
    startDate: "2024-04-25T00:00:00.000+00:00",
    endDate: "2024-04-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "App Promotion Summit London 2024",
    description: "iOS / Swift conference in London, United Kingdom",
    startDate: "2024-04-25T00:00:00.000+00:00",
    endDate: "2024-04-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Conf42: Golang 2024",
    description: "Golang conference Online",
    startDate: "2024-04-25T00:00:00.000+00:00",
    endDate: "2024-04-25T00:00:00.000+00:00",
  },
  {
    name: "KCD Romania 2024",
    description: "Docker / Kubernetes conference in Bucharest, Romania",
    startDate: "2024-04-25T00:00:00.000+00:00",
    endDate: "2024-04-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bucharest",
        addressRegion: "Romania",
      },
      name: "Bucharest, Romania",
    },
  },
  {
    name: "MiXiT 2024",
    description: "Tech conference in Lyon, France",
    startDate: "2024-04-25T00:00:00.000+00:00",
    endDate: "2024-04-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressRegion: "France",
      },
      name: "Lyon, France",
    },
  },
  {
    name: "AI in Finance Summit London",
    description: "AI / ML conference in London, United Kingdom",
    startDate: "2024-04-25T00:00:00.000+00:00",
    endDate: "2024-04-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Frontend Design Conference",
    description: "Web / Frontend conference in St. Petersburg, United States",
    startDate: "2024-04-25T00:00:00.000+00:00",
    endDate: "2024-04-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "St. Petersburg",
        addressRegion: "United States",
      },
      name: "St. Petersburg, United States",
    },
  },
  {
    name: "Day of Shecurity",
    description:
      "Cybersecurity / InfoSec conference in San Francisco, United States",
    startDate: "2024-04-25T00:00:00.000+00:00",
    endDate: "2024-04-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "BSides Goa Security Conference",
    description: "Cybersecurity / InfoSec conference in Goa, India",
    startDate: "2024-04-25T00:00:00.000+00:00",
    endDate: "2024-04-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Goa",
        addressRegion: "India",
      },
      name: "Goa, India",
    },
  },
  {
    name: "Vue.js Live Conference 2024",
    description: "Vue conference Online",
    startDate: "2024-04-25T00:00:00.000+00:00",
    endDate: "2024-04-26T00:00:00.000+00:00",
  },
  {
    name: "LinuxFest Northwest 2024",
    description: "Linux / OS conference in Bellingham, United States",
    startDate: "2024-04-26T00:00:00.000+00:00",
    endDate: "2024-04-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bellingham",
        addressRegion: "United States",
      },
      name: "Bellingham, United States",
    },
  },
  {
    name: "Balkan Ruby 2024",
    description: "Ruby conference in Sofia, Bulgaria",
    startDate: "2024-04-26T00:00:00.000+00:00",
    endDate: "2024-04-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sofia",
        addressRegion: "Bulgaria",
      },
      name: "Sofia, Bulgaria",
    },
  },
  {
    name: "GothamGo 2024",
    description: "Golang conference in New York, United States",
    startDate: "2024-04-26T00:00:00.000+00:00",
    endDate: "2024-04-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "BizApps-Palooza 2024",
    description: "Microsoft conference in Toronto, Canada",
    startDate: "2024-04-26T00:00:00.000+00:00",
    endDate: "2024-04-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "Albanian Dreamin' 2024",
    description: "Salesforce conference in Tirana, Albania",
    startDate: "2024-04-27T00:00:00.000+00:00",
    endDate: "2024-04-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tirana",
        addressRegion: "Albania",
      },
      name: "Tirana, Albania",
    },
  },
  {
    name: "Bsides Seattle 2024",
    description: "Cybersecurity / InfoSec conference in Seattle, United States",
    startDate: "2024-04-27T00:00:00.000+00:00",
    endDate: "2024-04-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "DDD South West",
    description: "DDD conference in Bristol, United Kingdom",
    startDate: "2024-04-27T00:00:00.000+00:00",
    endDate: "2024-04-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bristol",
        addressRegion: "United Kingdom",
      },
      name: "Bristol, United Kingdom",
    },
  },
  {
    name: "SupportWorld Live",
    description: "IT service management conference in Denver, United States",
    startDate: "2024-04-27T00:00:00.000+00:00",
    endDate: "2024-05-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "United States",
      },
      name: "Denver, United States",
    },
  },
  {
    name: "Devopsdays Medellín",
    description: "DevOps conference in Medellin, Colombia",
    startDate: "2024-04-27T00:00:00.000+00:00",
    endDate: "2024-04-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medellin",
        addressRegion: "Colombia",
      },
      name: "Medellin, Colombia",
    },
  },
  {
    name: "dataMinds Saturday",
    description: "Data / Database conference in Mechelen, Belgium",
    startDate: "2024-04-27T00:00:00.000+00:00",
    endDate: "2024-04-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mechelen",
        addressRegion: "Belgium",
      },
      name: "Mechelen, Belgium",
    },
  },
  {
    name: "StarEast",
    description: "Testing / QA conference in Orlando, United States",
    startDate: "2024-04-28T00:00:00.000+00:00",
    endDate: "2024-05-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "United States",
      },
      name: "Orlando, United States",
    },
  },
  {
    name: "Atlassian Team ’24",
    description: "Tech leadership conference in Las Vegas, United States",
    startDate: "2024-04-29T00:00:00.000+00:00",
    endDate: "2024-05-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Atlassian Team ’24 Online",
    description: "Tech leadership conference Online",
    startDate: "2024-04-29T00:00:00.000+00:00",
    endDate: "2024-05-02T00:00:00.000+00:00",
  },
  {
    name: "Devopsdays Denver",
    description: "DevOps conference in Denver, United States",
    startDate: "2024-04-29T00:00:00.000+00:00",
    endDate: "2024-04-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "United States",
      },
      name: "Denver, United States",
    },
  },
  {
    name: "ONE Summit 2024",
    description: "Linux / OS conference in San Jose, United States",
    startDate: "2024-04-29T00:00:00.000+00:00",
    endDate: "2024-05-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Jose",
        addressRegion: "United States",
      },
      name: "San Jose, United States",
    },
  },
  {
    name: "Tableau Conference 2024",
    description: "Salesforce conference in San Diego, United States",
    startDate: "2024-04-29T00:00:00.000+00:00",
    endDate: "2024-05-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "United States",
      },
      name: "San Diego, United States",
    },
  },
  {
    name: "VSLive! Chicago 2024",
    description: "Microsoft conference in Chicago, United States",
    startDate: "2024-04-29T00:00:00.000+00:00",
    endDate: "2024-05-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "Web3 Dubai",
    description: "Web3 conference in Dubai, United Arab Emirates",
    startDate: "2024-04-29T00:00:00.000+00:00",
    endDate: "2024-04-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "C++Now 2024",
    description: "C/C++ conference in Aspen, United States",
    startDate: "2024-04-29T00:00:00.000+00:00",
    endDate: "2024-05-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Aspen",
        addressRegion: "United States",
      },
      name: "Aspen, United States",
    },
  },
  {
    name: "Apidays New York",
    description: "API conference in New York, United States",
    startDate: "2024-04-30T00:00:00.000+00:00",
    endDate: "2024-05-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "Post/Con 2024",
    description: "Tech leadership conference in San Francisco, United States",
    startDate: "2024-04-30T00:00:00.000+00:00",
    endDate: "2024-05-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "Gartner CIO Leadership Forum",
    description: "CIO conference in Sydney, Australia",
    startDate: "2024-04-30T00:00:00.000+00:00",
    endDate: "2024-05-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "Australia",
      },
      name: "Sydney, Australia",
    },
  },
  {
    name: "Android Worldwide April 2024",
    description: "Android conference Online",
    startDate: "2024-04-30T00:00:00.000+00:00",
    endDate: "2024-04-30T00:00:00.000+00:00",
  },
  {
    name: "DeFi Retreat 24 North America",
    description: "Fintech conference in Washington, United States",
    startDate: "2024-05-01T00:00:00.000+00:00",
    endDate: "2024-05-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Washington",
        addressRegion: "United States",
      },
      name: "Washington, United States",
    },
  },
  {
    name: "Devopsdays Austin",
    description: "DevOps conference in Austin, United States",
    startDate: "2024-05-02T00:00:00.000+00:00",
    endDate: "2024-05-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "Kafka Summit Bangalore 2024",
    description: "Software architecture conference in Bengaluru, India",
    startDate: "2024-05-02T00:00:00.000+00:00",
    endDate: "2024-05-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "Subsurface LIVE 2024",
    description: "Data / Database conference Online",
    startDate: "2024-05-02T00:00:00.000+00:00",
    endDate: "2024-05-03T00:00:00.000+00:00",
  },
  {
    name: "Viz.fo 2024",
    description: "Microsoft conference in Torshavn, Faroe Islands",
    startDate: "2024-05-02T00:00:00.000+00:00",
    endDate: "2024-05-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Torshavn",
        addressRegion: "Faroe Islands",
      },
      name: "Torshavn, Faroe Islands",
    },
  },
  {
    name: "MongoDB .local NYC",
    description: "MongoDB conference in New York, United States",
    startDate: "2024-05-02T00:00:00.000+00:00",
    endDate: "2024-05-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "BSides Prishtina 2024",
    description: "Cybersecurity / InfoSec conference in Pristina, Kosovo",
    startDate: "2024-05-03T00:00:00.000+00:00",
    endDate: "2024-05-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pristina",
        addressRegion: "Kosovo",
      },
      name: "Pristina, Kosovo",
    },
  },
  {
    name: "New England Software Symposium",
    description: "Software architecture conference in Boston, United States",
    startDate: "2024-05-03T00:00:00.000+00:00",
    endDate: "2024-05-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boston",
        addressRegion: "United States",
      },
      name: "Boston, United States",
    },
  },
  {
    name: "agile COACH CAMP COLOGNE",
    description: "Agile conference in Cologne, Germany",
    startDate: "2024-05-03T00:00:00.000+00:00",
    endDate: "2024-05-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cologne",
        addressRegion: "Germany",
      },
      name: "Cologne, Germany",
    },
  },
  {
    name: "Stir Trek 2024",
    description: "Full-stack conference in Columbus, United States",
    startDate: "2024-05-03T00:00:00.000+00:00",
    endDate: "2024-05-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Columbus",
        addressRegion: "United States",
      },
      name: "Columbus, United States",
    },
  },
  {
    name: "BSidesSF 2024",
    description:
      "Cybersecurity / InfoSec conference in San Francisco, United States",
    startDate: "2024-05-04T00:00:00.000+00:00",
    endDate: "2024-05-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "SQL Saturday Jacksonville 2024",
    description: "SQL conference in Jacksonville, United States",
    startDate: "2024-05-04T00:00:00.000+00:00",
    endDate: "2024-05-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jacksonville",
        addressRegion: "United States",
      },
      name: "Jacksonville, United States",
    },
  },
  {
    name: "Boise Code Camp",
    description: "Full-stack conference in Boise, United States",
    startDate: "2024-05-04T00:00:00.000+00:00",
    endDate: "2024-05-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boise",
        addressRegion: "United States",
      },
      name: "Boise, United States",
    },
  },
  {
    name: "Deep Dish Swift",
    description: "iOS / Swift conference in Chicago, United States",
    startDate: "2024-05-05T00:00:00.000+00:00",
    endDate: "2024-05-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "DrupalCon Portland 2024",
    description: "Drupal conference in Portland, United States",
    startDate: "2024-05-06T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portland",
        addressRegion: "United States",
      },
      name: "Portland, United States",
    },
  },
  {
    name: "Dubai FinTech Summit 2024",
    description: "Fintech conference in Dubai, United Arab Emirates",
    startDate: "2024-05-06T00:00:00.000+00:00",
    endDate: "2024-05-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "HOST 2024",
    description: "Hardware / IoT conference in Washington, United States",
    startDate: "2024-05-06T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Washington",
        addressRegion: "United States",
      },
      name: "Washington, United States",
    },
  },
  {
    name: "Payments Forum",
    description: "Fintech conference in Hollywood, United States",
    startDate: "2024-05-06T00:00:00.000+00:00",
    endDate: "2024-05-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hollywood",
        addressRegion: "United States",
      },
      name: "Hollywood, United States",
    },
  },
  {
    name: "Techorama 2024",
    description: "Full-stack conference in Antwerp, Belgium",
    startDate: "2024-05-06T00:00:00.000+00:00",
    endDate: "2024-05-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antwerp",
        addressRegion: "Belgium",
      },
      name: "Antwerp, Belgium",
    },
  },
  {
    name: "RSAC 2024",
    description:
      "Cybersecurity / InfoSec conference in San Francisco, United States",
    startDate: "2024-05-06T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "Leadership Ateliers Barcelona",
    description: "Tech leadership conference in Barcelona, Spain",
    startDate: "2024-05-06T00:00:00.000+00:00",
    endDate: "2024-05-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "Techorama 2024",
    description: "Full-stack conference in Antwerp, Belgium",
    startDate: "2024-05-06T00:00:00.000+00:00",
    endDate: "2024-05-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antwerp",
        addressRegion: "Belgium",
      },
      name: "Antwerp, Belgium",
    },
  },
  {
    name: "TSIA World INTERACT",
    description: "AI / ML conference in Orlando, United States",
    startDate: "2024-05-06T00:00:00.000+00:00",
    endDate: "2024-05-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "United States",
      },
      name: "Orlando, United States",
    },
  },
  {
    name: "ADC to .NET Conference",
    description: "Full-stack conference in Regensburg, Germany and Online",
    startDate: "2024-05-06T00:00:00.000+00:00",
    endDate: "2024-05-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Regensburg",
        addressRegion: "Germany",
      },
      name: "Regensburg, Germany",
    },
  },
  {
    name: "Devopsdays Berlin",
    description: "DevOps conference in Berlin, Germany",
    startDate: "2024-05-07T00:00:00.000+00:00",
    endDate: "2024-05-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "enterJS 2024",
    description: "JavaScript conference in Darmstadt, Germany",
    startDate: "2024-05-07T00:00:00.000+00:00",
    endDate: "2024-05-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Darmstadt",
        addressRegion: "Germany",
      },
      name: "Darmstadt, Germany",
    },
  },
  {
    name: "Great Place To Work® For All™ Summit",
    description:
      "HR / Hiring / Recruiting conference in New Orleans, United States",
    startDate: "2024-05-07T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Orleans",
        addressRegion: "United States",
      },
      name: "New Orleans, United States",
    },
  },
  {
    name: "Unleash America Conference",
    description:
      "HR / Hiring / Recruiting conference in Las Vegas, United States",
    startDate: "2024-05-07T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "RailsConf 2024",
    description: "Ruby conference in Detroit, United States",
    startDate: "2024-05-07T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Detroit",
        addressRegion: "United States",
      },
      name: "Detroit, United States",
    },
  },
  {
    name: "CDAO Sydney",
    description: "Data / Database conference in Sydney, Australia",
    startDate: "2024-05-07T00:00:00.000+00:00",
    endDate: "2024-05-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "Australia",
      },
      name: "Sydney, Australia",
    },
  },
  {
    name: "Worldwide Software Architecture Summit 24",
    description: "Software architecture conference Online",
    startDate: "2024-05-07T00:00:00.000+00:00",
    endDate: "2024-05-08T00:00:00.000+00:00",
  },
  {
    name: "KubeHuddle 2024",
    description: "Docker / Kubernetes conference in Toronto, Canada",
    startDate: "2024-05-07T00:00:00.000+00:00",
    endDate: "2024-05-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "Mobidictum Network Berlin",
    description: "Game dev conference in Berlin, Germany",
    startDate: "2024-05-07T00:00:00.000+00:00",
    endDate: "2024-05-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "AWS Community Day Nordics 2024",
    description: "AWS conference in Copenhagen, Denmark",
    startDate: "2024-05-07T00:00:00.000+00:00",
    endDate: "2024-05-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Copenhagen",
        addressRegion: "Denmark",
      },
      name: "Copenhagen, Denmark",
    },
  },
  {
    name: "Devoxx UK",
    description: "Java conference in London, United Kingdom",
    startDate: "2024-05-08T00:00:00.000+00:00",
    endDate: "2024-05-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "J On The Beach 24",
    description: "Data / Database conference in Malaga, Spain",
    startDate: "2024-05-08T00:00:00.000+00:00",
    endDate: "2024-05-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malaga",
        addressRegion: "Spain",
      },
      name: "Malaga, Spain",
    },
  },
  {
    name: "Real-Time Analytics Summit 2024",
    description: "Product management conference in San Jose, United States",
    startDate: "2024-05-08T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Jose",
        addressRegion: "United States",
      },
      name: "San Jose, United States",
    },
  },
  {
    name: "Security Day",
    description: "Cybersecurity / InfoSec conference Online",
    startDate: "2024-05-08T00:00:00.000+00:00",
    endDate: "2024-05-08T00:00:00.000+00:00",
  },
  {
    name: "Data Innovation Summit",
    description: "Data / Database conference in Dubai, United Arab Emirates",
    startDate: "2024-05-08T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "CDAO APEX Financial Services",
    description: "Data / Database conference in Charlotte, United States",
    startDate: "2024-05-08T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Charlotte",
        addressRegion: "United States",
      },
      name: "Charlotte, United States",
    },
  },
  {
    name: "CTO Craft Con: London",
    description: "CTO conference in London, United Kingdom",
    startDate: "2024-05-08T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "ISACA 2024 North America Conference",
    description:
      "Cybersecurity / InfoSec conference in Phoenix, United States and Online",
    startDate: "2024-05-08T00:00:00.000+00:00",
    endDate: "2024-05-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Phoenix",
        addressRegion: "United States",
      },
      name: "Phoenix, United States",
    },
  },
  {
    name: "IBM TechXchange: Observability in Action",
    description: "IBM conference in Berlin, Germany",
    startDate: "2024-05-08T00:00:00.000+00:00",
    endDate: "2024-05-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "IBM TechXchange: Applied Observablitiy",
    description: "IBM conference in Cologne, Germany",
    startDate: "2024-05-08T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cologne",
        addressRegion: "Germany",
      },
      name: "Cologne, Germany",
    },
  },
  {
    name: "Conf42: Site Reliability Engineering 2024",
    description: "SRE conference Online",
    startDate: "2024-05-09T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
  },
  {
    name: "EU-Startups Summit 2024",
    description: "Tech conference in Valletta, Malta",
    startDate: "2024-05-09T00:00:00.000+00:00",
    endDate: "2024-05-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valletta",
        addressRegion: "Malta",
      },
      name: "Valletta, Malta",
    },
  },
  {
    name: "GopherCon Brazil 2024",
    description: "Golang conference in Florianopolis, Brazil",
    startDate: "2024-05-09T00:00:00.000+00:00",
    endDate: "2024-05-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Florianopolis",
        addressRegion: "Brazil",
      },
      name: "Florianopolis, Brazil",
    },
  },
  {
    name: "Middle East Enterprise AI & Analytics Summit",
    description: "AI / ML conference in Riyadh, Saudi Arabia",
    startDate: "2024-05-09T00:00:00.000+00:00",
    endDate: "2024-05-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Riyadh",
        addressRegion: "Saudi Arabia",
      },
      name: "Riyadh, Saudi Arabia",
    },
  },
  {
    name: "Asia VR and AR Summit",
    description: "AR / VR / XR conference in Guangzhou, China",
    startDate: "2024-05-10T00:00:00.000+00:00",
    endDate: "2024-05-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Guangzhou",
        addressRegion: "China",
      },
      name: "Guangzhou, China",
    },
  },
  {
    name: "Weblica 2024",
    description: "Web / Frontend conference in Cakovec, Croatia",
    startDate: "2024-05-10T00:00:00.000+00:00",
    endDate: "2024-05-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cakovec",
        addressRegion: "Croatia",
      },
      name: "Cakovec, Croatia",
    },
  },
  {
    name: "Java Day Istanbul",
    description: "Java conference in Istanbul, Turkey",
    startDate: "2024-05-11T00:00:00.000+00:00",
    endDate: "2024-05-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressRegion: "Turkey",
      },
      name: "Istanbul, Turkey",
    },
  },
  {
    name: "DDX Munich",
    description: "UI / UX conference in Munich, Germany",
    startDate: "2024-05-11T00:00:00.000+00:00",
    endDate: "2024-05-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "BSides312",
    description: "Cybersecurity / InfoSec conference in Chicago, United States",
    startDate: "2024-05-11T00:00:00.000+00:00",
    endDate: "2024-05-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "NorthSec 2024",
    description: "Cybersecurity / InfoSec conference in Montreal, Canada",
    startDate: "2024-05-12T00:00:00.000+00:00",
    endDate: "2024-05-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montreal",
        addressRegion: "Canada",
      },
      name: "Montreal, Canada",
    },
  },
  {
    name: "SANS ICS Europe Summit",
    description: "Cybersecurity / InfoSec conference in Munich, Germany",
    startDate: "2024-05-12T00:00:00.000+00:00",
    endDate: "2024-05-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "beyond tellerrand",
    description: "UI / UX conference in Dusseldorf, Germany",
    startDate: "2024-05-13T00:00:00.000+00:00",
    endDate: "2024-05-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dusseldorf",
        addressRegion: "Germany",
      },
      name: "Dusseldorf, Germany",
    },
  },
  {
    name: "Devopsdays Geneva",
    description: "DevOps conference in Geneva, Switzerland",
    startDate: "2024-05-13T00:00:00.000+00:00",
    endDate: "2024-05-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Geneva",
        addressRegion: "Switzerland",
      },
      name: "Geneva, Switzerland",
    },
  },
  {
    name: "DynamicsCon LIVE",
    description: "Microsoft conference in Denver, United States",
    startDate: "2024-05-13T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "United States",
      },
      name: "Denver, United States",
    },
  },
  {
    name: "ioSKonf 2024",
    description: "iOS / Swift conference in Skopje, Macedonia",
    startDate: "2024-05-13T00:00:00.000+00:00",
    endDate: "2024-05-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Skopje",
        addressRegion: "Macedonia",
      },
      name: "Skopje, Macedonia",
    },
  },
  {
    name: "JCON Europe 2024",
    description: "Java conference in Cologne, Germany",
    startDate: "2024-05-13T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cologne",
        addressRegion: "Germany",
      },
      name: "Cologne, Germany",
    },
  },
  {
    name: "Nordic Domain Days",
    description: "Tech conference in Stockholm, Sweden",
    startDate: "2024-05-13T00:00:00.000+00:00",
    endDate: "2024-05-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "SQLDay Poland",
    description: "SQL conference in Wroclaw, Poland",
    startDate: "2024-05-13T00:00:00.000+00:00",
    endDate: "2024-05-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wroclaw",
        addressRegion: "Poland",
      },
      name: "Wroclaw, Poland",
    },
  },
  {
    name: "Code BEAM Lite Stockholm",
    description: "Elixir conference in Stockholm, Sweden",
    startDate: "2024-05-13T00:00:00.000+00:00",
    endDate: "2024-05-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "Software Design & Development Conference",
    description: "Full-stack conference in London, United Kingdom",
    startDate: "2024-05-13T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Gartner Data & Analytics Summit",
    description: "Data / Database conference in London, United Kingdom",
    startDate: "2024-05-13T00:00:00.000+00:00",
    endDate: "2024-05-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Agile & Beyond 2024",
    description: "Agile conference in Detroit, United States",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Detroit",
        addressRegion: "United States",
      },
      name: "Detroit, United States",
    },
  },
  {
    name: "betterCode() API 2024",
    description: "API conference Online",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-14T00:00:00.000+00:00",
  },
  {
    name: "Devopsdays Philadelphia",
    description: "DevOps conference in Philadelphia, United States",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Philadelphia",
        addressRegion: "United States",
      },
      name: "Philadelphia, United States",
    },
  },
  {
    name: "Devopsdays Seattle",
    description: "DevOps conference in Seattle, United States",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "MEWS World 2024",
    description: "Web3 conference in Monaco, Monaco",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Monaco",
        addressRegion: "Monaco",
      },
      name: "Monaco, Monaco",
    },
  },
  {
    name: "Seamless Middle East",
    description: "Fintech conference in Dubai, United Arab Emirates",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "The HR Congress 2024",
    description: "HR / Hiring / Recruiting conference in Porto, Portugal",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Porto",
        addressRegion: "Portugal",
      },
      name: "Porto, Portugal",
    },
  },
  {
    name: "European Cloud Summit",
    description: "Cloud conference in Wiesbaden, Germany",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wiesbaden",
        addressRegion: "Germany",
      },
      name: "Wiesbaden, Germany",
    },
  },
  {
    name: "CISO Brazil",
    description: "Cybersecurity / InfoSec conference in Sao Paulo, Brazil",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sao Paulo",
        addressRegion: "Brazil",
      },
      name: "Sao Paulo, Brazil",
    },
  },
  {
    name: "DevOps Global Summit 24",
    description: "DevOps conference Online",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-15T00:00:00.000+00:00",
  },
  {
    name: "SW2 Conference",
    description:
      "Software architecture conference in Broomfield, United States",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Broomfield",
        addressRegion: "United States",
      },
      name: "Broomfield, United States",
    },
  },
  {
    name: "Full Stack Flutter",
    description: "Flutter conference Online",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-14T00:00:00.000+00:00",
  },
  {
    name: "ABIT 2024 - Agile beyond IT",
    description: "Agile conference in Hannover, Germany",
    startDate: "2024-05-14T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hannover",
        addressRegion: "Germany",
      },
      name: "Hannover, Germany",
    },
  },
  {
    name: "AWS Summit Berlin",
    description: "AWS conference in Berlin, Germany",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "C++ Russia Online",
    description: "C/C++ conference Online",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-15T00:00:00.000+00:00",
  },
  {
    name: "CONF3RENCE 2024",
    description: "Crypto / Blockchain conference in Dortmund, Germany",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dortmund",
        addressRegion: "Germany",
      },
      name: "Dortmund, Germany",
    },
  },
  {
    name: "Devopsdays Kansas City",
    description: "DevOps conference in Kansas City, United States",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kansas City",
        addressRegion: "United States",
      },
      name: "Kansas City, United States",
    },
  },
  {
    name: "GeeCON 2024",
    description: "Java conference in Krakow, Poland",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "Into The Box",
    description: "Tech conference in Washington, United States",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Washington",
        addressRegion: "United States",
      },
      name: "Washington, United States",
    },
  },
  {
    name: "Kubernetes Community Days Istanbul",
    description: "Docker / Kubernetes conference in Istanbul, Turkey",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressRegion: "Turkey",
      },
      name: "Istanbul, Turkey",
    },
  },
  {
    name: "Mobidictum Meetup Berlin 2024",
    description: "Game dev conference in Berlin, Germany",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "/NEW",
    description: "Tech conference in Newcastle, Australia",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Newcastle",
        addressRegion: "Australia",
      },
      name: "Newcastle, Australia",
    },
  },
  {
    name: "PyCon US 2024",
    description: "Python conference in Pittsburgh, United States",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pittsburgh",
        addressRegion: "United States",
      },
      name: "Pittsburgh, United States",
    },
  },
  {
    name: "RubyKaigi 2024",
    description: "Ruby conference in Okinawa, Japan",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Okinawa",
        addressRegion: "Japan",
      },
      name: "Okinawa, Japan",
    },
  },
  {
    name: "UXDX USA 2024",
    description: "UI / UX conference in New York, United States",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "UXDX USA 2024 Online",
    description: "UI / UX conference Online",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
  },
  {
    name: "Next Block Expo",
    description: "Crypto / Blockchain conference in Warsaw, Poland",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warsaw",
        addressRegion: "Poland",
      },
      name: "Warsaw, Poland",
    },
  },
  {
    name: "Vueconf US",
    description: "Vue conference in New Orleans, United States",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Orleans",
        addressRegion: "United States",
      },
      name: "New Orleans, United States",
    },
  },
  {
    name: "Leadership Ateliers Berlin",
    description: "Tech leadership conference in Berlin, Germany",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "React Conf 2024",
    description: "React conference in Henderson, United States and Online",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Henderson",
        addressRegion: "United States",
      },
      name: "Henderson, United States",
    },
  },
  {
    name: "Agile Manchester",
    description: "Agile conference in Manchester, United Kingdom",
    startDate: "2024-05-15T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Manchester",
        addressRegion: "United Kingdom",
      },
      name: "Manchester, United Kingdom",
    },
  },
  {
    name: "Devsum 2024",
    description: "Full-stack conference in Stockholm, Sweden",
    startDate: "2024-05-16T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "NewCrafts Paris Conference 2024",
    description: "Full-stack conference in Paris, France",
    startDate: "2024-05-16T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "phpday 2024",
    description: "PHP conference in Verona, Italy",
    startDate: "2024-05-16T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Verona",
        addressRegion: "Italy",
      },
      name: "Verona, Italy",
    },
  },
  {
    name: "Uphill Conf",
    description: "AI / ML conference in Bern, Switzerland",
    startDate: "2024-05-16T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bern",
        addressRegion: "Switzerland",
      },
      name: "Bern, Switzerland",
    },
  },
  {
    name: "UX360 Research Berlin",
    description: "UI / UX conference in Berlin, Germany",
    startDate: "2024-05-16T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "DefCamp Cluj-Napoca",
    description: "Cybersecurity / InfoSec conference in Cluj-Napoca, Romania",
    startDate: "2024-05-16T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cluj-Napoca",
        addressRegion: "Romania",
      },
      name: "Cluj-Napoca, Romania",
    },
  },
  {
    name: "App Growth Summit Berlin 2024",
    description: "Mobile conference in Berlin, Germany",
    startDate: "2024-05-16T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Azure Bootcamp Switzerland 2024",
    description: "Azure conference in Bern, Switzerland",
    startDate: "2024-05-16T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bern",
        addressRegion: "Switzerland",
      },
      name: "Bern, Switzerland",
    },
  },
  {
    name: "Directions ASIA 2024",
    description: "Microsoft conference in Bangkok, Thailand",
    startDate: "2024-05-16T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangkok",
        addressRegion: "Thailand",
      },
      name: "Bangkok, Thailand",
    },
  },
  {
    name: "Tech.eu Summit London 2024",
    description: "Tech conference in London, United Kingdom",
    startDate: "2024-05-16T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Umbraad 2024",
    description: ".NET conference Online",
    startDate: "2024-05-16T00:00:00.000+00:00",
    endDate: "2024-05-16T00:00:00.000+00:00",
  },
  {
    name: "CzechDreamin 2024",
    description: "Salesforce conference in Prague, Czech Republic",
    startDate: "2024-05-17T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prague",
        addressRegion: "Czech Republic",
      },
      name: "Prague, Czech Republic",
    },
  },
  {
    name: "DataGrillen 2024",
    description: "Data / Database conference in Lingen, Germany",
    startDate: "2024-05-17T00:00:00.000+00:00",
    endDate: "2024-05-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lingen",
        addressRegion: "Germany",
      },
      name: "Lingen, Germany",
    },
  },
  {
    name: "Greater Wisconsin Software Symposium",
    description: "Software architecture conference in Madison, United States",
    startDate: "2024-05-17T00:00:00.000+00:00",
    endDate: "2024-05-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madison",
        addressRegion: "United States",
      },
      name: "Madison, United States",
    },
  },
  {
    name: "Agile O'Day 2024",
    description: "Agile conference in Naples, Italy",
    startDate: "2024-05-17T00:00:00.000+00:00",
    endDate: "2024-05-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Naples",
        addressRegion: "Italy",
      },
      name: "Naples, Italy",
    },
  },
  {
    name: "WordCamp Porto 2024",
    description: "Wordpress conference in Porto, Portugal",
    startDate: "2024-05-17T00:00:00.000+00:00",
    endDate: "2024-05-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Porto",
        addressRegion: "Portugal",
      },
      name: "Porto, Portugal",
    },
  },
  {
    name: "Devopsdays São Paulo",
    description: "DevOps conference in Sao Paulo, Brazil",
    startDate: "2024-05-18T00:00:00.000+00:00",
    endDate: "2024-05-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sao Paulo",
        addressRegion: "Brazil",
      },
      name: "Sao Paulo, Brazil",
    },
  },
  {
    name: "BSides Dublin 2024",
    description: "Cybersecurity / InfoSec conference in Dublin, Ireland",
    startDate: "2024-05-18T00:00:00.000+00:00",
    endDate: "2024-05-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressRegion: "Ireland",
      },
      name: "Dublin, Ireland",
    },
  },
  {
    name: "CCSEA 2024",
    description: "AI / ML conference in Zurich, Switzerland",
    startDate: "2024-05-18T00:00:00.000+00:00",
    endDate: "2024-05-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zurich",
        addressRegion: "Switzerland",
      },
      name: "Zurich, Switzerland",
    },
  },
  {
    name: "AWS Community Day Türkiye 2024",
    description: "AWS conference in Istanbul, Turkey",
    startDate: "2024-05-18T00:00:00.000+00:00",
    endDate: "2024-05-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressRegion: "Turkey",
      },
      name: "Istanbul, Turkey",
    },
  },
  {
    name: "SEA 2024",
    description: "Software architecture conference in Zurich, Switzerland",
    startDate: "2024-05-18T00:00:00.000+00:00",
    endDate: "2024-05-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zurich",
        addressRegion: "Switzerland",
      },
      name: "Zurich, Switzerland",
    },
  },
  {
    name: "SQL Saturday RVA 2024",
    description: "SQL conference in Richmond, United States",
    startDate: "2024-05-18T00:00:00.000+00:00",
    endDate: "2024-05-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Richmond",
        addressRegion: "United States",
      },
      name: "Richmond, United States",
    },
  },
  {
    name: "MSPGeekCon24",
    description: "IT service management conference in Orlando, United States",
    startDate: "2024-05-19T00:00:00.000+00:00",
    endDate: "2024-05-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "United States",
      },
      name: "Orlando, United States",
    },
  },
  {
    name: "DevDays Europe Online",
    description: "Full-stack conference Online",
    startDate: "2024-05-20T00:00:00.000+00:00",
    endDate: "2024-05-21T00:00:00.000+00:00",
  },
  {
    name: "DevOpsCon San Diego Online",
    description: "DevOps conference Online",
    startDate: "2024-05-20T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
  },
  {
    name: "DevOpsCon San Diego",
    description: "DevOps conference in San Diego, United States",
    startDate: "2024-05-20T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "United States",
      },
      name: "San Diego, United States",
    },
  },
  {
    name: "DevOps Pro Europe 2024 Online",
    description: "DevOps conference Online",
    startDate: "2024-05-20T00:00:00.000+00:00",
    endDate: "2024-05-21T00:00:00.000+00:00",
  },
  {
    name: "International JavaScript Conference San Diego",
    description: "JavaScript conference in San Diego, United States",
    startDate: "2024-05-20T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "United States",
      },
      name: "San Diego, United States",
    },
  },
  {
    name: "IEEE Symposium on Security and Privacy",
    description:
      "Cybersecurity / InfoSec conference in San Francisco, United States",
    startDate: "2024-05-20T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "IBM Think 2024",
    description: "IBM conference in Boston, United States",
    startDate: "2024-05-20T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boston",
        addressRegion: "United States",
      },
      name: "Boston, United States",
    },
  },
  {
    name: "WN Connect Krakow'24",
    description: "Game dev conference in Krakow, Poland",
    startDate: "2024-05-20T00:00:00.000+00:00",
    endDate: "2024-05-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "Codemotion Madrid 2024",
    description: "Full-stack conference in Madrid, Spain",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madrid",
        addressRegion: "Spain",
      },
      name: "Madrid, Spain",
    },
  },
  {
    name: "DevOps Days Baltimore 2024",
    description: "DevOps conference in Baltimore, United States",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Baltimore",
        addressRegion: "United States",
      },
      name: "Baltimore, United States",
    },
  },
  {
    name: "Embedded Vision Summit",
    description: "AI / ML conference in Santa Clara, United States",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santa Clara",
        addressRegion: "United States",
      },
      name: "Santa Clara, United States",
    },
  },
  {
    name: "FinovateSpring",
    description: "Fintech conference in San Francisco, United States",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: ".NEXT 2024",
    description: "Cloud conference in Barcelona, Spain",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "NG24 Spring",
    description: "Game dev conference in Malmo, Sweden",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malmo",
        addressRegion: "Sweden",
      },
      name: "Malmo, Sweden",
    },
  },
  {
    name: "ServerlessDays ANZ 2024",
    description: "Serverless conference in Sydney, Australia",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "Australia",
      },
      name: "Sydney, Australia",
    },
  },
  {
    name: "UXLx: User Experience Lisbon",
    description: "UI / UX conference in Lisbon, Portugal",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisbon",
        addressRegion: "Portugal",
      },
      name: "Lisbon, Portugal",
    },
  },
  {
    name: "Voxxed Days Brussels 2024",
    description: "Full-stack conference in Brussels, Belgium",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brussels",
        addressRegion: "Belgium",
      },
      name: "Brussels, Belgium",
    },
  },
  {
    name: "Devopsdays Baltimore",
    description: "DevOps conference in Baltimore, United States",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Baltimore",
        addressRegion: "United States",
      },
      name: "Baltimore, United States",
    },
  },
  {
    name: "Auscert 2024",
    description: "Cybersecurity / InfoSec conference in Gold Coast, Australia",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gold Coast",
        addressRegion: "Australia",
      },
      name: "Gold Coast, Australia",
    },
  },
  {
    name: "React Global Online Summit 2024",
    description: "React conference Online",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-22T00:00:00.000+00:00",
  },
  {
    name: "Swift Craft",
    description: "iOS / Swift conference in Folkestone, United Kingdom",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Folkestone",
        addressRegion: "United Kingdom",
      },
      name: "Folkestone, United Kingdom",
    },
  },
  {
    name: "Secure Software by Design 2024",
    description: "Full-stack conference in Arlington, United States",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Arlington",
        addressRegion: "United States",
      },
      name: "Arlington, United States",
    },
  },
  {
    name: "Mobidictum Network Tallinn",
    description: "Game dev conference in Tallinn, Estonia",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tallinn",
        addressRegion: "Estonia",
      },
      name: "Tallinn, Estonia",
    },
  },
  {
    name: "LaunchDarkly Galaxy 24",
    description:
      "Product management conference in San Francisco, United States",
    startDate: "2024-05-21T00:00:00.000+00:00",
    endDate: "2024-05-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "App.js Conf 2024",
    description: "React conference in Krakow, Poland",
    startDate: "2024-05-22T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "C++ Russia",
    description: "C/C++ conference in Moscow, Russia",
    startDate: "2024-05-22T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Moscow",
        addressRegion: "Russia",
      },
      name: "Moscow, Russia",
    },
  },
  {
    name: "KotlinConf 2024",
    description: "Kotlin conference in Copenhagen, Denmark",
    startDate: "2024-05-22T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Copenhagen",
        addressRegion: "Denmark",
      },
      name: "Copenhagen, Denmark",
    },
  },
  {
    name: "Machine Learning Day",
    description: "AI / ML conference Online",
    startDate: "2024-05-22T00:00:00.000+00:00",
    endDate: "2024-05-22T00:00:00.000+00:00",
  },
  {
    name: "PyCon Italia 2024",
    description: "Python conference in Florence, Italy",
    startDate: "2024-05-22T00:00:00.000+00:00",
    endDate: "2024-05-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Florence",
        addressRegion: "Italy",
      },
      name: "Florence, Italy",
    },
  },
  {
    name: "TEQnation 2024",
    description: "Full-stack conference in Utrecht, Netherlands",
    startDate: "2024-05-22T00:00:00.000+00:00",
    endDate: "2024-05-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Utrecht",
        addressRegion: "Netherlands",
      },
      name: "Utrecht, Netherlands",
    },
  },
  {
    name: "CDAO France",
    description: "Data / Database conference in Paris, France",
    startDate: "2024-05-22T00:00:00.000+00:00",
    endDate: "2024-05-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "KCD New York 2024",
    description: "Docker / Kubernetes conference in New York, United States",
    startDate: "2024-05-22T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "Conf42: AI and Machine Learning 2024",
    description: "AI / ML conference Online",
    startDate: "2024-05-23T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
  },
  {
    name: "DevDays Europe 2024",
    description: "Full-stack conference in Vilnius, Lithuania",
    startDate: "2024-05-23T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vilnius",
        addressRegion: "Lithuania",
      },
      name: "Vilnius, Lithuania",
    },
  },
  {
    name: "Devops Pro Europe 2024",
    description: "DevOps conference in Vilnius, Lithuania",
    startDate: "2024-05-23T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vilnius",
        addressRegion: "Lithuania",
      },
      name: "Vilnius, Lithuania",
    },
  },
  {
    name: "JSHeroes 2024",
    description: "JavaScript conference in Cluj-Napoca, Romania",
    startDate: "2024-05-23T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cluj-Napoca",
        addressRegion: "Romania",
      },
      name: "Cluj-Napoca, Romania",
    },
  },
  {
    name: "NG Belgrade Conf 2024",
    description: "Angular conference in Belgrade, Serbia",
    startDate: "2024-05-23T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belgrade",
        addressRegion: "Serbia",
      },
      name: "Belgrade, Serbia",
    },
  },
  {
    name: "ICPAC Mediterranean Finance Summit 2024",
    description: "Fintech conference in Limassol, Cyprus",
    startDate: "2024-05-23T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Limassol",
        addressRegion: "Cyprus",
      },
      name: "Limassol, Cyprus",
    },
  },
  {
    name: "Moar Serverless!! 2024",
    description: "Serverless conference Online",
    startDate: "2024-05-23T00:00:00.000+00:00",
    endDate: "2024-05-23T00:00:00.000+00:00",
  },
  {
    name: "From Business to Buttons 2024",
    description: "UI / UX conference in Stockholm, Sweden",
    startDate: "2024-05-24T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "ServerlessDays ANZ 2024",
    description: "Serverless conference in Auckland, New Zealand",
    startDate: "2024-05-24T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Auckland",
        addressRegion: "New Zealand",
      },
      name: "Auckland, New Zealand",
    },
  },
  {
    name: "ICMLT 2024",
    description: "AI / ML conference in Oslo, Norway",
    startDate: "2024-05-24T00:00:00.000+00:00",
    endDate: "2024-05-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressRegion: "Norway",
      },
      name: "Oslo, Norway",
    },
  },
  {
    name: "AFUP Day Lille 024",
    description: "PHP conference in Lille, France",
    startDate: "2024-05-24T00:00:00.000+00:00",
    endDate: "2024-05-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lille",
        addressRegion: "France",
      },
      name: "Lille, France",
    },
  },
  {
    name: "Data Saturday Stockholm 2024",
    description: "Data / Database conference in Stockholm, Sweden",
    startDate: "2024-05-25T00:00:00.000+00:00",
    endDate: "2024-05-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "dotNed Saturday NL",
    description: ".NET conference in Hilversum, Netherlands",
    startDate: "2024-05-25T00:00:00.000+00:00",
    endDate: "2024-05-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hilversum",
        addressRegion: "Netherlands",
      },
      name: "Hilversum, Netherlands",
    },
  },
  {
    name: "Highload fwdays'24",
    description: "Software architecture conference in Kyiv, Ukraine",
    startDate: "2024-05-25T00:00:00.000+00:00",
    endDate: "2024-05-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kyiv",
        addressRegion: "Ukraine",
      },
      name: "Kyiv, Ukraine",
    },
  },
  {
    name: "AWS Community Day Tashkent",
    description: "AWS conference in Tashkent, Uzbekistan",
    startDate: "2024-05-25T00:00:00.000+00:00",
    endDate: "2024-05-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tashkent",
        addressRegion: "Uzbekistan",
      },
      name: "Tashkent, Uzbekistan",
    },
  },
  {
    name: "Power Platform Developer Summit",
    description: "Microsoft conference in London, United Kingdom",
    startDate: "2024-05-25T00:00:00.000+00:00",
    endDate: "2024-05-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "M365 PHILLY 2024",
    description: "Microsoft conference in Malvern, United States",
    startDate: "2024-05-25T00:00:00.000+00:00",
    endDate: "2024-05-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malvern",
        addressRegion: "United States",
      },
      name: "Malvern, United States",
    },
  },
  {
    name: "Bitcoin Ireland 2024",
    description: "Crypto / Blockchain conference in Dublin, Ireland",
    startDate: "2024-05-25T00:00:00.000+00:00",
    endDate: "2024-05-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressRegion: "Ireland",
      },
      name: "Dublin, Ireland",
    },
  },
  {
    name: "GopherDay Taiwan",
    description: "Golang conference in Taipei, Taiwan",
    startDate: "2024-05-25T00:00:00.000+00:00",
    endDate: "2024-05-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Taipei",
        addressRegion: "Taiwan",
      },
      name: "Taipei, Taiwan",
    },
  },
  {
    name: "DevOpsDays Montréal 2024",
    description: "DevOps conference in Montreal, Canada",
    startDate: "2024-05-27T00:00:00.000+00:00",
    endDate: "2024-05-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montreal",
        addressRegion: "Canada",
      },
      name: "Montreal, Canada",
    },
  },
  {
    name: "Domain-Driven Design Europe 2024",
    description: "DDD conference in Amsterdam, Netherlands",
    startDate: "2024-05-27T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "International PHP Conference",
    description: "PHP conference in Berlin, Germany",
    startDate: "2024-05-27T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "International PHP Conference Online",
    description: "PHP conference Online",
    startDate: "2024-05-27T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
  },
  {
    name: "Lambda Days 2024",
    description: "Functional programming conference in Krakow, Poland",
    startDate: "2024-05-27T00:00:00.000+00:00",
    endDate: "2024-05-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "Webinale 2024",
    description: "Web / Frontend conference in Berlin, Germany",
    startDate: "2024-05-27T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Webinale 2024 Online",
    description: "Web / Frontend conference Online",
    startDate: "2024-05-27T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
  },
  {
    name: "BlockSplit 2024",
    description: "Web3 conference in Split, Croatia",
    startDate: "2024-05-27T00:00:00.000+00:00",
    endDate: "2024-05-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Split",
        addressRegion: "Croatia",
      },
      name: "Split, Croatia",
    },
  },
  {
    name: "Yeur Architect Dreamin’ 2024",
    description: "Salesforce conference in Berlin, Germany",
    startDate: "2024-05-27T00:00:00.000+00:00",
    endDate: "2024-05-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "CONFidence 2024",
    description: "Cybersecurity / InfoSec conference in Krakow, Poland",
    startDate: "2024-05-27T00:00:00.000+00:00",
    endDate: "2024-05-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "expo:QA",
    description: "Testing / QA conference in Madrid, Spain",
    startDate: "2024-05-28T00:00:00.000+00:00",
    endDate: "2024-05-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madrid",
        addressRegion: "Spain",
      },
      name: "Madrid, Spain",
    },
  },
  {
    name: "Apidays Helsinki & North",
    description: "API conference in Helsinki, Finland",
    startDate: "2024-05-28T00:00:00.000+00:00",
    endDate: "2024-05-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Helsinki",
        addressRegion: "Finland",
      },
      name: "Helsinki, Finland",
    },
  },
  {
    name: "jPrime",
    description: "Java conference in Sofia, Bulgaria",
    startDate: "2024-05-28T00:00:00.000+00:00",
    endDate: "2024-05-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sofia",
        addressRegion: "Bulgaria",
      },
      name: "Sofia, Bulgaria",
    },
  },
  {
    name: "QA Global Summit 24",
    description: "Testing / QA conference Online",
    startDate: "2024-05-28T00:00:00.000+00:00",
    endDate: "2024-05-29T00:00:00.000+00:00",
  },
  {
    name: "Hardwear.io",
    description:
      "Cybersecurity / InfoSec conference in Santa Clara, United States",
    startDate: "2024-05-28T00:00:00.000+00:00",
    endDate: "2024-06-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santa Clara",
        addressRegion: "United States",
      },
      name: "Santa Clara, United States",
    },
  },
  {
    name: "NFC",
    description: "Web3 conference in Lisbon, Portugal",
    startDate: "2024-05-28T00:00:00.000+00:00",
    endDate: "2024-05-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisbon",
        addressRegion: "Portugal",
      },
      name: "Lisbon, Portugal",
    },
  },
  {
    name: "Consensus 2024",
    description: "Crypto / Blockchain conference in Austin, United States",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "MakeIT 2024 & JCON Slovenia 2024",
    description: "Java conference in Portoroz, Slovenia",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portoroz",
        addressRegion: "Slovenia",
      },
      name: "Portoroz, Slovenia",
    },
  },
  {
    name: "Neos Conference",
    description: "Full-stack conference in Karlsruhe, Germany",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-06-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karlsruhe",
        addressRegion: "Germany",
      },
      name: "Karlsruhe, Germany",
    },
  },
  {
    name: "plSwift 2024",
    description: "iOS / Swift conference in Krakow, Poland",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-05-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "Test Automation Days",
    description: "Testing / QA conference in Rotterdam, Netherlands",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-05-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rotterdam",
        addressRegion: "Netherlands",
      },
      name: "Rotterdam, Netherlands",
    },
  },
  {
    name: "AI Dev Summit 2024",
    description: "AI / ML conference in San Francisco, United States",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-05-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "Cybersec Europe",
    description: "Cybersecurity / InfoSec conference in Brussels, Belgium",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-05-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brussels",
        addressRegion: "Belgium",
      },
      name: "Brussels, Belgium",
    },
  },
  {
    name: "UX Scotland",
    description: "UI / UX conference in Edinburgh, United Kingdom",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Edinburgh",
        addressRegion: "United Kingdom",
      },
      name: "Edinburgh, United Kingdom",
    },
  },
  {
    name: "BSides Barcelona 2024",
    description: "Cybersecurity / InfoSec conference in Barcelona, Spain",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-05-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "plDroid 2024",
    description: "Android conference in Krakow, Poland",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-05-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "GITEX AFRICA",
    description: "Tech conference in Marrakech, Morocco",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Marrakech",
        addressRegion: "Morocco",
      },
      name: "Marrakech, Morocco",
    },
  },
  {
    name: "CloudConf 2024",
    description: "Cloud conference in Turin, Italy",
    startDate: "2024-05-29T00:00:00.000+00:00",
    endDate: "2024-05-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Turin",
        addressRegion: "Italy",
      },
      name: "Turin, Italy",
    },
  },
  {
    name: "Craft Conference 2024",
    description: "Full-stack conference in Budapest, Hungary",
    startDate: "2024-05-30T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Budapest",
        addressRegion: "Hungary",
      },
      name: "Budapest, Hungary",
    },
  },
  {
    name: "Spring I/O 2024",
    description: "Java conference in Barcelona, Spain",
    startDate: "2024-05-30T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "Texas Dreamin'",
    description: "Salesforce conference in Austin, United States",
    startDate: "2024-05-30T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "App Growth Summit Paris 2024",
    description: "Mobile conference in Paris, France",
    startDate: "2024-05-30T00:00:00.000+00:00",
    endDate: "2024-05-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Blue Ridge Ruby",
    description: "Ruby conference in Asheville, United States",
    startDate: "2024-05-30T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Asheville",
        addressRegion: "United States",
      },
      name: "Asheville, United States",
    },
  },
  {
    name: "Gulaschprogrammiernacht",
    description: "Cybersecurity / InfoSec conference in Karlsruhe, Germany",
    startDate: "2024-05-30T00:00:00.000+00:00",
    endDate: "2024-06-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karlsruhe",
        addressRegion: "Germany",
      },
      name: "Karlsruhe, Germany",
    },
  },
  {
    name: "Data Engineering Summit",
    description: "Data / Database conference in Bengaluru, India",
    startDate: "2024-05-30T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "Game Access Conference",
    description: "Game dev conference in Brno, Czech Republic",
    startDate: "2024-05-31T00:00:00.000+00:00",
    endDate: "2024-06-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brno",
        addressRegion: "Czech Republic",
      },
      name: "Brno, Czech Republic",
    },
  },
  {
    name: "rubyday 2024",
    description: "Ruby conference in Verona, Italy",
    startDate: "2024-05-31T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Verona",
        addressRegion: "Italy",
      },
      name: "Verona, Italy",
    },
  },
  {
    name: "Finticipate Vol.3",
    description: "Fintech conference in Belgrade, Serbia",
    startDate: "2024-05-31T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belgrade",
        addressRegion: "Serbia",
      },
      name: "Belgrade, Serbia",
    },
  },
  {
    name: "Tabya Conf 2024",
    description: "AI / ML conference in Taggia, Italy",
    startDate: "2024-05-31T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Taggia",
        addressRegion: "Italy",
      },
      name: "Taggia, Italy",
    },
  },
  {
    name: "Hampton Roads DevFest 2024",
    description: "Full-stack conference in Virginia Beach, United States",
    startDate: "2024-05-31T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Virginia Beach",
        addressRegion: "United States",
      },
      name: "Virginia Beach, United States",
    },
  },
  {
    name: "React Native Heroes 2024",
    description: "React conference in Turin, Italy",
    startDate: "2024-05-31T00:00:00.000+00:00",
    endDate: "2024-05-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Turin",
        addressRegion: "Italy",
      },
      name: "Turin, Italy",
    },
  },
  {
    name: "BSides Cheltenham",
    description:
      "Cybersecurity / InfoSec conference in Cheltenham, United Kingdom",
    startDate: "2024-06-01T00:00:00.000+00:00",
    endDate: "2024-06-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cheltenham",
        addressRegion: "United Kingdom",
      },
      name: "Cheltenham, United Kingdom",
    },
  },
  {
    name: "WordCamp Montclair 2024",
    description: "Wordpress conference in Montclair, United States",
    startDate: "2024-06-01T00:00:00.000+00:00",
    endDate: "2024-06-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montclair",
        addressRegion: "United States",
      },
      name: "Montclair, United States",
    },
  },
  {
    name: "Belgrade Blockchain Week",
    description: "Crypto / Blockchain conference in Belgrade, Serbia",
    startDate: "2024-06-01T00:00:00.000+00:00",
    endDate: "2024-06-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belgrade",
        addressRegion: "Serbia",
      },
      name: "Belgrade, Serbia",
    },
  },
  {
    name: "BSides Buffalo 2024",
    description: "Cybersecurity / InfoSec conference in Buffalo, United States",
    startDate: "2024-06-01T00:00:00.000+00:00",
    endDate: "2024-06-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buffalo",
        addressRegion: "United States",
      },
      name: "Buffalo, United States",
    },
  },
  {
    name: "PolyCloud",
    description: "Cloud conference in Montpellier, France",
    startDate: "2024-06-01T00:00:00.000+00:00",
    endDate: "2024-06-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montpellier",
        addressRegion: "France",
      },
      name: "Montpellier, France",
    },
  },
  {
    name: "T-DOSE",
    description: "Open Source conference in Geldrop, Netherlands",
    startDate: "2024-06-01T00:00:00.000+00:00",
    endDate: "2024-06-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Geldrop",
        addressRegion: "Netherlands",
      },
      name: "Geldrop, Netherlands",
    },
  },
  {
    name: "Agile + DevOps West 2024",
    description: "Agile conference in Las Vegas, United States",
    startDate: "2024-06-02T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Agile + DevOps West 2024 Online",
    description: "Agile conference Online",
    startDate: "2024-06-02T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
  },
  {
    name: "Cisco Live 2024",
    description: "Telecom / 5G conference in Las Vegas, United States",
    startDate: "2024-06-02T00:00:00.000+00:00",
    endDate: "2024-06-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "AI Con USA",
    description: "AI / ML conference in Las Vegas, United States and Online",
    startDate: "2024-06-02T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Community Over Code EU",
    description: "Open Source conference in Bratislava, Slovakia",
    startDate: "2024-06-03T00:00:00.000+00:00",
    endDate: "2024-06-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bratislava",
        addressRegion: "Slovakia",
      },
      name: "Bratislava, Slovakia",
    },
  },
  {
    name: "Future of Work USA",
    description:
      "HR / Hiring / Recruiting conference in New York, United States",
    startDate: "2024-06-03T00:00:00.000+00:00",
    endDate: "2024-06-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "Gartner Security & Risk Management Summit",
    description:
      "Cybersecurity / InfoSec conference in National Harbor, United States",
    startDate: "2024-06-03T00:00:00.000+00:00",
    endDate: "2024-06-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "National Harbor",
        addressRegion: "United States",
      },
      name: "National Harbor, United States",
    },
  },
  {
    name: "ETH Belgrade",
    description: "Crypto / Blockchain conference in Belgrade, Serbia",
    startDate: "2024-06-03T00:00:00.000+00:00",
    endDate: "2024-06-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belgrade",
        addressRegion: "Serbia",
      },
      name: "Belgrade, Serbia",
    },
  },
  {
    name: "SAP Sapphire Orlando",
    description: "SAP conference in Orlando, United States",
    startDate: "2024-06-03T00:00:00.000+00:00",
    endDate: "2024-06-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "United States",
      },
      name: "Orlando, United States",
    },
  },
  {
    name: "HasrauCon",
    description: "API conference Online",
    startDate: "2024-06-03T00:00:00.000+00:00",
    endDate: "2024-06-06T00:00:00.000+00:00",
  },
  {
    name: "Experts Live Netherlands 2024",
    description: "Microsoft conference in Nieuwegein, Netherlands",
    startDate: "2024-06-04T00:00:00.000+00:00",
    endDate: "2024-06-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nieuwegein",
        addressRegion: "Netherlands",
      },
      name: "Nieuwegein, Netherlands",
    },
  },
  {
    name: "Money20/20 Europe",
    description: "Fintech conference in Amsterdam, Netherlands",
    startDate: "2024-06-04T00:00:00.000+00:00",
    endDate: "2024-06-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "U.S. Fintech Symposium",
    description: "Fintech conference in Chicago, United States",
    startDate: "2024-06-04T00:00:00.000+00:00",
    endDate: "2024-06-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "JNation 2024",
    description: "Full-stack conference in Coimbra, Portugal",
    startDate: "2024-06-04T00:00:00.000+00:00",
    endDate: "2024-06-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbra",
        addressRegion: "Portugal",
      },
      name: "Coimbra, Portugal",
    },
  },
  {
    name: "Infosecurity Europe",
    description: "Cybersecurity / InfoSec conference in London, United Kingdom",
    startDate: "2024-06-04T00:00:00.000+00:00",
    endDate: "2024-06-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "CDAO Canada Public Sector",
    description: "Data / Database conference in Ottawa, Canada",
    startDate: "2024-06-04T00:00:00.000+00:00",
    endDate: "2024-06-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ottawa",
        addressRegion: "Canada",
      },
      name: "Ottawa, Canada",
    },
  },
  {
    name: "ICSA 2024",
    description: "Software architecture conference in Hyderabad, India",
    startDate: "2024-06-04T00:00:00.000+00:00",
    endDate: "2024-06-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "India",
      },
      name: "Hyderabad, India",
    },
  },
  {
    name: "SAP Sapphire Virtual",
    description: "SAP conference Online",
    startDate: "2024-06-04T00:00:00.000+00:00",
    endDate: "2024-06-05T00:00:00.000+00:00",
  },
  {
    name: "Xen Project Summit 2024",
    description: "Linux / OS conference in Lisbon, Portugal",
    startDate: "2024-06-04T00:00:00.000+00:00",
    endDate: "2024-06-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisbon",
        addressRegion: "Portugal",
      },
      name: "Lisbon, Portugal",
    },
  },
  {
    name: "DevOpsDays Ukraine: Let's Talk Security",
    description: "DevOps conference Online",
    startDate: "2024-06-04T00:00:00.000+00:00",
    endDate: "2024-06-05T00:00:00.000+00:00",
  },
  {
    name: "XP 2024",
    description: "Agile conference in Bolzano, Italy",
    startDate: "2024-06-04T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bolzano",
        addressRegion: "Italy",
      },
      name: "Bolzano, Italy",
    },
  },
  {
    name: "DjangoCon.eu Vigo 2024",
    description: "Django conference in Vigo, Spain",
    startDate: "2024-06-05T00:00:00.000+00:00",
    endDate: "2024-06-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vigo",
        addressRegion: "Spain",
      },
      name: "Vigo, Spain",
    },
  },
  {
    name: "Front End Performance Day",
    description: "Web / Frontend conference Online",
    startDate: "2024-06-05T00:00:00.000+00:00",
    endDate: "2024-06-05T00:00:00.000+00:00",
  },
  {
    name: "Generative AI Middle East Summit 2024",
    description: "AI / ML conference in Dubai, United Arab Emirates",
    startDate: "2024-06-05T00:00:00.000+00:00",
    endDate: "2024-06-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "Nordic Testing Days",
    description: "Testing / QA conference in Tallinn, Estonia",
    startDate: "2024-06-05T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tallinn",
        addressRegion: "Estonia",
      },
      name: "Tallinn, Estonia",
    },
  },
  {
    name: "Upstream 2024",
    description: "Open Source conference Online",
    startDate: "2024-06-05T00:00:00.000+00:00",
    endDate: "2024-06-05T00:00:00.000+00:00",
  },
  {
    name: "Cyber Security & Cloud Congress North America",
    description:
      "Cybersecurity / InfoSec conference in Santa Clara, United States",
    startDate: "2024-06-05T00:00:00.000+00:00",
    endDate: "2024-06-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santa Clara",
        addressRegion: "United States",
      },
      name: "Santa Clara, United States",
    },
  },
  {
    name: "AI Dev Summit 2024 Online",
    description: "AI / ML conference Online",
    startDate: "2024-06-05T00:00:00.000+00:00",
    endDate: "2024-06-06T00:00:00.000+00:00",
  },
  {
    name: "UI5con Germany",
    description: "SAP conference in St. Leon-Rot, Germany",
    startDate: "2024-06-05T00:00:00.000+00:00",
    endDate: "2024-06-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "St. Leon-Rot",
        addressRegion: "Germany",
      },
      name: "St. Leon-Rot, Germany",
    },
  },
  {
    name: "TechEx North America",
    description: "Tech conference in Santa Clara, United States",
    startDate: "2024-06-05T00:00:00.000+00:00",
    endDate: "2024-06-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santa Clara",
        addressRegion: "United States",
      },
      name: "Santa Clara, United States",
    },
  },
  {
    name: "Icinga Summit 2024",
    description: "SRE conference in Berlin, Germany",
    startDate: "2024-06-05T00:00:00.000+00:00",
    endDate: "2024-06-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "CityJS Athens",
    description: "JavaScript conference in Athens, Greece",
    startDate: "2024-06-06T00:00:00.000+00:00",
    endDate: "2024-06-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Athens",
        addressRegion: "Greece",
      },
      name: "Athens, Greece",
    },
  },
  {
    name: "Droidcon San Francisco",
    description: "Android conference in San Francisco, United States",
    startDate: "2024-06-06T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "Days of Knowledge Central 2024",
    description: "Tech conference in Darmstadt, Germany",
    startDate: "2024-06-06T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Darmstadt",
        addressRegion: "Germany",
      },
      name: "Darmstadt, Germany",
    },
  },
  {
    name: "KCD Czech & Slovak 2024",
    description: "Docker / Kubernetes conference in Prague, Czech Republic",
    startDate: "2024-06-06T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prague",
        addressRegion: "Czech Republic",
      },
      name: "Prague, Czech Republic",
    },
  },
  {
    name: "SymfonyOnline June",
    description: "PHP conference Online",
    startDate: "2024-06-06T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
  },
  {
    name: "GreaTest Quality Convention 2024",
    description: "Testing / QA conference in Zurich, Switzerland",
    startDate: "2024-06-07T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zurich",
        addressRegion: "Switzerland",
      },
      name: "Zurich, Switzerland",
    },
  },
  {
    name: "WeTest.Athens 2024",
    description: "Testing / QA conference in Athens, Greece",
    startDate: "2024-06-07T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Athens",
        addressRegion: "Greece",
      },
      name: "Athens, Greece",
    },
  },
  {
    name: "uxday 2024",
    description: "UI / UX conference in Faenza, Italy",
    startDate: "2024-06-07T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Faenza",
        addressRegion: "Italy",
      },
      name: "Faenza, Italy",
    },
  },
  {
    name: "Pycon Colombia 2024",
    description: "Python conference in Medellin, Colombia",
    startDate: "2024-06-07T00:00:00.000+00:00",
    endDate: "2024-06-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medellin",
        addressRegion: "Colombia",
      },
      name: "Medellin, Colombia",
    },
  },
  {
    name: "Fork it! Community",
    description: "Full-stack conference in Rouen, France",
    startDate: "2024-06-07T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rouen",
        addressRegion: "France",
      },
      name: "Rouen, France",
    },
  },
  {
    name: "HackInBo",
    description: "CTO conference in Bologna, Italy",
    startDate: "2024-06-07T00:00:00.000+00:00",
    endDate: "2024-06-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bologna",
        addressRegion: "Italy",
      },
      name: "Bologna, Italy",
    },
  },
  {
    name: "Data Saturday Croatia 2024",
    description: "Data / Database conference in Zagreb, Croatia",
    startDate: "2024-06-08T00:00:00.000+00:00",
    endDate: "2024-06-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zagreb",
        addressRegion: "Croatia",
      },
      name: "Zagreb, Croatia",
    },
  },
  {
    name: "ZuriHac 2024",
    description: "Haskell conference in Rapperswil-Jona, Switzerland",
    startDate: "2024-06-08T00:00:00.000+00:00",
    endDate: "2024-06-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rapperswil-Jona",
        addressRegion: "Switzerland",
      },
      name: "Rapperswil-Jona, Switzerland",
    },
  },
  {
    name: "ZuriHac 2024",
    description: "Haskell hackaton in Zurich, Switzerland",
    startDate: "2024-06-08T00:00:00.000+00:00",
    endDate: "2024-06-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zurich",
        addressRegion: "Switzerland",
      },
      name: "Zurich, Switzerland",
    },
  },
  {
    name: "Berlin Buzzwords",
    description: "Data / Database conference in Berlin, Germany",
    startDate: "2024-06-09T00:00:00.000+00:00",
    endDate: "2024-06-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "AWS re:Inforce 2024",
    description: "AWS conference in Philadelphia, United States",
    startDate: "2024-06-10T00:00:00.000+00:00",
    endDate: "2024-06-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Philadelphia",
        addressRegion: "United States",
      },
      name: "Philadelphia, United States",
    },
  },
  {
    name: "Code Europe 2024",
    description: "Full-stack conference in Krakow, Poland",
    startDate: "2024-06-10T00:00:00.000+00:00",
    endDate: "2024-06-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "DeFi Retreat Europe 2024",
    description: "Fintech conference in Paris, France",
    startDate: "2024-06-10T00:00:00.000+00:00",
    endDate: "2024-06-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Fintech Week London",
    description: "Fintech conference in London, United Kingdom",
    startDate: "2024-06-10T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "GOTO Amsterdam 2024",
    description: "Full-stack conference in Amsterdam, Netherlands",
    startDate: "2024-06-10T00:00:00.000+00:00",
    endDate: "2024-06-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "NDC Oslo 2024",
    description: "Full-stack conference in Oslo, Norway",
    startDate: "2024-06-10T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressRegion: "Norway",
      },
      name: "Oslo, Norway",
    },
  },
  {
    name: "PlatformCon 2024",
    description: "API conference Online",
    startDate: "2024-06-10T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
  },
  {
    name: "Mad Summit 2024",
    description: "API conference in Munich, Germany",
    startDate: "2024-06-10T00:00:00.000+00:00",
    endDate: "2024-06-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "INTEGRATE 2024",
    description: "Azure conference in London, United Kingdom",
    startDate: "2024-06-10T00:00:00.000+00:00",
    endDate: "2024-06-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Budapest Data + ML Forum",
    description: "Data / Database conference in Budapest, Hungary",
    startDate: "2024-06-10T00:00:00.000+00:00",
    endDate: "2024-06-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Budapest",
        addressRegion: "Hungary",
      },
      name: "Budapest, Hungary",
    },
  },
  {
    name: "Codegarden 2024",
    description: ".NET conference in Odense, Denmark",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Odense",
        addressRegion: "Denmark",
      },
      name: "Odense, Denmark",
    },
  },
  {
    name: "EuroSTAR 2024",
    description: "Testing / QA conference in Stockholm, Sweden",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "European Power Platform Conference 2024",
    description: "Microsoft conference in Brussels, Belgium",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brussels",
        addressRegion: "Belgium",
      },
      name: "Brussels, Belgium",
    },
  },
  {
    name: "CDAO Mexico",
    description: "Data / Database conference in Mexico City, Mexico",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mexico City",
        addressRegion: "Mexico",
      },
      name: "Mexico City, Mexico",
    },
  },
  {
    name: "UI/UX Global Summit 24",
    description: "UI / UX conference Online",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-12T00:00:00.000+00:00",
  },
  {
    name: "POSETTE: An Event for Postgres 2024",
    description: "Postgres conference Online",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-13T00:00:00.000+00:00",
  },
  {
    name: "Experts Live Germany 2024",
    description: "Microsoft conference in Erfurt, Germany",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Erfurt",
        addressRegion: "Germany",
      },
      name: "Erfurt, Germany",
    },
  },
  {
    name: "SAP Sapphire Barcelona",
    description: "SAP conference in Barcelona, Spain",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "Checkmk Conference #10",
    description: "SRE conference in Munich, Germany",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "Ignite Summit 2024",
    description: "Software architecture conference Online",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-11T00:00:00.000+00:00",
  },
  {
    name: "StaffPlus London",
    description: "Tech leadership conference in London, United Kingdom",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "OW2con'24",
    description: "Open Source conference in Paris, France",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "WN Conference Istanbul'24",
    description: "Game dev conference in Istanbul, Turkey",
    startDate: "2024-06-11T00:00:00.000+00:00",
    endDate: "2024-06-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressRegion: "Turkey",
      },
      name: "Istanbul, Turkey",
    },
  },
  {
    name: "CIPD Festival of Work",
    description:
      "HR / Hiring / Recruiting conference in London, United Kingdom",
    startDate: "2024-06-12T00:00:00.000+00:00",
    endDate: "2024-06-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Queer Tech Day",
    description: "Tech conference Online",
    startDate: "2024-06-12T00:00:00.000+00:00",
    endDate: "2024-06-12T00:00:00.000+00:00",
  },
  {
    name: "RenderATL 2024",
    description: "Tech conference in Atlanta, United States",
    startDate: "2024-06-12T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "United States",
      },
      name: "Atlanta, United States",
    },
  },
  {
    name: "Romanian Testing Conference",
    description: "Testing / QA conference in Cluj-Napoca, Romania",
    startDate: "2024-06-12T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cluj-Napoca",
        addressRegion: "Romania",
      },
      name: "Cluj-Napoca, Romania",
    },
  },
  {
    name: "AppSec SoCal",
    description:
      "Cybersecurity / InfoSec conference in Santa Monica, United States",
    startDate: "2024-06-12T00:00:00.000+00:00",
    endDate: "2024-06-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santa Monica",
        addressRegion: "United States",
      },
      name: "Santa Monica, United States",
    },
  },
  {
    name: "Fintech + Insurtech Generations",
    description: "Fintech conference in Charlotte, United States",
    startDate: "2024-06-12T00:00:00.000+00:00",
    endDate: "2024-06-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Charlotte",
        addressRegion: "United States",
      },
      name: "Charlotte, United States",
    },
  },
  {
    name: "Scaling Agile Summit 2024",
    description: "Agile conference Online",
    startDate: "2024-06-12T00:00:00.000+00:00",
    endDate: "2024-06-13T00:00:00.000+00:00",
  },
  {
    name: "ACE!",
    description: "Agile conference in Krakow, Poland",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "Conf42: Observability 2024",
    description: "DevOps conference Online",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-13T00:00:00.000+00:00",
  },
  {
    name: "Future Frontend",
    description: "Web / Frontend conference in Helsinki, Finland",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Helsinki",
        addressRegion: "Finland",
      },
      name: "Helsinki, Finland",
    },
  },
  {
    name: "JSNation",
    description: "JavaScript conference in Amsterdam, Netherlands",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "Mobidictum Meetup Tallinn 2024",
    description: "Game dev conference in Tallinn, Estonia",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tallinn",
        addressRegion: "Estonia",
      },
      name: "Tallinn, Estonia",
    },
  },
  {
    name: "THE MERGE!",
    description: "Tech conference in Berlin, Germany",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "WordCamp Europe 2024",
    description: "Wordpress conference in Torino, Italy",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Torino",
        addressRegion: "Italy",
      },
      name: "Torino, Italy",
    },
  },
  {
    name: "Data Céilí",
    description: "Data / Database conference in Dublin, Ireland",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressRegion: "Ireland",
      },
      name: "Dublin, Ireland",
    },
  },
  {
    name: "ServerlessDays Milano",
    description: "Serverless conference in Milan, Italy",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Milan",
        addressRegion: "Italy",
      },
      name: "Milan, Italy",
    },
  },
  {
    name: "BC TechDays",
    description: "Microsoft conference in Antwerp, Belgium",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antwerp",
        addressRegion: "Belgium",
      },
      name: "Antwerp, Belgium",
    },
  },
  {
    name: "Microsoft Data Platform Conference",
    description: "Microsoft conference in Copenhagen, Denmark",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Copenhagen",
        addressRegion: "Denmark",
      },
      name: "Copenhagen, Denmark",
    },
  },
  {
    name: "Barcelona Developers Conference",
    description: "Full-stack conference in Barcelona, Spain",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "KCD Zurich 2024",
    description: "Docker / Kubernetes conference in Zurich, Switzerland",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zurich",
        addressRegion: "Switzerland",
      },
      name: "Zurich, Switzerland",
    },
  },
  {
    name: "CTO Summi",
    description: "CTO conference in Madrid, Spain",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madrid",
        addressRegion: "Spain",
      },
      name: "Madrid, Spain",
    },
  },
  {
    name: "We Make Future",
    description: "Tech conference in Bologna, Italy and Online",
    startDate: "2024-06-13T00:00:00.000+00:00",
    endDate: "2024-06-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bologna",
        addressRegion: "Italy",
      },
      name: "Bologna, Italy",
    },
  },
  {
    name: "C3 Fest",
    description: "Full-stack conference in Amsterdam, Netherlands",
    startDate: "2024-06-14T00:00:00.000+00:00",
    endDate: "2024-06-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "React Summit 2024",
    description: "React conference in Amsterdam, Netherlands",
    startDate: "2024-06-14T00:00:00.000+00:00",
    endDate: "2024-06-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "PyData London 2024",
    description: "Python conference in London, United Kingdom",
    startDate: "2024-06-14T00:00:00.000+00:00",
    endDate: "2024-06-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "React Norway2024",
    description: "React conference in React Norway, Norway",
    startDate: "2024-06-14T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "React Norway",
        addressRegion: "Norway",
      },
      name: "React Norway, Norway",
    },
  },
  {
    name: "Pixel Pioneers Bristol",
    description: "Web / Frontend conference in Bristol, United Kingdom",
    startDate: "2024-06-14T00:00:00.000+00:00",
    endDate: "2024-06-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bristol",
        addressRegion: "United Kingdom",
      },
      name: "Bristol, United Kingdom",
    },
  },
  {
    name: "JavaScript fwdays'24",
    description: "JavaScript conference in Kyiv, Ukraine",
    startDate: "2024-06-15T00:00:00.000+00:00",
    endDate: "2024-06-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kyiv",
        addressRegion: "Ukraine",
      },
      name: "Kyiv, Ukraine",
    },
  },
  {
    name: "LechazoConf",
    description: "Full-stack conference in Valladolid, Mexico",
    startDate: "2024-06-15T00:00:00.000+00:00",
    endDate: "2024-06-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valladolid",
        addressRegion: "Mexico",
      },
      name: "Valladolid, Mexico",
    },
  },
  {
    name: "TechLead Conference 2024",
    description: "Tech leadership conference Online",
    startDate: "2024-06-15T00:00:00.000+00:00",
    endDate: "2024-06-19T00:00:00.000+00:00",
  },
  {
    name: "ICS Security Summit",
    description: "Cybersecurity / InfoSec conference in Orlando, United States",
    startDate: "2024-06-16T00:00:00.000+00:00",
    endDate: "2024-06-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "United States",
      },
      name: "Orlando, United States",
    },
  },
  {
    name: "CVPR 2024",
    description: "AR / VR / XR conference in Seattle, United States",
    startDate: "2024-06-17T00:00:00.000+00:00",
    endDate: "2024-06-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "GopherCon Europe 2024 Germany",
    description: "Golang conference in Berlin, Germany",
    startDate: "2024-06-17T00:00:00.000+00:00",
    endDate: "2024-06-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "JSNation Online",
    description: "JavaScript conference Online",
    startDate: "2024-06-17T00:00:00.000+00:00",
    endDate: "2024-06-17T00:00:00.000+00:00",
  },
  {
    name: "World Conference on Data Science & Statistics",
    description: "Data / Database conference in Amsterdam, Netherlands",
    startDate: "2024-06-17T00:00:00.000+00:00",
    endDate: "2024-06-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "Collision 2024",
    description: "Tech conference in Toronto, Canada",
    startDate: "2024-06-17T00:00:00.000+00:00",
    endDate: "2024-06-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: ".NET Developer Days 2024 Berlin",
    description: ".NET conference in Berlin, Germany",
    startDate: "2024-06-17T00:00:00.000+00:00",
    endDate: "2024-06-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "DevOpsCon Berlin",
    description: "DevOps conference in Berlin, Germany",
    startDate: "2024-06-17T00:00:00.000+00:00",
    endDate: "2024-06-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Agile Product Day Ferrara 2024",
    description: "Agile conference in Ferrara, Italy",
    startDate: "2024-06-17T00:00:00.000+00:00",
    endDate: "2024-06-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ferrara",
        addressRegion: "Italy",
      },
      name: "Ferrara, Italy",
    },
  },
  {
    name: "AI Conf 2024",
    description: "AI / ML conference in Milan, Italy",
    startDate: "2024-06-17T00:00:00.000+00:00",
    endDate: "2024-06-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Milan",
        addressRegion: "Italy",
      },
      name: "Milan, Italy",
    },
  },
  {
    name: "Micro Frontends Conference 2024",
    description: "Web / Frontend conference Online",
    startDate: "2024-06-17T00:00:00.000+00:00",
    endDate: "2024-06-17T00:00:00.000+00:00",
  },
  {
    name: "ICPRA2024",
    description: "AI / ML conference in Jeju Island, South Korea",
    startDate: "2024-06-18T00:00:00.000+00:00",
    endDate: "2024-06-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jeju Island",
        addressRegion: "South Korea",
      },
      name: "Jeju Island, South Korea",
    },
  },
  {
    name: "stackconf 2024",
    description: "DevOps conference in Berlin, Germany",
    startDate: "2024-06-18T00:00:00.000+00:00",
    endDate: "2024-06-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "UX Healthcare Amsterdam 2024",
    description: "UI / UX conference in Amsterdam, Netherlands",
    startDate: "2024-06-18T00:00:00.000+00:00",
    endDate: "2024-06-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "AWE USA",
    description: "AR / VR / XR conference in Long Beach, United States",
    startDate: "2024-06-18T00:00:00.000+00:00",
    endDate: "2024-06-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Long Beach",
        addressRegion: "United States",
      },
      name: "Long Beach, United States",
    },
  },
  {
    name: "Data Architecture Melbourne",
    description: "Data / Database conference in Melbourne, Australia",
    startDate: "2024-06-18T00:00:00.000+00:00",
    endDate: "2024-06-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "Australia",
      },
      name: "Melbourne, Australia",
    },
  },
  {
    name: "Mobilis In Mobile 2024",
    description: "Mobile conference in Nantes, France",
    startDate: "2024-06-18T00:00:00.000+00:00",
    endDate: "2024-06-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nantes",
        addressRegion: "France",
      },
      name: "Nantes, France",
    },
  },
  {
    name: "BSides Strasbourg",
    description: "Cybersecurity / InfoSec conference in Strasbourg, France",
    startDate: "2024-06-18T00:00:00.000+00:00",
    endDate: "2024-06-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Strasbourg",
        addressRegion: "France",
      },
      name: "Strasbourg, France",
    },
  },
  {
    name: "Buckeye Dreamin’",
    description: "Salesforce conference in Columbus, United States",
    startDate: "2024-06-19T00:00:00.000+00:00",
    endDate: "2024-06-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Columbus",
        addressRegion: "United States",
      },
      name: "Columbus, United States",
    },
  },
  {
    name: "CascadiaJS 2024",
    description: "JavaScript conference in Seattle, United States",
    startDate: "2024-06-19T00:00:00.000+00:00",
    endDate: "2024-06-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "Devopsdays Amsterdam",
    description: "DevOps conference in Amsterdam, Netherlands",
    startDate: "2024-06-19T00:00:00.000+00:00",
    endDate: "2024-06-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "Elixir Safari",
    description: "Elixir conference in Nairobi, Kenya",
    startDate: "2024-06-19T00:00:00.000+00:00",
    endDate: "2024-06-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressRegion: "Kenya",
      },
      name: "Nairobi, Kenya",
    },
  },
  {
    name: "FinOps X San Diego 2024",
    description: "Fintech conference in San Diego, United States",
    startDate: "2024-06-19T00:00:00.000+00:00",
    endDate: "2024-06-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "United States",
      },
      name: "San Diego, United States",
    },
  },
  {
    name: "Tech Summit San Francisco",
    description: "Tech conference in San Francisco, United States",
    startDate: "2024-06-19T00:00:00.000+00:00",
    endDate: "2024-06-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "RustFest Zürich 2024",
    description: "Rust conference in Zurich, Switzerland",
    startDate: "2024-06-19T00:00:00.000+00:00",
    endDate: "2024-06-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zurich",
        addressRegion: "Switzerland",
      },
      name: "Zurich, Switzerland",
    },
  },
  {
    name: "betterCode() Spring 2024",
    description: "Java conference Online",
    startDate: "2024-06-20T00:00:00.000+00:00",
    endDate: "2024-06-20T00:00:00.000+00:00",
  },
  {
    name: "Voxxed Days Luxembourg",
    description: "Full-stack conference in Mondorf-les-Bains, Luxembourg",
    startDate: "2024-06-20T00:00:00.000+00:00",
    endDate: "2024-06-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mondorf-les-Bains",
        addressRegion: "Luxembourg",
      },
      name: "Mondorf-les-Bains, Luxembourg",
    },
  },
  {
    name: "KCD Italy 2024",
    description: "Docker / Kubernetes conference in Bologna, Italy",
    startDate: "2024-06-20T00:00:00.000+00:00",
    endDate: "2024-06-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bologna",
        addressRegion: "Italy",
      },
      name: "Bologna, Italy",
    },
  },
  {
    name: "Golang Conf 2024",
    description: "Golang conference in St. Petersburg, Russia",
    startDate: "2024-06-20T00:00:00.000+00:00",
    endDate: "2024-06-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "St. Petersburg",
        addressRegion: "Russia",
      },
      name: "St. Petersburg, Russia",
    },
  },
  {
    name: "Azure Day Rome 2024",
    description: "Azure conference in Rome, Italy",
    startDate: "2024-06-21T00:00:00.000+00:00",
    endDate: "2024-06-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rome",
        addressRegion: "Italy",
      },
      name: "Rome, Italy",
    },
  },
  {
    name: "Code Beam Light",
    description: "Elixir conference in A Coruna, Spain",
    startDate: "2024-06-21T00:00:00.000+00:00",
    endDate: "2024-06-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "A Coruna",
        addressRegion: "Spain",
      },
      name: "A Coruna, Spain",
    },
  },
  {
    name: "Joy of Coding 2024",
    description: "Full-stack conference in Rotterdam, Netherlands",
    startDate: "2024-06-21T00:00:00.000+00:00",
    endDate: "2024-06-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rotterdam",
        addressRegion: "Netherlands",
      },
      name: "Rotterdam, Netherlands",
    },
  },
  {
    name: "Cyberjutsu Day 2024",
    description:
      "Cybersecurity / InfoSec conference in Washington, United States",
    startDate: "2024-06-21T00:00:00.000+00:00",
    endDate: "2024-06-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Washington",
        addressRegion: "United States",
      },
      name: "Washington, United States",
    },
  },
  {
    name: "OpenSouthCode 2024",
    description: "Open Source conference in Malaga, Spain",
    startDate: "2024-06-21T00:00:00.000+00:00",
    endDate: "2024-06-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malaga",
        addressRegion: "Spain",
      },
      name: "Malaga, Spain",
    },
  },
  {
    name: "PyCamp Leipzig 2024",
    description: "Python conference in Leipzig, Germany",
    startDate: "2024-06-22T00:00:00.000+00:00",
    endDate: "2024-06-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Leipzig",
        addressRegion: "Germany",
      },
      name: "Leipzig, Germany",
    },
  },
  {
    name: "SHRM Annual Conference & Expo 2024",
    description:
      "HR / Hiring / Recruiting conference in Chicago, United States",
    startDate: "2024-06-23T00:00:00.000+00:00",
    endDate: "2024-06-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "Digital Bankong",
    description: "Fintech conference in Boca Raton, United States",
    startDate: "2024-06-24T00:00:00.000+00:00",
    endDate: "2024-06-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boca Raton",
        addressRegion: "United States",
      },
      name: "Boca Raton, United States",
    },
  },
  {
    name: "PSConfEU 2024",
    description: "Microsoft conference in Antwerp, Belgium",
    startDate: "2024-06-24T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antwerp",
        addressRegion: "Belgium",
      },
      name: "Antwerp, Belgium",
    },
  },
  {
    name: "ReactNext 2024",
    description: "React conference in Tel Aviv, Israel",
    startDate: "2024-06-24T00:00:00.000+00:00",
    endDate: "2024-06-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tel Aviv",
        addressRegion: "Israel",
      },
      name: "Tel Aviv, Israel",
    },
  },
  {
    name: "UXPA 2024",
    description: "UI / UX conference in Fort Lauderdale, United States",
    startDate: "2024-06-24T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fort Lauderdale",
        addressRegion: "United States",
      },
      name: "Fort Lauderdale, United States",
    },
  },
  {
    name: "InfoQ Dev Summit",
    description: "Full-stack conference in Boston, United States",
    startDate: "2024-06-24T00:00:00.000+00:00",
    endDate: "2024-06-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boston",
        addressRegion: "United States",
      },
      name: "Boston, United States",
    },
  },
  {
    name: "Saint TeamLead Conf 2024",
    description: "Tech leadership conference in Saint Petersburg, Russia",
    startDate: "2024-06-24T00:00:00.000+00:00",
    endDate: "2024-06-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Saint Petersburg",
        addressRegion: "Russia",
      },
      name: "Saint Petersburg, Russia",
    },
  },
  {
    name: "PowerShell Conference Europe 2024",
    description: "Microsoft conference in Antwerp, Belgium",
    startDate: "2024-06-24T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antwerp",
        addressRegion: "Belgium",
      },
      name: "Antwerp, Belgium",
    },
  },
  {
    name: "OWASP Global AppSec Lisbon 2024",
    description: "Cybersecurity / InfoSec conference in Lisbon, Portugal",
    startDate: "2024-06-24T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisbon",
        addressRegion: "Portugal",
      },
      name: "Lisbon, Portugal",
    },
  },
  {
    name: "WasmCon",
    description: "Web / Frontend conference in Seattle, United States",
    startDate: "2024-06-24T00:00:00.000+00:00",
    endDate: "2024-06-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "United States",
      },
      name: "Seattle, United States",
    },
  },
  {
    name: "NodeTLV 2024",
    description: "JavaScript conference in Tel Aviv, Israel",
    startDate: "2024-06-25T00:00:00.000+00:00",
    endDate: "2024-06-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tel Aviv",
        addressRegion: "Israel",
      },
      name: "Tel Aviv, Israel",
    },
  },
  {
    name: "Data Architecture Sydney",
    description: "Data / Database conference in Sydney, Australia",
    startDate: "2024-06-25T00:00:00.000+00:00",
    endDate: "2024-06-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "Australia",
      },
      name: "Sydney, Australia",
    },
  },
  {
    name: "MLCon: CHATGPT",
    description: "ChatGPT conference in Munich, Germany",
    startDate: "2024-06-25T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "MLCon: CHATGPT Online",
    description: "ChatGPT conference Online",
    startDate: "2024-06-25T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
  },
  {
    name: "AI Risk Summit",
    description: "AI / ML conference in Half Moon Bay, United States",
    startDate: "2024-06-25T00:00:00.000+00:00",
    endDate: "2024-06-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Half Moon Bay",
        addressRegion: "United States",
      },
      name: "Half Moon Bay, United States",
    },
  },
  {
    name: "AWS Summit Washington DC",
    description: "AWS conference in Washington, United States",
    startDate: "2024-06-26T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Washington",
        addressRegion: "United States",
      },
      name: "Washington, United States",
    },
  },
  {
    name: "AWS Summit Washington",
    description: "AWS conference in Washington, United States",
    startDate: "2024-06-26T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Washington",
        addressRegion: "United States",
      },
      name: "Washington, United States",
    },
  },
  {
    name: "JSConfBP 2024",
    description: "JavaScript conference in Budapest, Hungary",
    startDate: "2024-06-26T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Budapest",
        addressRegion: "Hungary",
      },
      name: "Budapest, Hungary",
    },
  },
  {
    name: "MWC Shanghai 2024",
    description: "Telecom / 5G conference in Shanghai, China",
    startDate: "2024-06-26T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shanghai",
        addressRegion: "China",
      },
      name: "Shanghai, China",
    },
  },
  {
    name: "Experts Live Austria 2024",
    description: "Azure conference in Linz, Austria",
    startDate: "2024-06-26T00:00:00.000+00:00",
    endDate: "2024-06-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Linz",
        addressRegion: "Austria",
      },
      name: "Linz, Austria",
    },
  },
  {
    name: "KCDC 2024",
    description: "Full-stack conference in Kansas City, United States",
    startDate: "2024-06-26T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kansas City",
        addressRegion: "United States",
      },
      name: "Kansas City, United States",
    },
  },
  {
    name: "European Women in Tech",
    description: "Tech conference in Amsterdam, Netherlands",
    startDate: "2024-06-26T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "World Congress on Virtual Rehabilitation​​​​​​​​​​​​​​",
    description: "AR / VR / XR conference in Amsterdam, Netherlands",
    startDate: "2024-06-26T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "Nexus2050",
    description: "AI / ML conference in Luxembourg, Luxembourg",
    startDate: "2024-06-26T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Luxembourg",
        addressRegion: "Luxembourg",
      },
      name: "Luxembourg, Luxembourg",
    },
  },
  {
    name: "Azure & AI Lowlands '24",
    description: "Azure conference in Utrecht, Netherlands",
    startDate: "2024-06-27T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Utrecht",
        addressRegion: "Netherlands",
      },
      name: "Utrecht, Netherlands",
    },
  },
  {
    name: "Conf42: Quantum Computing 2024",
    description: "Hardware / IoT conference Online",
    startDate: "2024-06-27T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
  },
  {
    name: "NG Rome",
    description: "Angular conference in Rome, Italy",
    startDate: "2024-06-27T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rome",
        addressRegion: "Italy",
      },
      name: "Rome, Italy",
    },
  },
  {
    name: "Neurodiversity in Cybersecurity Summit 2024",
    description: "Cybersecurity / InfoSec conference Online",
    startDate: "2024-06-27T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
  },
  {
    name: "Agi'Lille",
    description: "Agile conference in Lille, France",
    startDate: "2024-06-27T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lille",
        addressRegion: "France",
      },
      name: "Lille, France",
    },
  },
  {
    name: "NZTestingConf 2024",
    description: "Testing / QA conference in Wellington, New Zealand",
    startDate: "2024-06-27T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wellington",
        addressRegion: "New Zealand",
      },
      name: "Wellington, New Zealand",
    },
  },
  {
    name: "dotJS 2024",
    description: "JavaScript conference in Paris, France",
    startDate: "2024-06-27T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Swiss PGDay",
    description: "Postgres conference in St. Gallen, Switzerland",
    startDate: "2024-06-27T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "St. Gallen",
        addressRegion: "Switzerland",
      },
      name: "St. Gallen, Switzerland",
    },
  },
  {
    name: "Google Cloud Summit Milano",
    description: "Google conference in Milan, Italy",
    startDate: "2024-06-27T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Milan",
        addressRegion: "Italy",
      },
      name: "Milan, Italy",
    },
  },
  {
    name: "WN Connect San Paolo'24",
    description: "Game dev conference in San Paolo, Brazil",
    startDate: "2024-06-27T00:00:00.000+00:00",
    endDate: "2024-06-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Paolo",
        addressRegion: "Brazil",
      },
      name: "San Paolo, Brazil",
    },
  },
  {
    name: "Brighton Ruby 2024",
    description: "Ruby conference in Brighton, United Kingdom",
    startDate: "2024-06-28T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brighton",
        addressRegion: "United Kingdom",
      },
      name: "Brighton, United Kingdom",
    },
  },
  {
    name: "Agile Lyon",
    description: "Agile conference in Lyon, France",
    startDate: "2024-06-28T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressRegion: "France",
      },
      name: "Lyon, France",
    },
  },
  {
    name: "Scenic City Summit",
    description: "Full-stack conference in Chattanooga, United States",
    startDate: "2024-06-28T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chattanooga",
        addressRegion: "United States",
      },
      name: "Chattanooga, United States",
    },
  },
  {
    name: "MachineCon GCC Summit 2024",
    description: "AI / ML conference in Bengaluru, India",
    startDate: "2024-06-28T00:00:00.000+00:00",
    endDate: "2024-06-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "Data Saturday Rheinland",
    description: "Data / Database conference in Sankt Augustin, Germany",
    startDate: "2024-06-29T00:00:00.000+00:00",
    endDate: "2024-06-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sankt Augustin",
        addressRegion: "Germany",
      },
      name: "Sankt Augustin, Germany",
    },
  },
  {
    name: "Security BSides Athens 2024",
    description: "Cybersecurity / InfoSec conference in Athens, Greece",
    startDate: "2024-06-29T00:00:00.000+00:00",
    endDate: "2024-06-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Athens",
        addressRegion: "Greece",
      },
      name: "Athens, Greece",
    },
  },
  {
    name: "Developer Week ’24",
    description: "Full-stack conference in Nurnberg, Germany",
    startDate: "2024-07-01T00:00:00.000+00:00",
    endDate: "2024-07-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nurnberg",
        addressRegion: "Germany",
      },
      name: "Nurnberg, Germany",
    },
  },
  {
    name: "KCD Munich",
    description: "Docker / Kubernetes conference in Munich, Germany",
    startDate: "2024-07-01T00:00:00.000+00:00",
    endDate: "2024-07-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "Open edX Conference",
    description: "Tech conference in Cape Town, South Africa",
    startDate: "2024-07-02T00:00:00.000+00:00",
    endDate: "2024-07-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cape Town",
        addressRegion: "South Africa",
      },
      name: "Cape Town, South Africa",
    },
  },
  {
    name: "C ++ on Sea",
    description: "C/C++ conference in Folkestone, United Kingdom",
    startDate: "2024-07-02T00:00:00.000+00:00",
    endDate: "2024-07-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Folkestone",
        addressRegion: "United Kingdom",
      },
      name: "Folkestone, United Kingdom",
    },
  },
  {
    name: "droidcon Berlin",
    description: "Android conference in Berlin, Germany",
    startDate: "2024-07-03T00:00:00.000+00:00",
    endDate: "2024-07-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Fluttercon",
    description: "Flutter conference in Berlin, Germany",
    startDate: "2024-07-03T00:00:00.000+00:00",
    endDate: "2024-07-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Agile in the Beach",
    description: "Agile conference in Falmouth, United Kingdom",
    startDate: "2024-07-04T00:00:00.000+00:00",
    endDate: "2024-07-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Falmouth",
        addressRegion: "United Kingdom",
      },
      name: "Falmouth, United Kingdom",
    },
  },
  {
    name: "Blockchain Expo World",
    description: "Crypto / Blockchain conference in Istanbul, Turkey",
    startDate: "2024-07-04T00:00:00.000+00:00",
    endDate: "2024-07-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressRegion: "Turkey",
      },
      name: "Istanbul, Turkey",
    },
  },
  {
    name: "Web Summer Camp 2024",
    description: "Web / Frontend conference in Opatija, Croatia",
    startDate: "2024-07-04T00:00:00.000+00:00",
    endDate: "2024-07-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Opatija",
        addressRegion: "Croatia",
      },
      name: "Opatija, Croatia",
    },
  },
  {
    name: "Lean CIO and IT Leader Summit",
    description: "Tech leadership conference in Munich, Germany",
    startDate: "2024-07-04T00:00:00.000+00:00",
    endDate: "2024-07-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "React Nexus 2024",
    description: "React conference in Bengaluru, India",
    startDate: "2024-07-04T00:00:00.000+00:00",
    endDate: "2024-07-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "GopherCon 2024",
    description: "Golang conference in Chicago, United States",
    startDate: "2024-07-07T00:00:00.000+00:00",
    endDate: "2024-07-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "useR! Salzburg 2024",
    description: "Data / Database conference in Salzburg, Austria",
    startDate: "2024-07-08T00:00:00.000+00:00",
    endDate: "2024-07-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salzburg",
        addressRegion: "Austria",
      },
      name: "Salzburg, Austria",
    },
  },
  {
    name: "useR! Salzburg Online",
    description: "Data / Database conference Online",
    startDate: "2024-07-08T00:00:00.000+00:00",
    endDate: "2024-07-11T00:00:00.000+00:00",
  },
  {
    name: "EuroPython 2024",
    description: "Python conference in Prague, Czech Republic",
    startDate: "2024-07-08T00:00:00.000+00:00",
    endDate: "2024-07-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prague",
        addressRegion: "Czech Republic",
      },
      name: "Prague, Czech Republic",
    },
  },
  {
    name: "EuroPython 2024 Online",
    description: "Python conference Online",
    startDate: "2024-07-08T00:00:00.000+00:00",
    endDate: "2024-07-14T00:00:00.000+00:00",
  },
  {
    name: "Riviera DEV",
    description: "Full-stack conference in Valbonne, France",
    startDate: "2024-07-08T00:00:00.000+00:00",
    endDate: "2024-07-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valbonne",
        addressRegion: "France",
      },
      name: "Valbonne, France",
    },
  },
  {
    name: "Develop: Brighton",
    description: "Game dev conference in Brighton, United Kingdom",
    startDate: "2024-07-09T00:00:00.000+00:00",
    endDate: "2024-07-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brighton",
        addressRegion: "United Kingdom",
      },
      name: "Brighton, United Kingdom",
    },
  },
  {
    name: "MacAdmins Conference",
    description: "iOS / Swift conference in State College, United States",
    startDate: "2024-07-09T00:00:00.000+00:00",
    endDate: "2024-07-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "State College",
        addressRegion: "United States",
      },
      name: "State College, United States",
    },
  },
  {
    name: "Forcelandia",
    description: "Salesforce conference in Portland, United States",
    startDate: "2024-07-10T00:00:00.000+00:00",
    endDate: "2024-07-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portland",
        addressRegion: "United States",
      },
      name: "Portland, United States",
    },
  },
  {
    name: "WN Connect Brighton'24",
    description: "Game dev conference in Brighton, United Kingdom",
    startDate: "2024-07-10T00:00:00.000+00:00",
    endDate: "2024-07-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brighton",
        addressRegion: "United Kingdom",
      },
      name: "Brighton, United Kingdom",
    },
  },
  {
    name: "App Growth Summit Sao Paulo 2024",
    description: "Mobile conference in Sao Paulo, Brazil",
    startDate: "2024-07-11T00:00:00.000+00:00",
    endDate: "2024-07-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sao Paulo",
        addressRegion: "Brazil",
      },
      name: "Sao Paulo, Brazil",
    },
  },
  {
    name: "WordCamp Canada 2024",
    description: "Wordpress conference in Ottawa, Canada",
    startDate: "2024-07-11T00:00:00.000+00:00",
    endDate: "2024-07-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ottawa",
        addressRegion: "Canada",
      },
      name: "Ottawa, Canada",
    },
  },
  {
    name: "TribeQonf",
    description: "Testing / QA conference in Bengaluru, India",
    startDate: "2024-07-12T00:00:00.000+00:00",
    endDate: "2024-07-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "ÜberConf  2024",
    description: "Full-stack conference in Denver, United States",
    startDate: "2024-07-16T00:00:00.000+00:00",
    endDate: "2024-07-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "United States",
      },
      name: "Denver, United States",
    },
  },
  {
    name: "CISO Melbourne",
    description: "Cybersecurity / InfoSec conference in Melbourne, Australia",
    startDate: "2024-07-16T00:00:00.000+00:00",
    endDate: "2024-07-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "Australia",
      },
      name: "Melbourne, Australia",
    },
  },
  {
    name: "Middlesbrough Front End",
    description: "Web / Frontend conference in Middlesbrough, United Kingdom",
    startDate: "2024-07-17T00:00:00.000+00:00",
    endDate: "2024-07-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Middlesbrough",
        addressRegion: "United Kingdom",
      },
      name: "Middlesbrough, United Kingdom",
    },
  },
  {
    name: "Midwest Dreamin'",
    description: "Salesforce conference in Minneapolis, United States",
    startDate: "2024-07-17T00:00:00.000+00:00",
    endDate: "2024-07-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Minneapolis",
        addressRegion: "United States",
      },
      name: "Minneapolis, United States",
    },
  },
  {
    name: "WeAreDevelopers World Congress 2024",
    description: "Full-stack conference in Berlin, Germany",
    startDate: "2024-07-17T00:00:00.000+00:00",
    endDate: "2024-07-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "Nebraska.Code()",
    description: "Full-stack conference in Lincoln, United States",
    startDate: "2024-07-17T00:00:00.000+00:00",
    endDate: "2024-07-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lincoln",
        addressRegion: "United States",
      },
      name: "Lincoln, United States",
    },
  },
  {
    name: "Loco Moco Security Conference",
    description: "Cybersecurity / InfoSec conference in Kauai, United States",
    startDate: "2024-07-17T00:00:00.000+00:00",
    endDate: "2024-07-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kauai",
        addressRegion: "United States",
      },
      name: "Kauai, United States",
    },
  },
  {
    name: "Chain React",
    description: "React conference in Portland, United States",
    startDate: "2024-07-17T00:00:00.000+00:00",
    endDate: "2024-07-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portland",
        addressRegion: "United States",
      },
      name: "Portland, United States",
    },
  },
  {
    name: "DevRel Con New York",
    description: "Tech conference in New York, United States",
    startDate: "2024-07-18T00:00:00.000+00:00",
    endDate: "2024-07-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "Low Latency London",
    description: "C/C++ conference in London, United Kingdom",
    startDate: "2024-07-19T00:00:00.000+00:00",
    endDate: "2024-07-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "JConf Dominicana",
    description:
      "Java conference in Santiago de los Caballeros, Dominican Republic",
    startDate: "2024-07-19T00:00:00.000+00:00",
    endDate: "2024-07-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago de los Caballeros",
        addressRegion: "Dominican Republic",
      },
      name: "Santiago de los Caballeros, Dominican Republic",
    },
  },
  {
    name: "BSides CDMX 2024",
    description: "Cybersecurity / InfoSec conference in Mexico City, Mexico",
    startDate: "2024-07-19T00:00:00.000+00:00",
    endDate: "2024-07-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mexico City",
        addressRegion: "Mexico",
      },
      name: "Mexico City, Mexico",
    },
  },
  {
    name: "BSides Albuquerque",
    description:
      "Cybersecurity / InfoSec conference in Albuquerque, United States",
    startDate: "2024-07-19T00:00:00.000+00:00",
    endDate: "2024-07-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Albuquerque",
        addressRegion: "United States",
      },
      name: "Albuquerque, United States",
    },
  },
  {
    name: "ICVR 2024",
    description: "AR / VR / XR conference in Bournemouth, United Kingdom",
    startDate: "2024-07-20T00:00:00.000+00:00",
    endDate: "2024-07-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bournemouth",
        addressRegion: "United Kingdom",
      },
      name: "Bournemouth, United Kingdom",
    },
  },
  {
    name: "KCD Lima",
    description: "Docker / Kubernetes conference in Lima, Peru",
    startDate: "2024-07-20T00:00:00.000+00:00",
    endDate: "2024-07-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lima",
        addressRegion: "Peru",
      },
      name: "Lima, Peru",
    },
  },
  {
    name: "CppNorth 2024",
    description: "C/C++ conference in Toronto, Canada",
    startDate: "2024-07-21T00:00:00.000+00:00",
    endDate: "2024-07-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "Agile 2024",
    description: "Agile conference in Grapevine, United States",
    startDate: "2024-07-22T00:00:00.000+00:00",
    endDate: "2024-07-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Grapevine",
        addressRegion: "United States",
      },
      name: "Grapevine, United States",
    },
  },
  {
    name: "SkySummit Berlin",
    description: "Cloud conference in Berlin, Germany",
    startDate: "2024-07-24T00:00:00.000+00:00",
    endDate: "2024-07-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "NCCI",
    description:
      "Project management / PMO conference in Rancho Mirage, United States",
    startDate: "2024-07-24T00:00:00.000+00:00",
    endDate: "2024-07-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rancho Mirage",
        addressRegion: "United States",
      },
      name: "Rancho Mirage, United States",
    },
  },
  {
    name: "Bitcoin Conference 2024",
    description: "Fintech conference in Nashville, United States",
    startDate: "2024-07-25T00:00:00.000+00:00",
    endDate: "2024-07-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nashville",
        addressRegion: "United States",
      },
      name: "Nashville, United States",
    },
  },
  {
    name: "DataConnect Conference 2024",
    description: "Data / Database conference in Columbus, United States",
    startDate: "2024-07-25T00:00:00.000+00:00",
    endDate: "2024-07-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Columbus",
        addressRegion: "United States",
      },
      name: "Columbus, United States",
    },
  },
  {
    name: "PyCon Russia 2024",
    description: "Python conference in Moscow, Russia",
    startDate: "2024-07-26T00:00:00.000+00:00",
    endDate: "2024-07-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Moscow",
        addressRegion: "Russia",
      },
      name: "Moscow, Russia",
    },
  },
  {
    name: "The MachineCon 2024",
    description: "AI / ML conference in New York, United States",
    startDate: "2024-07-26T00:00:00.000+00:00",
    endDate: "2024-07-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "How.Camp 2024 Gabrovo",
    description: "Open Source conference in Gabrovo, Bulgaria",
    startDate: "2024-07-27T00:00:00.000+00:00",
    endDate: "2024-07-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gabrovo",
        addressRegion: "Bulgaria",
      },
      name: "Gabrovo, Bulgaria",
    },
  },
  {
    name: "HR + L&D Innovation & Tech Fest",
    description: "HR / Hiring / Recruiting conference in Auckland, New Zealand",
    startDate: "2024-07-29T00:00:00.000+00:00",
    endDate: "2024-07-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Auckland",
        addressRegion: "New Zealand",
      },
      name: "Auckland, New Zealand",
    },
  },
  {
    name: "THAT Conference Wisconsin Dells",
    description: "Full-stack conference in Wisconsin Dells, United States",
    startDate: "2024-07-29T00:00:00.000+00:00",
    endDate: "2024-08-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wisconsin Dells",
        addressRegion: "United States",
      },
      name: "Wisconsin Dells, United States",
    },
  },
  {
    name: "Madison Ruby",
    description: "Ruby conference in Madison, United States",
    startDate: "2024-08-01T00:00:00.000+00:00",
    endDate: "2024-08-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madison",
        addressRegion: "United States",
      },
      name: "Madison, United States",
    },
  },
  {
    name: "BlockStart",
    description: "Web3 conference in Glasgow, United Kingdom",
    startDate: "2024-08-01T00:00:00.000+00:00",
    endDate: "2024-08-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Glasgow",
        addressRegion: "United Kingdom",
      },
      name: "Glasgow, United Kingdom",
    },
  },
  {
    name: "SANS Security Awareness: Managing Human Risk",
    description: "Cybersecurity / InfoSec conference in Norfolk, United States",
    startDate: "2024-08-01T00:00:00.000+00:00",
    endDate: "2024-08-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Norfolk",
        addressRegion: "United States",
      },
      name: "Norfolk, United States",
    },
  },
  {
    name: "Beer City Code",
    description: "Full-stack conference in Grand Rapids, United States",
    startDate: "2024-08-02T00:00:00.000+00:00",
    endDate: "2024-08-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Grand Rapids",
        addressRegion: "United States",
      },
      name: "Grand Rapids, United States",
    },
  },
  {
    name: "Black Hat USA 2024",
    description:
      "Cybersecurity / InfoSec conference in Las Vegas, United States",
    startDate: "2024-08-03T00:00:00.000+00:00",
    endDate: "2024-08-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "ICSTP 2024",
    description: "Testing / QA conference in Amsterdam, Netherlands",
    startDate: "2024-08-05T00:00:00.000+00:00",
    endDate: "2024-08-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "VSLive! @Microsoft HQ",
    description: "Microsoft conference in Redmond, United States",
    startDate: "2024-08-05T00:00:00.000+00:00",
    endDate: "2024-08-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Redmond",
        addressRegion: "United States",
      },
      name: "Redmond, United States",
    },
  },
  {
    name: "The Diana Initiative",
    description:
      "Cybersecurity / InfoSec conference in Las Vegas, United States",
    startDate: "2024-08-05T00:00:00.000+00:00",
    endDate: "2024-08-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Devopsdays Minneapolis",
    description: "DevOps conference in Minneapolis, United States",
    startDate: "2024-08-06T00:00:00.000+00:00",
    endDate: "2024-08-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Minneapolis",
        addressRegion: "United States",
      },
      name: "Minneapolis, United States",
    },
  },
  {
    name: "BSides Las Vegas",
    description:
      "Cybersecurity / InfoSec conference in Las Vegas, United States",
    startDate: "2024-08-06T00:00:00.000+00:00",
    endDate: "2024-08-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "CDAO Chicago",
    description: "Data / Database conference in Chicago, United States",
    startDate: "2024-08-07T00:00:00.000+00:00",
    endDate: "2024-08-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "Fintech Devcon",
    description: "Fintech conference in Austin, United States",
    startDate: "2024-08-07T00:00:00.000+00:00",
    endDate: "2024-08-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "Africa Payments & RegTech Forum",
    description: "Fintech conference in Johannesburg, South Africa",
    startDate: "2024-08-08T00:00:00.000+00:00",
    endDate: "2024-08-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johannesburg",
        addressRegion: "South Africa",
      },
      name: "Johannesburg, South Africa",
    },
  },
  {
    name: "DEF CON 32",
    description:
      "Cybersecurity / InfoSec conference in Las Vegas, United States",
    startDate: "2024-08-08T00:00:00.000+00:00",
    endDate: "2024-08-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "EightKB August 2024",
    description: "SQL conference Online",
    startDate: "2024-08-08T00:00:00.000+00:00",
    endDate: "2024-08-08T00:00:00.000+00:00",
  },
  {
    name: "CISO Executive Network",
    description: "Cybersecurity / InfoSec conference in Sydney, Australia",
    startDate: "2024-08-12T00:00:00.000+00:00",
    endDate: "2024-08-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "Australia",
      },
      name: "Sydney, Australia",
    },
  },
  {
    name: "WOOT '24",
    description:
      "Cybersecurity / InfoSec conference in Philadelphia, United States",
    startDate: "2024-08-12T00:00:00.000+00:00",
    endDate: "2024-08-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Philadelphia",
        addressRegion: "United States",
      },
      name: "Philadelphia, United States",
    },
  },
  {
    name: "Ai4 2024",
    description: "AI / ML conference in Las Vegas, United States",
    startDate: "2024-08-12T00:00:00.000+00:00",
    endDate: "2024-08-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Microsoft TechCon365 DC 2024",
    description: "Microsoft conference in Washington, United States",
    startDate: "2024-08-12T00:00:00.000+00:00",
    endDate: "2024-08-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Washington",
        addressRegion: "United States",
      },
      name: "Washington, United States",
    },
  },
  {
    name: "ETHWomen Hackathon",
    description: "Crypto / Blockchain hackaton in Toronto, Canada",
    startDate: "2024-08-13T00:00:00.000+00:00",
    endDate: "2024-08-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "ETHToronto hackathon",
    description: "Crypto / Blockchain hackaton in Toronto, Canada",
    startDate: "2024-08-13T00:00:00.000+00:00",
    endDate: "2024-08-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "Blockchain Futurist Conference",
    description: "Crypto / Blockchain conference in Toronto, Canada",
    startDate: "2024-08-13T00:00:00.000+00:00",
    endDate: "2024-08-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "USENIX Security Symposium",
    description:
      "Cybersecurity / InfoSec conference in Philadelphia, United States",
    startDate: "2024-08-14T00:00:00.000+00:00",
    endDate: "2024-08-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Philadelphia",
        addressRegion: "United States",
      },
      name: "Philadelphia, United States",
    },
  },
  {
    name: "Devopsdays Rio De Janeiro",
    description: "DevOps conference in Rio De Janeiro, Brazil",
    startDate: "2024-08-17T00:00:00.000+00:00",
    endDate: "2024-08-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rio De Janeiro",
        addressRegion: "Brazil",
      },
      name: "Rio De Janeiro, Brazil",
    },
  },
  {
    name: "Enterprise Technology Leadership Summit",
    description: "Tech leadership conference in Las Vegas, United States",
    startDate: "2024-08-20T00:00:00.000+00:00",
    endDate: "2024-08-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "PAX DEVCON 2024",
    description: "Tech conference in Orlando, United States",
    startDate: "2024-08-20T00:00:00.000+00:00",
    endDate: "2024-08-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "United States",
      },
      name: "Orlando, United States",
    },
  },
  {
    name: "Devopsdays Halifax",
    description: "DevOps conference in Halifax, Canada",
    startDate: "2024-08-21T00:00:00.000+00:00",
    endDate: "2024-08-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Halifax",
        addressRegion: "Canada",
      },
      name: "Halifax, Canada",
    },
  },
  {
    name: "Gamescom 2024",
    description: "Game dev conference in Cologne, Germany",
    startDate: "2024-08-21T00:00:00.000+00:00",
    endDate: "2024-08-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cologne",
        addressRegion: "Germany",
      },
      name: "Cologne, Germany",
    },
  },
  {
    name: "itSMF Australia 2024",
    description: "IT service management conference in Melbourne, Australia",
    startDate: "2024-08-21T00:00:00.000+00:00",
    endDate: "2024-08-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "Australia",
      },
      name: "Melbourne, Australia",
    },
  },
  {
    name: "Testμ 2024",
    description: "Testing / QA conference Online",
    startDate: "2024-08-21T00:00:00.000+00:00",
    endDate: "2024-08-23T00:00:00.000+00:00",
  },
  {
    name: "Conf42: Rustlang 2024",
    description: "Rust conference Online",
    startDate: "2024-08-22T00:00:00.000+00:00",
    endDate: "2024-08-22T00:00:00.000+00:00",
  },
  {
    name: "Laravel Live Denmark",
    description: "Laravel conference in Copenhagen, Denmark",
    startDate: "2024-08-22T00:00:00.000+00:00",
    endDate: "2024-08-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Copenhagen",
        addressRegion: "Denmark",
      },
      name: "Copenhagen, Denmark",
    },
  },
  {
    name: "SANS DFIR Summit",
    description:
      "Cybersecurity / InfoSec conference in Salt Lake City, United States",
    startDate: "2024-08-22T00:00:00.000+00:00",
    endDate: "2024-08-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salt Lake City",
        addressRegion: "United States",
      },
      name: "Salt Lake City, United States",
    },
  },
  {
    name: "Carolina Code Conference",
    description: "Full-stack conference in Greenville, United States",
    startDate: "2024-08-23T00:00:00.000+00:00",
    endDate: "2024-08-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Greenville",
        addressRegion: "United States",
      },
      name: "Greenville, United States",
    },
  },
  {
    name: "BSides Brighton 2024",
    description:
      "Cybersecurity / InfoSec conference in Brighton, United Kingdom",
    startDate: "2024-08-24T00:00:00.000+00:00",
    endDate: "2024-08-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brighton",
        addressRegion: "United Kingdom",
      },
      name: "Brighton, United Kingdom",
    },
  },
  {
    name: "Sikkerhetsfestivalen 2024",
    description: "Cybersecurity / InfoSec conference in Lillehammer, Norway",
    startDate: "2024-08-26T00:00:00.000+00:00",
    endDate: "2024-08-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lillehammer",
        addressRegion: "Norway",
      },
      name: "Lillehammer, Norway",
    },
  },
  {
    name: "Copenhagen Developers Festival",
    description: "Full-stack conference in Copenhagen, Denmark",
    startDate: "2024-08-26T00:00:00.000+00:00",
    endDate: "2024-08-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Copenhagen",
        addressRegion: "Denmark",
      },
      name: "Copenhagen, Denmark",
    },
  },
  {
    name: "ElixirConf US",
    description: "Elixir conference in Orlando, United States",
    startDate: "2024-08-27T00:00:00.000+00:00",
    endDate: "2024-08-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "United States",
      },
      name: "Orlando, United States",
    },
  },
  {
    name: "AWE Asia 2024",
    description: "AR / VR / XR conference in Singapore, Singapore",
    startDate: "2024-08-27T00:00:00.000+00:00",
    endDate: "2024-08-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressRegion: "Singapore",
      },
      name: "Singapore, Singapore",
    },
  },
  {
    name: "CISO Brisbane",
    description: "Cybersecurity / InfoSec conference in Brisbane, Australia",
    startDate: "2024-08-27T00:00:00.000+00:00",
    endDate: "2024-08-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brisbane",
        addressRegion: "Australia",
      },
      name: "Brisbane, Australia",
    },
  },
  {
    name: "Swift Island",
    description: "iOS / Swift conference in Texel, Netherlands",
    startDate: "2024-08-27T00:00:00.000+00:00",
    endDate: "2024-08-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Texel",
        addressRegion: "Netherlands",
      },
      name: "Texel, Netherlands",
    },
  },
  {
    name: "Laracon US",
    description: "Laravel conference in Dallas, United States",
    startDate: "2024-08-27T00:00:00.000+00:00",
    endDate: "2024-08-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dallas",
        addressRegion: "United States",
      },
      name: "Dallas, United States",
    },
  },
  {
    name: "UX Nordic Conference",
    description: "UI / UX conference in Aarhus, Denmark",
    startDate: "2024-08-28T00:00:00.000+00:00",
    endDate: "2024-08-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Aarhus",
        addressRegion: "Denmark",
      },
      name: "Aarhus, Denmark",
    },
  },
  {
    name: "ShipItCon",
    description: "Agile conference in Dublin, Ireland",
    startDate: "2024-08-30T00:00:00.000+00:00",
    endDate: "2024-08-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressRegion: "Ireland",
      },
      name: "Dublin, Ireland",
    },
  },
  {
    name: "Data Saturday Oslo",
    description: "Data / Database conference in Oslo, Norway",
    startDate: "2024-08-31T00:00:00.000+00:00",
    endDate: "2024-08-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressRegion: "Norway",
      },
      name: "Oslo, Norway",
    },
  },
  {
    name: "Flutter & Friends 2024",
    description: "Flutter conference in Stockholm, Sweden",
    startDate: "2024-09-01T00:00:00.000+00:00",
    endDate: "2024-09-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "iOSDevUK",
    description: "iOS / Swift conference in Aberystwyth, United Kingdom",
    startDate: "2024-09-02T00:00:00.000+00:00",
    endDate: "2024-09-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Aberystwyth",
        addressRegion: "United Kingdom",
      },
      name: "Aberystwyth, United Kingdom",
    },
  },
  {
    name: "CDAO Melbourne",
    description: "Data / Database conference in Melbourne, Australia",
    startDate: "2024-09-02T00:00:00.000+00:00",
    endDate: "2024-09-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "Australia",
      },
      name: "Melbourne, Australia",
    },
  },
  {
    name: "JavaZone 2024",
    description: "Java conference in Oslo, Norway",
    startDate: "2024-09-03T00:00:00.000+00:00",
    endDate: "2024-09-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressRegion: "Norway",
      },
      name: "Oslo, Norway",
    },
  },
  {
    name: "Container Days Conference",
    description: "Docker / Kubernetes conference in Hamburg, Germany",
    startDate: "2024-09-03T00:00:00.000+00:00",
    endDate: "2024-09-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hamburg",
        addressRegion: "Germany",
      },
      name: "Hamburg, Germany",
    },
  },
  {
    name: "European Blockchain Convention",
    description: "Crypto / Blockchain conference in Barcelona, Spain",
    startDate: "2024-09-04T00:00:00.000+00:00",
    endDate: "2024-09-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "Hatch Conference",
    description: "UI / UX conference Online",
    startDate: "2024-09-04T00:00:00.000+00:00",
    endDate: "2024-09-06T00:00:00.000+00:00",
  },
  {
    name: "StaffPlus NY",
    description: "Tech leadership conference in New York, United States",
    startDate: "2024-09-04T00:00:00.000+00:00",
    endDate: "2024-09-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "LeadDev NY",
    description: "Tech leadership conference in New York, United States",
    startDate: "2024-09-04T00:00:00.000+00:00",
    endDate: "2024-09-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "React Native EU",
    description: "React conference in Wroclaw, Poland",
    startDate: "2024-09-05T00:00:00.000+00:00",
    endDate: "2024-09-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wroclaw",
        addressRegion: "Poland",
      },
      name: "Wroclaw, Poland",
    },
  },
  {
    name: "Conf42: Platform Engineering 2024",
    description: "DevOps conference Online",
    startDate: "2024-09-05T00:00:00.000+00:00",
    endDate: "2024-09-05T00:00:00.000+00:00",
  },
  {
    name: "PyCon Estonia 2024",
    description: "Python conference in Tallinn, Estonia",
    startDate: "2024-09-05T00:00:00.000+00:00",
    endDate: "2024-09-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tallinn",
        addressRegion: "Estonia",
      },
      name: "Tallinn, Estonia",
    },
  },
  {
    name: "React Universe Conf 2024",
    description: "React conference in Wroclaw, Poland",
    startDate: "2024-09-05T00:00:00.000+00:00",
    endDate: "2024-09-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wroclaw",
        addressRegion: "Poland",
      },
      name: "Wroclaw, Poland",
    },
  },
  {
    name: "LeadingEng NY",
    description: "Tech leadership conference in New York, United States",
    startDate: "2024-09-06T00:00:00.000+00:00",
    endDate: "2024-09-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "DataFest Yerevan",
    description: "Data / Database conference in Yerevan, Armenia",
    startDate: "2024-09-06T00:00:00.000+00:00",
    endDate: "2024-09-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Yerevan",
        addressRegion: "Armenia",
      },
      name: "Yerevan, Armenia",
    },
  },
  {
    name: "Blue Team Con",
    description: "Cybersecurity / InfoSec conference in Chicago, United States",
    startDate: "2024-09-06T00:00:00.000+00:00",
    endDate: "2024-09-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "FinovateFall",
    description: "Fintech conference in New York, United States",
    startDate: "2024-09-09T00:00:00.000+00:00",
    endDate: "2024-09-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "SmashingConf Freiburg 2024",
    description: "Web / Frontend conference in Freiburg, Germany",
    startDate: "2024-09-09T00:00:00.000+00:00",
    endDate: "2024-09-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Freiburg",
        addressRegion: "Germany",
      },
      name: "Freiburg, Germany",
    },
  },
  {
    name: "NDC TechTown",
    description: "Product management conference in Kongsberg, Norway",
    startDate: "2024-09-09T00:00:00.000+00:00",
    endDate: "2024-09-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kongsberg",
        addressRegion: "Norway",
      },
      name: "Kongsberg, Norway",
    },
  },
  {
    name: "AI Hardware & Edge AI Summit",
    description: "Hardware / IoT conference in San Jose, United States",
    startDate: "2024-09-10T00:00:00.000+00:00",
    endDate: "2024-09-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Jose",
        addressRegion: "United States",
      },
      name: "San Jose, United States",
    },
  },
  {
    name: "CDAO Brazil",
    description: "Data / Database conference in Sao Paulo, Brazil",
    startDate: "2024-09-10T00:00:00.000+00:00",
    endDate: "2024-09-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sao Paulo",
        addressRegion: "Brazil",
      },
      name: "Sao Paulo, Brazil",
    },
  },
  {
    name: "Airflow Summit 2024",
    description:
      "Software architecture conference in San Francisco, United States",
    startDate: "2024-09-10T00:00:00.000+00:00",
    endDate: "2024-09-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "Dev Day Aotearoa 2024",
    description: "Full-stack conference in Auckland, New Zealand",
    startDate: "2024-09-12T00:00:00.000+00:00",
    endDate: "2024-09-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Auckland",
        addressRegion: "New Zealand",
      },
      name: "Auckland, New Zealand",
    },
  },
  {
    name: "EuRuKo 2024",
    description: "Ruby conference in Tuzla, Bosnia and Herzegovina",
    startDate: "2024-09-12T00:00:00.000+00:00",
    endDate: "2024-09-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tuzla",
        addressRegion: "Bosnia and Herzegovina",
      },
      name: "Tuzla, Bosnia and Herzegovina",
    },
  },
  {
    name: "TestBash Brighton 2024",
    description: "Testing / QA conference in Brighton, United Kingdom",
    startDate: "2024-09-12T00:00:00.000+00:00",
    endDate: "2024-09-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brighton",
        addressRegion: "United Kingdom",
      },
      name: "Brighton, United Kingdom",
    },
  },
  {
    name: "DATA: Scotland 2024",
    description: "Data / Database conference in Glasgow, United Kingdom",
    startDate: "2024-09-13T00:00:00.000+00:00",
    endDate: "2024-09-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Glasgow",
        addressRegion: "United Kingdom",
      },
      name: "Glasgow, United Kingdom",
    },
  },
  {
    name: "UtahJS Conf 2024",
    description: "JavaScript conference in Salt Lake City, United States",
    startDate: "2024-09-13T00:00:00.000+00:00",
    endDate: "2024-09-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salt Lake City",
        addressRegion: "United States",
      },
      name: "Salt Lake City, United States",
    },
  },
  {
    name: "BSides Kraków 2024",
    description: "Cybersecurity / InfoSec conference in Krakow, Poland",
    startDate: "2024-09-14T00:00:00.000+00:00",
    endDate: "2024-09-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "CppCon 2024",
    description: "C/C++ conference in Aurora, United States",
    startDate: "2024-09-15T00:00:00.000+00:00",
    endDate: "2024-09-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Aurora",
        addressRegion: "United States",
      },
      name: "Aurora, United States",
    },
  },
  {
    name: "Agile Prague 2024",
    description: "Agile conference in Prague, Czech Republic",
    startDate: "2024-09-16T00:00:00.000+00:00",
    endDate: "2024-09-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prague",
        addressRegion: "Czech Republic",
      },
      name: "Prague, Czech Republic",
    },
  },
  {
    name: "Infobip Shift 2024",
    description: "Full-stack conference in Zadar, Croatia",
    startDate: "2024-09-16T00:00:00.000+00:00",
    endDate: "2024-09-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zadar",
        addressRegion: "Croatia",
      },
      name: "Zadar, Croatia",
    },
  },
  {
    name: "ISSTA 2024",
    description: "Testing / QA conference in Vienna, Austria",
    startDate: "2024-09-16T00:00:00.000+00:00",
    endDate: "2024-09-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressRegion: "Austria",
      },
      name: "Vienna, Austria",
    },
  },
  {
    name: "Webs Week 2024",
    description: "Web3 conference in Frankfurt, Germany",
    startDate: "2024-09-16T00:00:00.000+00:00",
    endDate: "2024-09-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Frankfurt",
        addressRegion: "Germany",
      },
      name: "Frankfurt, Germany",
    },
  },
  {
    name: "Open Source Summit Europe",
    description: "Open Source conference in Vienna, Austria",
    startDate: "2024-09-16T00:00:00.000+00:00",
    endDate: "2024-09-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressRegion: "Austria",
      },
      name: "Vienna, Austria",
    },
  },
  {
    name: "Workplace Ninja Summit",
    description: "Microsoft conference in Lucerne, Switzerland",
    startDate: "2024-09-16T00:00:00.000+00:00",
    endDate: "2024-09-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucerne",
        addressRegion: "Switzerland",
      },
      name: "Lucerne, Switzerland",
    },
  },
  {
    name: "Linux Security Summit",
    description: "Linux / OS conference in Vienna, Austria",
    startDate: "2024-09-16T00:00:00.000+00:00",
    endDate: "2024-09-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressRegion: "Austria",
      },
      name: "Vienna, Austria",
    },
  },
  {
    name: "Rome Future Week 2024",
    description: "Tech conference in Rome, Italy",
    startDate: "2024-09-16T00:00:00.000+00:00",
    endDate: "2024-09-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rome",
        addressRegion: "Italy",
      },
      name: "Rome, Italy",
    },
  },
  {
    name: "Data Architecture Singapore",
    description: "Data / Database conference in Singapore, Singapore",
    startDate: "2024-09-17T00:00:00.000+00:00",
    endDate: "2024-09-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressRegion: "Singapore",
      },
      name: "Singapore, Singapore",
    },
  },
  {
    name: "FutureNet Asia",
    description: "Telecom / 5G conference in Singapore, Singapore",
    startDate: "2024-09-17T00:00:00.000+00:00",
    endDate: "2024-09-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressRegion: "Singapore",
      },
      name: "Singapore, Singapore",
    },
  },
  {
    name: "WordCamp US 2024",
    description: "Wordpress conference in Portland, United States",
    startDate: "2024-09-17T00:00:00.000+00:00",
    endDate: "2024-09-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portland",
        addressRegion: "United States",
      },
      name: "Portland, United States",
    },
  },
  {
    name: "Big Data LDN",
    description: "Data / Database conference in London, United Kingdom",
    startDate: "2024-09-18T00:00:00.000+00:00",
    endDate: "2024-09-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "TOKEN2049 Singapore",
    description: "Crypto / Blockchain conference in Singapore, Singapore",
    startDate: "2024-09-18T00:00:00.000+00:00",
    endDate: "2024-09-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressRegion: "Singapore",
      },
      name: "Singapore, Singapore",
    },
  },
  {
    name: "Friendly.rb 2024",
    description: "Ruby conference in Bucharest, Romania",
    startDate: "2024-09-18T00:00:00.000+00:00",
    endDate: "2024-09-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bucharest",
        addressRegion: "Romania",
      },
      name: "Bucharest, Romania",
    },
  },
  {
    name: "Apidays London",
    description: "API conference in London, United Kingdom",
    startDate: "2024-09-18T00:00:00.000+00:00",
    endDate: "2024-09-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Sanae Beer.Ex 2024",
    description: "Testing / QA conference in Bratislava, Slovakia",
    startDate: "2024-09-18T00:00:00.000+00:00",
    endDate: "2024-09-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bratislava",
        addressRegion: "Slovakia",
      },
      name: "Bratislava, Slovakia",
    },
  },
  {
    name: "data2day 2024",
    description: "Data / Database conference in Heidelberg, Germany",
    startDate: "2024-09-18T00:00:00.000+00:00",
    endDate: "2024-09-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Heidelberg",
        addressRegion: "Germany",
      },
      name: "Heidelberg, Germany",
    },
  },
  {
    name: "UX Healthcare Berlin 2024",
    description: "UI / UX conference in Berlin, Germany",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "API Platform Conference 2024",
    description: "API conference in Lille, France",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lille",
        addressRegion: "France",
      },
      name: "Lille, France",
    },
  },
  {
    name: "Swiss Cloud Native Day",
    description: "Cloud conference in Bern, Switzerland",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bern",
        addressRegion: "Switzerland",
      },
      name: "Bern, Switzerland",
    },
  },
  {
    name: "App Growth Summit SF 2024",
    description: "Mobile conference in San Francisco, United States",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "World Agility Forum",
    description: "Agile conference in Lisbon, Portugal",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisbon",
        addressRegion: "Portugal",
      },
      name: "Lisbon, Portugal",
    },
  },
  {
    name: "Uxcon Vienna",
    description: "UI / UX conference in Vienna, Austria",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressRegion: "Austria",
      },
      name: "Vienna, Austria",
    },
  },
  {
    name: "SREday 2024 London",
    description: "SRE conference in London, United Kingdom",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Secure Our Streets Conference",
    description: "Cybersecurity / InfoSec conference Online",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-19T00:00:00.000+00:00",
  },
  {
    name: "Mobidictum Network Barcelona",
    description: "Game dev conference in Barcelona, Spain",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-19T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "API Platform Conference",
    description: "API conference in Lille, France",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lille",
        addressRegion: "France",
      },
      name: "Lille, France",
    },
  },
  {
    name: "droidcon NYC",
    description: "Android conference in New York, United States",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "React Alicante",
    description: "React conference in Alicante, Spain",
    startDate: "2024-09-19T00:00:00.000+00:00",
    endDate: "2024-09-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Alicante",
        addressRegion: "Spain",
      },
      name: "Alicante, Spain",
    },
  },
  {
    name: "OWASP Global AppSec San Francisco 2024",
    description:
      "Cybersecurity / InfoSec conference in San Francisco, United States",
    startDate: "2024-09-23T00:00:00.000+00:00",
    endDate: "2024-09-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "Global Security Exchange",
    description: "Cybersecurity / InfoSec conference in Orlando, United States",
    startDate: "2024-09-23T00:00:00.000+00:00",
    endDate: "2024-09-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "United States",
      },
      name: "Orlando, United States",
    },
  },
  {
    name: "Experts Live Europe 2024",
    description: "Microsoft conference in Budapest, Hungary",
    startDate: "2024-09-23T00:00:00.000+00:00",
    endDate: "2024-09-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Budapest",
        addressRegion: "Hungary",
      },
      name: "Budapest, Hungary",
    },
  },
  {
    name: "Digital Asset Congress",
    description: "Web3 conference in Reykjavik, Iceland",
    startDate: "2024-09-23T00:00:00.000+00:00",
    endDate: "2024-09-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Reykjavik",
        addressRegion: "Iceland",
      },
      name: "Reykjavik, Iceland",
    },
  },
  {
    name: "jconf.dev",
    description: "Java conference in Dallas, United States",
    startDate: "2024-09-24T00:00:00.000+00:00",
    endDate: "2024-09-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dallas",
        addressRegion: "United States",
      },
      name: "Dallas, United States",
    },
  },
  {
    name: "TechBash 2024",
    description: "Full-stack conference in Pocono Manor, United States",
    startDate: "2024-09-24T00:00:00.000+00:00",
    endDate: "2024-09-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pocono Manor",
        addressRegion: "United States",
      },
      name: "Pocono Manor, United States",
    },
  },
  {
    name: "Data Makers Fest 2024",
    description: "Data / Database conference in Porto, Portugal",
    startDate: "2024-09-24T00:00:00.000+00:00",
    endDate: "2024-09-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Porto",
        addressRegion: "Portugal",
      },
      name: "Porto, Portugal",
    },
  },
  {
    name: "RomHack 2024",
    description: "Cybersecurity / InfoSec conference in Rome, Italy",
    startDate: "2024-09-24T00:00:00.000+00:00",
    endDate: "2024-09-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rome",
        addressRegion: "Italy",
      },
      name: "Rome, Italy",
    },
  },
  {
    name: "AxonIQ Conference 2024",
    description: "DDD conference in Amsterdam, Netherlands",
    startDate: "2024-09-25T00:00:00.000+00:00",
    endDate: "2024-09-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "DevOpsCon New York",
    description: "DevOps conference in New York City, United States",
    startDate: "2024-09-25T00:00:00.000+00:00",
    endDate: "2024-09-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York City",
        addressRegion: "United States",
      },
      name: "New York City, United States",
    },
  },
  {
    name: "Devopsdays Cairo",
    description: "DevOps conference in Cairo, Egypt",
    startDate: "2024-09-25T00:00:00.000+00:00",
    endDate: "2024-09-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressRegion: "Egypt",
      },
      name: "Cairo, Egypt",
    },
  },
  {
    name: "International JavaScript Conference New York",
    description: "JavaScript conference in New York City, United States",
    startDate: "2024-09-25T00:00:00.000+00:00",
    endDate: "2024-09-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York City",
        addressRegion: "United States",
      },
      name: "New York City, United States",
    },
  },
  {
    name: "JSConf Ireland 2024",
    description: "JavaScript conference in Dublin, Ireland",
    startDate: "2024-09-25T00:00:00.000+00:00",
    endDate: "2024-09-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressRegion: "Ireland",
      },
      name: "Dublin, Ireland",
    },
  },
  {
    name: "heise devSec 2024  Cologne",
    description: "Cybersecurity / InfoSec conference in Cologne, Germany",
    startDate: "2024-09-25T00:00:00.000+00:00",
    endDate: "2024-09-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cologne",
        addressRegion: "Germany",
      },
      name: "Cologne, Germany",
    },
  },
  {
    name: "Lean Agile Scotland",
    description: "Agile conference in Edinburgh, United Kingdom",
    startDate: "2024-09-25T00:00:00.000+00:00",
    endDate: "2024-09-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Edinburgh",
        addressRegion: "United Kingdom",
      },
      name: "Edinburgh, United Kingdom",
    },
  },
  {
    name: "Cypher 2024",
    description: "AI / ML conference in Bengaluru, India",
    startDate: "2024-09-25T00:00:00.000+00:00",
    endDate: "2024-09-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "India",
      },
      name: "Bengaluru, India",
    },
  },
  {
    name: "Devopsdays London",
    description: "DevOps conference in London, United Kingdom",
    startDate: "2024-09-26T00:00:00.000+00:00",
    endDate: "2024-09-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Paris Web",
    description: "Web / Frontend conference in Paris, France",
    startDate: "2024-09-26T00:00:00.000+00:00",
    endDate: "2024-09-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "LeSS Conference Madrid 2024",
    description: "Agile conference in Madrid, Spain",
    startDate: "2024-09-26T00:00:00.000+00:00",
    endDate: "2024-09-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madrid",
        addressRegion: "Spain",
      },
      name: "Madrid, Spain",
    },
  },
  {
    name: "Rails World 2024",
    description: "Ruby conference in Toronto, Canada",
    startDate: "2024-09-26T00:00:00.000+00:00",
    endDate: "2024-09-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Canada",
      },
      name: "Toronto, Canada",
    },
  },
  {
    name: "Odin Testkonferansen Norway 2024",
    description: "Testing / QA conference in Oslo, Norway",
    startDate: "2024-09-26T00:00:00.000+00:00",
    endDate: "2024-09-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressRegion: "Norway",
      },
      name: "Oslo, Norway",
    },
  },
  {
    name: "Conf42: Kube Native 2024",
    description: "Docker / Kubernetes conference Online",
    startDate: "2024-09-26T00:00:00.000+00:00",
    endDate: "2024-09-26T00:00:00.000+00:00",
  },
  {
    name: "SEETEST 2024",
    description: "Testing / QA conference in Zagreb, Croatia and Online",
    startDate: "2024-09-26T00:00:00.000+00:00",
    endDate: "2024-09-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zagreb",
        addressRegion: "Croatia",
      },
      name: "Zagreb, Croatia",
    },
  },
  {
    name: "Come To Code 2024",
    description: "Full-stack conference in Basilicata, Italy",
    startDate: "2024-09-28T00:00:00.000+00:00",
    endDate: "2024-09-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Basilicata",
        addressRegion: "Italy",
      },
      name: "Basilicata, Italy",
    },
  },
  {
    name: "DEV: Challenge Accepted 2024",
    description: "Full-stack conference in Sofia, Bulgaria",
    startDate: "2024-09-29T00:00:00.000+00:00",
    endDate: "2024-09-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sofia",
        addressRegion: "Bulgaria",
      },
      name: "Sofia, Bulgaria",
    },
  },
  {
    name: "JAX London 2024",
    description: "Java conference in London, United Kingdom",
    startDate: "2024-09-30T00:00:00.000+00:00",
    endDate: "2024-10-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "GOTO Copenhagen",
    description: "Full-stack conference in Copenhagen, Denmark",
    startDate: "2024-09-30T00:00:00.000+00:00",
    endDate: "2024-10-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Copenhagen",
        addressRegion: "Denmark",
      },
      name: "Copenhagen, Denmark",
    },
  },
  {
    name: "SQL Konferenz 2024",
    description: "SQL conference in Hanau, Germany",
    startDate: "2024-09-30T00:00:00.000+00:00",
    endDate: "2024-10-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hanau",
        addressRegion: "Germany",
      },
      name: "Hanau, Germany",
    },
  },
  {
    name: "TechEx Europe",
    description: "Tech conference in Amsterdam, Netherlands",
    startDate: "2024-10-01T00:00:00.000+00:00",
    endDate: "2024-10-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressRegion: "Netherlands",
      },
      name: "Amsterdam, Netherlands",
    },
  },
  {
    name: "WN Connect Helsinki'24",
    description: "Game dev conference in Helsinki, Finland",
    startDate: "2024-10-01T00:00:00.000+00:00",
    endDate: "2024-10-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Helsinki",
        addressRegion: "Finland",
      },
      name: "Helsinki, Finland",
    },
  },
  {
    name: "Florida Dreamin’ 2024",
    description: "Salesforce conference in Clearwater, United States",
    startDate: "2024-10-02T00:00:00.000+00:00",
    endDate: "2024-10-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Clearwater",
        addressRegion: "United States",
      },
      name: "Clearwater, United States",
    },
  },
  {
    name: "Agile Cambridge",
    description: "Agile conference in Cambridge, United Kingdom",
    startDate: "2024-10-02T00:00:00.000+00:00",
    endDate: "2024-10-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cambridge",
        addressRegion: "United Kingdom",
      },
      name: "Cambridge, United Kingdom",
    },
  },
  {
    name: "FuturePMO",
    description:
      "Project management / PMO conference in London, United Kingdom",
    startDate: "2024-10-03T00:00:00.000+00:00",
    endDate: "2024-10-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Nordic.js",
    description: "JavaScript conference in Stockholm, Sweden",
    startDate: "2024-10-03T00:00:00.000+00:00",
    endDate: "2024-10-04T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "App Growth Summit London 2024",
    description: "Mobile conference in London, United Kingdom",
    startDate: "2024-10-03T00:00:00.000+00:00",
    endDate: "2024-10-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Zabbix Summit 2024",
    description: "SRE conference in Riga, Latvia",
    startDate: "2024-10-03T00:00:00.000+00:00",
    endDate: "2024-10-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Riga",
        addressRegion: "Latvia",
      },
      name: "Riga, Latvia",
    },
  },
  {
    name: "HCPP 2024",
    description: "Cybersecurity / InfoSec conference in Prague, Czech Republic",
    startDate: "2024-10-04T00:00:00.000+00:00",
    endDate: "2024-10-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prague",
        addressRegion: "Czech Republic",
      },
      name: "Prague, Czech Republic",
    },
  },
  {
    name: "DEXT FORCE Festival",
    description: "Web3 conference in Barcelona, Spain",
    startDate: "2024-10-04T00:00:00.000+00:00",
    endDate: "2024-10-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "SmashingConf New York 2024",
    description: "Web / Frontend conference in New York, United States",
    startDate: "2024-10-07T00:00:00.000+00:00",
    endDate: "2024-10-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "Community Over Code Denver",
    description: "Open Source conference in Denver, United States",
    startDate: "2024-10-07T00:00:00.000+00:00",
    endDate: "2024-10-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "United States",
      },
      name: "Denver, United States",
    },
  },
  {
    name: "Devoxx Belgium",
    description: "Java conference in Antwerp, Belgium",
    startDate: "2024-10-07T00:00:00.000+00:00",
    endDate: "2024-10-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antwerp",
        addressRegion: "Belgium",
      },
      name: "Antwerp, Belgium",
    },
  },
  {
    name: "dataMinds Connect 2024",
    description: "Data / Database conference in Mechelen, Belgium",
    startDate: "2024-10-07T00:00:00.000+00:00",
    endDate: "2024-10-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mechelen",
        addressRegion: "Belgium",
      },
      name: "Mechelen, Belgium",
    },
  },
  {
    name: "MWC Las Vegas 2024",
    description: "Telecom / 5G conference in Las Vegas, United States",
    startDate: "2024-10-08T00:00:00.000+00:00",
    endDate: "2024-10-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "HUSTEF Software Testing Conference 2024",
    description: "Testing / QA conference in Budapest, Hungary",
    startDate: "2024-10-08T00:00:00.000+00:00",
    endDate: "2024-10-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Budapest",
        addressRegion: "Hungary",
      },
      name: "Budapest, Hungary",
    },
  },
  {
    name: "SwiftLeeds 2024",
    description: "iOS / Swift conference in Leeds, United Kingdom",
    startDate: "2024-10-08T00:00:00.000+00:00",
    endDate: "2024-10-09T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Leeds",
        addressRegion: "United Kingdom",
      },
      name: "Leeds, United Kingdom",
    },
  },
  {
    name: "AutomationSTAR  Conference 2024",
    description: "Testing / QA conference in Vienna, Austria",
    startDate: "2024-10-09T00:00:00.000+00:00",
    endDate: "2024-10-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressRegion: "Austria",
      },
      name: "Vienna, Austria",
    },
  },
  {
    name: "UXDX EMEA 2024",
    description: "UI / UX conference in Dublin, Ireland",
    startDate: "2024-10-09T00:00:00.000+00:00",
    endDate: "2024-10-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dublin",
        addressRegion: "Ireland",
      },
      name: "Dublin, Ireland",
    },
  },
  {
    name: "UXDX EMEA 2024 Online",
    description: "UI / UX conference Online",
    startDate: "2024-10-09T00:00:00.000+00:00",
    endDate: "2024-10-11T00:00:00.000+00:00",
  },
  {
    name: "EuroRust 2024",
    description: "Rust conference Online",
    startDate: "2024-10-10T00:00:00.000+00:00",
    endDate: "2024-10-11T00:00:00.000+00:00",
  },
  {
    name: "NextGen Payments & RegTech Forum",
    description: "Fintech conference in Athens, Greece",
    startDate: "2024-10-10T00:00:00.000+00:00",
    endDate: "2024-10-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Athens",
        addressRegion: "Greece",
      },
      name: "Athens, Greece",
    },
  },
  {
    name: "Financial Innovation Forum",
    description: "Fintech conference in London, United Kingdom",
    startDate: "2024-10-10T00:00:00.000+00:00",
    endDate: "2024-10-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Zebu Live 2024",
    description: "Web3 conference in London, United Kingdom",
    startDate: "2024-10-10T00:00:00.000+00:00",
    endDate: "2024-10-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "Volcamp",
    description: "Tech conference in Clermont-Ferrand, France",
    startDate: "2024-10-10T00:00:00.000+00:00",
    endDate: "2024-10-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Clermont-Ferrand",
        addressRegion: "France",
      },
      name: "Clermont-Ferrand, France",
    },
  },
  {
    name: "Cloud Nord 2024",
    description: "Cloud conference in Lille, France",
    startDate: "2024-10-10T00:00:00.000+00:00",
    endDate: "2024-10-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lille",
        addressRegion: "France",
      },
      name: "Lille, France",
    },
  },
  {
    name: "AWS Community Day Bulgaria 2024",
    description: "AWS conference in Sofia, Bulgaria",
    startDate: "2024-10-12T00:00:00.000+00:00",
    endDate: "2024-10-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sofia",
        addressRegion: "Bulgaria",
      },
      name: "Sofia, Bulgaria",
    },
  },
  {
    name: "Code Beam Europe 2024",
    description: "Elixir conference in Berlin, Germany",
    startDate: "2024-10-14T00:00:00.000+00:00",
    endDate: "2024-10-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "PNSQC 2024 Online",
    description: "Testing / QA conference Online",
    startDate: "2024-10-14T00:00:00.000+00:00",
    endDate: "2024-10-16T00:00:00.000+00:00",
  },
  {
    name: "PNSQC  2024",
    description: "Testing / QA conference in Portland, United States",
    startDate: "2024-10-14T00:00:00.000+00:00",
    endDate: "2024-10-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portland",
        addressRegion: "United States",
      },
      name: "Portland, United States",
    },
  },
  {
    name: "ACM CCS 2024",
    description:
      "Cybersecurity / InfoSec conference in Salt Lake City, United States",
    startDate: "2024-10-14T00:00:00.000+00:00",
    endDate: "2024-10-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salt Lake City",
        addressRegion: "United States",
      },
      name: "Salt Lake City, United States",
    },
  },
  {
    name: "NDC Porto 2024",
    description: "Full-stack conference in Porto, Portugal",
    startDate: "2024-10-14T00:00:00.000+00:00",
    endDate: "2024-10-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Porto",
        addressRegion: "Portugal",
      },
      name: "Porto, Portugal",
    },
  },
  {
    name: "HashiConf 2024",
    description: "DevOps conference in Boston, United States",
    startDate: "2024-10-14T00:00:00.000+00:00",
    endDate: "2024-10-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boston",
        addressRegion: "United States",
      },
      name: "Boston, United States",
    },
  },
  {
    name: "Global Software Architecture Summit",
    description: "Software architecture conference in Barcelona, Spain",
    startDate: "2024-10-14T00:00:00.000+00:00",
    endDate: "2024-10-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "Mobidictum Conference 2024",
    description: "Game dev conference in Istanbul, Turkey",
    startDate: "2024-10-14T00:00:00.000+00:00",
    endDate: "2024-10-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressRegion: "Turkey",
      },
      name: "Istanbul, Turkey",
    },
  },
  {
    name: "GITEX GLOBAL",
    description: "Tech conference in Dubai, United Arab Emirates",
    startDate: "2024-10-14T00:00:00.000+00:00",
    endDate: "2024-10-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "Augmented Enterprise Summit",
    description: "AR / VR / XR conference in Dallas, United States",
    startDate: "2024-10-15T00:00:00.000+00:00",
    endDate: "2024-10-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dallas",
        addressRegion: "United States",
      },
      name: "Dallas, United States",
    },
  },
  {
    name: "FIRST TC Oslo 2024",
    description: "Cybersecurity / InfoSec conference in Oslo, Norway",
    startDate: "2024-10-15T00:00:00.000+00:00",
    endDate: "2024-10-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressRegion: "Norway",
      },
      name: "Oslo, Norway",
    },
  },
  {
    name: "Apidays Australia",
    description: "API conference in South Wharf, Australia",
    startDate: "2024-10-16T00:00:00.000+00:00",
    endDate: "2024-10-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "South Wharf",
        addressRegion: "Australia",
      },
      name: "South Wharf, Australia",
    },
  },
  {
    name: "BaselOne 2024",
    description: "Full-stack conference in Basel, Switzerland",
    startDate: "2024-10-16T00:00:00.000+00:00",
    endDate: "2024-10-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Basel",
        addressRegion: "Switzerland",
      },
      name: "Basel, Switzerland",
    },
  },
  {
    name: "dotPy 2024",
    description: "Python conference in Paris, France",
    startDate: "2024-10-16T00:00:00.000+00:00",
    endDate: "2024-10-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "#HelloStavanger 2024",
    description: "Full-stack conference in Stavanger, Norway",
    startDate: "2024-10-16T00:00:00.000+00:00",
    endDate: "2024-10-17T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stavanger",
        addressRegion: "Norway",
      },
      name: "Stavanger, Norway",
    },
  },
  {
    name: "Rubyfuza 2024",
    description: "Ruby conference in Cape Town, South Africa",
    startDate: "2024-10-17T00:00:00.000+00:00",
    endDate: "2024-10-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cape Town",
        addressRegion: "South Africa",
      },
      name: "Cape Town, South Africa",
    },
  },
  {
    name: "Conf42: Incident Management 2024",
    description: "IT service management conference Online",
    startDate: "2024-10-17T00:00:00.000+00:00",
    endDate: "2024-10-17T00:00:00.000+00:00",
  },
  {
    name: "DevConf 2024",
    description: "Full-stack conference in Lodz, Poland",
    startDate: "2024-10-17T00:00:00.000+00:00",
    endDate: "2024-10-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lodz",
        addressRegion: "Poland",
      },
      name: "Lodz, Poland",
    },
  },
  {
    name: "dotAI 2024",
    description: "AI / ML conference in Paris, France",
    startDate: "2024-10-17T00:00:00.000+00:00",
    endDate: "2024-10-18T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "NetWork conference 11",
    description: "IT conference in Neum, Bosnia and Herzegovina",
    startDate: "2024-10-18T00:00:00.000+00:00",
    endDate: "2024-10-20T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Neum",
        addressRegion: "Bosnia and Herzegovina",
      },
      name: "Neum, Bosnia and Herzegovina",
    },
  },
  {
    name: "Testflix 2024",
    description: "Testing / QA conference Online",
    startDate: "2024-10-19T00:00:00.000+00:00",
    endDate: "2024-10-20T00:00:00.000+00:00",
  },
  {
    name: "ICS Cybersecurity Conference",
    description: "Cybersecurity / InfoSec conference in Atlanta, United States",
    startDate: "2024-10-21T00:00:00.000+00:00",
    endDate: "2024-10-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "United States",
      },
      name: "Atlanta, United States",
    },
  },
  {
    name: "GOTO Chicago",
    description: "Full-stack conference in Chicago, United States",
    startDate: "2024-10-21T00:00:00.000+00:00",
    endDate: "2024-10-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "United States",
      },
      name: "Chicago, United States",
    },
  },
  {
    name: "IBM TechXchange 2024",
    description: "IBM conference in Las Vegas, United States",
    startDate: "2024-10-21T00:00:00.000+00:00",
    endDate: "2024-10-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "United States",
      },
      name: "Las Vegas, United States",
    },
  },
  {
    name: "Open Code Experience 2024",
    description: "Open Source conference in Mainz, Germany",
    startDate: "2024-10-22T00:00:00.000+00:00",
    endDate: "2024-10-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mainz",
        addressRegion: "Germany",
      },
      name: "Mainz, Germany",
    },
  },
  {
    name: "JDD 2024",
    description: "Java conference in Krakow, Poland",
    startDate: "2024-10-22T00:00:00.000+00:00",
    endDate: "2024-10-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Krakow",
        addressRegion: "Poland",
      },
      name: "Krakow, Poland",
    },
  },
  {
    name: "SOSS Fusion",
    description: "Cybersecurity / InfoSec conference in Atlanta, United States",
    startDate: "2024-10-22T00:00:00.000+00:00",
    endDate: "2024-10-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "United States",
      },
      name: "Atlanta, United States",
    },
  },
  {
    name: "UniFi World Conference Mexico",
    description: "Telecom / 5G conference in Mexico City, Mexico",
    startDate: "2024-10-23T00:00:00.000+00:00",
    endDate: "2024-10-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mexico City",
        addressRegion: "Mexico",
      },
      name: "Mexico City, Mexico",
    },
  },
  {
    name: "App Growth Summit Barcelona 2024",
    description: "Mobile conference in Barcelona, Spain",
    startDate: "2024-10-24T00:00:00.000+00:00",
    endDate: "2024-10-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "UniFi World Conference Colombia",
    description: "Telecom / 5G conference in Bogota, Colombia",
    startDate: "2024-10-24T00:00:00.000+00:00",
    endDate: "2024-10-24T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bogota",
        addressRegion: "Colombia",
      },
      name: "Bogota, Colombia",
    },
  },
  {
    name: "UniFi World Conference Brazil",
    description: "Telecom / 5G conference in Sao Paulo, Brazil",
    startDate: "2024-10-25T00:00:00.000+00:00",
    endDate: "2024-10-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sao Paulo",
        addressRegion: "Brazil",
      },
      name: "Sao Paulo, Brazil",
    },
  },
  {
    name: "reactjsday 2024",
    description: "React conference in Verona, Italy",
    startDate: "2024-10-25T00:00:00.000+00:00",
    endDate: "2024-10-25T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Verona",
        addressRegion: "Italy",
      },
      name: "Verona, Italy",
    },
  },
  {
    name: "UniFi World Conference Argentina",
    description: "Telecom / 5G conference in Buenos Aires, Argentina",
    startDate: "2024-10-26T00:00:00.000+00:00",
    endDate: "2024-10-26T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressRegion: "Argentina",
      },
      name: "Buenos Aires, Argentina",
    },
  },
  {
    name: "UniFi World Conference Chile",
    description: "Telecom / 5G conference in Santiago, Chile",
    startDate: "2024-10-27T00:00:00.000+00:00",
    endDate: "2024-10-27T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Chile",
      },
      name: "Santiago, Chile",
    },
  },
  {
    name: "All Things Open 2024",
    description: "Open Source conference in Raleigh, United States",
    startDate: "2024-10-27T00:00:00.000+00:00",
    endDate: "2024-10-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raleigh",
        addressRegion: "United States",
      },
      name: "Raleigh, United States",
    },
  },
  {
    name: "SmashingConf Antwerp 2024",
    description: "Web / Frontend conference in Antwerp, Belgium",
    startDate: "2024-10-28T00:00:00.000+00:00",
    endDate: "2024-10-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antwerp",
        addressRegion: "Belgium",
      },
      name: "Antwerp, Belgium",
    },
  },
  {
    name: "KanDDDinsky 2024",
    description: "DDD conference in Berlin, Germany",
    startDate: "2024-10-28T00:00:00.000+00:00",
    endDate: "2024-10-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressRegion: "Germany",
      },
      name: "Berlin, Germany",
    },
  },
  {
    name: "GNRT.AI",
    description: "AI / ML conference in Arlington, United States",
    startDate: "2024-10-28T00:00:00.000+00:00",
    endDate: "2024-10-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Arlington",
        addressRegion: "United States",
      },
      name: "Arlington, United States",
    },
  },
  {
    name: "MWC Kigali 2024",
    description: "Telecom / 5G conference in Kigali, Rwanda",
    startDate: "2024-10-29T00:00:00.000+00:00",
    endDate: "2024-10-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kigali",
        addressRegion: "Rwanda",
      },
      name: "Kigali, Rwanda",
    },
  },
  {
    name: "AWE EU 2024",
    description: "AR / VR / XR conference in Vienna, Austria",
    startDate: "2024-10-29T00:00:00.000+00:00",
    endDate: "2024-10-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressRegion: "Austria",
      },
      name: "Vienna, Austria",
    },
  },
  {
    name: "INCYBER North America",
    description: "Cybersecurity / InfoSec conference in Montreal, Canada",
    startDate: "2024-10-29T00:00:00.000+00:00",
    endDate: "2024-10-30T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montreal",
        addressRegion: "Canada",
      },
      name: "Montreal, Canada",
    },
  },
  {
    name: "Security BSides Cayman Islands 2024",
    description:
      "Cybersecurity / InfoSec conference in Grand Cayman, Cayman Islands",
    startDate: "2024-10-29T00:00:00.000+00:00",
    endDate: "2024-10-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Grand Cayman",
        addressRegion: "Cayman Islands",
      },
      name: "Grand Cayman, Cayman Islands",
    },
  },
  {
    name: "DevOpsDays Tel Aviv",
    description: "DevOps conference in Tel Aviv, Israel",
    startDate: "2024-10-30T00:00:00.000+00:00",
    endDate: "2024-10-31T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tel Aviv",
        addressRegion: "Israel",
      },
      name: "Tel Aviv, Israel",
    },
  },
  {
    name: "Conf42: JavaScript 2024",
    description: "JavaScript conference Online",
    startDate: "2024-10-31T00:00:00.000+00:00",
    endDate: "2024-10-31T00:00:00.000+00:00",
  },
  {
    name: "droidcon London 2024",
    description: "Android conference in London, United Kingdom",
    startDate: "2024-10-31T00:00:00.000+00:00",
    endDate: "2024-11-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "UX Brighton 2024",
    description: "UI / UX conference in Brighton, United Kingdom",
    startDate: "2024-11-01T00:00:00.000+00:00",
    endDate: "2024-11-01T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brighton",
        addressRegion: "United Kingdom",
      },
      name: "Brighton, United Kingdom",
    },
  },
  {
    name: "Moldova DevCon 2024",
    description: "Full-stack conference in Chișinau, Moldova",
    startDate: "2024-11-01T00:00:00.000+00:00",
    endDate: "2024-11-02T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chișinau",
        addressRegion: "Moldova",
      },
      name: "Chișinau, Moldova",
    },
  },
  {
    name: "Heapcon",
    description: "Full-stack conference in Belgrade, Serbia",
    startDate: "2024-11-02T00:00:00.000+00:00",
    endDate: "2024-11-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belgrade",
        addressRegion: "Serbia",
      },
      name: "Belgrade, Serbia",
    },
  },
  {
    name: "W-JAX 2024",
    description: "Java conference in Munich, Germany",
    startDate: "2024-11-04T00:00:00.000+00:00",
    endDate: "2024-11-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "API World",
    description: "API conference in Santa Clara, United States",
    startDate: "2024-11-05T00:00:00.000+00:00",
    endDate: "2024-11-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santa Clara",
        addressRegion: "United States",
      },
      name: "Santa Clara, United States",
    },
  },
  {
    name: "Øredev 2024",
    description: "Full-stack conference in Malmo, Sweden",
    startDate: "2024-11-06T00:00:00.000+00:00",
    endDate: "2024-11-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malmo",
        addressRegion: "Sweden",
      },
      name: "Malmo, Sweden",
    },
  },
  {
    name: "NextGen Payments & RegTech Forum",
    description: "Fintech conference in Limassol, Cyprus",
    startDate: "2024-11-06T00:00:00.000+00:00",
    endDate: "2024-11-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Limassol",
        addressRegion: "Cyprus",
      },
      name: "Limassol, Cyprus",
    },
  },
  {
    name: "Master Dev De France",
    description: "Tech hackaton in Paris, France",
    startDate: "2024-11-06T00:00:00.000+00:00",
    endDate: "2024-11-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Agile in the City: Bristol",
    description: "Agile conference in Bristol, United Kingdom",
    startDate: "2024-11-06T00:00:00.000+00:00",
    endDate: "2024-11-07T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bristol",
        addressRegion: "United Kingdom",
      },
      name: "Bristol, United Kingdom",
    },
  },
  {
    name: "ML in PL",
    description: "AI / ML conference in Warsaw, Poland",
    startDate: "2024-11-07T00:00:00.000+00:00",
    endDate: "2024-11-10T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warsaw",
        addressRegion: "Poland",
      },
      name: "Warsaw, Poland",
    },
  },
  {
    name: "Push UX 2024",
    description: "UI / UX conference in Munich, Germany",
    startDate: "2024-11-07T00:00:00.000+00:00",
    endDate: "2024-11-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Munich",
        addressRegion: "Germany",
      },
      name: "Munich, Germany",
    },
  },
  {
    name: "Testing United conference",
    description: "Testing / QA conference in Vienna, Austria",
    startDate: "2024-11-07T00:00:00.000+00:00",
    endDate: "2024-11-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressRegion: "Austria",
      },
      name: "Vienna, Austria",
    },
  },
  {
    name: "Global XR Conference 2024",
    description: "AR / VR / XR conference Online",
    startDate: "2024-11-08T00:00:00.000+00:00",
    endDate: "2024-11-08T00:00:00.000+00:00",
  },
  {
    name: "angularday 2024",
    description: "Angular conference in Verona, Italy",
    startDate: "2024-11-08T00:00:00.000+00:00",
    endDate: "2024-11-08T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Verona",
        addressRegion: "Italy",
      },
      name: "Verona, Italy",
    },
  },
  {
    name: "FinOps X Barcelona 2024",
    description: "Fintech conference in Barcelona, Spain",
    startDate: "2024-11-11T00:00:00.000+00:00",
    endDate: "2024-11-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "API World Online",
    description: "API conference Online",
    startDate: "2024-11-11T00:00:00.000+00:00",
    endDate: "2024-11-14T00:00:00.000+00:00",
  },
  {
    name: "Web Summit 2024",
    description: "Tech conference in Lisbon, Portugal",
    startDate: "2024-11-11T00:00:00.000+00:00",
    endDate: "2024-11-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisbon",
        addressRegion: "Portugal",
      },
      name: "Lisbon, Portugal",
    },
  },
  {
    name: "CDAO Nordics",
    description: "Data / Database conference in Stockholm, Sweden",
    startDate: "2024-11-13T00:00:00.000+00:00",
    endDate: "2024-11-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "Product Management Day",
    description: "Product management conference in Bologna, Italy",
    startDate: "2024-11-13T00:00:00.000+00:00",
    endDate: "2024-11-13T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bologna",
        addressRegion: "Italy",
      },
      name: "Bologna, Italy",
    },
  },
  {
    name: "Build Stuff 2024 Lithuania",
    description: "Full-stack conference in Vilnius, Lithuania and Online",
    startDate: "2024-11-13T00:00:00.000+00:00",
    endDate: "2024-11-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vilnius",
        addressRegion: "Lithuania",
      },
      name: "Vilnius, Lithuania",
    },
  },
  {
    name: "App Growth Summit Austin 2024",
    description: "Mobile conference in Austin, United States",
    startDate: "2024-11-14T00:00:00.000+00:00",
    endDate: "2024-11-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "Update Conference Prague",
    description: ".NET conference in Prague, Czech Republic",
    startDate: "2024-11-14T00:00:00.000+00:00",
    endDate: "2024-11-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prague",
        addressRegion: "Czech Republic",
      },
      name: "Prague, Czech Republic",
    },
  },
  {
    name: "DevOps Barcelona 2024",
    description: "DevOps conference in Barcelona, Spain",
    startDate: "2024-11-14T00:00:00.000+00:00",
    endDate: "2024-11-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Spain",
      },
      name: "Barcelona, Spain",
    },
  },
  {
    name: "Cloud Expo Europe Paris",
    description: "Cloud conference in Paris, France",
    startDate: "2024-11-15T00:00:00.000+00:00",
    endDate: "2024-11-16T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: "Agile Testing Days Online",
    description: "Testing / QA conference Online",
    startDate: "2024-11-18T00:00:00.000+00:00",
    endDate: "2024-11-21T00:00:00.000+00:00",
  },
  {
    name: "Agile Testing Days",
    description: "Testing / QA conference in Potsdam, Germany",
    startDate: "2024-11-18T00:00:00.000+00:00",
    endDate: "2024-11-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Potsdam",
        addressRegion: "Germany",
      },
      name: "Potsdam, Germany",
    },
  },
  {
    name: "QCon San Francisco 2024",
    description: "Full-stack conference in San Francisco, United States",
    startDate: "2024-11-18T00:00:00.000+00:00",
    endDate: "2024-11-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "United States",
      },
      name: "San Francisco, United States",
    },
  },
  {
    name: "ISC East 2024",
    description:
      "Cybersecurity / InfoSec conference in New York, United States",
    startDate: "2024-11-19T00:00:00.000+00:00",
    endDate: "2024-11-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "United States",
      },
      name: "New York, United States",
    },
  },
  {
    name: "OSMC",
    description: "Open Source conference in Nuremberg, Germany",
    startDate: "2024-11-19T00:00:00.000+00:00",
    endDate: "2024-11-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nuremberg",
        addressRegion: "Germany",
      },
      name: "Nuremberg, Germany",
    },
  },
  {
    name: "The Linux Foundation Member Summit",
    description: "Linux / OS conference in Napa, United States",
    startDate: "2024-11-19T00:00:00.000+00:00",
    endDate: "2024-11-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Napa",
        addressRegion: "United States",
      },
      name: "Napa, United States",
    },
  },
  {
    name: "Gartner CIO & IT Executive Conference",
    description: "CIO conference in Dubai, United Arab Emirates",
    startDate: "2024-11-19T00:00:00.000+00:00",
    endDate: "2024-11-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "API Conference 2024 Brussels",
    description: "API conference in Brussels, Belgium",
    startDate: "2024-11-21T00:00:00.000+00:00",
    endDate: "2024-11-21T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brussels",
        addressRegion: "Belgium",
      },
      name: "Brussels, Belgium",
    },
  },
  {
    name: "Conf42: Prompt Engineering 2024",
    description: "AI / ML conference Online",
    startDate: "2024-11-21T00:00:00.000+00:00",
    endDate: "2024-11-21T00:00:00.000+00:00",
  },
  {
    name: "Cypher USA",
    description: "AI / ML conference in Santa Clara, United States",
    startDate: "2024-11-21T00:00:00.000+00:00",
    endDate: "2024-11-22T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santa Clara",
        addressRegion: "United States",
      },
      name: "Santa Clara, United States",
    },
  },
  {
    name: "GRCRAI2024",
    description: "AI / ML conference in Dubai, United Arab Emirates",
    startDate: "2024-11-21T00:00:00.000+00:00",
    endDate: "2024-11-23T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "United Arab Emirates",
      },
      name: "Dubai, United Arab Emirates",
    },
  },
  {
    name: "Australia Cyber Conference Melbourne",
    description: "Cybersecurity / InfoSec conference in Melbourne, Australia",
    startDate: "2024-11-26T00:00:00.000+00:00",
    endDate: "2024-11-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "Australia",
      },
      name: "Melbourne, Australia",
    },
  },
  {
    name: "Tech Summit London",
    description: "Tech conference in London, United Kingdom",
    startDate: "2024-11-28T00:00:00.000+00:00",
    endDate: "2024-11-29T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "United Kingdom",
      },
      name: "London, United Kingdom",
    },
  },
  {
    name: "ESPC",
    description: "Microsoft conference in Stockholm, Sweden",
    startDate: "2024-12-02T00:00:00.000+00:00",
    endDate: "2024-12-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockholm",
        addressRegion: "Sweden",
      },
      name: "Stockholm, Sweden",
    },
  },
  {
    name: "Apidays Paris",
    description: "API conference in Paris, France",
    startDate: "2024-12-03T00:00:00.000+00:00",
    endDate: "2024-12-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "France",
      },
      name: "Paris, France",
    },
  },
  {
    name: ".NET Conf 2024 Bulgaria",
    description: ".NET conference in Sofia, Bulgaria",
    startDate: "2024-12-03T00:00:00.000+00:00",
    endDate: "2024-12-03T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sofia",
        addressRegion: "Bulgaria",
      },
      name: "Sofia, Bulgaria",
    },
  },
  {
    name: "Tech Leader Summit",
    description: "Tech leadership conference in Clearwater, United States",
    startDate: "2024-12-04T00:00:00.000+00:00",
    endDate: "2024-12-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Clearwater",
        addressRegion: "United States",
      },
      name: "Clearwater, United States",
    },
  },
  {
    name: "Conf42: DevSecOps 2024",
    description: "Cybersecurity / InfoSec conference Online",
    startDate: "2024-12-05T00:00:00.000+00:00",
    endDate: "2024-12-05T00:00:00.000+00:00",
  },
  {
    name: "App Growth Summit Mexico City 2024",
    description: "Mobile conference in Mexico City, Mexico",
    startDate: "2024-12-05T00:00:00.000+00:00",
    endDate: "2024-12-05T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mexico City",
        addressRegion: "Mexico",
      },
      name: "Mexico City, Mexico",
    },
  },
  {
    name: "SymfonyCon Vienna 2024",
    description: "PHP conference in Vienna, Austria",
    startDate: "2024-12-05T00:00:00.000+00:00",
    endDate: "2024-12-06T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressRegion: "Austria",
      },
      name: "Vienna, Austria",
    },
  },
  {
    name: "ArchConf",
    description:
      "Software architecture conference in Clearwater, United States",
    startDate: "2024-12-09T00:00:00.000+00:00",
    endDate: "2024-12-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Clearwater",
        addressRegion: "United States",
      },
      name: "Clearwater, United States",
    },
  },
  {
    name: "NextGen Payments & RegTech Forum",
    description: "Fintech conference in Austin, United States",
    startDate: "2024-12-10T00:00:00.000+00:00",
    endDate: "2024-12-11T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "United States",
      },
      name: "Austin, United States",
    },
  },
  {
    name: "Prompt Engineering Bulgaria 2024",
    description: "AI / ML conference in Sofia, Bulgaria",
    startDate: "2024-12-12T00:00:00.000+00:00",
    endDate: "2024-12-12T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sofia",
        addressRegion: "Bulgaria",
      },
      name: "Sofia, Bulgaria",
    },
  },
  {
    name: "Devopsdays Recife",
    description: "DevOps conference in Recife, Brazil",
    startDate: "2024-12-14T00:00:00.000+00:00",
    endDate: "2024-12-14T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Recife",
        addressRegion: "Brazil",
      },
      name: "Recife, Brazil",
    },
  },
  {
    name: "Euro STEM 2024",
    description: "Tech conference in Tallinn, Taiwan",
    startDate: "2024-12-14T00:00:00.000+00:00",
    endDate: "2024-12-15T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tallinn",
        addressRegion: "Taiwan",
      },
      name: "Tallinn, Taiwan",
    },
  },
  {
    name: "Internet of Things 2024",
    description: "Hardware / IoT conference Online",
    startDate: "2024-12-19T00:00:00.000+00:00",
    endDate: "2024-12-19T00:00:00.000+00:00",
  },
  {
    name: "Macoun 2025",
    description: "iOS / Swift conference in Frankfurt, Germany",
    startDate: "2025-09-27T00:00:00.000+00:00",
    endDate: "2025-09-28T00:00:00.000+00:00",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Frankfurt",
        addressRegion: "Germany",
      },
      name: "Frankfurt, Germany",
    },
  },
];

const prisma = new PrismaClient();
async function main() {
  await confs.forEach(async (element) => {
    await prisma.conference.create({
      data: {
        dateStart: element.startDate,
        dateEnd: element.endDate,
        name: element.name,
        description: element.description,
        location: {
          googleMapsUri: `https://www.google.com/maps/place/${element.location?.name}/`,
          types: ["locality", "political"],
          formattedAddress: element.location?.name,
          shortFormattedAddress: element.location?.address.addressLocality,
          addressComponents: [
            {
              types: ["country", "political"],
              longText: element.location?.address.addressRegion,
              shortText: countries.find(
                (a) => a.name === element.location?.address.addressRegion,
              ),
              languageCode: "en",
            },
            {
              types: ["locality", "political"],
              longText: element.location?.address.addressLocality,
              shortText: element.location?.address.addressLocality,
              languageCode: "en",
            },
          ],
        },
      },
    });
  });

  //   const alice = await prisma.user.upsert({
  //     where: { email: "alice@prisma.io" },
  //     update: {},
  //     create: {
  //       email: "alice@prisma.io",
  //       name: "Alice",
  //       posts: {
  //         create: {
  //           title: "Check out Prisma with Next.js",
  //           content: "https://www.prisma.io/nextjs",
  //           published: true,
  //         },
  //       },
  //     },
  //   });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
