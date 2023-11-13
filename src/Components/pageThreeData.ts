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
        name: "Arthur's Hill",
        sec: 740,
        a_level: 485,
        uni:4588
    },
    // {
    //     id: 7,
    //     name: "Deckham",
    //     sec: 692,
    //     a_level: 232,
    //     uni:429
    // },
   
]