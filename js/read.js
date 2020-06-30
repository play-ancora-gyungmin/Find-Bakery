var shopData = [
    {
        id: 0,
        title: "무지빵",
        address: "서울특별시 종로구 사직로8길 42 1F",
        tel: "02-739-5520",
        sort: 0,
        price: "10000",
        parking: "유료주차",
        opentime: "07:00",
        closetime: "21:00",
        closeday: "일,첫째 월",
        msg: "매일 아침 7시, 오후 1시 새로운 빵이 나옵니다",
        img: "dummy1.jpg",
        
        transit: {
            bus: [
                "오리역 60 101 300 370"
            ],
            metro: [
                "오리역 분당선",
                "동천역 신분당선"
            ]
        }
}, {
        id: 1,
        title: "무지마카롱",
        address: "서울특별시 종로구 사직로8길 42 1F",
        tel: "02-739-5520",
        sort: 1,
        price: "10000",
        parking: "유료주차",
        opentime: "07:00",
        closetime: "21:00",
        closeday: "일,첫째 월",
        msg: "정통 방식으로 만드는 마카롱 전문점 입니다.",
        img: "dummy2.jpg",
        
        transit: {
            bus: [
                "오리역 60 101 300 370"
            ],
            metro: [
                "오리역 분당선",
                "동천역 신분당선"
            ]
        }
}, {
        id: 2,
        title: "오리오리빵",
        address: "서울특별시 종로구 사직로8길 42 1F",
        tel: "02-739-5520",
        sort: 0,
        price: "10000",
        parking: "유료주차",
        opentime: "07:00",
        closetime: "21:00",
        closeday: "일,첫째 월",
        msg: "오리역 인근 빵집 입니다.",
        img: "dummy3.jpg",

        transit: {
            bus: [
                "오리역 60 101 300 370"
            ],
            metro: [
                "오리역 분당선",
                "동천역 신분당선"
            ]
        }
}, {
        id: 3,
        title: "아우내 호두과자 종로점",
        address: "서울특별시 종로구 사직로8길 42 1F",
        tel: "02-739-5520",
        sort: 1,
        price: "10000",
        parking: "유료주차",
        opentime: "07:00",
        closetime: "21:00",
        closeday: "일,첫째 월",
        msg: "종로로 찾아온 호두과자",
        img: "dummy4.jpg",
        
        transit: {
            bus: [
                "오리역 60 101 300 370"
            ],
            metro: [
                "오리역 분당선",
                "동천역 신분당선"
            ]
        }
}, {
        id: 4,
        title: "너구리 카페",
        address: "서울특별시 종로구 사직로8길 42 1F",
        tel: "02-739-5520",
        sort: 0,
        price: "10000",
        parking: "유료주차",
        opentime: "07:00",
        closetime: "21:00",
        closeday: "일,첫째 월",
        msg: "매일 아침 7시, 오후 1시 새로운 빵이 나옵니다",
        img: "dummy5.jpg",
        transit: {
            bus: [
                "오리역 60 101 300 370"
            ],
            metro: [
                "오리역 분당선",
                "동천역 신분당선"
            ]
        }
}, {
        id: 5,
        title: "율찰떡",
        address: "서울특별시 종로구 사직로8길 42 1F",
        tel: "02-739-5520",
        sort: 1,
        price: "10000",
        parking: "유료주차",
        opentime: "07:00",
        closetime: "21:00",
        closeday: "일,첫째 월",
        msg: "쫄깃한 찹쌀떡",
        img: "dummy6.jpg",
        transit: {
            bus: [
                "오리역 60 101 300 370"
            ],
            metro: [
                "오리역 분당선",
                "동천역 신분당선"
            ]
        }
}, {
        id: 6,
        title: "댕댕바게트",
        address: "서울특별시 종로구 사직로8길 42 1F",
        tel: "02-739-5520",
        sort: 0,
        price: "10000",
        parking: "유료주차",
        opentime: "07:00",
        closetime: "21:00",
        closeday: "일,첫째 월",
        msg: "매일 아침 7시, 오후 1시 새로운 빵이 나옵니다",
        img: "dummy1.jpg",
        transit: {
            bus: [
                "오리역 60 101 300 370"
            ],
            metro: [
                "오리역 분당선",
                "동천역 신분당선"
            ]
        }
}, {
        id: 7,
        title: "카페로즈",
        address: "서울특별시 종로구 사직로8길 42 1F",
        tel: "02-739-5520",
        sort: 1,
        price: "10000",
        parking: "유료주차",
        opentime: "07:00",
        closetime: "21:00",
        closeday: "일,첫째 월",
        msg: "매일 아침 7시, 오후 1시 새로운 빵이 나옵니다",
        img: "dummy2.jpg",
        transit: {
            bus: [
                "오리역 60 101 300 370"
            ],
            metro: [
                "오리역 분당선",
                "동천역 신분당선"
            ]
        }
}]

