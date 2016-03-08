// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Caml_int64     = require("../runtime/caml_int64");
var Caml_obj       = require("../runtime/caml_obj");
var Pervasives     = require("../stdlib/pervasives");
var Mt             = require("./mt");
var Printf         = require("../stdlib/printf");
var Caml_primitive = require("../runtime/caml_primitive");
var $$Array        = require("../stdlib/array");
var Caml_curry     = require("../runtime/caml_curry");
var List           = require("../stdlib/list");

function commutative_mul(result, a, b) {
  return /* Eq */{
          0: /* tuple */[
            result,
            result
          ],
          1: /* tuple */[
            Caml_int64.mul(a, b),
            Caml_int64.mul(b, a)
          ],
          length: 2,
          tag: 0
        };
}

var pairs = Caml_obj.caml_obj_dup(/* array */[
      /* tuple */[
        /* int64 */[
          -1753181728,
          -1482940033
        ],
        /* int64 */[
          525340320,
          1831202545
        ],
        /* int64 */[
          634982515,
          165328154
        ]
      ],
      /* tuple */[
        /* int64 */[
          -45257752,
          2086642202
        ],
        /* int64 */[
          -1243123636,
          1756378018
        ],
        /* int64 */[
          -162347938,
          1129387921
        ]
      ],
      /* tuple */[
        /* int64 */[
          1358520104,
          -2133087767
        ],
        /* int64 */[
          -814703364,
          209351581
        ],
        /* int64 */[
          -1595781194,
          2047885301
        ]
      ],
      /* tuple */[
        /* int64 */[
          -561804740,
          781938191
        ],
        /* int64 */[
          -664434255,
          1243995318
        ],
        /* int64 */[
          -1752170244,
          965315102
        ]
      ],
      /* tuple */[
        /* int64 */[
          -1173434256,
          -1526298485
        ],
        /* int64 */[
          -241239064,
          806837349
        ],
        /* int64 */[
          -1873028186,
          973509509
        ]
      ],
      /* tuple */[
        /* int64 */[
          -1817540358,
          -1053250751
        ],
        /* int64 */[
          -827251842,
          297218479
        ],
        /* int64 */[
          1639039171,
          1353404045
        ]
      ],
      /* tuple */[
        /* int64 */[
          1100802137,
          -1614556777
        ],
        /* int64 */[
          732603925,
          1812737275
        ],
        /* int64 */[
          1587408437,
          1686007471
        ]
      ],
      /* tuple */[
        /* int64 */[
          -955806000,
          166521361
        ],
        /* int64 */[
          -1809921861,
          585926665
        ],
        /* int64 */[
          -1411520656,
          1193284387
        ]
      ],
      /* tuple */[
        /* int64 */[
          -2095936707,
          -1556851713
        ],
        /* int64 */[
          -977007627,
          563693579
        ],
        /* int64 */[
          700349737,
          1423006973
        ]
      ],
      /* tuple */[
        /* int64 */[
          -2082262446,
          2096650716
        ],
        /* int64 */[
          -275710143,
          1413202597
        ],
        /* int64 */[
          -843247662,
          495794945
        ]
      ],
      /* tuple */[
        /* int64 */[
          1313884544,
          1149398987
        ],
        /* int64 */[
          255480485,
          556147957
        ],
        /* int64 */[
          929852288,
          1711350082
        ]
      ],
      /* tuple */[
        /* int64 */[
          -1787508521,
          908394614
        ],
        /* int64 */[
          725956947,
          1053216964
        ],
        /* int64 */[
          -310080019,
          2145390454
        ]
      ],
      /* tuple */[
        /* int64 */[
          1441406688,
          962684198
        ],
        /* int64 */[
          468792198,
          1528894622
        ],
        /* int64 */[
          -375108656,
          1893431833
        ]
      ],
      /* tuple */[
        /* int64 */[
          -966612576,
          -603570361
        ],
        /* int64 */[
          1999781536,
          1842921977
        ],
        /* int64 */[
          -1039472903,
          1854314037
        ]
      ],
      /* tuple */[
        /* int64 */[
          1187405920,
          1827458543
        ],
        /* int64 */[
          -1788999968,
          1066436782
        ],
        /* int64 */[
          2020291989,
          1004254249
        ]
      ],
      /* tuple */[
        /* int64 */[
          1878451246,
          -1818789533
        ],
        /* int64 */[
          1999625579,
          247021097
        ],
        /* int64 */[
          -1924515318,
          1434621550
        ]
      ],
      /* tuple */[
        /* int64 */[
          2103538455,
          1714915951
        ],
        /* int64 */[
          45872671,
          1071186049
        ],
        /* int64 */[
          -1656179703,
          911777108
        ]
      ],
      /* tuple */[
        /* int64 */[
          -344232772,
          365880810
        ],
        /* int64 */[
          1477626470,
          1215123423
        ],
        /* int64 */[
          1816687658,
          1155052099
        ]
      ],
      /* tuple */[
        /* int64 */[
          1713682280,
          -1590309406
        ],
        /* int64 */[
          -1964710772,
          1236324221
        ],
        /* int64 */[
          1538765150,
          871497139
        ]
      ],
      /* tuple */[
        /* int64 */[
          1074580892,
          -1335640207
        ],
        /* int64 */[
          -1999389012,
          153491040
        ],
        /* int64 */[
          1001897781,
          469100620
        ]
      ]
    ]);

