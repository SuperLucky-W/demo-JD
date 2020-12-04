var fore2 = document.querySelector('.fore2')
var fore2_a = document.querySelector('.fore2 a')
var diqu = document.querySelector('.hn-xianshi')
var shengfen = document.querySelectorAll('.shengfen ul li a')
var pic = document.querySelectorAll('.banner-left .pic img')
var fenyeqi = document.querySelectorAll('.banner-left .yhq-fenyeqi span')
var gdnav = document.querySelector('.yhq-nav')
var fhdb = document.querySelector('.li-fhdb')

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

fenyeqi.forEach(function(item,index){
    item.onmouseover = function(){
        for(var i = 0 ;i<fenyeqi.length ; i++){
            pic[i].classList.remove('pic-xianshi')
            fenyeqi[i].classList.remove('fyq')
        }
        pic[index].classList.add('pic-xianshi')
        this.classList.add('fyq')
    }
    pic_index = index
})

var pic_index = 0 
var timer = setInterval(function(){
    pic_index++;
    if(pic_index>pic.length-1){
        pic_index = 0
    }
    for(var i = 0 ; i<pic.length;i++){
        pic[i].classList.remove('pic-xianshi')
        fenyeqi[i].classList.remove('fyq')
    }
    pic[pic_index].classList.add('pic-xianshi')
    fenyeqi[pic_index].classList.add('fyq')
},3000)

window.onscroll = function(){
    var gdzhi = document.documentElement.scrollTop || document.body.scrollTop || window.pageXOffset;
    console.log(gdzhi);
    if(gdzhi >= 200){
        gdnav.classList.add('yhq-nav-fixed')
    }else{
        gdnav.classList.remove('yhq-nav-fixed')
    }
}

window.onscroll = function(){
    var gdzhi = document.documentElement.scrollTop || document.body.scrollTop || window.pageXOffset;
    fhdb.onclick = function(){
        gdzhi = 0;
        document.documentElement.scrollTop = gdzhi
    }
}
