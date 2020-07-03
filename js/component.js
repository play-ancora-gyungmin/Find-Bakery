var gnb = '<nav id="gnb" class="gnb content">' +
    '<a href="#" id="media-gnb-btn" v-on:click="clickMenuBtn"><span class="bar-top"></span><span class="bar-mid"></span><span class="bar-bot"></span></a>' +

    '<h1 id="gnb-logo" class="logo"><a href="./index.htm"><img src="./resorces/img/Logo.png" alt="오리크림빵 로고"><span>오리크림빵</span></a></h1>' +

    '<ul class="gnb-list"><li><a href="./listUp.htm?lid=bs">빵집</a></li><li><a href="./listUp.htm?lid=ds">디저트</a></li><li><a href="./listUp.htm?lid=lc&lc=now">지역</a></li><li><div class="gnb-search"><input id="gnb-search" type="text" placeholder="여기에 지역 또는 가게를 입력"><a href="./listUp.htm?lid=sh"><img src="./resorces/img/Icons%20-%20Search@2x.png" alt="검색"></a></div></li></ul>' +

    '<ul class="sign-list"><li class="btn-signIn"><a href="./signIn.htm">로그인</a></li><li class="btn-signUp"><a href="./signUp.htm">회원가입</a></li></ul>' +

    '</nav>'

var info = '<div>' +
    '<section class="info-top content">' +

    '<div id="info-logo" class="logo"><a href="#"><img src="./resorces/img/Logo.png" alt="오리크림빵 로고"><span>오리크림빵</span></a></div>' +

    '<ul class="info-list"><li><a href="#">회사소개</a></li><li><a href="#">공지사항</a></li><li><a href="#">이용약관</a></li><li><a href="#">개인정보처리방침</a></li><li><a href="#">가게지원센터</a></li><li><a href="#">고객센터</a></li></ul>' +

    '<div class="sns-list">' +
    '<h4>지금 팔로우</h4>' +
    '<ul><li class="sns-fb"><a href="#" class="ir">페이스북</a></li><li class="sns-in"><a href="#" class="ir">인스타그램</a></li><li class="sns-tw"><a href="#" class="ir">트위터</a></li></ul>' +
    '</div>' +
    '</section>' +

    '<section class="info-bottom content">' +
    '<span>(C)2020. 오리크림빵</span>' +
    '</section>' +
    '</div>'

/*-----load-----*/
window.addEventListener("load", function () {
    console.log("loaded")

    var page_header = Vue.component('page-header', {
        template: gnb,
        methods: {
            clickMenuBtn: function (event) {
                if(event) event.preventDefault()
                header.$data.isActive = !header.$data.isActive
            }
        }
    })

    var header = new Vue({
        el: '#top',
        data: {
            isActive: false
        }
    })

    var page_footer = Vue.component('page-footer', {
        template: info
    })

    var footer = new Vue({
        el: '#info'
    })

}) /*-----load-----*/