function from_pairs(prefix, pairs) {
  return $$Array.to_list($$Array.mapi(function (i, param) {
                  var b = param[2];
                  var a = param[1];
                  var result = param[0];
                  return /* tuple */[
                          Caml_curry.app2(Printf.sprintf(/* Format */{
                                    0: /* String */{
                                      0: /* No_padding */0,
                                      1: /* Char_literal */{
                                        0: /* "_" */95,
                                        1: /* Int */{
                                          0: /* Int_d */0,
                                          1: /* No_padding */0,
                                          2: /* No_precision */0,
                                          3: /* End_of_format */0,
                                          length: 4,
                                          tag: 4
                                        },
                                        length: 2,
                                        tag: 12
                                      },
                                      length: 2,
                                      tag: 2
                                    },
                                    1: "%s_%d",
                                    length: 2,
                                    tag: 0
                                  }), prefix, i),
                          function () {
                            return commutative_mul(result, a, b);
                          }
                        ];
                }, pairs));
}

var small_pairs = Caml_obj.caml_obj_dup(/* array */[
      /* tuple */[
        /* int64 */[
          121,
          0
        ],
        /* int64 */[
          11,
          0
        ],
        /* int64 */[
          11,
          0
        ]
      ],
      /* tuple */[
        /* int64 */[
          126736,
          0
        ],
        /* int64 */[
          356,
          0
        ],
        /* int64 */[
          356,
          0
        ]
      ],
      /* tuple */[
        /* int64 */[
          137176406,
          0
        ],
        /* int64 */[
          12346,
          0
        ],
        /* int64 */[
          11111,
          0
        ]
      ],
      /* tuple */[
        /* int64 */[
          -1048576,
          268435455
        ],
        /* int64 */[
          -1,
          255
        ],
        /* int64 */[
          1048576,
          0
        ]
      ],
      /* tuple */[
        /* int64 */[
          1048576,
          -268435456
        ],
        /* int64 */[
          1,
          -256
        ],
        /* int64 */[
          1048576,
          0
        ]
      ],
      /* tuple */[
        /* int64 */[
          1275262484,
          -639559543
        ],
        /* int64 */[
          -1147274043,
          1209011959
        ],
        /* int64 */[
          242558724,
          1831626934
        ]
      ]
    ]);

