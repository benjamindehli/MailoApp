const images = [
    {
        key: "agder",
        title: "Agder",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "akershus",
        title: "Akershus",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "buskerud",
        title: "Buskerud",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "finnmark",
        title: "Finnmark",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "innlandet",
        title: "Innlandet",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "moere-og-romsdal",
        title: "Møre og Romsdal",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "nordland",
        title: "Nordland",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "oestfold",
        title: "Østfold",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "oslo",
        title: "Oslo",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "rogaland",
        title: "Rogaland",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "telemark",
        title: "Telemark",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "troendelag",
        title: "Trøndelag",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "troms",
        title: "Troms",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "vestfold",
        title: "Vestfold",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "vestland",
        title: "Vestland",
        type: "fylke",
        fileExtension: "svg"
    },
    {
        key: "alstahaug",
        title: "Alstahaug",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "alta",
        title: "Alta",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "alvdal",
        title: "Alvdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "alver",
        title: "Alver",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "andoey",
        title: "Andøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aremark",
        title: "Aremark",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "arendal",
        title: "Arendal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "asker",
        title: "Asker",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "askvoll",
        title: "Askvoll",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "askoey",
        title: "Askøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aukra",
        title: "Aukra",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aure",
        title: "Aure",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aurland",
        title: "Aurland",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aurskog-hoeland",
        title: "Aurskog-Høland",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "austevoll",
        title: "Austevoll",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "austrheim",
        title: "Austrheim",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "averoey",
        title: "Averøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "balsfjord",
        title: "Balsfjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "bamble",
        title: "Bamble",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "bardu",
        title: "Bardu",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "beiarn",
        title: "Beiarn",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "bergen",
        title: "Bergen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "berlevaag",
        title: "Berlevåg",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "bindal",
        title: "Bindal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "birkenes",
        title: "Birkenes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "bjerkreim",
        title: "Bjerkreim",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "bjoernafjorden",
        title: "Bjørnafjorden",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "bodoe",
        title: "Bodø",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "bokn",
        title: "Bokn",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "bremanger",
        title: "Bremanger",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "broennoey",
        title: "Brønnøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "bygland",
        title: "Bygland",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "bykle",
        title: "Bykle",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "baatsfjord",
        title: "Båtsfjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "baerum",
        title: "Bærum",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "boe-i-nordland",
        title: "Bø i Nordland",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "boemlo",
        title: "Bømlo",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "dovre",
        title: "Dovre",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "drammen",
        title: "Drammen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "drangedal",
        title: "Drangedal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "dyroey",
        title: "Dyrøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "doenna",
        title: "Dønna",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "eidfjord",
        title: "Eidfjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "eidskog",
        title: "Eidskog",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "eidsvoll",
        title: "Eidsvoll",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "eigersund",
        title: "Eigersund",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "elverum",
        title: "Elverum",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "enebakk",
        title: "Enebakk",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "engerdal",
        title: "Engerdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "etne",
        title: "Etne",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "etnedal",
        title: "Etnedal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "evenes",
        title: "Evenes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "evje-og-hornnes",
        title: "Evje og Hornnes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "farsund",
        title: "Farsund",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "fauske",
        title: "Fauske",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "fedje",
        title: "Fedje",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "fitjar",
        title: "Fitjar",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "fjaler",
        title: "Fjaler",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "fjord",
        title: "Fjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "flakstad",
        title: "Flakstad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "flatanger",
        title: "Flatanger",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "flekkefjord",
        title: "Flekkefjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "flesberg",
        title: "Flesberg",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "flaa",
        title: "Flå",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "folldal",
        title: "Folldal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "fredrikstad",
        title: "Fredrikstad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "frogn",
        title: "Frogn",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "froland",
        title: "Froland",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "frosta",
        title: "Frosta",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "froeya",
        title: "Frøya",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "fyresdal",
        title: "Fyresdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "faerder",
        title: "Færder",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gamvik",
        title: "Gamvik",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gausdal",
        title: "Gausdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gildeskaal",
        title: "Gildeskål",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "giske",
        title: "Giske",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gjemnes",
        title: "Gjemnes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gjerdrum",
        title: "Gjerdrum",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gjerstad",
        title: "Gjerstad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gjesdal",
        title: "Gjesdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gjoevik",
        title: "Gjøvik",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gloppen",
        title: "Gloppen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gol",
        title: "Gol",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gran",
        title: "Gran",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "grane",
        title: "Grane",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gratangen",
        title: "Gratangen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "grimstad",
        title: "Grimstad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "grong",
        title: "Grong",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "grue",
        title: "Grue",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "gulen",
        title: "Gulen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hadsel",
        title: "Hadsel",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "halden",
        title: "Halden",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hamar",
        title: "Hamar",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hamaroey",
        title: "Hamarøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hammerfest",
        title: "Hammerfest",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "haram",
        title: "Haram",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hareid",
        title: "Hareid",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "harstad",
        title: "Harstad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hasvik",
        title: "Hasvik",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hattfjelldal",
        title: "Hattfjelldal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "haugesund",
        title: "Haugesund",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "heim",
        title: "Heim",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hemnes",
        title: "Hemnes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hemsedal",
        title: "Hemsedal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "heroey-i-moere-og-romsdal",
        title: "Herøy i Møre og Romsdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "heroey-i-nordland",
        title: "Herøy i Nordland",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hitra",
        title: "Hitra",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hjartdal",
        title: "Hjartdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hjelmeland",
        title: "Hjelmeland",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hol",
        title: "Hol",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hole",
        title: "Hole",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "holmestrand",
        title: "Holmestrand",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "holtaalen",
        title: "Holtålen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "horten",
        title: "Horten",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hurdal",
        title: "Hurdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hustadvika",
        title: "Hustadvika",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hvaler",
        title: "Hvaler",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hyllestad",
        title: "Hyllestad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "haa",
        title: "Hå",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "haegebostad",
        title: "Hægebostad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hoeyanger",
        title: "Høyanger",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "hoeylandet",
        title: "Høylandet",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "ibestad",
        title: "Ibestad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "inderoey",
        title: "Inderøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "indre-fosen",
        title: "Indre Fosen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "indre-oestfold",
        title: "Indre Østfold",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "iveland",
        title: "Iveland",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "jevnaker",
        title: "Jevnaker",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "karasjok",
        title: "Karasjok",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "karlsoey",
        title: "Karlsøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "karmoey",
        title: "Karmøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kautokeino",
        title: "Kautokeino",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kinn",
        title: "Kinn",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "klepp",
        title: "Klepp",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kongsberg",
        title: "Kongsberg",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kongsvinger",
        title: "Kongsvinger",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "krageroe",
        title: "Kragerø",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kristiansand",
        title: "Kristiansand",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kristiansund",
        title: "Kristiansund",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kroedsherad",
        title: "Krødsherad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kvam",
        title: "Kvam",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kvinesdal",
        title: "Kvinesdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kvinnherad",
        title: "Kvinnherad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kviteseid",
        title: "Kviteseid",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kvitsoey",
        title: "Kvitsøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kvaefjord",
        title: "Kvæfjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kvaenangen",
        title: "Kvænangen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "kaafjord",
        title: "Kåfjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "larvik",
        title: "Larvik",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lavangen",
        title: "Lavangen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lebesby",
        title: "Lebesby",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "leirfjord",
        title: "Leirfjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "leka",
        title: "Leka",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lesja",
        title: "Lesja",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "levanger",
        title: "Levanger",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lier",
        title: "Lier",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lierne",
        title: "Lierne",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lillehammer",
        title: "Lillehammer",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lillesand",
        title: "Lillesand",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lillestroem",
        title: "Lillestrøm",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lindesnes",
        title: "Lindesnes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lom",
        title: "Lom",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "loppa",
        title: "Loppa",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lund",
        title: "Lund",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lunner",
        title: "Lunner",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "luroey",
        title: "Lurøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "luster",
        title: "Luster",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lyngdal",
        title: "Lyngdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "lyngen",
        title: "Lyngen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "laerdal",
        title: "Lærdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "loedingen",
        title: "Lødingen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "loerenskog",
        title: "Lørenskog",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "loeten",
        title: "Løten",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "malvik",
        title: "Malvik",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "marker",
        title: "Marker",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "masfjorden",
        title: "Masfjorden",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "melhus",
        title: "Melhus",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "meloey",
        title: "Meløy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "meraaker",
        title: "Meråker",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "midt-telemark",
        title: "Midt-Telemark",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "midtre-gauldal",
        title: "Midtre Gauldal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "modalen",
        title: "Modalen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "modum",
        title: "Modum",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "molde",
        title: "Molde",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "moskenes",
        title: "Moskenes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "moss",
        title: "Moss",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "maalselv",
        title: "Målselv",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "maasoey",
        title: "Måsøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "namsos",
        title: "Namsos",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "namsskogan",
        title: "Namsskogan",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nannestad",
        title: "Nannestad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "narvik",
        title: "Narvik",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nes",
        title: "Nes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nesbyen",
        title: "Nesbyen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nesna",
        title: "Nesna",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nesodden",
        title: "Nesodden",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nesseby",
        title: "Nesseby",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nissedal",
        title: "Nissedal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nittedal",
        title: "Nittedal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nome",
        title: "Nome",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nord-aurdal",
        title: "Nord-Aurdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nord-fron",
        title: "Nord-Fron",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nord-odal",
        title: "Nord-Odal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nordkapp",
        title: "Nordkapp",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nordre-follo",
        title: "Nordre Follo",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nordre-land",
        title: "Nordre Land",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nordreisa",
        title: "Nordreisa",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "nore-og-uvdal",
        title: "Nore og Uvdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "notodden",
        title: "Notodden",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "naeroeysund",
        title: "Nærøysund",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "oppdal",
        title: "Oppdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "orkland",
        title: "Orkland",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "os",
        title: "Os",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "osen",
        title: "Osen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "oslo",
        title: "Oslo",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "osteroey",
        title: "Osterøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "overhalla",
        title: "Overhalla",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "porsanger",
        title: "Porsanger",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "porsgrunn",
        title: "Porsgrunn",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "rakkestad",
        title: "Rakkestad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "rana",
        title: "Rana",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "randaberg",
        title: "Randaberg",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "rauma",
        title: "Rauma",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "rendalen",
        title: "Rendalen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "rennebu",
        title: "Rennebu",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "rindal",
        title: "Rindal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "ringebu",
        title: "Ringebu",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "ringerike",
        title: "Ringerike",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "ringsaker",
        title: "Ringsaker",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "risoer",
        title: "Risør",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "rollag",
        title: "Rollag",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "raade",
        title: "Råde",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "raelingen",
        title: "Rælingen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "roedoey",
        title: "Rødøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "roeros",
        title: "Røros",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "roest",
        title: "Røst",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "roeyrvik",
        title: "Røyrvik",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "salangen",
        title: "Salangen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "saltdal",
        title: "Saltdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "samnanger",
        title: "Samnanger",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sande-i-moere-og-romsdal",
        title: "Sande i Møre og Romsdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sandefjord",
        title: "Sandefjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sandnes",
        title: "Sandnes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sarpsborg",
        title: "Sarpsborg",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sauda",
        title: "Sauda",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sel",
        title: "Sel",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "selbu",
        title: "Selbu",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "seljord",
        title: "Seljord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "senja",
        title: "Senja",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sigdal",
        title: "Sigdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "siljan",
        title: "Siljan",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sirdal",
        title: "Sirdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "skaun",
        title: "Skaun",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "skien",
        title: "Skien",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "skiptvet",
        title: "Skiptvet",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "skjervoey",
        title: "Skjervøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "skjaak",
        title: "Skjåk",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "smoela",
        title: "Smøla",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "snaasa",
        title: "Snåsa",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sogndal",
        title: "Sogndal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sokndal",
        title: "Sokndal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sola",
        title: "Sola",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "solund",
        title: "Solund",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sortland",
        title: "Sortland",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "stad",
        title: "Stad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "stange",
        title: "Stange",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "stavanger",
        title: "Stavanger",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "steigen",
        title: "Steigen",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "steinkjer",
        title: "Steinkjer",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "stjoerdal",
        title: "Stjørdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "stor-elvdal",
        title: "Stor-Elvdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "stord",
        title: "Stord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "storfjord",
        title: "Storfjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "strand",
        title: "Strand",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "stranda",
        title: "Stranda",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "stryn",
        title: "Stryn",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sula",
        title: "Sula",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "suldal",
        title: "Suldal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sunndal",
        title: "Sunndal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sunnfjord",
        title: "Sunnfjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "surnadal",
        title: "Surnadal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sveio",
        title: "Sveio",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "sykkylven",
        title: "Sykkylven",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "soemna",
        title: "Sømna",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "soendre-land",
        title: "Søndre Land",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "soer-aurdal",
        title: "Sør-Aurdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "soer-fron",
        title: "Sør-Fron",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "soer-odal",
        title: "Sør-Odal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "soer-varanger",
        title: "Sør-Varanger",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "soerfold",
        title: "Sørfold",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "soerreisa",
        title: "Sørreisa",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tana",
        title: "Tana",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "time",
        title: "Time",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tingvoll",
        title: "Tingvoll",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tinn",
        title: "Tinn",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tjeldsund",
        title: "Tjeldsund",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tokke",
        title: "Tokke",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tolga",
        title: "Tolga",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tromsoe",
        title: "Tromsø",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "trondheim",
        title: "Trondheim",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "trysil",
        title: "Trysil",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "traena",
        title: "Træna",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tvedestrand",
        title: "Tvedestrand",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tydal",
        title: "Tydal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tynset",
        title: "Tynset",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tysnes",
        title: "Tysnes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "tysvaer",
        title: "Tysvær",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "toensberg",
        title: "Tønsberg",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "ullensaker",
        title: "Ullensaker",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "ullensvang",
        title: "Ullensvang",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "ulstein",
        title: "Ulstein",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "ulvik",
        title: "Ulvik",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "utsira",
        title: "Utsira",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vadsoe",
        title: "Vadsø",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vaksdal",
        title: "Vaksdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "valle",
        title: "Valle",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vang",
        title: "Vang",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vanylven",
        title: "Vanylven",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vardoe",
        title: "Vardø",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vefsn",
        title: "Vefsn",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vega",
        title: "Vega",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vegaarshei",
        title: "Vegårshei",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vennesla",
        title: "Vennesla",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "verdal",
        title: "Verdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vestby",
        title: "Vestby",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vestnes",
        title: "Vestnes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vestre-slidre",
        title: "Vestre Slidre",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vestre-toten",
        title: "Vestre Toten",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vestvaagoey",
        title: "Vestvågøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vevelstad",
        title: "Vevelstad",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vik",
        title: "Vik",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vindafjord",
        title: "Vindafjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vinje",
        title: "Vinje",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "volda",
        title: "Volda",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "voss",
        title: "Voss",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vaagan",
        title: "Vågan",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vaagaa",
        title: "Vågå",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vaaler-i-innlandet",
        title: "Våler i Innlandet",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vaaler-i-oestfold",
        title: "Våler i Østfold",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "vaeroey",
        title: "Værøy",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "oeksnes",
        title: "Øksnes",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "oerland",
        title: "Ørland",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "oersta",
        title: "Ørsta",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "oestre-toten",
        title: "Østre Toten",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "oevre-eiker",
        title: "Øvre Eiker",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "oeyer",
        title: "Øyer",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "oeygarden",
        title: "Øygarden",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "oeystre-slidre",
        title: "Øystre Slidre",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aafjord",
        title: "Åfjord",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aal",
        title: "Ål",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aalesund",
        title: "Ålesund",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aamli",
        title: "Åmli",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aamot",
        title: "Åmot",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aardal",
        title: "Årdal",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aas",
        title: "Ås",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aaseral",
        title: "Åseral",
        type: "kommune",
        fileExtension: "svg"
    },
    {
        key: "aasnes",
        title: "Åsnes",
        type: "kommune",
        fileExtension: "svg"
    }
];
