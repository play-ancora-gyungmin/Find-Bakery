function popupFn (thatVue) {
    thatVue.$data.isActive = !thatVue.$data.isActive
}

/*-----load-----*/
window.addEventListener("load",function(){
    console.log("loaded")
    
    var privacyPopup = new Vue({
        el: "#privacy-wrap",
        data: {
            isActive: false
        },
        methods: {
            closePopup: function (event) {
                if(event) event.preventDefault()
                popupFn(this)
            }
        }
    })
    
    var privacyBtn = new Vue({
        el: "#privacy-btn",
        methods: {
            popup: function (event) {
                if(event) event.preventDefault()
                popupFn(privacyPopup)
            }
        }
    })
    
    var termsPopup = new Vue({
        el: "#terms-wrap",
        data: {
            isActive: false
        },
        methods: {
            closePopup: function (event) {
                if(event) event.preventDefault()
                popupFn(this)
            }
        }
    })
    
    var termsBtn = new Vue({
        el: "#terms-btn",
        methods: {
            popup: function (event) {
                if(event) event.preventDefault()
                popupFn(termsPopup)
            }
        }
    })
            
})/*-----load-----*/