var to_floats = Caml_obj.caml_obj_dup(/* array */[
      /* tuple */[
        /* int64 */[
          1,
          0
        ],
        1
      ],
      /* tuple */[
        /* int64 */[
          2,
          0
        ],
        2
      ],
      /* tuple */[
        /* int64 */[
          4,
          0
        ],
        4
      ],
      /* tuple */[
        /* int64 */[
          8,
          0
        ],
        8
      ],
      /* tuple */[
        /* int64 */[
          16,
          0
        ],
        16
      ],
      /* tuple */[
        /* int64 */[
          32,
          0
        ],
        32
      ],
      /* tuple */[
        /* int64 */[
          64,
          0
        ],
        64
      ],
      /* tuple */[
        /* int64 */[
          128,
          0
        ],
        128
      ],
      /* tuple */[
        /* int64 */[
          256,
          0
        ],
        256
      ],
      /* tuple */[
        /* int64 */[
          512,
          0
        ],
        512
      ],
      /* tuple */[
        /* int64 */[
          1024,
          0
        ],
        1024
      ],
      /* tuple */[
        /* int64 */[
          2048,
          0
        ],
        2048
      ],
      /* tuple */[
        /* int64 */[
          4096,
          0
        ],
        4096
      ],
      /* tuple */[
        /* int64 */[
          8192,
          0
        ],
        8192
      ],
      /* tuple */[
        /* int64 */[
          16384,
          0
        ],
        16384
      ],
      /* tuple */[
        /* int64 */[
          32768,
          0
        ],
        32768
      ],
      /* tuple */[
        /* int64 */[
          65536,
          0
        ],
        65536
      ],
      /* tuple */[
        /* int64 */[
          131072,
          0
        ],
        131072
      ],
      /* tuple */[
        /* int64 */[
          262144,
          0
        ],
        262144
      ],
      /* tuple */[
        /* int64 */[
          524288,
          0
        ],
        524288
      ],
      /* tuple */[
        /* int64 */[
          1048576,
          0
        ],
        1048576
      ],
      /* tuple */[
        /* int64 */[
          2097152,
          0
        ],
        2097152
      ],
      /* tuple */[
        /* int64 */[
          4194304,
          0
        ],
        4194304
      ],
      /* tuple */[
        /* int64 */[
          8388608,
          0
        ],
        8388608
      ],
      /* tuple */[
        /* int64 */[
          16777216,
          0
        ],
        16777216
      ],
      /* tuple */[
        /* int64 */[
          33554432,
          0
        ],
        33554432
      ],
      /* tuple */[
        /* int64 */[
          67108864,
          0
        ],
        67108864
      ],
      /* tuple */[
        /* int64 */[
          134217728,
          0
        ],
        134217728
      ],
      /* tuple */[
        /* int64 */[
          268435456,
          0
        ],
        268435456
      ],
      /* tuple */[
        /* int64 */[
          536870912,
          0
        ],
        536870912
      ],
      /* tuple */[
        /* int64 */[
          1073741824,
          0
        ],
        1073741824
      ],
      /* tuple */[
        /* int64 */[
          -2147483648,
          0
        ],
        2147483648
      ],
      /* tuple */[
        /* int64 */[
          0,
          1
        ],
        4294967296
      ],
      /* tuple */[
        /* int64 */[
          0,
          2
        ],
        8589934592
      ],
      /* tuple */[
        /* int64 */[
          0,
          4
        ],
        17179869184
      ],
      /* tuple */[
        /* int64 */[
          0,
          8
        ],
        34359738368
      ],
      /* tuple */[
        /* int64 */[
          0,
          16
        ],
        68719476736
      ],
      /* tuple */[
        /* int64 */[
          0,
          32
        ],
        137438953472
      ],
      /* tuple */[
        /* int64 */[
          0,
          64
        ],
        274877906944
      ],
      /* tuple */[
        /* int64 */[
          0,
          128
        ],
        549755813888
      ],
      /* tuple */[
        /* int64 */[
          0,
          256
        ],
        1099511627776
      ],
      /* tuple */[
        /* int64 */[
          0,
          512
        ],
        2199023255552
      ],
      /* tuple */[
        /* int64 */[
          0,
          1024
        ],
        4398046511104
      ],
      /* tuple */[
        /* int64 */[
          0,
          2048
        ],
        8796093022208
      ],
      /* tuple */[
        /* int64 */[
          0,
          4096
        ],
        17592186044416
      ],
      /* tuple */[
        /* int64 */[
          0,
          8192
        ],
        35184372088832
      ],
      /* tuple */[
        /* int64 */[
          0,
          16384
        ],
        70368744177664
      ],
      /* tuple */[
        /* int64 */[
          0,
          32768
        ],
        140737488355328
      ],
      /* tuple */[
        /* int64 */[
          0,
          65536
        ],
        281474976710656
      ],
      /* tuple */[
        /* int64 */[
          0,
          131072
        ],
        562949953421312
      ],
      /* tuple */[
        /* int64 */[
          0,
          262144
        ],
        1125899906842624
      ],
      /* tuple */[
        /* int64 */[
          0,
          524288
        ],
        2251799813685248
      ],
      /* tuple */[
        /* int64 */[
          0,
          1048576
        ],
        4503599627370496
      ],
      /* tuple */[
        /* int64 */[
          0,
          2097152
        ],
        9007199254740992
      ],
      /* tuple */[
        /* int64 */[
          0,
          4194304
        ],
        18014398509481984
      ],
      /* tuple */[
        /* int64 */[
          0,
          8388608
        ],
        36028797018963968
      ],
      /* tuple */[
        /* int64 */[
          0,
          16777216
        ],
        72057594037927936
      ],
      /* tuple */[
        /* int64 */[
          0,
          33554432
        ],
        144115188075855872
      ],
      /* tuple */[
        /* int64 */[
          0,
          67108864
        ],
        288230376151711744
      ],
      /* tuple */[
        /* int64 */[
          0,
          134217728
        ],
        576460752303423488
      ],
      /* tuple */[
        /* int64 */[
          0,
          268435456
        ],
        1.15292150460684698e+18
      ],
      /* tuple */[
        /* int64 */[
          0,
          536870912
        ],
        2.30584300921369395e+18
      ],
      /* tuple */[
        /* int64 */[
          0,
          1073741824
        ],
        4.6116860184273879e+18
      ],
      /* tuple */[
        /* int64 */[
          0,
          -2147483648
        ],
        -9.22337203685477581e+18
      ]
    ]);

