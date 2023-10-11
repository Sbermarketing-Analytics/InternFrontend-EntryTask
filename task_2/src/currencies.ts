const currencies = [
  {
    id: "ZWL",
    name: "Zimbabwean Dollar",
  },
  {
    id: "ZMW",
    name: "Zambian Kwacha",
  },
  {
    id: "ZAR",
    name: "South African Rand",
  },
  {
    id: "YER",
    name: "Yemeni Rial",
  },
  {
    id: "XPF",
    name: "CFP Franc (Franc Pacifique)",
  },
  {
    id: "XOF",
    name: "West African CFA Franc BCEAO",
  },
  {
    id: "XDR",
    name: "ignore",
  },
  {
    id: "XCD",
    name: "East Caribbean Dollar",
  },
  {
    id: "XAF",
    name: "Central African CFA Franc BEAC",
  },
  {
    id: "WST",
    name: "Samoan Tala",
  },
  {
    id: "VUV",
    name: "Vanuatu Vatu",
  },
  {
    id: "VND",
    name: "Vietnamese Dong",
  },
  {
    id: "VES",
    name: "Venezuelan Bolívar Soberano",
  },
  {
    id: "UZS",
    name: "Uzbekistani Som",
  },
  {
    id: "UYU",
    name: "Uruguayan Peso",
  },
  {
    id: "UGX",
    name: "Ugandan Shilling",
  },
  {
    id: "UAH",
    name: "Ukrainian Hryvnia",
  },
  {
    id: "TZS",
    name: "Tanzanian Shilling",
  },
  {
    id: "TWD",
    name: "New Taiwan Dollar",
  },
  {
    id: "TVD",
    name: "Tuvaluan Dollar",
  },
  {
    id: "TTD",
    name: "Trinidad and Tobago Dollar",
  },
  {
    id: "TRY",
    name: "Turkish Lira",
  },
  {
    id: "TOP",
    name: "Tongan Paʻanga",
  },
  {
    id: "TND",
    name: "Tunisian Dinar",
  },
  {
    id: "TMT",
    name: "Turkmenistan Manat",
  },
  {
    id: "TJS",
    name: "Tajikistani Somoni",
  },
  {
    id: "THB",
    name: "Thai Baht",
  },
  {
    id: "SZL",
    name: "Swazi Lilangeni",
  },
  {
    id: "SYP",
    name: "Syrian Pound",
  },
  {
    id: "STN",
    name: "Sao Tome and Príncipe Dobra",
  },
  {
    id: "SSP",
    name: "South Sudanese Pound",
  },
  {
    id: "SRD",
    name: "Surinamese Dollar",
  },
  {
    id: "SOS",
    name: "Somali Shilling",
  },
  {
    id: "SLL",
    name: "Sierra Leonean Leone",
  },
  {
    id: "SLE",
    name: "Sierra Leonean Leone",
  },
  {
    id: "SHP",
    name: "Saint Helena Pound",
  },
  {
    id: "SGD",
    name: "Singapore Dollar",
  },
  {
    id: "SEK",
    name: "Swedish Krona",
  },
  {
    id: "SDG",
    name: "Sudanese Pound",
  },
  {
    id: "SCR",
    name: "Seychellois Rupee",
  },
  {
    id: "SBD",
    name: "Solomon Islands Dollar",
  },
  {
    id: "SAR",
    name: "Saudi Riyal",
  },
  {
    id: "RWF",
    name: "Rwandan Franc",
  },
  {
    id: "RUB",
    name: "Russian Ruble",
  },
  {
    id: "RSD",
    name: "Serbian Dinar",
  },
  {
    id: "RON",
    name: "Romanian Leu",
  },
  {
    id: "QAR",
    name: "Qatari Riyal",
  },
  {
    id: "PYG",
    name: "Paraguayan Guaraní",
  },
  {
    id: "PLN",
    name: "Polish Zloty",
  },
  {
    id: "PKR",
    name: "Pakistani Rupee",
  },
  {
    id: "PHP",
    name: "Philippine Peso",
  },
  {
    id: "PGK",
    name: "Papua New Guinean Kina",
  },
  {
    id: "PEN",
    name: "Peruvian Sol",
  },
  {
    id: "PAB",
    name: "Panamanian Balboa",
  },
  {
    id: "OMR",
    name: "Omani Rial",
  },
  {
    id: "NZD",
    name: "New Zealand Dollar",
  },
  {
    id: "NPR",
    name: "Nepalese Rupee",
  },
  {
    id: "NOK",
    name: "Norwegian Krone",
  },
  {
    id: "NIO",
    name: "Nicaraguan Córdoba",
  },
  {
    id: "NGN",
    name: "Nigerian Naira",
  },
  {
    id: "NAD",
    name: "Namibian Dollar",
  },
  {
    id: "MZN",
    name: "Mozambican Metical",
  },
  {
    id: "MYR",
    name: "Malaysian Ringgit",
  },
  {
    id: "MXN",
    name: "Mexican Peso",
  },
  {
    id: "MWK",
    name: "Malawian Kwacha",
  },
  {
    id: "MVR",
    name: "Maldivian Rufiyaa",
  },
  {
    id: "MUR",
    name: "Mauritian Rupee",
  },
  {
    id: "MRU",
    name: "Mauritanian Ouguiya",
  },
  {
    id: "MOP",
    name: "Macanese Pataca",
  },
  {
    id: "MNT",
    name: "Mongolian Tögrög",
  },
  {
    id: "MMK",
    name: "Myanmar Kyat",
  },
  {
    id: "MKD",
    name: "Macedonian Denar",
  },
  {
    id: "MGA",
    name: "Malagasy Ariary",
  },
  {
    id: "MDL",
    name: "Moldovan Leu",
  },
  {
    id: "MAD",
    name: "Moroccan Dirham",
  },
  {
    id: "LYD",
    name: "Libyan Dinar",
  },
  {
    id: "LSL",
    name: "Lesotho Loti",
  },
  {
    id: "LRD",
    name: "Liberian Dollar",
  },
  {
    id: "LKR",
    name: "Sri Lankan Rupee",
  },
  {
    id: "LBP",
    name: "Lebanese Pound",
  },
  {
    id: "LAK",
    name: "Lao Kip",
  },
  {
    id: "KZT",
    name: "Kazakhstani Tenge",
  },
  {
    id: "KYD",
    name: "Cayman Islands Dollar",
  },
  {
    id: "KWD",
    name: "Kuwaiti Dinar",
  },
  {
    id: "KRW",
    name: "South Korean Won",
  },
  {
    id: "KMF",
    name: "Comorian Franc",
  },
  {
    id: "KID",
    name: "Kiribati Dollar",
  },
  {
    id: "KHR",
    name: "Cambodian Riel",
  },
  {
    id: "KGS",
    name: "Kyrgyzstani Som",
  },
  {
    id: "KES",
    name: "Kenyan Shilling",
  },
  {
    id: "JPY",
    name: "Japanese Yen",
  },
  {
    id: "JOD",
    name: "Jordanian Dinar",
  },
  {
    id: "JMD",
    name: "Jamaican Dollar",
  },
  {
    id: "JEP",
    name: "Jersey Pound",
  },
  {
    id: "ISK",
    name: "Icelandic Krona",
  },
  {
    id: "IRR",
    name: "Iranian Rial",
  },
  {
    id: "IQD",
    name: "Iraqi Dinar",
  },
  {
    id: "INR",
    name: "Indian Rupee",
  },
  {
    id: "IMP",
    name: "Manx Pound",
  },
  {
    id: "ILS",
    name: "Israeli new Shekel",
  },
  {
    id: "IDR",
    name: "Indonesian Rupiah",
  },
  {
    id: "HUF",
    name: "Hungarian Forint",
  },
  {
    id: "HTG",
    name: "Haitian Gourde",
  },
  {
    id: "HRK",
    name: "Croatian Kuna",
  },
  {
    id: "HNL",
    name: "Honduran Lempira",
  },
  {
    id: "HKD",
    name: "Hong Kong Dollar",
  },
  {
    id: "GYD",
    name: "Guyanese Dollar",
  },
  {
    id: "GTQ",
    name: "Guatemalan Quetzal",
  },
  {
    id: "GNF",
    name: "Guinean Franc",
  },
  {
    id: "GMD",
    name: "Gambian Dalasi",
  },
  {
    id: "GIP",
    name: "Gibraltar Pound",
  },
  {
    id: "GHS",
    name: "Ghanaian Cedi",
  },
  {
    id: "GGP",
    name: "Guernsey Pound",
  },
  {
    id: "GEL",
    name: "Georgian Lari",
  },
  {
    id: "GBP",
    name: "Pound Sterling",
  },
  {
    id: "FOK",
    name: "Faroese Króna",
  },
  {
    id: "FKP",
    name: "Falkland Islands Pound",
  },
  {
    id: "FJD",
    name: "Fijian Dollar",
  },
  {
    id: "EUR",
    name: "Euro",
  },
  {
    id: "ETB",
    name: "Ethiopian Birr",
  },
  {
    id: "ERN",
    name: "Eritrean Nakfa",
  },
  {
    id: "EGP",
    name: "Egyptian Pound",
  },
  {
    id: "DZD",
    name: "Algerian Dinar",
  },
  {
    id: "DOP",
    name: "Dominican Peso",
  },
  {
    id: "DKK",
    name: "Danish Krone",
  },
  {
    id: "DJF",
    name: "Djiboutian Franc",
  },
  {
    id: "CZK",
    name: "Czech Koruna",
  },
  {
    id: "CVE",
    name: "Cabo Verdean Escudo",
  },
  {
    id: "CUP",
    name: "Cuban Peso",
  },
  {
    id: "CRC",
    name: "Costa Rican Colon",
  },
  {
    id: "COP",
    name: "Colombian Peso",
  },
  {
    id: "CNY",
    name: "Chinese Yuan",
  },
  {
    id: "CLP",
    name: "Chilean Peso",
  },
  {
    id: "CHF",
    name: "Swiss Franc",
  },
  {
    id: "CDF",
    name: "Congolese Franc",
  },
  {
    id: "CAD",
    name: "Canadian Dollar",
  },
  {
    id: "BZD",
    name: "Belize Dollar",
  },
  {
    id: "BYN",
    name: "Belarusian Ruble",
  },
  {
    id: "BWP",
    name: "Botswana Pula",
  },
  {
    id: "BTN",
    name: "Bhutanese Ngultrum",
  },
  {
    id: "BSD",
    name: "Bahamian Dollar",
  },
  {
    id: "BRL",
    name: "Brazilian Real",
  },
  {
    id: "BOB",
    name: "Bolivian Boliviano",
  },
  {
    id: "BND",
    name: "Brunei Dollar",
  },
  {
    id: "BMD",
    name: "Bermudian Dollar",
  },
  {
    id: "BIF",
    name: "Burundian Franc",
  },
  {
    id: "BHD",
    name: "Bahraini Dinar",
  },
  {
    id: "BGN",
    name: "Bulgarian Lev",
  },
  {
    id: "BDT",
    name: "Bangladeshi Taka",
  },
  {
    id: "BBD",
    name: "Barbadian Dollar",
  },
  {
    id: "BAM",
    name: "Bosnia and Herzegovina Convertible Mark",
  },
  {
    id: "AZN",
    name: "Azerbaijani Manat",
  },
  {
    id: "AWG",
    name: "Aruban Florin",
  },
  {
    id: "AUD",
    name: "Australian Dollar",
  },
  {
    id: "ARS",
    name: "Argentine Peso",
  },
  {
    id: "AOA",
    name: "Angolan Kwanza",
  },
  {
    id: "ANG",
    name: "Netherlands Antillean Guilder",
  },
  {
    id: "AMD",
    name: "Armenian Dram",
  },
  {
    id: "ALL",
    name: "Albanian Lek",
  },
  {
    id: "AFN",
    name: "Afghan Afghani",
  },
  {
    id: "AED",
    name: "United Arab Emirates Dirham",
  },
  {
    id: "USD",
    name: "United States Dollar",
  },
] as const;

export default currencies;
