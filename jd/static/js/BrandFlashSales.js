var rhtp = document.querySelectorAll('.ppsg-header .nr .right>ul>li p')
var hour = document.querySelectorAll('.js-djs .hour') 
var min = document.querySelectorAll('.js-djs .min') 
var sec = document.querySelectorAll('.js-djs .sec') 
var day = document.querySelector('.youhui .yushi-day')
var gdnav = document.querySelector('.ppsg-header .nr')
var ppsgimg = document.querySelector('.ppsg-logo img')
var fore2 = document.querySelector('.fore2')
var fore2_a = document.querySelector('.fore2 a')
var diqu = document.querySelector('.hn-xianshi')
var shengfen = document.querySelectorAll('.shengfen ul li a')
rhtp.forEach(function(item,index){
    item.onmouseover = function(){
        for(var i = 0;i<rhtp.length;i++){
            rhtp[i].classList.remove('active')
        }
        this.classList.add('active')
    }
    item.onmouseout = function(){
        this.classList.remove('active')
    }
})

fore2.onmouseover = function(){
    diqu.classList.add('hn-block')
    this.style.backgroundColor = '#fff'
}
fore2.onmouseout = function(){
    diqu.classList.remove('hn-block')
    this.style.backgroundColor = '#e3e4e5'
}
shengfen.forEach(function(item,index){
    item.onmouseover = function(){
        for(var i = 0 ;i<shengfen.length;i++){                                           
            shengfen[i].classList.remove('shengfenli')
        }
        this.classList.add('shengfenli')
    }
    item.onmouseout = function(){
        this.classList.remove('shengfenli')
    }
    item.onclick = function(){
      var res =  item.innerHTML
        fore2_a.innerText = res
   for(var i = 0;i<shengfen.length;i++){
       shengfen[i].classList.remove('yhq-shengfen')
   }
     this.classList.add('yhq-shengfen')
    }
})

var wl = new Date('2020-11-02 24:00:00')
var timer = setInterval(function(){
    var nowdate = new Date()
    var shijc = wl - nowdate;
    if(shijc <= 0){
        clearInterval(timer)
    }
    var newhour = parseInt(shijc/1000 / 60 / 60 % 24)
    var newmin = parseInt(shijc/1000/60%60)
    var newsec = parseInt(shijc/1000%60)
    hour.forEach(function(item,index){
        item.innerHTML = newhour<10? '0' + newhour : newhour
    })
    min.forEach(function(item,index){
        item.innerHTML = newmin
    })
    sec.forEach(function(item,index){
        item.innerHTML = newsec<10 ? '0' + newsec : newsec
    })
},1000)

window.onscroll = function(){
    var gdzhi = document.documentElement.scrollTop;
    if(gdzhi >= 150){
        gdnav.classList.add('ppsg-header-fixed');
        ppsgimg.classList.add('logo-img')
    }else{
        gdnav.classList.remove('ppsg-header-fixed');
        ppsgimg.classList.remove('logo-img')
    }
}


