export interface iCarbonAction{
    id: number;
    name: string;
    value: number;
}

export interface iCensus{
    id: number;
    name: string;
    sec: number;
    a_level: number;
    uni:number
}

export const carbonAction: iCarbonAction[] = [
    {
        id: 1,
        name: "2m",
        value:47000
    },
    {
        id: 2,
        name: "10m",
        value:235000
    },
    {
        id: 3,
        name: "15m",
        value:352500
    },
    {
        id: 4,
        name: "30m",
        value:705000
    },
    {
        id: 5,
        name: "1hr",
        value:1250000
    },
    {
        id: 6,
        name: "2hr",
        value:2500000
    },
    {
        id: 7,
        name: "3hr",
        value:3750000
    },
    {
        id: 8,
        name: "4hr",
        value:5000000
    },
    {
        id: 9,
        name: "5hr",
        value:6250000
    },
    {
        id: 10,
        name: "6hr",
        value:7500000
    },
    {
        id: 11,
        name: "7hr",
        value:8750000
    },
    {
        id: 12,
        name: "8hr",
        value:11000000
    },
]

export const censusData: iCensus[] = [
    {
        id: 1,
        name: "Chopwell and Rowlands Gill",
        sec: 622,
        a_level: 182,
        uni:339
    },
    {
        id: 2,
        name: "Birtley",
        sec: 575,
        a_level: 187,
        uni:298
    },
    {
        id: 3,
        name: "Blaydon",
        sec: 691,
        a_level: 215,
        uni:401
    },
    {
        id: 4,
        name: "Bridges",
        sec: 535,
        a_level: 401,
        uni:1290
    },
    {
        id: 5,
        name: "Chowdene",
        sec: 550,
        a_level: 155,
        uni:354
    },
    {
        id: 6,
        name: "Crawcrook and Greenside",
        sec: 554,
        a_level: 153,
        uni:289
    },
    {
        id: 7,
        name: "Deckham",
        sec: 692,
        a_level: 232,
        uni:429
    },
    {
        id: 8,
        name: "Dunston and Teams",
        sec: 535,
        a_level: 202,
        uni:327
    },
    {
        id: 9,
        name: "Felling",
        sec: 603,
        a_level: 203,
        uni:350
    },
    {
        id: 10,
        name: "High Fell",
        sec: 759,
        a_level: 233,
        uni:414
    },
    {
        id: 11,
        name: "Lamesley",
        sec: 667,
        a_level: 204,
        uni:325
    },
    {
        id: 12,
        name: "Lobley Hill and Bensham",
        sec: 679,
        a_level: 178,
        uni:413
    },
    {
        id: 13,
        name: "Low Fell",
        sec: 531,
        a_level: 160,
        uni:224
    },
    {
        id: 14,
        name: "Pelaw and Heworth",
        sec: 563,
        a_level: 181,
        uni:294
    },
    {
        id: 15,
        name: "Ryton, Crookhill and Stella",
        sec: 536,
        a_level: 179,
        uni:307
    },
    {
        id: 16,
        name: "Saltwell",
        sec: 751,
        a_level: 367,
        uni:1037
    },
    {
        id: 17,
        name: "Wardley and Leam Lane",
        sec: 592,
        a_level: 190,
        uni:284
    },
    {
        id: 18,
        name: "Whickham North",
        sec: 477,
        a_level: 151,
        uni:286
    },
    {
        id: 19,
        name: "Whickham South and Sunniside",
        sec: 536,
        a_level: 154,
        uni:209
    },
    {
        id: 20,
        name: "Windy Nook and Whitehills",
        sec: 604,
        a_level: 206,
        uni:372
    },
    {
        id: 21,
        name: "Winlaton and High Spen",
        sec: 484,
        a_level: 160,
        uni:264
    },
    {
        id: 22,
        name: "Dunston Hill and Whickham East",
        sec: 593,
        a_level: 202,
        uni:327
    },
    {
        id: 23,
        name: "Arthur's Hill",
        sec: 740,
        a_level: 485,
        uni:4588
    },
    {
        id: 24,
        name: "Benwell and Scotswood",
        sec: 963,
        a_level: 268,
        uni:577
    },
    {
        id: 25,
        name: "Blakelaw",
        sec: 910,
        a_level: 277,
        uni:533
    },
    {
        id: 26,
        name: "Byker",
        sec: 776,
        a_level: 256,
        uni:734
    },
    {
        id: 27,
        name: "Callerton and Throckley",
        sec: 702,
        a_level: 197,
        uni:406
    },
    {
        id: 28,
        name: "Castle",
        sec: 851,
        a_level: 218,
        uni:434
    },
    {
        id: 29,
        name: "Chapel",
        sec: 440,
        a_level: 147,
        uni:325
    },
    {
        id: 30,
        name: "Dene and South Gosforth",
        sec: 620,
        a_level: 224,
        uni:610
    },
    {
        id: 31,
        name: "Denton and Westerhope",
        sec: 908,
        a_level: 283,
        uni:723
    },
    {
        id: 32,
        name: "Elswick",
        sec: 1518,
        a_level: 455,
        uni:1053
    },
    {
        id: 33,
        name: "Fawdon and West Gosforth",
        sec: 619,
        a_level: 204,
        uni:459
    },
    {
        id: 34,
        name: "Gosforth",
        sec: 768,
        a_level: 261,
        uni:381
    },
    {
        id: 35,
        name: "Heaton",
        sec: 421,
        a_level: 148,
        uni:1386
    },
    {
        id: 36,
        name: "Kenton",
        sec: 893,
        a_level: 262,
        uni:541
    },
    {
        id: 37,
        name: "Kingston Park South",
        sec: 797,
        a_level: 251,
        uni:499
    },
    {
        id: 38,
        name: "Lemington",
        sec: 681,
        a_level: 224,
        uni:514
    },
    {
        id: 39,
        name: "Manor Park",
        sec: 637,
        a_level: 225,
        uni:384
    },
    {
        id: 40,
        name: "Monument",
        sec: 299,
        a_level: 430,
        uni:5454
    },
    {
        id: 41,
        name: "North Jesmond",
        sec: 235,
        a_level: 118,
        uni:4569
    },
    {
        id: 42,
        name: "Ouseburn",
        sec: 289,
        a_level: 208,
        uni:4652
    },
    {
        id: 43,
        name: "Parklands",
        sec: 864,
        a_level: 242,
        uni:357
    },
    {
        id: 44,
        name: "South Jesmond",
        sec: 203,
        a_level: 122,
        uni:4260
    },
    {
        id: 45,
        name: "Walker",
        sec: 956,
        a_level: 271,
        uni:618
    },
    {
        id: 46,
        name: "Walkergate",
        sec: 766,
        a_level: 271,
        uni:562
    },
    {
        id: 47,
        name: "West Fenham",
        sec: 880,
        a_level: 295,
        uni:530
    },
    {
        id: 48,
        name: "Wingrove",
        sec: 1028,
        a_level: 405,
        uni:1816
    },
    {
        id: 49,
        name: "Battle Hill",
        sec: 656,
        a_level: 211,
        uni:375
    },
    {
        id: 50,
        name: "Benton",
        sec: 584,
        a_level: 206,
        uni:341
    },
    {
        id: 51,
        name: "Camperdown",
        sec: 751,
        a_level: 233,
        uni:373
    },
    {
        id: 52,
        name: "Chirton",
        sec: 1069,
        a_level: 288,
        uni:483
    },
    {
        id: 53,
        name: "Collingwood",
        sec: 833,
        a_level: 264,
        uni:460
    },
    {
        id: 54,
        name: "Cullercoats",
        sec: 530,
        a_level: 157,
        uni:255
    },
    {
        id: 55,
        name: "Howdon",
        sec: 846,
        a_level: 259,
        uni:493
    },
    {
        id: 56,
        name: "Killingworth",
        sec: 789,
        a_level: 208,
        uni:403
    },
    {
        id: 57,
        name: "Longbenton",
        sec: 743,
        a_level: 193,
        uni:402
    },
    {
        id: 58,
        name: "Monkseaton North",
        sec: 715,
        a_level: 232,
        uni:275
    },
    {
        id: 59,
        name: "Monkseaton South",
        sec: 745,
        a_level: 240,
        uni:341
    },
    {
        id:60,
        name: "Northumberland",
        sec: 528,
        a_level: 152,
        uni:298
    },
    {
        id: 61,
        name: "Preston",
        sec: 432,
        a_level: 146,
        uni:211
    },
    {
        id: 62,
        name: "Deckham",
        sec: 692,
        a_level: 232,
        uni:429
    },
    {
        id: 63,
        name: "Riverside",
        sec: 802,
        a_level: 243,
        uni:488
    },
    {
        id: 64,
        name: "St Mary's",
        sec: 671,
        a_level: 176,
        uni:220
    },
    {
        id: 65,
        name: "Tynemouth",
        sec: 570,
        a_level: 164,
        uni:288
    },
    {
        id: 66,
        name: "Valley",
        sec: 1030,
        a_level: 283,
        uni:418
    },
    {
        id:67,
        name: "Wallsend",
        sec: 616,
        a_level: 168,
        uni:411
    },
    {
        id: 68,
        name: "Weetslade",
        sec: 601,
        a_level: 194,
        uni:284
    },
    {
        id: 69,
        name: "Whitley Bay",
        sec: 686,
        a_level: 218,
        uni:315
    },
    {
        id: 70,
        name: "Beacon and Bents",
        sec: 627,
        a_level: 204,
        uni:391
    },
    {
        id: 71,
        name: "Bede",
        sec: 539,
        a_level: 157,
        uni:302
    },
    {
        id: 72,
        name: "Biddick and All Saints",
        sec: 655,
        a_level: 200,
        uni:382
    },
    {
        id: 73,
        name: "Boldon Colliery",
        sec: 632,
        a_level: 182,
        uni:314
    },
    {
        id: 74,
        name: "Cleadon and East Boldon",
        sec: 551,
        a_level: 158,
        uni:274
    },
    {
        id: 75,
        name: "Cleadon Park",
        sec: 577,
        a_level: 156,
        uni:273
    },
    {
        id: 76,
        name: "Fellgate and Hedworth",
        sec: 503,
        a_level: 181,
        uni:271
    },
    {
        id: 77,
        name: "Harton",
        sec: 603,
        a_level: 181,
        uni:337
    },
    {
        id: 78,
        name: "Hebburn North",
        sec: 648,
        a_level: 190,
        uni:427
    },
    {
        id: 79,
        name: "Hebburn South",
        sec: 615,
        a_level: 165,
        uni:285
    },
    {
        id: 80,
        name: "Horsley Hill",
        sec: 585,
        a_level: 184,
        uni:308
    },
    {
        id: 81,
        name: "Monkton",
        sec: 497,
        a_level: 180,
        uni:333
    },
    {
        id: 82,
        name: "Primrose",
        sec: 577,
        a_level: 160,
        uni:325
    },
    {
        id: 83,
        name: "Simonside and Rekendyke",
        sec: 516,
        a_level: 181,
        uni:443
    },
    {
        id: 84,
        name: "Westoe",
        sec: 486,
        a_level: 166,
        uni:302
    },
    {
        id: 85,
        name: "West Park",
        sec: 387,
        a_level: 133,
        uni:278
    },
    {
        id: 86,
        name: "Whitburn and Marsden",
        sec: 531,
        a_level: 144,
        uni:253
    },
    {
        id: 87,
        name: "Whiteleas",
        sec: 562,
        a_level: 156,
        uni:321
    },
    {
        id: 88,
        name: "Barnes",
        sec: 653,
        a_level: 216,
        uni:449
    },
    {
        id: 89,
        name: "Castle",
        sec: 783,
        a_level: 232,
        uni:431
    },
    {
        id: 90,
        name: "Copt Hill",
        sec: 719,
        a_level: 237,
        uni:474
    },
    {
        id: 91,
        name: "Doxford",
        sec: 611,
        a_level: 186,
        uni:323
    },
    {
        id: 92,
        name: "Fulwell",
        sec: 612,
        a_level: 198,
        uni:378
    },
    {
        id: 93,
        name: "Hendon",
        sec: 746,
        a_level: 275,
        uni:1151
    },
    {
        id: 94,
        name: "Hetton",
        sec: 784,
        a_level: 233,
        uni:462
    },
    {
        id: 95,
        name: "Houghton",
        sec: 816,
        a_level: 218,
        uni:456
    },
    {
        id: 96,
        name: "Millfield",
        sec: 868,
        a_level: 341,
        uni:1021
    },
    {
        id: 97,
        name: "Pallion",
        sec: 779,
        a_level: 233,
        uni:458
    },
    {
        id: 98,
        name: "Redhill",
        sec: 781,
        a_level: 257,
        uni:489
    },
    {
        id: 99,
        name: "Ryhope",
        sec: 855,
        a_level: 230,
        uni:491
    },
    {
        id: 100,
        name: "St Anne's",
        sec: 829,
        a_level: 243,
        uni:427
    },
    {
        id: 101,
        name: "St Chad's",
        sec: 503,
        a_level: 159,
        uni:323
    },
    {
        id: 102,
        name: "St Michael's",
        sec: 618,
        a_level: 228,
        uni:486
    },
    {
        id: 103,
        name: "St Peter's",
        sec: 497,
        a_level: 147,
        uni:542
    },
    {
        id: 104,
        name: "Sandhill",
        sec: 804,
        a_level: 227,
        uni:451
    },
    {
        id: 105,
        name: "Shiney Row",
        sec: 943,
        a_level: 281,
        uni:519
    },
    {
        id: 106,
        name: "Silksworth",
        sec: 696,
        a_level: 207,
        uni:429
    },
    {
        id: 107,
        name: "Southwick",
        sec: 718,
        a_level: 211,
        uni:395
    },
    {
        id: 108,
        name: "Washington Central",
        sec: 736,
        a_level: 227,
        uni:355
    },
    {
        id: 109,
        name: "Washington East",
        sec: 824,
        a_level: 229,
        uni:418
    },
    {
        id: 110,
        name: "Washington North",
        sec: 796,
        a_level: 219,
        uni:455
    },
    {
        id: 111,
        name: "Washington South",
        sec: 666,
        a_level: 211,
        uni:346
    },
    {
        id: 112,
        name: "Washington West",
        sec: 833,
        a_level: 260,
        uni:480
    },
   
   
]