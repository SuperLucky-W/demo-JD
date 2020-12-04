var fore2 = document.querySelector('.fore2')
var fore2_a = document.querySelector('.fore2 a')
var diqu = document.querySelector('.hn-xianshi')
var shengfen = document.querySelectorAll('.shengfen ul li a')

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