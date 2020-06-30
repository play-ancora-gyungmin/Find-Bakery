/*main.js*/
var biProtact = 0,
    nListItem,
    nBulitItem,
    nArowItem,
    slideNum = 0

function bannerIntro(dirValue,bulitSeq) {
    if (biProtact === 1) {
        console.log("wait")
        return 0
    }
    biProtact = 1
    
    nListItem[slideNum].classList.remove("on")
    nBulitItem[slideNum].classList.remove("on")
    
    if (dirValue === 1) {
        slideNum++
        if (slideNum === nListItem.length) slideNum = 0
    } else if (dirValue === 0) {
        slideNum--
        if (slideNum === -1) slideNum = nListItem.length - 1
    } else if (dirValue === 2) {
        slideNum = bulitSeq
    }
    
    nListItem[slideNum].classList.add("on")
    nBulitItem[slideNum].classList.add("on")
    
    setTimeout(function () {
        biProtact = 0
    }, 500)
}

/*-----load-----*/
window.addEventListener("load", function () {
    console.log("loaded")
    /*------Main View------*/
    /*var themeListLoad = new Vue({
        el: '#theme-box',
        data: {
            thatData: themeData,
            thatWidth: 0
        },
        mounted: function () {
            this.$nextTick(function () {
                this.thatWidth = makeWidth(this)
            })
        }
    })*/

    var localListLoad = new Vue({
        el: '#local-box',
        data: {
            thatData: localData,
            thatWidth: 0
        },
        mounted: function () {
            this.$nextTick(function () {
                this.thatWidth = makeWidth(this)
            })
        }
    })

    var bakeryShopListLoad = new Vue({
        el: '#shop-box-bakery',
        data: {
            thatData: shopData,
            thatWidth: 0
        },
        computed: {
            filteredData: function () {
                return this.thatData.filter(function (that) {
                    return that.sort === 0
                })
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.thatWidth = makeWidth(this)
            })
        }
    })

    var dessertShopListLoad = new Vue({
        el: '#shop-box-dessert',
        data: {
            thatData: shopData,
            thatWidth: 0
        },
        computed: {
            filteredData: function () {
                return this.thatData.filter(function (that) {
                    return that.sort === 1
                })
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.thatWidth = makeWidth(this)
            })
        }
    })


    /*------Banner View------*/
    var noticListLoad = new Vue({
        el: '#main-banner-list',
        data: {
            thatData: noticeData
        },
        mounted: function (arguments) {
            this.$el.querySelectorAll('li')[0].classList.add('on')
        }
    })

    var noticBulitLoad = new Vue({
        el: '#main-banner-bulit',
        data: {
            thatData: noticeData
        },
        mounted: function (arguments) {
            this.$el.querySelectorAll('li')[0].classList.add('on')
        }
    })

    nListItem = noticListLoad.$el.querySelectorAll('li')
    nBulitItem = noticBulitLoad.$el.querySelectorAll('li')
    nArowItem = document.querySelectorAll('.baner-arow>a')

    /* autoSlide */
    var autoInterval;
    var autoSlide = function () {
        console.log("autoSlide")
        autoInterval = setInterval(function () {
            bannerIntro(1,0);
        }, 3000)
    }
    var autoTimeout
    var stopSlide = function () {
        console.log("stopSlide")
        clearInterval(autoInterval)
        clearTimeout(autoTimeout)
        autoTimeout = setTimeout(autoSlide, 7000)
    }
    /* autoSlide */
    autoSlide();

    /* button click event/.abtn/#slide */
    nArowItem[1].addEventListener("click", function () {
        console.log("click right")
        stopSlide()
        bannerIntro(1,0)
    })

    nArowItem[0].addEventListener("click", function () {
        console.log("click left")
        stopSlide()
        bannerIntro(0,0)
    })

    var setBulitFn = function (bulitSeq) {
        return function () {
            stopSlide()
            bannerIntro(2,bulitSeq)
        }
    }
    for (var i = 0; i < nBulitItem.length; i++) {
        nBulitItem[i].onclick = setBulitFn(i)
    }
}) /*-----load-----*/
