function findData(data, tid) {
    return data.thatData.find(x => x.id === tid)
}

/*-----load-----*/
window.addEventListener("load", function () {
    console.log("loaded")
    var tid = Number(getParameterByName("tid"))
    
    var themeInfoLoad = new Vue({
        el: '#pageInfo',
        data: {
            thatData: themeData
        },
        computed: {
            findedData: function () {
                return findData(this, tid)
            }
        }
    })
    
    var menuListLoad = new Vue({
        el: '#themeShopList',
        data: {
            thatData: themeData,
            thatWidth: 0
        },
        computed: {
            findedData: function () {
                return findData(this, tid)
            }
        }
    })
}) /*-----load-----*/