var shopMenuData = [
    {
        id: 0,
        title: shopData.find(x => x.id === 0).title,
        menu: [
            {
                mid: 0,
                name: "시그니처 바게트",
                msg: "따뜻하고 든든한 시그니처 바게트",
                price: "7000",
                img: "menu_0.jpg"
        }, {
                mid: 1,
                name: "단팥빵",
                msg: "정겨운 맛의 단팥빵",
                price: "1000",
                img: "menu_1.jpg"
        }, {
                mid: 2,
                name: "소보로빵",
                msg: "고소한 소보로빵",
                price: "1000",
                img: "menu_2.png"
        }, {
                mid: 3,
                name: "소세지빵",
                msg: "남녀노소 모두를 위한 풍부한 맛",
                price: "1500",
                img: "menu_3.jpg"
        }, {
                mid: 4,
                name: "식빵",
                msg: "쫄깃한 식감이 일품인 식빵",
                price: "1500",
                img: "menu_4.jpg"
        }, {
                mid: 5,
                name: "아메리카노/카페라떼",
                msg: "쓴맛과 신맛의 아름다운 조화/라떼 변경시 300원 추가",
                price: "1000",
                img: "menu_5.jpg"
        }, {
                mid: 6,
                name: "아침 우유",
                msg: "신선한 시그니처 우유",
                price: "900",
                img: "menu_6.jpg"
        }
    ]
}, {
        id: 1,
        title: shopData.find(x => x.id === 1).title,
        menu: [
            {
                mid: 0,
                name: "시그니처 바게트",
                msg: "따뜻하고 든든한 시그니처 바게트",
                price: "7000",
                img: "menu_0.jpg"
        }, {
                mid: 1,
                name: "단팥빵",
                msg: "정겨운 맛의 단팥빵",
                price: "1000",
                img: "menu_1.jpg"
        }, {
                mid: 2,
                name: "소보로빵",
                msg: "고소한 소보로빵",
                price: "1000",
                img: "menu_2.png"
        }, {
                mid: 3,
                name: "소세지빵",
                msg: "남녀노소 모두를 위한 풍부한 맛",
                price: "1500",
                img: "menu_3.jpg"
        }, {
                mid: 4,
                name: "식빵",
                msg: "쫄깃한 식감이 일품인 식빵",
                price: "1500",
                img: "menu_4.jpg"
        }, {
                mid: 5,
                name: "아메리카노/카페라떼",
                msg: "쓴맛과 신맛의 아름다운 조화/라떼 변경시 300원 추가",
                price: "1000",
                img: "menu_5.jpg"
        }, {
                mid: 6,
                name: "아침 우유",
                msg: "신선한 시그니처 우유",
                price: "900",
                img: "menu_6.jpg"
        }
    ]
}, {
        id: 2,
        title: shopData.find(x => x.id === 2).title,
        menu: [
            {
                mid: 0,
                name: "시그니처 바게트",
                msg: "따뜻하고 든든한 시그니처 바게트",
                price: "7000",
                img: "menu_0.jpg"
        }, {
                mid: 1,
                name: "단팥빵",
                msg: "정겨운 맛의 단팥빵",
                price: "1000",
                img: "menu_1.jpg"
        }, {
                mid: 2,
                name: "소보로빵",
                msg: "고소한 소보로빵",
                price: "1000",
                img: "menu_2.png"
        }, {
                mid: 3,
                name: "소세지빵",
                msg: "남녀노소 모두를 위한 풍부한 맛",
                price: "1500",
                img: "menu_3.jpg"
        }, {
                mid: 4,
                name: "식빵",
                msg: "쫄깃한 식감이 일품인 식빵",
                price: "1500",
                img: "menu_4.jpg"
        }, {
                mid: 5,
                name: "아메리카노/카페라떼",
                msg: "쓴맛과 신맛의 아름다운 조화/라떼 변경시 300원 추가",
                price: "1000",
                img: "menu_5.jpg"
        }, {
                mid: 6,
                name: "아침 우유",
                msg: "신선한 시그니처 우유",
                price: "900",
                img: "menu_6.jpg"
        }
    ]
}, {
        id: 3,
        title: shopData.find(x => x.id === 3).title,
        menu: [
            {
                mid: 0,
                name: "시그니처 바게트",
                msg: "따뜻하고 든든한 시그니처 바게트",
                price: "7000",
                img: "menu_0.jpg"
        }, {
                mid: 1,
                name: "단팥빵",
                msg: "정겨운 맛의 단팥빵",
                price: "1000",
                img: "menu_1.jpg"
        }, {
                mid: 2,
                name: "소보로빵",
                msg: "고소한 소보로빵",
                price: "1000",
                img: "menu_2.png"
        }, {
                mid: 3,
                name: "소세지빵",
                msg: "남녀노소 모두를 위한 풍부한 맛",
                price: "1500",
                img: "menu_3.jpg"
        }, {
                mid: 4,
                name: "식빵",
                msg: "쫄깃한 식감이 일품인 식빵",
                price: "1500",
                img: "menu_4.jpg"
        }, {
                mid: 5,
                name: "아메리카노/카페라떼",
                msg: "쓴맛과 신맛의 아름다운 조화/라떼 변경시 300원 추가",
                price: "1000",
                img: "menu_5.jpg"
        }, {
                mid: 6,
                name: "아침 우유",
                msg: "신선한 시그니처 우유",
                price: "900",
                img: "menu_6.jpg"
        }
    ]
}, {
        id: 4,
        title: shopData.find(x => x.id === 4).title,
        menu: [
            {
                mid: 0,
                name: "시그니처 바게트",
                msg: "따뜻하고 든든한 시그니처 바게트",
                price: "7000",
                img: "menu_0.jpg"
        }, {
                mid: 1,
                name: "단팥빵",
                msg: "정겨운 맛의 단팥빵",
                price: "1000",
                img: "menu_1.jpg"
        }, {
                mid: 2,
                name: "소보로빵",
                msg: "고소한 소보로빵",
                price: "1000",
                img: "menu_2.png"
        }, {
                mid: 3,
                name: "소세지빵",
                msg: "남녀노소 모두를 위한 풍부한 맛",
                price: "1500",
                img: "menu_3.jpg"
        }, {
                mid: 4,
                name: "식빵",
                msg: "쫄깃한 식감이 일품인 식빵",
                price: "1500",
                img: "menu_4.jpg"
        }, {
                mid: 5,
                name: "아메리카노/카페라떼",
                msg: "쓴맛과 신맛의 아름다운 조화/라떼 변경시 300원 추가",
                price: "1000",
                img: "menu_5.jpg"
        }, {
                mid: 6,
                name: "아침 우유",
                msg: "신선한 시그니처 우유",
                price: "900",
                img: "menu_6.jpg"
        }
    ]
}, {
        id: 5,
        title: shopData.find(x => x.id === 5).title,
        menu: [
            {
                mid: 0,
                name: "시그니처 바게트",
                msg: "따뜻하고 든든한 시그니처 바게트",
                price: "7000",
                img: "menu_0.jpg"
        }, {
                mid: 1,
                name: "단팥빵",
                msg: "정겨운 맛의 단팥빵",
                price: "1000",
                img: "menu_1.jpg"
        }, {
                mid: 2,
                name: "소보로빵",
                msg: "고소한 소보로빵",
                price: "1000",
                img: "menu_2.png"
        }, {
                mid: 3,
                name: "소세지빵",
                msg: "남녀노소 모두를 위한 풍부한 맛",
                price: "1500",
                img: "menu_3.jpg"
        }, {
                mid: 4,
                name: "식빵",
                msg: "쫄깃한 식감이 일품인 식빵",
                price: "1500",
                img: "menu_4.jpg"
        }, {
                mid: 5,
                name: "아메리카노/카페라떼",
                msg: "쓴맛과 신맛의 아름다운 조화/라떼 변경시 300원 추가",
                price: "1000",
                img: "menu_5.jpg"
        }, {
                mid: 6,
                name: "아침 우유",
                msg: "신선한 시그니처 우유",
                price: "900",
                img: "menu_6.jpg"
        }
    ]
}, {
        id: 6,
        title: shopData.find(x => x.id === 6).title,
        menu: [
            {
                mid: 0,
                name: "시그니처 바게트",
                msg: "따뜻하고 든든한 시그니처 바게트",
                price: "7000",
                img: "menu_0.jpg"
        }, {
                mid: 1,
                name: "단팥빵",
                msg: "정겨운 맛의 단팥빵",
                price: "1000",
                img: "menu_1.jpg"
        }, {
                mid: 2,
                name: "소보로빵",
                msg: "고소한 소보로빵",
                price: "1000",
                img: "menu_2.png"
        }, {
                mid: 3,
                name: "소세지빵",
                msg: "남녀노소 모두를 위한 풍부한 맛",
                price: "1500",
                img: "menu_3.jpg"
        }, {
                mid: 4,
                name: "식빵",
                msg: "쫄깃한 식감이 일품인 식빵",
                price: "1500",
                img: "menu_4.jpg"
        }, {
                mid: 5,
                name: "아메리카노/카페라떼",
                msg: "쓴맛과 신맛의 아름다운 조화/라떼 변경시 300원 추가",
                price: "1000",
                img: "menu_5.jpg"
        }, {
                mid: 6,
                name: "아침 우유",
                msg: "신선한 시그니처 우유",
                price: "900",
                img: "menu_6.jpg"
        }
    ]
}, {
        id: 7,
        title: shopData.find(x => x.id === 7).title,
        menu: [
            {
                mid: 0,
                name: "시그니처 바게트",
                msg: "따뜻하고 든든한 시그니처 바게트",
                price: "7000",
                img: "menu_0.jpg"
        }, {
                mid: 1,
                name: "단팥빵",
                msg: "정겨운 맛의 단팥빵",
                price: "1000",
                img: "menu_1.jpg"
        }, {
                mid: 2,
                name: "소보로빵",
                msg: "고소한 소보로빵",
                price: "1000",
                img: "menu_2.png"
        }, {
                mid: 3,
                name: "소세지빵",
                msg: "남녀노소 모두를 위한 풍부한 맛",
                price: "1500",
                img: "menu_3.jpg"
        }, {
                mid: 4,
                name: "식빵",
                msg: "쫄깃한 식감이 일품인 식빵",
                price: "1500",
                img: "menu_4.jpg"
        }, {
                mid: 5,
                name: "아메리카노/카페라떼",
                msg: "쓴맛과 신맛의 아름다운 조화/라떼 변경시 300원 추가",
                price: "1000",
                img: "menu_5.jpg"
        }, {
                mid: 6,
                name: "아침 우유",
                msg: "신선한 시그니처 우유",
                price: "900",
                img: "menu_6.jpg"
        }
    ]
}]

