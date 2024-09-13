const getStoreId = (storeNumber) => String((storeData[storeNumber]));

const storeData = {
  "1": 340173,
  "2": 340163,
  "3": 353346,
  "4": 353350,
  "5": 346190,
  "6": 340176,
  "7": 353349,
  "8": 340170,
  "9": 340183,
  "10": 340238,
  "11": 346189,
  "12": 340175,
  "14": 353345,
  "15": 359245,
  "16": 353358,
  "17": 353354,
  "18": 353417,
  "19": 353348,
  "20": 340313,
  "21": 353352,
  "22": 340314,
  "23": 340315,
  "24": 340169,
  "25": 340197,
  "26": 353418,
  "27": 353356,
  "28": 324099,
  "29": 353367,
  "30": 353419,
  "31": 340316,
  "32": 353420,
  "33": 340318,
  "34": 340319,
  "35": 353421,
  "36": 340320,
  "37": 340321,
  "38": 340322,
  "39": 340165,
  "40": 353347,
  "41": 353422,
  "42": 346111,
  "43": 323748,
  "44": 340174,
  "45": 353423,
  "46": 353424,
  "47": 340323,
  "48": 340324,
  "49": 340162,
  "50": 340166,
  "51": 353425,
  "52": 346192,
  "53": 340325,
  "54": 353426,
  "55": 340326,
  "56": 340327,
  "57": 354665,
  "58": 353427,
  "59": 353428,
  "60": 340180,
  "61": 340178,
  "62": 353342,
  "63": 340328,
  "64": 346191,
  "65": 340329,
  "66": 353325,
  "67": 346110,
  "68": 353429,
  "69": 353302,
  "70": 353341,
  "71": 353344,
  "72": 353357,
  "73": 354667,
  "74": 340179,
  "75": 353397,
  "76": 340280,
  "77": 354668,
  "78": 353398,
  "79": 340281,
  "80": 340282,
  "81": 353399,
  "82": 340283,
  "83": 340284,
  "84": 354669,
  "85": 340286,
  "86": 353400,
  "87": 340287,
  "88": 340288,
  "89": 340289,
  "91": 346109,
  "101": 354671,
  "102": 353401,
  "103": 353402,
  "104": 340291,
  "106": 354672,
  "107": 353403,
  "108": 353404,
  "109": 346114,
  "110": 353405,
  "111": 353406,
  "112": 353407,
  "113": 323368,
  "114": 340293,
  "115": 340294,
  "116": 353408,
  "117": 353409,
  "118": 353410,
  "119": 340295,
  "120": 340240,
  "121": 340224,
  "122": 353373,
  "123": 340241,
  "124": 340239,
  "125": 340296,
  "126": 323370,
  "127": 354664,
  "128": 340177,
  "129": 340171,
  "130": 340297,
  "131": 340141,
  "132": 340182,
  "133": 353343,
  "134": 353430,
  "135": 340298,
  "137": 340299,
  "138": 340300,
  "139": 340211,
  "140": 340167,
  "141": 340301,
  "142": 353431,
  "143": 340330,
  "144": 340331,
  "145": 340332,
  "147": 340334,
  "148": 340335,
  "150": 353353,
  "151": 340336,
  "152": 346196,
  "153": 340337,
  "154": 353411,
  "155": 340161,
  "156": 354637,
  "157": 353355,
  "158": 340302,
  "159": 353351,
  "160": 340172,
  "161": 353412,
  "162": 340303,
  "163": 353432,
  "164": 353413,
  "165": 340236,
  "166": 353318,
  "167": 318839,
  "168": 353433,
  "169": 346112,
  "170": 340132,
  "171": 340133,
  "172": 340235,
  "173": 353414,
  "174": 359248,
  "175": 387135,
  "176": 353415,
  "177": 353319,
  "178": 340190,
  "179": 353434,
  "180": 359249,
  "181": 353320,
  "182": 359251,
  "183": 353416,
  "184": 340212,
  "185": 340168,
  "186": 319471,
  "187": 319650,
  "188": 359253,
  "189": 359254,
  "190": 340181,
  "191": 340339,
  "192": 340304,
  "193": 340309,
  "194": 340340,
  "195": 353359,
  "196": 359255,
  "197": 340305,
  "198": 354647,
  "199": 346117,
  "200": 340226,
  "201": 340259,
  "202": 354648,
  "204": 379309,
  "205": 362693,
  "206": 359256,
  "207": 359257,
  "208": 340312,
  "209": 340308,
  "210": 354654,
  "211": 362697,
  "212": 340310,
  "213": 346115,
  "214": 359260,
  "215": 387021,
  "216": 359262,
  "217": 371808,
  "218": 366925,
  "219": 365317,
  "220": 354653,
  "222": 374603,
  "223": 385881,
  "224": 321285,
  "225": 359264,
  "226": 395986,
  "227": 379745,
  "228": 359267,
  "229": 372857,
  "230": 320218,
  "231": 362768,
  "232": 321043,
  "233": 365319,
  "234": 371810,
  "235": 368768,
  "236": 367484,
  "237": 384872,
  "238": 394224,
  "239": 377549,
  "240": 381255,
  "241": 398385,
  "242": 385088,
  "243": 365323,
  "244": 379645,
  "245": 379316,
  "246": 384757,
  "247": 368456,
  "248": 383877,
  "249": 379329,
  "250": 374604,
  "251": 378847,
  "252": 378849,
  "253": 377548,
  "297": 379741,
  "298": 379646,
  "299": 382618,
  "300": 382619,
  "301": 353370,
  "302": 353390,
  "303": 340254,
  "304": 340267,
  "305": 340266,
  "306": 340264,
  "307": 340209,
  "308": 353329,
  "309": 340215,
  "310": 353323,
  "311": 353383,
  "312": 353392,
  "314": 340251,
  "315": 353321,
  "316": 346113,
  "317": 340268,
  "318": 340250,
  "319": 353381,
  "320": 353391,
  "321": 353384,
  "322": 340262,
  "323": 353327,
  "324": 340257,
  "325": 353322,
  "326": 353324,
  "327": 379751,
  "328": 378850,
  "329": 353377,
  "330": 340208,
  "331": 340148,
  "332": 353376,
  "333": 340144,
  "334": 353328,
  "335": 378852,
  "336": 398384,
  "337": 340145,
  "338": 353388,
  "339": 340205,
  "340": 385662,
  "341": 340146,
  "342": 340147,
  "343": 353389,
  "344": 340156,
  "345": 340207,
  "346": 353334,
  "347": 353385,
  "348": 319976,
  "349": 340142,
  "350": 353368,
  "351": 346187,
  "352": 340210,
  "353": 340149,
  "354": 387280,
  "355": 353371,
  "356": 340160,
  "357": 319996,
  "358": 353335,
  "359": 340206,
  "360": 353330,
  "361": 340157,
  "362": 353382,
  "363": 353380,
  "364": 346195,
  "365": 340155,
  "366": 346188,
  "367": 340143,
  "368": 340158,
  "369": 353338,
  "370": 353340,
  "371": 340159,
  "372": 353379,
  "373": 340260,
  "374": 353386,
  "375": 353387,
  "376": 378853,
  "377": 397447,
  "378": 353326,
  "379": 353336,
  "381": 340243,
  "382": 340150,
  "383": 340185,
  "384": 378855,
  "385": 340213,
  "386": 379740,
  "387": 383849,
  "388": 397449,
  "389": 390580,
  "390": 397450,
  "391": 387927,
  "392": 435137,
  "394": 390579,
  "395": 397688,
  "396": 387928,
  "397": 397689,
  "398": 398382,
  "400": 395990,
  "401": 340151,
  "402": 340152,
  "403": 353333,
  "404": 397690,
  "405": 353435,
  "406": 340341,
  "408": 340343,
  "409": 340344,
  "410": 386838,
  "411": 434632,
  "412": 340345,
  "413": 395984,
  "414": 387929,
  "415": 353436,
  "416": 353437,
  "418": 340346,
  "419": 353438,
  "420": 353439,
  "421": 340347,
  "423": 387596,
  "424": 340348,
  "426": 340349,
  "427": 340350,
  "429": 340351,
  "430": 353440,
  "431": 353441,
  "432": 340256,
  "433": 340352,
  "434": 353442,
  "501": 388990,
  "502": 353337,
  "503": 340258,
  "504": 353369,
  "505": 340248,
  "506": 353332,
  "507": 353331,
  "508": 397691,
  "509": 340265,
  "510": 340270,
  "511": 340153,
  "512": 340261,
  "513": 340253,
  "514": 340198,
  "515": 340192,
  "516": 340269,
  "518": 340246,
  "519": 340244,
  "520": 340272,
  "521": 340271,
  "522": 359269,
  "523": 340199,
  "524": 340195,
  "525": 353360,
  "526": 340194,
  "527": 353365,
  "528": 353366,
  "529": 340247,
  "530": 340196,
  "531": 387776,
  "532": 340191,
  "533": 346194,
  "534": 346178,
  "535": 353393,
  "536": 387930,
  "537": 353394,
  "538": 353395,
  "539": 340202,
  "540": 359270,
  "541": 340273,
  "542": 353378,
  "543": 320023,
  "544": 353375,
  "545": 340252,
  "546": 353374,
  "548": 340200,
  "549": 353363,
  "550": 340255,
  "551": 353361,
  "552": 340186,
  "553": 346193,
  "554": 340242,
  "555": 340204,
  "556": 340189,
  "557": 406267,
  "558": 340274,
  "559": 353396,
  "560": 340184,
  "561": 374849,
  "562": 374489,
  "563": 374487,
  "602": 346118,
  "603": 366928,
  "604": 366929,
  "605": 346119,
  "606": 366933,
  "607": 366935,
  "608": 366936,
  "609": 346120,
  "610": 370228,
  "611": 371550,
  "613": 371551,
  "614": 371552,
  "615": 346122,
  "616": 346123,
  "617": 371553,
  "618": 346124,
  "619": 346125,
  "620": 382178,
  "621": 346126,
  "622": 346127,
  "624": 374488,
  "625": 346128,
  "626": 346129,
  "627": 346130,
  "628": 346131,
  "629": 400568,
  "630": 346132,
  "631": 346133,
  "632": 346134,
  "633": 346135,
  "634": 346136,
  "635": 346137,
  "636": 346138,
  "637": 346139,
  "638": 346140,
  "639": 346141,
  "640": 346142,
  "641": 346143,
  "642": 346144,
  "643": 346145,
  "644": 346146,
  "645": 346147,
  "646": 346148,
  "647": 346149,
  "648": 346150,
  "649": 346151,
  "650": 346152,
  "651": 346153,
  "652": 346154,
  "653": 346155,
  "654": 346156,
  "655": 346157,
  "656": 346158,
  "657": 346159,
  "658": 346160,
  "659": 346161,
  "660": 387775,
  "661": 346162,
  "662": 346163,
  "663": 346164,
  "664": 346165,
  "665": 346166,
  "666": 346167,
  "667": 346168,
  "668": 346169,
  "669": 346170,
  "670": 346171,
  "671": 313470,
  "672": 357876,
  "673": 356891,
  "674": 359303,
  "675": 359305,
  "676": 336871,
  "677": 359306,
  "701": 340306,
  "702": 340214,
  "705": 372097,
  "706": 356507,
  "708": 356558,
  "711": 353640,
  "712": 359288,
  "716": 366822,
  "721": 368225,
  "723": 377478,
  "724": 378099,
  "729": 399771,
  "730": 430460,
  "735": 427083,
  "738": 394228,
  "739": 395994,
  "741": 397692,
  "743": 434631,
  "745": 374896,
  "746": 374897,
  "747": 374898,
  "748": 374899,
  "749": 374900,
  "784": 388996,
  "786": 353372,
  "799": 366030,
  "800": 366031,
  "801": 366033,
  "802": 366035,
  "803": 346172,
  "804": 346173,
  "805": 346174,
  "806": 346175,
  "807": 346176,
  "808": 346177,
  "810": 346179,
  "811": 346180,
  "812": 346181,
  "813": 346182,
  "814": 346183,
  "815": 346184,
  "816": 346185,
  "817": 359271,
  "818": 372087,
  "819": 372089,
  "820": 372092,
  "821": 372093,
  "822": 372094,
  "823": 372095,
  "824": 372090,
  "825": 372091,
  "826": 353645,
  "827": 353646,
  "828": 372096,
  "829": 356719,
  "830": 341851,
  "831": 356553,
  "832": 356551,
  "833": 356549,
  "834": 356542,
  "835": 356488,
  "836": 356555,
  "837": 356538,
  "838": 437080,
  "839": 356522,
  "840": 356520,
  "841": 356513,
  "842": 356510,
  "843": 353613,
  "844": 340606,
  "845": 356505,
  "846": 353614,
  "847": 340608,
  "848": 356494,
  "849": 356519,
  "850": 356530,
  "851": 437092,
  "852": 437081,
  "853": 356531,
  "854": 437093,
  "855": 356533,
  "856": 356534,
  "857": 437082,
  "858": 437094,
  "859": 437083,
  "860": 356491,
  "861": 356483,
  "862": 437095,
  "863": 437084,
  "864": 356485,
  "865": 437096,
  "866": 437085,
  "867": 437097,
  "868": 437086,
  "869": 437098,
  "870": 356502,
  "871": 314047,
  "872": 349201,
  "873": 349200,
  "874": 321743,
  "875": 356508,
  "876": 321744,
  "877": 353617,
  "878": 356514,
  "879": 347096,
  "880": 347097,
  "881": 347098,
  "882": 356515,
  "883": 353610,
  "884": 437087,
  "885": 356525,
  "886": 319445,
  "887": 437099,
  "888": 353618,
  "889": 356495,
  "890": 356500,
  "891": 356518,
  "892": 356528,
  "893": 356523,
  "894": 356529,
  "895": 356532,
  "896": 356537,
  "897": 356547,
  "898": 356557,
  "900": 372489,
  "901": 356712,
  "902": 437088,
  "903": 356594,
  "904": 359292,
  "905": 356889,
  "906": 356715,
  "907": 387282,
  "908": 437100,
  "909": 356560,
  "910": 356886,
  "911": 437089,
  "912": 356568,
  "913": 356713,
  "914": 437101,
  "915": 437090,
  "916": 437102,
  "917": 356714,
  "918": 437091,
  "919": 437103,
  "920": 356569,
  "921": 354956,
  "932": 399785,
  "933": 399708,
  "934": 399751,
  "936": 399786,
  "937": 399709,
  "938": 399752,
  "939": 399787,
  "940": 399710,
  "941": 399753,
  "997": 400013,
  "1003": 399750,
  "1004": 396294,
  "1005": 380999,
  "1006": 381013,
  "1007": 381009,
  "1008": 381084,
  "1009": 381066,
  "1010": 381033,
  "1011": 380990,
  "1012": 381015,
  "1014": 381085,
  "1015": 381067,
  "1016": 381035,
  "1017": 381003,
  "1018": 381023,
  "1019": 381020,
  "1020": 381086,
  "1021": 381068,
  "1022": 381037,
  "1023": 380991,
  "1024": 381022,
  "1025": 381025,
  "1026": 381087,
  "1027": 381069,
  "1028": 381039,
  "1029": 381000,
  "1030": 381014,
  "1031": 381031,
  "1032": 381088,
  "1033": 381070,
  "1034": 381042,
  "1035": 381001,
  "1037": 381034,
  "1038": 381089,
  "1039": 381071,
  "1040": 381045,
  "1041": 381002,
  "1050": 381026,
  "1051": 381036,
  "1052": 381090,
  "1053": 381072,
  "1054": 381048,
  "1055": 381006,
  "1056": 381024,
  "1057": 381038,
  "1058": 381091,
  "1059": 381075,
  "1060": 381052,
  "1061": 381004,
  "1062": 381027,
  "1063": 381040,
  "1064": 381092,
  "1065": 381076,
  "1066": 381054,
  "1067": 381007,
  "1068": 381029,
  "1069": 381041,
  "1070": 381093,
  "1071": 381080,
  "1072": 381056,
  "1073": 380992,
  "1074": 381032,
  "1075": 381043,
  "1076": 381094,
  "1077": 381081,
  "1078": 381057,
  "1079": 381005,
  "1080": 381028,
  "1081": 381044,
  "1082": 381095,
  "1083": 381082,
  "1110": 381058,
  "1111": 381008,
  "1112": 381030,
  "1132": 381083,
  "1133": 381059,
  "1134": 380993,
  "1135": 381016,
  "1136": 381047,
  "1137": 381097,
  "1141": 381017,
  "1142": 381049,
  "1146": 380995,
  "1158": 381011,
  "1159": 381050,
  "1160": 381099,
  "1161": 381077,
  "1162": 381062,
  "1163": 380998,
  "1164": 381012,
  "1179": 395912,
  "1180": 381051,
  "1181": 381100,
  "1182": 381074,
  "1183": 381063,
  "1188": 380996,
  "1189": 381019,
  "1190": 381053,
  "1191": 381101,
  "1192": 381073,
  "1193": 381064,
  "1194": 380997,
  "1195": 381018,
  "1213": 381055,
  "1214": 381102,
  "1215": 398369,
  "1216": 398370,
  "1217": 398371,
  "1218": 398372,
  "1219": 398373,
  "1220": 398374,
  "1221": 398375,
  "1222": 398376,
  "1223": 398377,
  "1224": 398379,
  "1225": 398380,
  "1226": 398381,
  "1230": 398290,
  "1231": 398291,
  "1232": 398292,
  "1233": 398293,
  "1234": 398294,
  "1235": 398297,
  "1236": 398282,
  "1237": 398300,
  "1238": 398301,
  "1239": 398303,
  "1240": 398304,
  "1241": 398305,
  "1242": 398306,
  "1243": 398307,
  "1244": 398308,
  "1245": 398298,
  "1246": 398280,
  "1247": 398274,
  "1248": 398278,
  "1249": 398277,
  "1250": 398279,
  "1251": 398271,
  "1252": 398281,
  "1253": 398273,
  "1254": 398283,
  "1255": 398346,
  "1256": 398332,
  "1257": 398285,
  "1260": 398349,
  "1366": 399728,
  "1367": 399772,
  "1368": 399691,
  "1369": 399737,
  "1370": 399773,
  "1371": 399692,
  "1372": 399738,
  "1373": 399774,
  "1374": 399694,
  "1375": 399739,
  "1376": 399775,
  "1377": 399696,
  "1378": 399740,
  "1379": 399776,
  "1380": 399698,
  "1381": 399741,
  "1382": 399777,
  "1383": 399699,
  "1384": 399742,
  "1385": 399778,
  "1386": 399700,
  "1387": 399744,
  "1388": 399779,
  "1389": 399701,
  "1390": 399745,
  "1391": 399780,
  "1392": 399702,
  "1393": 399746,
  "1394": 399781,
  "1395": 399704,
  "1396": 399747,
  "1397": 399782,
  "1398": 399705,
  "1399": 399748,
  "1400": 399783,
  "1401": 399706,
  "1402": 399749,
  "1403": 399784,
  "1404": 399707,
  "1405": 430459,
  "1750": 398330,
  "1751": 398354,
  "1752": 398329,
  "1753": 398333,
  "1754": 398336,
  "1755": 398356,
  "1756": 398337,
  "1757": 398353,
  "1758": 398357,
  "1759": 398352,
  "1760": 398348,
  "1761": 398351,
  "1762": 398334,
  "1763": 398335,
  "1764": 398355,
  "1765": 398338,
  "1766": 399173,
  "1767": 399174,
  "1768": 399175,
  "1769": 399176,
  "1770": 399177,
  "1771": 400692,
  "1772": 400693,
  "1773": 398767,
  "1774": 398768,
  "1775": 399178,
  "1776": 399179,
  "1777": 399185,
  "1778": 399252,
  "1779": 399186,
  "1782": 400697,
  "1783": 400701,
  "1784": 400694,
  "1785": 400695,
  "1786": 400696,
  "1787": 402118,
  "1791": 401974,
  "1792": 402498,
  "1793": 402499,
  "1794": 403302,
  "1795": 403303,
  "1796": 403514,
  "1797": 403860,
  "1798": 403864,
  "1799": 405267,
  "1800": 404799,
  "1801": 429627,
  "1802": 404800,
  "1803": 407075,
  "1804": 404801,
  "1806": 426115,
  "1807": 434593,
  "1808": 407084,
  "1810": 429655,
  "1811": 434407,
  "1812": 434590,
  "1813": 434591,
  "1814": 434592,
  "2001": 398753,
  "2002": 404852,
  "2003": 404873,
  "2004": 398754,
  "2005": 397451,
  "2006": 398383,
  "2007": 406188,
  "2008": 404802,
  "2009": 397701,
  "2011": 405778,
  "2012": 422078,
  "2013": 435140,
  "2014": 406191,
  "2015": 397693,
  "2016": 405681,
  "2017": 400475,
  "2018": 397694,
  "2019": 435371,
  "2020": 400385,
  "2021": 404853,
  "2022": 406268,
  "2024": 405773,
  "2026": 404854,
  "2027": 404855,
  "2028": 436365,
  "2029": 422096,
  "2030": 405777,
  "2031": 428720,
  "2034": 403419,
  "2035": 426166,
  "2036": 435504,
  "2037": 428721,
  "2038": 404856,
  "2039": 426165,
  "2040": 406192,
  "2041": 405775,
  "2042": 404632,
  "2043": 404861,
  "2044": 405772,
  "2045": 428725,
  "2046": 422116,
  "2047": 405682,
  "2048": 435146,
  "2049": 434636,
  "2050": 435175,
  "2053": 430034,
  "2054": 436157,
  "2056": 436225,
  "2058": 428722,
  "2059": 429948,
  "2060": 435144,
  "2061": 428719,
  "2062": 406193,
  "2063": 435506,
  "2064": 434633,
  "2065": 436158,
  "2066": 435138,
  "2068": 434635,
  "2070": 435507,
  "2071": 430032,
  "2072": 428723,
  "2073": 437999,
  "2074": 404857,
  "2075": 435365,
  "2078": 426167,
  "2083": 403390,
  "2084": 403392,
  "2085": 403393,
  "2086": 403394,
  "2088": 435174,
  "2089": 434638,
  "2090": 436156,
  "2091": 435141,
  "2094": 435515,
  "2095": 434634,
  "2098": 435172,
  "2099": 434637,
  "2100": 435508,
  "2102": 435142,
  "2103": 435509,
  "2104": 430294,
  "2105": 435886,
  "2106": 435139,
  "2109": 434639,
  "2110": 405776,
  "2112": 435537,
  "2113": 435171,
  "2114": 427080,
  "2115": 430295,
  "2116": 435510,
  "2118": 435143,
  "2120": 436224,
  "2121": 435084,
  "2124": 435511,
  "2126": 435512,
  "2127": 422114,
  "2129": 435513,
  "2131": 436226,
  "2132": 438303,
  "2134": 438000,
  "2136": 436159,
  "2139": 435176,
  "2142": 438004,
  "2144": 438305,
  "2146": 438002,
  "2148": 437145,
  "2152": 437116,
  "2153": 435173,
  "2167": 438001,
  "2184": 438003,
  "2208": 435548,
  "2214": 437998,
  "2226": 437444,
  "2227": 437435,
  "2228": 437445,
  "2229": 437436,
  "4001": 429674,
  "4002": 429675,
  "4003": 429676,
  "4004": 429367,
  "4005": 429368,
  "4006": 429369,
  "4007": 429370,
  "4008": 429371,
  "4009": 429372,
  "4010": 429373,
  "4011": 429374,
  "4012": 429375,
  "4013": 429677,
  "4014": 429678,
  "4015": 429376,
  "4016": 429377,
  "4017": 429378,
  "4018": 429679,
  "4019": 429680,
  "4020": 429379,
  "4021": 429681,
  "4022": 429682,
  "4023": 429380,
  "4024": 429381,
  "4025": 429683,
  "4026": 429382,
  "4027": 429684,
  "4028": 429685,
  "4029": 429383,
  "4030": 429384,
  "4031": 429385,
  "4032": 429686,
  "4033": 435152,
  "4034": 429687,
  "4035": 429688,
  "4036": 429386,
  "4037": 429387,
  "4038": 429689,
  "4039": 429690,
  "4040": 429388,
  "4041": 429389,
  "4042": 429691,
  "4043": 429390,
  "4044": 429391,
  "4045": 429692,
  "4046": 429392,
  "4047": 429393,
  "4048": 429394,
  "4049": 429395,
  "4050": 429693,
  "4051": 429694,
  "4052": 429695,
  "4053": 429696,
  "4054": 429697,
  "4055": 429698,
  "4056": 429699,
  "4057": 429700,
  "4058": 429701,
  "4059": 429702,
  "4060": 429703,
  "4061": 429704,
  "4062": 429705,
  "4063": 429706,
  "4064": 429396,
  "4065": 429397,
  "4066": 429398,
  "4067": 429399,
  "4068": 429707,
  "4069": 429708,
  "4070": 429709,
  "4071": 429710,
  "4072": 429400,
  "4073": 429711,
  "4074": 429712,
  "4075": 429713,
  "4076": 429401,
  "4077": 429714,
  "4078": 429402,
  "4079": 429403,
  "4080": 429715,
  "4081": 429716,
  "4082": 429717,
  "4083": 429718,
  "4084": 429404,
  "4085": 429719,
  "4086": 429720,
  "4087": 429721,
  "4088": 429722,
  "4089": 429405,
  "4090": 429406,
  "4091": 429407,
  "4092": 429408,
  "4093": 429409,
  "4094": 429410,
  "4095": 429411,
  "4096": 429412,
  "4097": 429413,
  "4098": 429723,
  "4099": 429414,
  "4100": 429415,
  "4101": 429416,
  "4102": 429417,
  "4103": 429418,
  "4104": 429724,
  "4105": 429725,
  "4106": 429419,
  "4107": 429420,
  "4108": 429421,
  "4109": 429726,
  "4110": 429727,
  "4111": 429728,
  "4112": 429729,
  "4113": 429730,
  "4114": 429731,
  "4115": 429732,
  "4116": 429733,
  "4117": 429734,
  "4118": 429735,
  "4119": 429736,
  "4120": 429737,
  "4121": 429738,
  "4122": 429739,
  "4123": 429740,
  "4124": 429741,
  "4125": 429742,
  "4126": 429743,
  "4127": 429422,
  "4128": 429423,
  "4129": 429744,
  "4130": 429745,
  "4131": 429459,
  "4132": 429746,
  "4133": 429424,
  "4134": 429425,
  "4135": 429747,
  "4136": 429748,
  "4137": 429749,
  "4138": 429750,
  "4139": 429426,
  "4140": 429427,
  "4141": 429751,
  "4142": 429428,
  "4143": 429429,
  "4144": 429430,
  "4145": 429752,
  "4146": 429431,
  "4147": 429432,
  "4148": 429433,
  "4149": 429434,
  "4150": 429753,
  "4151": 429435,
  "4152": 429436,
  "4153": 429754,
  "4154": 429755,
  "4155": 429437,
  "4156": 429438,
  "4157": 429439,
  "4158": 429440,
  "4159": 429441,
  "4160": 429442,
  "4161": 429756,
  "4162": 429757,
  "4163": 429758,
  "4164": 429443,
  "4165": 429759,
  "4166": 429760,
  "4167": 429761,
  "4168": 429762,
  "4169": 429444,
  "4170": 429445,
  "4171": 429446,
  "4172": 429763,
  "4173": 429764,
  "4174": 429765,
  "4175": 429447,
  "4176": 429766,
  "4177": 429767,
  "4178": 429768,
  "4179": 429769,
  "4180": 429770,
  "4181": 429771,
  "4182": 429772,
  "4183": 429773,
  "4184": 429774,
  "4185": 429448,
  "4186": 429449,
  "4187": 429450,
  "4188": 429451,
  "4189": 429775,
  "4190": 429776,
  "4191": 429452,
  "4192": 429453,
  "4193": 429454,
  "4194": 429455,
  "4195": 429456,
  "4196": 429457,
  "4197": 429777,
  "4198": 429778,
  "4199": 429779,
  "4200": 429780,
  "4201": 429781,
  "4202": 429782,
  "4203": 430043,
  "4204": 430044,
  "4205": 430045,
  "4206": 430046,
  "4207": 430047,
  "4209": 430048,
  "4210": 430337,
  "4211": 430338,
  "4212": 430339,
  "4213": 430340,
  "4214": 430341,
  "4215": 430049,
  "4216": 430050,
  "4217": 430051,
  "4218": 430705,
  "4219": 430706,
  "4220": 430616,
  "4221": 430617,
  "4222": 430618,
  "4223": 430619,
  "4224": 430620,
  "4225": 430621,
  "4226": 430622,
  "4228": 430623,
  "4229": 430624,
  "4230": 430625,
  "4231": 430626,
  "4232": 430627,
  "4233": 430628,
  "4234": 430629,
  "4235": 430342,
  "4236": 430343,
  "4237": 430344,
  "4238": 430345,
  "4239": 430346,
  "4240": 430347,
  "4241": 430348,
  "4242": 430349,
  "4243": 430350,
  "4244": 430351,
  "4245": 430352,
  "4246": 430353,
  "4247": 430354,
  "4248": 430355,
  "4249": 430356,
  "4250": 430357,
  "4251": 430358,
  "4252": 430359,
  "4253": 430360,
  "4254": 430361,
  "4255": 430362,
  "4256": 430363,
  "4257": 430364,
  "4258": 430365,
  "4259": 430366,
  "4260": 430367,
  "4261": 430368,
  "4262": 430369,
  "4263": 430370,
  "4264": 430371,
  "4265": 430372,
  "4266": 430373,
  "4267": 430374,
  "4268": 430375,
  "4269": 430376,
  "4270": 430377,
  "4271": 430378,
  "4272": 430379,
  "4273": 430380,
  "4274": 430381,
  "4275": 430382,
  "4276": 430383,
  "4277": 430707,
  "4278": 430708,
  "4279": 430709,
  "4280": 430710,
  "4281": 430711,
  "4282": 434239,
  "4283": 430712,
  "4285": 430630,
  "4286": 430631,
  "4287": 430052,
  "4288": 430053,
  "4289": 430054,
  "4290": 430055,
  "4291": 430056,
  "4292": 430057,
  "4293": 430058,
  "4294": 430059,
  "4295": 430060,
  "4296": 430061,
  "4297": 430062,
  "4299": 430064,
  "4300": 430065,
  "4301": 430066,
  "4302": 430067,
  "4303": 430068,
  "4304": 430069,
  "4305": 430070,
  "4306": 430071,
  "4307": 430072,
  "4308": 430073,
  "4309": 430074,
  "4310": 430075,
  "4311": 430076,
  "4312": 430077,
  "4313": 430078,
  "4314": 430079,
  "4315": 430080,
  "4316": 430081,
  "4317": 430082,
  "4318": 430083,
  "4319": 430084,
  "4320": 430085,
  "4321": 430086,
  "4322": 430087,
  "4323": 430088,
  "4324": 430089,
  "4326": 430090,
  "4327": 430091,
  "4328": 430092,
  "4329": 430093,
  "4330": 430713,
  "4331": 430602,
  "4332": 430714,
  "4333": 434240,
  "4334": 430715,
  "4335": 430716,
  "4336": 430717,
  "4337": 430718,
  "4338": 434241,
  "4339": 434242,
  "4340": 430719,
  "4341": 430720,
  "4342": 430721,
  "4343": 430722,
  "4344": 430723,
  "4345": 430603,
  "4346": 430724,
  "4347": 430725,
  "4348": 430726,
  "4349": 430727,
  "4350": 430728,
  "4351": 430729,
  "4352": 430730,
  "4353": 430731,
  "4354": 430732,
  "4355": 430733,
  "4356": 430734,
  "4357": 430604,
  "4358": 430605,
  "4359": 430606,
  "4360": 434243,
  "4361": 430735,
  "4362": 430736,
  "4363": 430737,
  "4364": 430738,
  "4365": 430739,
  "4366": 430740,
  "4367": 430742,
  "4368": 430743,
  "4369": 430744,
  "4370": 430607,
  "4371": 430608,
  "4372": 430745,
  "4373": 430746,
  "4374": 430609,
  "4375": 430747,
  "4376": 430748,
  "4377": 430610,
  "4378": 430749,
  "4379": 430611,
  "4380": 430612,
  "4381": 430750,
  "4382": 430751,
  "4383": 430613,
  "4384": 430752,
  "4385": 430753,
  "4386": 430754,
  "4387": 430755,
  "4388": 430094,
  "4389": 430095,
  "4390": 430096,
  "4391": 430097,
  "4392": 430098,
  "4393": 430099,
  "4394": 430100,
  "4395": 430101,
  "4396": 430102,
  "4397": 430103,
  "4398": 430104,
  "4399": 430105,
  "4400": 430106,
  "4401": 430107,
  "4402": 430108,
  "4403": 430109,
  "4404": 430110,
  "4405": 430111,
  "4406": 430112,
  "4407": 430113,
  "4408": 430114,
  "4409": 430115,
  "4410": 430116,
  "4411": 430117,
  "4412": 430118,
  "4413": 430119,
  "4414": 430120,
  "4415": 430121,
  "4416": 430122,
  "4417": 430123,
  "4418": 430124,
  "4419": 430125,
  "4420": 430126,
  "4421": 430127,
  "4422": 430128,
  "4423": 430129,
  "4424": 430130,
  "4425": 430131,
  "4426": 430132,
  "4427": 430133,
  "4428": 430134,
  "4429": 430135,
  "4430": 430632,
  "4431": 430633,
  "4432": 430634,
  "4433": 430635,
  "4434": 430636,
  "4435": 430582,
  "4436": 430583,
  "4437": 430637,
  "4438": 430638,
  "4439": 430639,
  "4440": 430640,
  "4441": 430584,
  "4442": 430641,
  "4443": 430642,
  "4444": 430643,
  "4445": 430585,
  "4446": 430586,
  "4447": 430644,
  "4448": 430645,
  "4449": 430646,
  "4450": 430647,
  "4451": 430648,
  "4452": 430649,
  "4453": 430650,
  "4454": 430651,
  "4455": 430652,
  "4456": 430587,
  "4457": 430588,
  "4458": 430589,
  "4459": 430590,
  "4460": 430653,
  "4461": 430654,
  "4462": 430655,
  "4463": 430656,
  "4464": 430657,
  "4465": 430658,
  "4466": 430659,
  "4467": 430660,
  "4468": 430661,
  "4469": 430662,
  "4470": 430663,
  "4471": 430664,
  "4472": 430665,
  "4473": 430666,
  "4475": 430668,
  "4476": 430669,
  "4477": 430670,
  "4478": 430671,
  "4480": 430673,
  "4481": 430591,
  "4482": 430674,
  "4483": 430675,
  "4484": 430676,
  "4485": 430677,
  "4486": 430678,
  "4487": 430592,
  "4488": 430679,
  "4489": 430593,
  "4490": 430680,
  "4491": 430595,
  "4492": 430681,
  "4493": 430682,
  "4494": 430683,
  "4495": 430684,
  "4496": 430685,
  "4497": 430596,
  "4498": 430686,
  "4499": 430687,
  "4500": 430688,
  "4501": 430597,
  "4502": 430689,
  "4503": 430690,
  "4504": 430691,
  "4505": 430692,
  "4506": 430693,
  "4507": 430694,
  "4508": 430695,
  "4509": 430696,
  "4510": 430598,
  "4511": 430697,
  "4512": 430698,
  "4513": 430599,
  "4515": 430699,
  "4516": 430700,
  "4517": 430600,
  "4518": 430601,
  "4519": 430701,
  "4520": 430702,
  "4521": 430703,
  "4522": 430704,
  "4523": 430384,
  "4524": 430385,
  "4525": 430386,
  "4526": 430387,
  "4527": 430388,
  "4528": 430389,
  "4529": 430390,
  "4530": 430391,
  "4531": 430392,
  "4532": 430393,
  "4533": 430394,
  "4534": 430395,
  "4535": 430396,
  "4536": 430397,
  "4537": 430398,
  "4538": 430399,
  "4539": 430400,
  "4540": 430401,
  "4541": 430402,
  "4542": 430403,
  "4543": 430404,
  "4544": 430405,
  "4545": 430406,
  "4546": 430407,
  "4547": 430408,
  "4548": 430409,
  "4549": 430410,
  "4550": 430411,
  "4551": 430412,
  "4552": 430413,
  "4553": 430414,
  "4554": 430415,
  "4555": 430416,
  "4557": 430417,
  "4558": 430418,
  "4559": 430419,
  "4560": 430420,
  "4561": 430421,
  "4562": 430422,
  "4563": 430423,
  "4564": 430424,
  "4565": 430425,
  "4567": 430427,
  "4568": 430428,
  "4569": 430429,
  "4570": 430431,
  "4572": 430432,
  "4573": 430433,
  "4574": 430434,
  "4575": 430435,
  "4576": 430436,
  "4577": 430437,
  "4578": 430438,
  "4579": 430439,
  "4580": 430440,
  "4581": 430441,
  "4582": 430442,
  "4583": 430443,
  "4584": 430444,
  "4585": 430445,
  "4586": 430446,
  "4587": 430447,
  "4588": 430448,
  "4589": 430614,
  "4590": 430756,
  "4591": 430757,
  "4592": 430758,
  "4593": 430759,
  "4594": 430760,
  "4595": 430761,
  "4596": 430762,
  "4597": 430763,
  "3004": 379383,
  "693": 362797,
  "601": 370689,
  "3024": 388743,
  "3067": 388581,
  "577": 362713,
  "757": 379379,
  "3080": 397720,
  "3081": 396957,
  "3129": 403947,
  "478": 370623,
  "3155": 406847,
  "924": 370680,
  "3029": 384970,
  "486": 370620,
  "3134": 405158,
  "3166": 434584,
  "691": 370657,
  "3091": 397833,
  "685": 362774,
  "3192": 428005,
  "759": 379380,
  "3124": 399566,
  "3130": 400566,
  "3055": 388585,
  "568": 356734,
  "3121": 399563,
  "444": 356546,
  "3122": 399564,
  "452": 356669,
  "3026": 387342,
  "LAWRENCEVILLE": 390013,
  "3007": 379354,
  "6075": 374364,
  "3093": 397530,
  "3033": 387600,
  "3139": 405822,
  "3145": 404649,
  "3052": 388594,
  "3079": 397710,
  "3013": 379342,
  "686": 370654,
  "3111": 397949,
  "922": 379384,
  "596": 356590,
  "465": 356577,
  "CORP OFFICE": 345988,
  "3151": 406932,
  "690": 362786,
  "592": 370644,
  "678": 376116,
  "SNELLVILLE": 390016,
  "3025": 382455,
  "3127": 399569,
  "3078": 396105,
  "497": 356653,
  "DULUTH": 390015,
  "451": 356668,
  "794": 370673,
  "464": 356572,
  "589": 370685,
  "3019": 379348,
  "929": 370716,
  "564": 370675,
  "3114": 399460,
  "3032": 387599,
  "679": 362770,
  "3030": 384971,
  "GAINESVILLE": 390124,
  "3057": 388428,
  "3015": 379344,
  "3008": 379337,
  "463": 356509,
  "3001": 379386,
  "591": 370686,
  "3125": 399567,
  "926": 370682,
  "490": 356640,
  "492": 356642,
  "928": 318270,
  "593": 362722,
  "457": 370630,
  "571": 356760,
  "3009": 379338,
  "3006": 379353,
  "595": 370692,
  "3131": 400565,
  "790": 370715,
  "3087": 397732,
  "3126": 399568,
  "500": 356657,
  "753": 378866,
  "597": 370696,
  "3017": 379346,
  "572": 356763,
  "3107": 397945,
  "GREENVILLE": 384701,
  "475": 356631,
  "454": 356672,
  "422": 387594,
  "683": 356614,
  "682": 356611,
  "3116": 405218,
  "3084": 397730,
  "469": 370635,
  "3042": 396959,
  "470": 362687,
  "793": 370672,
  "477": 356632,
  "436": 370684,
  "3058": 388598,
  "582": 370626,
  "698": 356789,
  "446": 356648,
  "441": 356570,
  "585": 362718,
  "925": 370681,
  "680": 356601,
  "574": 353609,
  "487": 370622,
  "3132": 400564,
  "3153": 406846,
  "458": 362729,
  "565": 356726,
  "499": 356655,
  "3060": 388601,
  "435": 372243,
  "LEAGUE CITY": 387602,
  "488": 370638,
  "578": 370687,
  "449": 356664,
  "688": 362779,
  "3138": 406277,
  "3005": 379352,
  "3137": 405705,
  "3066": 388584,
  "927": 370683,
  "566": 362708,
  "3115": 403693,
  "3123": 399565,
  "687": 370641,
  "599": 370688,
  "930": 370717,
  "WAREHOUSE": 388365,
  "3076": 397708,
  "681": 356606,
  "3010": 379339,
  "3141": 406263,
  "484": 356636,
  "3023": 396958,
  "491": 356641,
  "598": 370690,
  "495": 356645,
  "576": 370210,
  "752": 387597,
  "3074": 397719,
  "3117": 399461,
  "3161": 435119,
  "456": 370639,
  "3040": 388745,
  "460": 356493,
  "581": 370648,
  "750": 387341,
  "579": 370662,
  "3037": 387340,
  "442": 356571,
  "3143": 404650,
  "570": 356758,
  "3021": 396418,
  "3102": 397931,
  "3056": 388579,
  "696": 370667,
  "438": 356539,
  "3038": 387442,
  "3061": 388604,
  "462": 356503,
  "588": 356786,
  "3082": 396952,
  "455": 356788,
  "758": 378865,
  "440": 356544,
  "694": 355594,
  "3112": 399458,
  "751": 378864,
  "461": 356501,
  "445": 356638,
  "3070": 388578,
  "474": 370618,
  "483": 356633,
  "453": 356671,
  "3105": 397937,
  "792": 370671,
  "493": 356644,
  "489": 356639,
  "3068": 388506,
  "697": 370669,
  "498": 356654,
  "472": 388385,
  "468": 370621,
  "3014": 379343,
  "3036": 387601,
  "3063": 388580,
  "756": 383624,
  "494": 356583,
  "3146": 408449,
  "3065": 388505,
  "3062": 388600,
  "3142": 408448,
  "496": 356647,
  "695": 370628,
  "3086": 397731,
  "473": 370616,
  "3095": 397573,
  "3071": 388589,
  "481": 362701,
  "3020": 379349,
  "3092": 397529,
  "3022": 387598,
  "791": 370651,
  "3099": 397577,
  "575": 356781,
  "476": 362692,
  "479": 370624,
  "CORP": 369275,
  "584": 362727,
  "3128": 399570,
  "567": 356728,
  "586": 356783,
  "3073": 397718,
  "590": 370659,
  "3098": 397576,
  "3113": 399459,
  "3064": 388583,
  "471": 356564,
  "0313": 387926,
  "3152": 406933,
  "684": 356615,
  "3011": 379340,
  "3077": 397709,
  "3053": 388591,
  "573": 356770,
  "3090": 397733,
  "3075": 399456,
  "583": 370645,
  "3154": 406848,
  "3059": 388602,
  "485": 356637,
  "3135": 405850,
  "594": 356787,
  "3012": 379341,
  "439": 356541,
  "448": 356663,
  "923": 379385,
  "437": 356535,
  "569": 356736,
  "3100": 397929,
  "482": 370640,
  "3103": 397933,
  "3120": 399562,
  "689": 370661,
  "600": 370698,
  "3101": 397930,
  "3085": 399457,
  "587": 356785,
  "3000": 404648,
  "3016": 379345,
  "459": 356484,
  "3003": 379382,
  "3149": 405555,
  "692": 370629,
  "428": 387961,
  "3150": 405387,
  "580": 370646,
  "466": 356511,
  "760": 382153,
  "CONYERS": 390012,
  "3069": 388577,
  "443": 356545,
  "754": 379034,
  "447": 356658,
  "467": 362682,
  "3051": 388504,
  "450": 356666,
  "3046": 388590,
  "3148": 406264,
  "3136": 406266
}

module.exports = getStoreId;