var check_complete_compare = /* int array */[
  Caml_int64.ge(/* int64 */[
        3,
        0
      ], /* int64 */[
        2,
        0
      ]),
  Caml_int64.ge(/* int64 */[
        3,
        0
      ], /* int64 */[
        3,
        0
      ]),
  Caml_int64.eq(/* int64 */[
        3,
        0
      ], /* int64 */[
        3,
        0
      ]),
  Caml_int64.eq(/* int64 */[
        2,
        0
      ], /* int64 */[
        2,
        0
      ]),
  Caml_int64.lt(/* int64 */[
        2,
        0
      ], /* int64 */[
        3,
        0
      ]),
  Caml_int64.gt(/* int64 */[
        3,
        0
      ], /* int64 */[
        2,
        0
      ]),
  Caml_int64.le(/* int64 */[
        2,
        0
      ], /* int64 */[
        3,
        0
      ]),
  Caml_int64.le(/* int64 */[
        3,
        0
      ], /* int64 */[
        3,
        0
      ])
];

var of_float_pairs = Caml_obj.caml_obj_dup(/* array */[
      /* tuple */[
        6853066956871844,
        /* int64 */[
          -40494940,
          1595603
        ]
      ],
      /* tuple */[
        -8507688874782117,
        /* int64 */[
          1388466779,
          -1980851
        ]
      ],
      /* tuple */[
        4083117349607451,
        /* int64 */[
          -684517349,
          950674
        ]
      ],
      /* tuple */[
        -4860723193745655,
        /* int64 */[
          -1330680055,
          -1131726
        ]
      ],
      /* tuple */[
        7820020192255542,
        /* int64 */[
          1437736502,
          1820740
        ]
      ],
      /* tuple */[
        -4908619721514532,
        /* int64 */[
          -383163940,
          -1142878
        ]
      ],
      /* tuple */[
        5.67685864687671e+15,
        /* int64 */[
          -1491709402,
          1321746
        ]
      ],
      /* tuple */[
        -703696191048023,
        /* int64 */[
          -159336791,
          -163843
        ]
      ],
      /* tuple */[
        1123586534990153.88,
        /* int64 */[
          1615520073,
          261605
        ]
      ],
      /* tuple */[
        -4.29886533981922e+15,
        /* int64 */[
          1786485548,
          -1000908
        ]
      ],
      /* tuple */[
        2.43885138012066e+15,
        /* int64 */[
          1445727316,
          567839
        ]
      ],
      /* tuple */[
        -8011538689499494,
        /* int64 */[
          1246682778,
          -1865332
        ]
      ],
      /* tuple */[
        2710072285421155,
        /* int64 */[
          -538747293,
          630987
        ]
      ],
      /* tuple */[
        -2541457347159789.5,
        /* int64 */[
          -644065005,
          -591730
        ]
      ],
      /* tuple */[
        5012932793576708,
        /* int64 */[
          1584508164,
          1167164
        ]
      ],
      /* tuple */[
        -943066847413899.125,
        /* int64 */[
          596605301,
          -219575
        ]
      ],
      /* tuple */[
        5440257518642004,
        /* int64 */[
          -1461542060,
          1266658
        ]
      ],
      /* tuple */[
        -7750676773453898,
        /* int64 */[
          -265928778,
          -1804596
        ]
      ],
      /* tuple */[
        8911999221747713,
        /* int64 */[
          -2082877439,
          2074986
        ]
      ],
      /* tuple */[
        -1443906702582204.25,
        /* int64 */[
          1172790852,
          -336186
        ]
      ],
      /* tuple */[
        659345820712164.875,
        /* int64 */[
          -378700572,
          153515
        ]
      ],
      /* tuple */[
        -3284023713149006.5,
        /* int64 */[
          -1524314190,
          -764622
        ]
      ],
      /* tuple */[
        5062818438579988,
        /* int64 */[
          1184368404,
          1178779
        ]
      ],
      /* tuple */[
        -8904450004162331,
        /* int64 */[
          747956453,
          -2073229
        ]
      ],
      /* tuple */[
        848261089308786,
        /* int64 */[
          753381490,
          197501
        ]
      ],
      /* tuple */[
        -6376579516657391,
        /* int64 */[
          -486076143,
          -1484664
        ]
      ],
      /* tuple */[
        1337907592605664.25,
        /* int64 */[
          -489902112,
          311505
        ]
      ],
      /* tuple */[
        -8.54733738833896e+15,
        /* int64 */[
          -281980688,
          -1990083
        ]
      ],
      /* tuple */[
        2345417644172927,
        /* int64 */[
          428336767,
          546085
        ]
      ],
      /* tuple */[
        -2587460670129294.5,
        /* int64 */[
          -572327054,
          -602441
        ]
      ],
      /* tuple */[
        4580431718597436,
        /* int64 */[
          -578731204,
          1066464
        ]
      ],
      /* tuple */[
        -1460576044874256.25,
        /* int64 */[
          598574576,
          -340067
        ]
      ],
      /* tuple */[
        3403657978343579.5,
        /* int64 */[
          -524521317,
          792475
        ]
      ],
      /* tuple */[
        -7.89068917321888e+15,
        /* int64 */[
          -1026811456,
          -1837195
        ]
      ],
      /* tuple */[
        1683098350604788.5,
        /* int64 */[
          -548449804,
          391876
        ]
      ],
      /* tuple */[
        -3966538891560174.5,
        /* int64 */[
          845249298,
          -923532
        ]
      ],
      /* tuple */[
        6726025288963652,
        /* int64 */[
          -870754748,
          1566024
        ]
      ],
      /* tuple */[
        -4790410747298403,
        /* int64 */[
          -1793835619,
          -1115355
        ]
      ],
      /* tuple */[
        1985858071337706.25,
        /* int64 */[
          -1662346518,
          462368
        ]
      ],
      /* tuple */[
        -5281733497873409,
        /* int64 */[
          -1760584705,
          -1229750
        ]
      ]
    ]);

