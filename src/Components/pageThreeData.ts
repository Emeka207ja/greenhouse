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
        name: "Benwell & Scotswood",
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
        name: "Callerton & Throckley",
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
        name: "Dene & South Gosforth",
        sec: 620,
        a_level: 224,
        uni:610
    },
    {
        id: 31,
        name: "Denton & Westerhope",
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
        name: "Fawdon & West Gosforth",
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
    // {
    //     id: 7,
    //     name: "Deckham",
    //     sec: 692,
    //     a_level: 232,
    //     uni:429
    // },
   
]