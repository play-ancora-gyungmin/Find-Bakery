/*shopInfo.js*/
var pointX, pointY

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function findData(data, sid) {
    return data.thatData.find(x => x.id === sid)
}

function createMap(x, y) {
    //console.log(x + "/" + y);
    var mapDiv = document.getElementById('mapbox');
    var map = new naver.maps.Map(mapDiv, {
        center: new naver.maps.LatLng(y, x), //지도의 초기 중심 좌표
        zoom: 18, //지도의 초기 줌 레벨,
        minZoom: 13,
        maxZoom: 21,
        zoomControl: true, //줌 컨트롤의 표시 여부
        zoomControlOptions: { //줌 컨트롤의 옵션
            position: naver.maps.Position.TOP_RIGHT
        },
    });
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(y, x),
        map: map
    });
}

function findMapPoints(addr) {
    naver.maps.Service.geocode({
        address: addr
    }, function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
            return console.error('Something wrong!');
        }
        var result = response.v2.addresses
        pointX = result[0].x
        pointY = result[0].y
        //console.log(pointX + "/" + pointY);

        createMap(pointX, pointY)
    })
}

/*-----load-----*/
window.addEventListener("load", function () {
    var sid = Number(getParameterByName("sid"))
    
    var reviewForm = new Vue({
        el: ".review-form",
        data: {
            isActive: false
        },
        methods: {
            closeForm: function (event) {
                if(event) event.preventDefault()
                this.$data.isActive = false
            }
        }
    })

    var shopInfoLoad = new Vue({
        el: '#shopInfo',
        data: {
            thatData: shopData,
            isLike: false
        },
        computed: {
            findedData: function () {
                return findData(this, sid)
            }
        },
        methods: {
            likeShop: function (event) {
                if(event) event.preventDefault()
                this.$data.isLike = !this.$data.isLike
                if(this.$data.isLike) {
                    alert("단골 목록에 추가되었습니다.")
                }else {
                    alert("단골 목록에 삭제되었습니다.")
                }
            },
            reviewShop: function (event) {
                if(event) event.preventDefault()
                reviewForm.$data.isActive = true
            }
        }
    })

    var menuListLoad = new Vue({
        el: '#menu-box',
        data: {
            thatData: shopMenuData,
            thatWidth: 0
        },
        computed: {
            findedData: function () {
                return findData(this, sid)
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.thatWidth = makeWidth(this)
            })
        }
    })

    var reviewListLoad = new Vue({
        el: '#review-box',
        data: {
            thatData: shopReviewData,
            thatWidth: 0
        },
        computed: {
            findedData: function () {
                return findData(this, sid)
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.thatWidth = makeWidth(this)
            })
        }
    })

    var transitbox = new Vue({
        el: '#transitbox',
        data: {
            thatData: shopData,
        },
        computed: {
            findedData: function () {
                return findData(this, sid)
            }
        },
    })

    /*---mapLoad---*/
    /*좌표찾기*/
    var shopAddr = shopInfoLoad.findedData.address
    var shopPoint = findMapPoints(shopAddr)

}) /*-----load-----*/