var simple_divs = Caml_obj.caml_obj_dup(/* array */[
      /* tuple */[
        /* int64 */[
          6,
          0
        ],
        /* int64 */[
          3,
          0
        ],
        /* int64 */[
          2,
          0
        ],
        /* int64 */[
          0,
          0
        ]
      ],
      /* tuple */[
        /* int64 */[
          120,
          0
        ],
        /* int64 */[
          11,
          0
        ],
        /* int64 */[
          10,
          0
        ],
        /* int64 */[
          10,
          0
        ]
      ],
      /* tuple */[
        /* int64 */[
          0,
          -2147483648
        ],
        /* int64 */[
          2,
          0
        ],
        /* int64 */[
          0,
          -1073741824
        ],
        /* int64 */[
          0,
          0
        ]
      ],
      /* tuple */[
        /* int64 */[
          -163100511,
          1112580415
        ],
        /* int64 */[
          -1689560617,
          2013350321
        ],
        /* int64 */[
          0,
          0
        ],
        /* int64 */[
          -163100511,
          1112580415
        ]
      ],
      /* tuple */[
        /* int64 */[
          1414064366,
          983582600
        ],
        /* int64 */[
          720592487,
          1027627185
        ],
        /* int64 */[
          0,
          0
        ],
        /* int64 */[
          1414064366,
          983582600
        ]
      ],
      /* tuple */[
        /* int64 */[
          -244174718,
          707587463
        ],
        /* int64 */[
          -1441985079,
          457824592
        ],
        /* int64 */[
          1,
          0
        ],
        /* int64 */[
          1197810361,
          249762871
        ]
      ],
      /* tuple */[
        /* int64 */[
          -452010802,
          3696312
        ],
        /* int64 */[
          1932508180,
          303263066
        ],
        /* int64 */[
          0,
          0
        ],
        /* int64 */[
          -452010802,
          3696312
        ]
      ],
      /* tuple */[
        /* int64 */[
          530108890,
          1998955230
        ],
        /* int64 */[
          -1300251594,
          1876081138
        ],
        /* int64 */[
          1,
          0
        ],
        /* int64 */[
          1830360484,
          122874091
        ]
      ],
      /* tuple */[
        /* int64 */[
          -1842975846,
          1123314058
        ],
        /* int64 */[
          -1636954134,
          1077511003
        ],
        /* int64 */[
          1,
          0
        ],
        /* int64 */[
          -206021712,
          45803054
        ]
      ],
      /* tuple */[
        /* int64 */[
          -474132284,
          772515434
        ],
        /* int64 */[
          435807891,
          1485983210
        ],
        /* int64 */[
          0,
          0
        ],
        /* int64 */[
          -474132284,
          772515434
        ]
      ],
      /* tuple */[
        /* int64 */[
          1357533220,
          1437309318
        ],
        /* int64 */[
          541080542,
          1141241105
        ],
        /* int64 */[
          1,
          0
        ],
        /* int64 */[
          816452678,
          296068213
        ]
      ],
      /* tuple */[
        /* int64 */[
          407118687,
          1559319564
        ],
        /* int64 */[
          -280613636,
          211092740
        ],
        /* int64 */[
          7,
          0
        ],
        /* int64 */[
          -1923553157,
          81670377
        ]
      ],
      /* tuple */[
        /* int64 */[
          1054256000,
          897058469
        ],
        /* int64 */[
          661312616,
          57853316
        ],
        /* int64 */[
          15,
          0
        ],
        /* int64 */[
          -275498648,
          29258726
        ]
      ],
      /* tuple */[
        /* int64 */[
          -1265124412,
          1771820319
        ],
        /* int64 */[
          222584391,
          1113086871
        ],
        /* int64 */[
          1,
          0
        ],
        /* int64 */[
          -1487708803,
          658733448
        ]
      ],
      /* tuple */[
        /* int64 */[
          -1564422518,
          1699471447
        ],
        /* int64 */[
          -398393386,
          1090632987
        ],
        /* int64 */[
          1,
          0
        ],
        /* int64 */[
          -1166029132,
          608838459
        ]
      ],
      /* tuple */[
        /* int64 */[
          837406327,
          1300122432
        ],
        /* int64 */[
          -433706886,
          349961722
        ],
        /* int64 */[
          3,
          0
        ],
        /* int64 */[
          2138526985,
          250237263
        ]
      ],
      /* tuple */[
        /* int64 */[
          681013979,
          1844919629
        ],
        /* int64 */[
          -400929258,
          141654602
        ],
        /* int64 */[
          13,
          0
        ],
        /* int64 */[
          1598127037,
          3409791
        ]
      ],
      /* tuple */[
        /* int64 */[
          -1067617897,
          876561860
        ],
        /* int64 */[
          1118648885,
          1635137811
        ],
        /* int64 */[
          0,
          0
        ],
        /* int64 */[
          -1067617897,
          876561860
        ]
      ],
      /* tuple */[
        /* int64 */[
          1188873919,
          1444234022
        ],
        /* int64 */[
          -1845904707,
          1506775353
        ],
        /* int64 */[
          0,
          0
        ],
        /* int64 */[
          1188873919,
          1444234022
        ]
      ],
      /* tuple */[
        /* int64 */[
          -1338985492,
          216713133
        ],
        /* int64 */[
          478170254,
          840978153
        ],
        /* int64 */[
          0,
          0
        ],
        /* int64 */[
          -1338985492,
          216713133
        ]
      ],
      /* tuple */[
        /* int64 */[
          -1951260634,
          311131250
        ],
        /* int64 */[
          1397060596,
          1432032601
        ],
        /* int64 */[
          0,
          0
        ],
        /* int64 */[
          -1951260634,
          311131250
        ]
      ],
      /* tuple */[
        /* int64 */[
          -2040192977,
          702252958
        ],
        /* int64 */[
          1983179783,
          333531300
        ],
        /* int64 */[
          2,
          0
        ],
        /* int64 */[
          -1711585247,
          35190357
        ]
      ],
      /* tuple */[
        /* int64 */[
          1357843095,
          222120797
        ],
        /* int64 */[
          -1744534264,
          1409050141
        ],
        /* int64 */[
          0,
          0
        ],
        /* int64 */[
          1357843095,
          222120797
        ]
      ]
    ]);

