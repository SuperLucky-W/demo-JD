var buy = document.querySelector('.sk_mybuy')
var sk_buymini = document.querySelector('.sk_buy_mini')

// console.log(sk_buymini);
// 控制购物车
buy.onmouseover = function () {
    sk_buymini.style.display = 'block'
    // sk_buymini.classList.remove('sk_show');
    buy.style.backgroundColor = '#fff';
    buy.style.borderBottomColor = '#fff'

}
buy.onmouseleave = function () {
    sk_buymini.style.display = 'none'
    buy.style.backgroundColor = '#f9f9f9'
    buy.style.borderBottomColor = '#dfdfdf'

}
sk_buymini.onmouseover = function () {
    buy.style.backgroundColor = '#fff';
    buy.style.borderBottomColor = '#fff'
    sk_buymini.style.display = 'block'
}
sk_buymini.onmouseleave = function () {
    buy.style.borderBottomColor = '#dfdfdf'
    buy.style.backgroundColor = '#f9f9f9';
    sk_buymini.style.display = 'none'
}

//最便宜 
var sk_cheap = document.querySelector('.sk_cheap');
var sk_cheapest = document.querySelector('.sk_cheapest');

sk_cheap.onmouseover = function () {
    sk_cheapest.style.display = 'block'
}
sk_cheapest.onmouseleave = function () {
    sk_cheapest.style.display = 'none'
}
// 倒计时
var hour = document.querySelector('.hour');
var min = document.querySelector('.min');
var sec = document.querySelector('.sec');

// var futureTime = new Date('2020-10-26 22:00:00');

var timer = setInterval(function () {
    //  获取当前时间
    var nowDate = new Date();
    var nowHour = nowDate.getHours();
    if (nowHour % 2 != 0) {
        nowHour -= 1;
    }
    //  计算时间差
    // console.log(futureTime - nowDate);
    var now = new Date(`${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()},${nowHour + 2}:0:0`)
    var diff = now - nowDate;
    //  换算天数
    var dayTime = parseInt(diff / 1000 / 60 / 60 / 24)
    // console.log(dayTime);
    //  换算小时
    var hourTime = parseInt(diff / 1000 / 60 / 60 % 24)
    //  换算分钟
    var minTime = parseInt(diff / 1000 / 60 % 60)
    //  换算秒
    var secTime = parseInt(diff / 1000 % 60)
    if (minTime < 10) {
        minTime = '0' + minTime
    }
    if (secTime < 10) {
        secTime = '0' + secTime
    }
    hour.innerText = hourTime;
    min.innerText = minTime;
    sec.innerText = secTime;

    if (diff <= 0) {
        clearInterval(timer)
    }
}, 1000);

// 窗口滚动
var sk_navbar = document.querySelector('.sk_navbar')
var sk_countdown = document.querySelector('.sk_countdown')
// console.log(sk_navbar);
window.onscroll = function () {
    var sctop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    // console.log(sctop);
    if (sctop > 170 + 31) {
        //    js 中id 可以直接使用  但是不建议
        sk_navbar.style.position = 'fixed'
        sk_navbar.style.top = '0px';
        sk_navbar.style.zIndex = '99999999'
    } else {
        sk_navbar.style.position = 'static'
    }

    if (sctop > 590 + 31) {
        //    js 中id 可以直接使用  但是不建议
        sk_countdown.style.position = 'fixed'
        sk_countdown.style.top = '44px';
        sk_countdown.style.zIndex = '9999999'
        sk_countdown.style.overflow = 'hidden'
        document.styleSheets[0].addRule('.sk_countdown a::before', "display:none");
    } else {
        sk_countdown.style.position = 'static'
    }
}