var userData = [
    {
        id: 0,
        name: "율",
        email: "izyuri@gmail.com",
        password: "!",
        gender: "f", // f,m,n
        age: 20
    },{
        id: 1,
        name: "히히",
        email: "izhonda@gmail.com",
        password: "!",
        gender: "f", // f,m,n
        age: 20
    },{
        id: 2,
        name: "오리",
        email: "izyena@gmail.com",
        password: "!",
        gender: "f", // f,m,n
        age: 20
    },{
        id: 3,
        name: "침착",
        email: "lee.zilioner@gmail.com",
        password: "!",
        gender: "m", // f,m,n
        age: 30
    },{
        id: 4,
        name: "코넬",
        email: "chris@gmail.com",
        password: "!",
        gender: "m", // f,m,n
        age: 40
    },{
        id: 5,
        name: "무지",
        email: "muji@kakao.net",
        password: "!",
        gender: "n", // f,m,n
        age: 10
    },
]

var shopReviewData = [
    {
        id: 0,
        title: shopData.find(x => x.id === 0).title,
        review: [{
            rid: 0,
            user: userData.find(x => x.id === 4),
            comment: "단팥빵 맛있었어요-",
            score: 7
    }, {
            rid: 1,
            user: userData.find(x => x.id === 3),
            comment: "사장님 친절하세요-",
            score: 7
    }, {
            rid: 2,
            user: userData.find(x => x.id === 2),
            comment: "빵 쫄깃하고 갓 나온 빵이라서 좋았어요.",
            score: 9
    }, {
            rid: 3,
            user: userData.find(x => x.id === 1),
            comment: "빵 맛있네요.",
            score: 10
    }, {
            rid: 4,
            user: userData.find(x => x.id === 0),
            comment: "빵 맛있어요.",
            score: 8
    }, {
            rid: 5,
            user: userData.find(x => x.id === 5),
            comment: "커피 좋습니다.",
            score: 5
    }]
}, {
        id: 1,
        title: shopData.find(x => x.id === 1).title,
        review: [{
            rid: 0,
            user: userData.find(x => x.id === 5),
            comment: "단팥빵 맛있었어요-",
            score: 7
    }, {
            rid: 1,
            user: userData.find(x => x.id === 4),
            comment: "사장님 친절하세요-",
            score: 7
    }, {
            rid: 2,
            user: userData.find(x => x.id === 3),
            comment: "빵 쫄깃하고 갓 나온 빵이라서 좋았어요.",
            score: 9
    }, {
            rid: 3,
            user: userData.find(x => x.id === 2),
            comment: "빵 맛있네요.",
            score: 10
    }, {
            rid: 4,
            user: userData.find(x => x.id === 1),
            comment: "빵 맛있어요.",
            score: 8
    }, {
            rid: 5,
            user: userData.find(x => x.id === 0),
            comment: "커피 좋습니다.",
            score: 5
    }]
}, {
        id: 2,
        title: shopData.find(x => x.id === 2).title,
        review: [{
            rid: 0,
            user: userData.find(x => x.id === 0),
            comment: "단팥빵 맛있었어요-",
            score: 7
    }, {
            rid: 1,
            user: userData.find(x => x.id === 1),
            comment: "사장님 친절하세요-",
            score: 7
    }, {
            rid: 2,
            user: userData.find(x => x.id === 2),
            comment: "빵 쫄깃하고 갓 나온 빵이라서 좋았어요.",
            score: 9
    }, {
            rid: 3,
            user: userData.find(x => x.id === 3),
            comment: "빵 맛있네요.",
            score: 10
    }, {
            rid: 4,
            user: userData.find(x => x.id === 4),
            comment: "빵 맛있어요.",
            score: 8
    }, {
            rid: 5,
            user: userData.find(x => x.id === 5),
            comment: "커피 좋습니다.",
            score: 5
    }]
}, {
        id: 3,
        title: shopData.find(x => x.id === 3).title,
        review: [{
            rid: 0,
            user: userData.find(x => x.id === 3),
            comment: "단팥빵 맛있었어요-",
            score: 7
    }, {
            rid: 1,
            user: userData.find(x => x.id === 1),
            comment: "사장님 친절하세요-",
            score: 7
    }, {
            rid: 2,
            user: userData.find(x => x.id === 4),
            comment: "빵 쫄깃하고 갓 나온 빵이라서 좋았어요.",
            score: 9
    }, {
            rid: 3,
            user: userData.find(x => x.id === 5),
            comment: "빵 맛있네요.",
            score: 10
    }, {
            rid: 4,
            user: userData.find(x => x.id === 2),
            comment: "빵 맛있어요.",
            score: 8
    }, {
            rid: 5,
            user: userData.find(x => x.id === 0),
            comment: "커피 좋습니다.",
            score: 5
    }]
}, {
        id: 4,
        title: shopData.find(x => x.id === 4).title,
        review: [{
            rid: 0,
            user: userData.find(x => x.id === 1),
            comment: "단팥빵 맛있었어요-",
            score: 7
    }, {
            rid: 1,
            user: userData.find(x => x.id === 2),
            comment: "사장님 친절하세요-",
            score: 7
    }, {
            rid: 2,
            user: userData.find(x => x.id === 3),
            comment: "빵 쫄깃하고 갓 나온 빵이라서 좋았어요.",
            score: 9
    }, {
            rid: 3,
            user: userData.find(x => x.id === 4),
            comment: "빵 맛있네요.",
            score: 10
    }, {
            rid: 4,
            user: userData.find(x => x.id === 5),
            comment: "빵 맛있어요.",
            score: 8
    }, {
            rid: 5,
            user: userData.find(x => x.id === 0),
            comment: "커피 좋습니다.",
            score: 5
    }]
}, {
        id: 5,
        title: shopData.find(x => x.id === 5).title,
        review: [{
            rid: 0,
            user: userData.find(x => x.id === 2),
            comment: "단팥빵 맛있었어요-",
            score: 7
    }, {
            rid: 1,
            user: userData.find(x => x.id === 4),
            comment: "사장님 친절하세요-",
            score: 7
    }, {
            rid: 2,
            user: userData.find(x => x.id === 0),
            comment: "빵 쫄깃하고 갓 나온 빵이라서 좋았어요.",
            score: 9
    }, {
            rid: 3,
            user: userData.find(x => x.id === 1),
            comment: "빵 맛있네요.",
            score: 10
    }, {
            rid: 4,
            user: userData.find(x => x.id === 3),
            comment: "빵 맛있어요.",
            score: 8
    }, {
            rid: 5,
            user: userData.find(x => x.id === 5),
            comment: "커피 좋습니다.",
            score: 5
    }]
}, {
        id: 6,
        title: shopData.find(x => x.id === 6).title,
        review: [{
            rid: 0,
            user: userData.find(x => x.id === 2),
            comment: "단팥빵 맛있었어요-",
            score: 7
    }, {
            rid: 1,
            user: userData.find(x => x.id === 1),
            comment: "사장님 친절하세요-",
            score: 7
    }, {
            rid: 2,
            user: userData.find(x => x.id === 0),
            comment: "빵 쫄깃하고 갓 나온 빵이라서 좋았어요.",
            score: 9
    }, {
            rid: 3,
            user: userData.find(x => x.id === 3),
            comment: "빵 맛있네요.",
            score: 10
    }, {
            rid: 4,
            user: userData.find(x => x.id === 5),
            comment: "빵 맛있어요.",
            score: 8
    }, {
            rid: 5,
            user: userData.find(x => x.id === 4),
            comment: "커피 좋습니다.",
            score: 5
    }]
}, {
        id: 7,
        title: shopData.find(x => x.id === 7).title,
        review: [{
            rid: 0,
            user: userData.find(x => x.id === 1),
            comment: "단팥빵 맛있었어요-",
            score: 7
    }, {
            rid: 1,
            user: userData.find(x => x.id === 3),
            comment: "사장님 친절하세요-",
            score: 7
    }, {
            rid: 2,
            user: userData.find(x => x.id === 5),
            comment: "빵 쫄깃하고 갓 나온 빵이라서 좋았어요.",
            score: 9
    }, {
            rid: 3,
            user: userData.find(x => x.id === 0),
            comment: "빵 맛있네요.",
            score: 10
    }, {
            rid: 4,
            user: userData.find(x => x.id === 4),
            comment: "빵 맛있어요.",
            score: 8
    }, {
            rid: 5,
            user: userData.find(x => x.id === 2),
            comment: "커피 좋습니다.",
            score: 5
    }]
}]