function from(xs) {
  return List.mapi(function (i, param) {
              var d = param[3];
              var c = param[2];
              var b = param[1];
              var a = param[0];
              return /* tuple */[
                      Caml_curry.app1(Printf.sprintf(/* Format */{
                                0: /* String_literal */{
                                  0: "small_divs ",
                                  1: /* Scan_get_counter */{
                                    0: /* Token_counter */2,
                                    1: /* End_of_format */0,
                                    length: 2,
                                    tag: 21
                                  },
                                  length: 2,
                                  tag: 11
                                },
                                1: "small_divs %L",
                                length: 2,
                                tag: 0
                              }), i),
                      function () {
                        return /* Eq */{
                                0: /* tuple */[
                                  c,
                                  d
                                ],
                                1: /* tuple */[
                                  Caml_int64.div(a, b),
                                  Caml_int64.mod_(a, b)
                                ],
                                length: 2,
                                tag: 0
                              };
                      }
                    ];
            }, $$Array.to_list(xs));
}

var to_string = /* array */[/* tuple */[
    /* int64 */[
      0,
      0
    ],
    "0"
  ]];

var int64_compare_tests = /* array */[
  /* tuple */[
    /* int64 */[
      1,
      0
    ],
    /* int64 */[
      2,
      0
    ],
    -1
  ],
  /* tuple */[
    /* int64 */[
      2,
      0
    ],
    /* int64 */[
      1,
      0
    ],
    1
  ],
  /* tuple */[
    /* int64 */[
      2,
      0
    ],
    /* int64 */[
      1,
      0
    ],
    1
  ]
];

