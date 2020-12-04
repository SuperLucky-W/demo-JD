// 主轮播
var wrap = document.querySelector('.sy-c_content .pic1')
var prev = document.querySelector('.sy-c_content .pic1 .prev')
var next = document.querySelector('.sy-c_content .pic1 .next')
var pic = document.querySelectorAll('.pic1 ul img')
var page = document.querySelectorAll('.page i')
var index = 0
next.onclick = function () {
    autoPlay();
}

function autoPlay() {

    index++;
    if (index > 7) {
        index = 0;
    }
    for (var i = 0; i < pic.length; i++) {
        pic[i].classList.remove('active')
        page[i].classList.remove('newPage')
    }
    pic[index].classList.add('active')
    page[index].classList.add('newPage')

}
prev.onclick = function () {
    index--;
    if (index < 0) {
        index = 7;
    }
    for (var i = 0; i < pic.length; i++) {
        pic[i].classList.remove('active')
        page[i].classList.remove('newPage')
    }
    pic[index].classList.add('active')
    page[index].classList.add('newPage')
}
page.forEach(function (item, index_page) {
    item.onmouseenter = function () {

        for (var i = 0; i < pic.length; i++) {
            pic[i].classList.remove('active')
            page[i].classList.remove('newPage')
        }
        index = index_page
        pic[index].classList.add('active')
        this.classList.add('newPage')
    }
})

var timer = setInterval(autoPlay, 2000)


wrap.onmouseenter = function () {
    clearInterval(timer);
}
wrap.onmouseleave = function () {

    timer = setInterval(autoPlay, 2000)
}

// 右边的小轮播 
var wrapp = document.querySelector('.sy-c_content .pic2')
var prev2 = document.querySelector('.sy-main .sy-c_content .prev2')
var next2 = document.querySelector('.sy-main .sy-c_content  .next2')
var photo = document.querySelectorAll('.sy-c_content .pic2  ul ')
console.log(photo);
var index2 = 0
next2.onclick = function () {
    autoPlay1()
}

function autoPlay1() {

    index2++;
    if (index2 > 2) {
        index2 = 0;
    }
    for (var i = 0; i < photo.length; i++) {
        photo[i].classList.remove('active1')
        console.log(photo[i]);
    }
    photo[index2].classList.add('active1')
    console.log(index2);
}

prev2.onclick = function () {
    index2--;
    if (index2 < 0) {
        index2 = 2;
    }
    for (var i = 0; i < photo.length; i++) {
        photo[i].classList.remove('active1')

    }
    photo[index2].classList.add('active1')

}
var timer2 = setInterval(autoPlay1, 5000)


wrapp.onmouseenter = function () {
    clearInterval(timer2);
}
wrapp.onmouseleave = function () {
    timer2 = setInterval(autoPlay1, 5000)
}


// 秒杀计时器
var hour = document.querySelector('.slmain .hour')
var min = document.querySelector('.slmain .min')
var sec = document.querySelector('.slmain .sec')

var futureTime = new Date('2020-12-23 24:00:00');
var skilltimer = setInterval(function () {
    var nowDate = new Date();
    var diff = futureTime - nowDate;
    var hourTime = parseInt(diff / 1000 / 60 / 60 % 24)
    var minTime = parseInt(diff / 1000 / 60 % 60)
    var secTime = parseInt(diff / 1000 % 60)





    if (diff <= 0) {
        clearInterval(skilltimer)
    }
    if (hourTime < 10) {
        hour.innerText = "0" + hourTime
    } else {
        hour.innerText = hourTime;
    }
    if (minTime < 10) {
        min.innerText = "0" + minTime;
    } else {
        min.innerText = minTime;
    }
    if (secTime < 10) {
        sec.innerText = "0" + secTime;
    } else {
        sec.innerText = secTime;
    }

}, 1000);