var noticeData = [{
    id: 0,
    title: "모든 오리크림빵 등록 가게 정부재난지원금 사용 가능",
    subtitle: "모든 오리크림빵 등록 매장에서 정부재난지원금 사용이 가능합니다. ",
    img: "main_banner.png",
    text: "모든 오리크림빵 등록 매장에서 정부재난지원금 사용이 가능합니다.  자세한 사항은 오리크림빵 고객센터 또는 각 매장에 문의주세요."
}, {
    id: 1,
    title: "인사동 일대 가게 최대 30% 할인",
    img: "dummy1.jpg",
    text: ""
}, {
    id: 2,
    title: "여의도 일대 매장을 찾습니다.",
    img: "dummy2.jpg",
    text: ""
}, ]

var themeData = [{
    id: 0,
    title: "매일 빵 굽는 집",
    msg: "매일 2번 이상 새로운 빵을 굽는 가게를 소개합니다.",
    time: "2개월 전",
    img: "dummy1.jpg",
    sellist: [
        {
            shop: shopData.find(x => x.id === 0),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 빵을 굽습니다. 대표메뉴는 바게트 입니다."
        },
        {
            shop: shopData.find(x => x.id === 2),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 빵을 굽습니다. 대표메뉴는 바게트 입니다."
        },
        {
            shop: shopData.find(x => x.id === 4),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 빵을 굽습니다. 대표메뉴는 바게트 입니다."
        },
        {
            shop: shopData.find(x => x.id === 6),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 빵을 굽습니다. 대표메뉴는 바게트 입니다."
        },
    ]
}, {
    id: 1,
    title: "마카롱 전문",
    msg: "마카롱을 주력으로 하는 가게를 소개합니다.",
    time: "2개월 전",
    img: "dummy2.jpg",
    sellist: [
        {
            shop: shopData.find(x => x.id === 1),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
        {
            shop: shopData.find(x => x.id === 3),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
        {
            shop: shopData.find(x => x.id === 5),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
        {
            shop: shopData.find(x => x.id === 7),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
    ]

}, {
    id: 2,
    title: "우리나라 디저트",
    msg: "우리나라 디저트를 만드는 가게를 소개합니다.",
    time: "2개월 전",
    img: "dummy3.jpg",
    sellist: [
        {
            shop: shopData.find(x => x.id === 1),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
        {
            shop: shopData.find(x => x.id === 3),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
        {
            shop: shopData.find(x => x.id === 5),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
        {
            shop: shopData.find(x => x.id === 7),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
    ]
}, {
    id: 3,
    title: "여행지 디저트",
    msg: "여행지에서 꼭 가봐야할 가게를 소개합니다.",
    time: "2개월 전",
    img: "dummy4.jpg",
    sellist: [
        {
            shop: shopData.find(x => x.id === 1),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
        {
            shop: shopData.find(x => x.id === 3),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
        {
            shop: shopData.find(x => x.id === 5),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
        {
            shop: shopData.find(x => x.id === 7),
            shopmsg: "오리역 인근에 위치한 가게로 오전 7시에 문을 엽니다. 매일 오전 7 시 오후 12 시 새로운 디저트가 나옵니다. 대표메뉴는 마카롱 입니다."
        },
    ]
}, ]

var localData = [{
    id: 0,
    wide: "현재위치",
    basic: "",
    msg: "주변의 좋은 가게를 소개합니다.",
    img: "main_location_now.jpg"
}, {
    id: 1,
    wide: "서울",
    basic: "중/종로/용산구",
    msg: "서울의 중심에서 맛보는 정통 디저트",
    img: "main_location_jonglo-middle.jpg"
}, {
    id: 2,
    wide: "서울",
    basic: "마포/서대문구",
    msg: "서울 중서부의 정이 넘치는 디저트가게",
    img: "main_location_mapo.jpg"
}, {
    id: 3,
    wide: "준비중",
    basic: "",
    msg: "더 많은 지역을 서비스하기 위해 준비중 입니다.",
    img: "preparing.png"
}, ]

var shopLikeList = [
    {
        id: 0,
        shop: shopData.find(x => x.id === 0),
        likeuser: [
            {
                lid: 0,
                luser: ""
            },{
                lid: 1,
                luser: ""
            },{
                lid: 2,
                luser: ""
            },{
                lid: 3,
                luser: ""
            },{
                lid: 4,
                luser: ""
            },
        ]
    },{
        id: 1,
        shop: shopData.find(x => x.id === 1),
        likeuser: [
            {
                lid: 0,
                luser: ""
            },{
                lid: 1,
                luser: ""
            },{
                lid: 2,
                luser: ""
            },
        ]
    },{
        id: 2,
        shop: shopData.find(x => x.id === 2),
        likeuser: [
            {
                lid: 0,
                luser: ""
            },{
                lid: 1,
                luser: ""
            },{
                lid: 2,
                luser: ""
            },{
                lid: 3,
                luser: ""
            },{
                lid: 4,
                luser: ""
            },{
                lid: 5,
                luser: ""
            },{
                lid: 6,
                luser: ""
            },
        ]
    },{
        id: 3,
        shop: shopData.find(x => x.id === 3),
        likeuser: [
            {
                lid: 1,
                luser: ""
            },{
                lid: 2,
                luser: ""
            },{
                lid: 3,
                luser: ""
            },{
                lid: 4,
                luser: ""
            },{
                lid: 5,
                luser: ""
            },
        ]
    },{
        id: 4,
        shop: shopData.find(x => x.id === 4),
        likeuser: [
            {
                lid: 0,
                luser: ""
            },{
                lid: 1,
                luser: ""
            },{
                lid: 2,
                luser: ""
            },{
                lid: 3,
                luser: ""
            },{
                lid: 4,
                luser: ""
            },
        ]
    },{
        id: 5,
        shop: shopData.find(x => x.id === 5),
        likeuser: [
            {
                lid: 0,
                luser: ""
            },{
                lid: 1,
                luser: ""
            },{
                lid: 2,
                luser: ""
            },{
                lid: 3,
                luser: ""
            },
        ]
    },{
        id: 6,
        shop: shopData.find(x => x.id === 6),
        likeuser: [
            {
                lid: 0,
                luser: ""
            },{
                lid: 1,
                luser: ""
            },
        ]
    },{
        id: 7,
        shop: shopData.find(x => x.id === 7),
        likeuser: [
            {
                lid: 0,
                luser: ""
            },{
                lid: 1,
                luser: ""
            },
        ]
    },
]

var userLikeList = [
    {
        id: 0,
        user: userData.find(x => x.id === 0),
        likeshop: [
            
        ]
    },{
        id: 1,
        user: userData.find(x => x.id === 1),
        likeshop: [
            
        ]
    },{
        id: 2,
        user: userData.find(x => x.id === 2),
        likeshop: [
            
        ]
    },{
        id: 3,
        user: userData.find(x => x.id === 3),
        likeshop: [
            
        ]
    },{
        id: 4,
        user: userData.find(x => x.id === 4),
        likeshop: [
            
        ]
    },{
        id: 5,
        user: userData.find(x => x.id === 5),
        likeshop: [
            
        ]
    },
    
]



var ranking = [
    {
        id: 0,
        shop: shopData.find(x => x.id === 0),
        score: 
    },
]