function from_compare(xs) {
  return List.mapi(function (i, param) {
              var c = param[2];
              var b = param[1];
              var a = param[0];
              return /* tuple */[
                      Caml_curry.app1(Printf.sprintf(/* Format */{
                                0: /* String_literal */{
                                  0: "int64_compare ",
                                  1: /* Scan_get_counter */{
                                    0: /* Token_counter */2,
                                    1: /* End_of_format */0,
                                    length: 2,
                                    tag: 21
                                  },
                                  length: 2,
                                  tag: 11
                                },
                                1: "int64_compare %L",
                                length: 2,
                                tag: 0
                              }), i),
                      function () {
                        return /* Eq */{
                                0: c,
                                1: Caml_int64.compare(a, b),
                                length: 2,
                                tag: 0
                              };
                      }
                    ];
            }, $$Array.to_list(xs));
}

function from_to_string(xs) {
  return List.mapi(function (i, param) {
              var str_a = param[1];
              var a = param[0];
              return /* tuple */[
                      Caml_curry.app1(Printf.sprintf(/* Format */{
                                0: /* String_literal */{
                                  0: "to_string ",
                                  1: /* Scan_get_counter */{
                                    0: /* Token_counter */2,
                                    1: /* End_of_format */0,
                                    length: 2,
                                    tag: 21
                                  },
                                  length: 2,
                                  tag: 11
                                },
                                1: "to_string %L",
                                length: 2,
                                tag: 0
                              }), i),
                      function () {
                        return /* Eq */{
                                0: str_a,
                                1: Caml_primitive.caml_int64_format("%d", a),
                                length: 2,
                                tag: 0
                              };
                      }
                    ];
            }, $$Array.to_list(xs));
}

