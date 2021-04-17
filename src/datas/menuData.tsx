export interface menuDataType {
    name: string;
    orderName: string;
}

const menuDatas: menuDataType[] = [
    {
        name: "1.麻婆豆腐",
        orderName: "1番",
    },
    {
        name: "2.豆腐のうま煮",
        orderName: "2番",
    },
    {
        name: "3.肉野菜炒め",
        orderName: "3番",
    },
    {
        name: "4.豚肉とザーサイの細切り炒め",
        orderName: "4番",
    },
    {
        name: "5.麻婆春雨",
        orderName: "5番",
    },
    {
        name: "6.かに玉子",
        orderName: "6番",
    },
    {
        name: "7.ニラ玉子",
        orderName: "7番",
    },
    {
        name: "8.玉ねぎと玉子炒め",
        orderName: "8番",
    },
];
const dayMenuDatas: menuDataType[][] = [
    [],
    [
        {
            name: "月11.豚肉と玉ねぎの生姜焼き",
            orderName: "11番",
        },
        {
            name: "月12.揚げ豆腐と肉野菜炒め",
            orderName: "12番",
        },
        {
            name: "月13.鶏肉と黒コショー炒め",
            orderName: "13番",
        },
        {
            name: "月14.豚肉の角煮かけご飯",
            orderName: "14番",
        },
    ],
    [
        {
            name: "火11.牛肉とニンニクの芽の細切り炒め",
            orderName: "11番",
        },
        {
            name: "火12.四川風豚肉スライス炒め",
            orderName: "12番",
        },
        {
            name: "火13.豚肉と野菜と玉子炒め",
            orderName: "13番",
        },
        {
            name: "火14.四川風なす炒め",
            orderName: "14番",
        },
    ],
    [
        {
            name: "水11.まめいかともやしのピリ辛炒め",
            orderName: "11番",
        },
        {
            name: "水12.すぶた",
            orderName: "12番",
        },
        {
            name: "水13.牛肉と玉ねぎの黒コショー炒め",
            orderName: "13番",
        },
        {
            name: "水14.木くらげと豚肉と玉子炒め",
            orderName: "14番",
        },
    ],
    [
        {
            name: "木11.鶏肉のピリ辛炒め",
            orderName: "11番",
        },
        {
            name: "木12.海老と玉子のチリソース",
            orderName: "12番",
        },
        {
            name: "木13.豚肉と太春雨炒め",
            orderName: "13番",
        },
        {
            name: "木14.豚肉と野菜の生姜焼き",
            orderName: "14番",
        },
    ],
    [
        {
            name: "金11.豚肉とピーマンの細切り炒め",
            orderName: "11番",
        },
        {
            name: "金12.鶏肉のチリソース",
            orderName: "12番",
        },
        {
            name: "金13.三品海鮮炒め",
            orderName: "13番",
        },
        {
            name: "金14.牛肉のオイスターソース炒め",
            orderName: "14番",
        },
    ],
    [
        {
            name: "土11.麻婆なす",
            orderName: "土曜11番",
        },
        {
            name: "土12.鶏肉の唐辛子炒め",
            orderName: "土曜12番",
        },
        {
            name: "土13.ニラレバ炒め",
            orderName: "土曜13番",
        },
        {
            name: "土14.海老と玉子炒め",
            orderName: "土曜14番",
        },
        {
            name: "日11.鶏肉の中国みそ炒め",
            orderName: "日曜11番",
        },
        {
            name: "日12.白身魚の四川風炒め",
            orderName: "日曜12番",
        },
        {
            name: "日13.八宝菜",
            orderName: "日曜13番",
        },
        {
            name: "日14.豚肉とキャベツの辛みそ炒め",
            orderName: "日曜14番",
        },
    ],
];
const weekMenuDatas: menuDataType[] = [
    {
        name: "9.(週替わり)",
        orderName: "9番",
    },
    {
        name: "15.(週替わり)",
        orderName: "15番",
    },
];

export { menuDatas, dayMenuDatas, weekMenuDatas };
