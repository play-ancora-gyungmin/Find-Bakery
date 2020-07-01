/*-----load-----*/
window.addEventListener("load", function () {
    console.log("loaded")
    var lid = getParameterByName("lid"),
        lc
    console.log(lid);

    if (lid === "lc") {
        lc = getParameterByName("lc")
        if (lc === "none" || lc === "now") {
            alert("현재 서비스 준비중 입니다.")
            location.href = "index.htm"
        }
    }

    var listTitle = new Vue({
        el: "#pageTitle",
        computed: {
            title: function () {
                var res
                if (lid === "bs") {
                    res = "빵집"
                } else if (lid === "ds") {
                    res = "디저트"
                } else if (lid === "sh") {
                    res = "검색결과"
                } else if (lid === "lc") {
                    if (lc === "seoulmid") {
                        res = "지역 > 서울 종로/중/용산구"
                    } else if (lc === "seoulmidwest") {
                        res = "지역 > 서울 서대문/마포구"
                    } else if (lc === "now") {
                        res = "지역 > 현재위치"
                    }
                }
                return res
            }
        }
    })

    var rankingListLoad = new Vue({
        el: '#ranking-list',
        data: {
            thatData: ranking
        },
        computed: {
            rankedData: function () {
                var newList = this.thatData.slice(0);
                newList.sort(function (x, y) {
                    return y.score - x.score;
                })
                return newList
            }
        }
    })

    var shopListLoad = new Vue({
        el: '#shopList',
        data: {
            thatData: shopData
        },
        computed: {
            filteredData: function () {
                if (lid === "bs") {
                    return this.thatData.filter(function (that) {
                        return that.sort === 0
                    })
                } else if (lid === "ds") {
                    return this.thatData.filter(function (that) {
                        return that.sort === 1
                    })
                } else if (lid === "sh") {
                    return this.thatData
                } else if (lid === "lc") {
                    if (lc === "seoulmid") {
                        return this.thatData.filter(function (that) {
                            return (that.local === "종로" || that.local === "중" || that.local === "용산")
                        })
                    } else if (lc === "seoulmidwest") {
                        return this.thatData.filter(function (that) {
                            return (that.local === "서대문" || that.local === "마포")
                        })
                    } else if (lc === "now") {
                        return this.thatData
                    }
                }
            }
        }
    })

}) /*-----load-----*/