Mt.from_pair_suites("int64_mul_div_test.ml", Pervasives.$at(from_pairs("random", pairs), Pervasives.$at(from_pairs("small", small_pairs), Pervasives.$at(List.mapi(function (i, param) {
                      var f = param[1];
                      var i64 = param[0];
                      return /* tuple */[
                              Caml_curry.app1(Printf.sprintf(/* Format */{
                                        0: /* String_literal */{
                                          0: "to_float_",
                                          1: /* Int */{
                                            0: /* Int_d */0,
                                            1: /* No_padding */0,
                                            2: /* No_precision */0,
                                            3: /* End_of_format */0,
                                            length: 4,
                                            tag: 4
                                          },
                                          length: 2,
                                          tag: 11
                                        },
                                        1: "to_float_%d",
                                        length: 2,
                                        tag: 0
                                      }), i),
                              function () {
                                return /* Eq */{
                                        0: Caml_int64.to_float(i64),
                                        1: f,
                                        length: 2,
                                        tag: 0
                                      };
                              }
                            ];
                    }, $$Array.to_list(to_floats)), Pervasives.$at(List.mapi(function (i, param) {
                          var i64 = param[1];
                          var f = param[0];
                          return /* tuple */[
                                  Caml_curry.app1(Printf.sprintf(/* Format */{
                                            0: /* String_literal */{
                                              0: "of_float_",
                                              1: /* Int */{
                                                0: /* Int_d */0,
                                                1: /* No_padding */0,
                                                2: /* No_precision */0,
                                                3: /* End_of_format */0,
                                                length: 4,
                                                tag: 4
                                              },
                                              length: 2,
                                              tag: 11
                                            },
                                            1: "of_float_%d",
                                            length: 2,
                                            tag: 0
                                          }), i),
                                  function () {
                                    return /* Eq */{
                                            0: Caml_int64.of_float(f),
                                            1: i64,
                                            length: 2,
                                            tag: 0
                                          };
                                  }
                                ];
                        }, $$Array.to_list(of_float_pairs)), Pervasives.$at(/* :: */[
                          /* tuple */[
                            "compare_check_complete",
                            function () {
                              return /* Eq */{
                                      0: $$Array.map(function () {
                                            return /* true */1;
                                          }, check_complete_compare),
                                      1: check_complete_compare,
                                      length: 2,
                                      tag: 0
                                    };
                            }
                          ],
                          /* [] */0
                        ], Pervasives.$at(from(simple_divs), from_compare(int64_compare_tests))))))));

exports.commutative_mul        = commutative_mul;
exports.pairs                  = pairs;
exports.from_pairs             = from_pairs;
exports.small_pairs            = small_pairs;
exports.to_floats              = to_floats;
exports.check_complete_compare = check_complete_compare;
exports.of_float_pairs         = of_float_pairs;
exports.simple_divs            = simple_divs;
exports.from                   = from;
exports.to_string              = to_string;
exports.int64_compare_tests    = int64_compare_tests;
exports.from_compare           = from_compare;
exports.from_to_string         = from_to_string;
/*  Not a pure module */
