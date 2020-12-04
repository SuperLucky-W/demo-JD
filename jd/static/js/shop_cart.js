window.onload = function(){
    var shop_goodsBtn;
    var sum = 0
    var sumMoney = 0;
    var shop_goodsBtn_Price;
    var price = document.querySelectorAll('.pri');
    var sumPrice = document.querySelector('.sum_price');
    var allBtn = document.querySelector(".allbtn");
    var shopBtnList = document.querySelectorAll('.shopBtn');
    var goodsBtn = document.querySelectorAll('.goodsBtn');
    var container = document.querySelector('.container');
    var dele = document.querySelectorAll('.delete');
    let goodsSum = document.querySelector('.goods_sum');
    var plus = document.querySelectorAll('.plus');
    var minus = document.querySelectorAll('.minus');
    var numipt = document.querySelectorAll('.numipt');
    var danjia = document.querySelectorAll('.danjia');
    for (var i = 0; i < shopBtnList.length; i++) {
        (function (i) {
            shopBtnList[i].onclick = function () {
                shop_goodsBtn = $(this).parents('.shop').find(".goodsBtn");
                shop_goodsBtn_Price = $(this).parents('.shop').find('.money h2').get();
                // 判断所有店铺选择全选也被选中
                allBtn.checked = true;
                for (var k = 0; k < shopBtnList.length; k++) {
                    if (!shopBtnList[k].checked) {
                        allBtn.checked = false;
                    }
                }
                // 控制店铺按钮选中其店铺下的商品选中,trigger触发点击商品按钮，利用反选，为true的跳过，为false添加点击按钮
                if (this.checked == true) {
                    for (var j = 0; j < shop_goodsBtn.length; j++) {
                        if (shop_goodsBtn[j].checked) {    //true跳过
                            continue;
                        } else {
                            $(shop_goodsBtn).eq(j).trigger('click');
                        }
                    }
                } else {
                    for (var j = 0; j < shop_goodsBtn.length; j++) {
                        if (shop_goodsBtn[j].checked) {
                            $(shop_goodsBtn).eq(j).trigger('click');
                        } else {    // 为false跳过
                            continue;
                        }
                    }
                }
            }
        })(i)
    }
    var $price;
    //控制商品按钮全选使得店铺按钮选中
    var flag = true;
    var $price;
    $('.goodsBtn').click(function () {
        // 随便点击一个以后先给店铺按钮设为true -----------------------------------
        var $shopBtn = $(this).parent().siblings("p").children(".shopBtn").get(0);
        if ($shopBtn) {
            $shopBtn.checked = true;
        }
        var $goodsBtn = $(this).parents(".shop").find(".goodsBtn").get();
        for (var i = 0; i < $goodsBtn.length; i++) {
            if (!$goodsBtn[i].checked) {
                $shopBtn.checked = false;
            };

        }
        // 计算总价利用标记判断，每次循环有标记的就不让再加********************
        var $price1 = parseFloat($(this).siblings('.money').find('h2').text())
        $price = parseFloat($(this).siblings('.price').find('.danjia').text())
        for (var j = 0; j < goodsBtn.length; j++) {
            if (!goodsBtn[j].flag) {
                if (goodsBtn[j].checked) {
                    goodsBtn[j].flag = true;
                    $price = parseFloat($(this).siblings('.price').find('.danjia').text())
                    sumMoney += $price1;
                }
            } else if (goodsBtn[j].flag) {
                if (!goodsBtn[j].checked) {
                    goodsBtn[j].flag = false
                    sumMoney -= $price1;
                    break;
                }
            }
        }
        sumPrice.innerText = sumMoney;

        // 利用计数法实现，单选按钮全选中全选按钮也选中 -----------------------------
        var sum = 0;
        num = 0;        //声明一个变量用来计数
        goodsSum.innerHTML = 0;
        for (var i = 0; i < goodsBtn.length; i++) {
            if (goodsBtn[i].checked) {
                num++;             // 如果有一个的checked为true，num就+1
                // 每次点击都把所有的value加一遍显示
                sum += parseFloat(numipt[i].value);
                goodsSum.innerHTML = sum;
            }
            if (num == goodsBtn.length) {      //当
                allBtn.checked = true;
            } else {
                allBtn.checked = false;
            }
        }
    })
    // 控制最上面的全选按钮
    $('.allbtn').click(function () {
        if ($(this).is(":checked")) {
            for (var i = 0; i < goodsBtn.length; i++) {
                console.log(goodsBtn);
                console.log(goodsBtn.length);
                if (goodsBtn[i].checked) {    //true跳过
                    continue;
                } else {
                    $(goodsBtn).eq(i).trigger('click');
                }
            }
        } else {
            $(this).get(0).checked = false;
            for (var i = 0; i < goodsBtn.length; i++) {
                if (goodsBtn[i].checked) {    //true跳过
                    $(goodsBtn).eq(i).trigger('click');
                } else {
                    continue;
                }
            }
        }
    })

    // 增加删除商品数量
    var current = 0;
    var count = 0;
    var danPrice;

    plus.forEach(function (item, index) {;
        plus[index].onclick = function () {
            count = parseInt(numipt[index].value);
            count++;
            danPrice = parseFloat(danjia[index].innerText);
            numipt[index].value = count;
            price[index].innerText = danPrice * count;
            if(goodsBtn[index].checked){
                sumPrice.innerText =  parseFloat(sumPrice.innerText)  + danPrice;
                goodsSum.innerHTML = parseFloat(goodsSum.innerText) + 1;
            }
            sumMoney = parseFloat( sumPrice.innerText)  
        }
    })
    minus.forEach(function (item, index) {
        minus[index].onclick = function () {
            count = parseInt(numipt[index].value)
            count--;
            if (count >0) {          
            danPrice = parseFloat(danjia[index].innerText);
            current = (count) * danPrice;
            numipt[index].value = count;
            price[index].innerText = current;
            if(goodsBtn[index].checked){
                sumPrice.innerText =  parseFloat(sumPrice.innerText)  - danPrice;
                goodsSum.innerHTML = parseFloat(goodsSum.innerText) - 1;
            }
            sumMoney = parseFloat(sumPrice.innerText)
            }else{
                count = 0;
            }
        }
    })
    // 事件委托绑定删除功能
    container.onclick = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        var deleIndex = 0;
        if (target.className == 'delete') {
            var result = confirm("你真的要删除该商品吗？")
            var DelshopName = target.parentNode.parentNode.parentNode;
            var DelNum = parseFloat($(target.parentNode.parentNode).find('.numipt').val())
            var targetPreice = parseFloat(target.parentNode.previousElementSibling.children[0].innerText);
            if (result == true) {
                
                if ($(target).parent().siblings('.goodsBtn').is(':checked')) {
                    sumPrice.innerText = parseFloat(sumPrice.innerText) - targetPreice;
                    goodsSum.innerHTML = parseFloat(goodsSum.innerHTML) - DelNum;
                }
                DelshopName.removeChild(target.parentNode.parentNode)
                for (var i = 0; i < DelshopName.children.length; i++) {
                    if (DelshopName.children.length == 1) {
                        container.removeChild(DelshopName);
                    }
                }
                goodsBtn = document.querySelectorAll('.goodsBtn');
                plus = document.querySelectorAll('.plus');
                minus = document.querySelectorAll('.minus');
            }
        }
    }

    // 为你推荐
var sug_index = 0;
var sug_index2 = 0;
$('.sug').mouseenter(function(){
    $('.next,.pre').css("display",'block');
})
$('.sug').mouseleave(function(){
    $('.next,.pre').css("display",'none');
})
$('.left1_content .sug_content').eq(0).css('display','block')
$('.left2_content .sug_content').eq(0).css('display','block')
$('.left2').mouseenter(function(){
    $(this).css({
        color: "#E2231A",
        "font-weight": 700,
        "border-color": "#E2231A",
    }).siblings().css({
        "border-color" : '#fff',
        color : "#666",
        "font-weight": 200,
    })
    $('.r2').fadeIn().siblings('.r1').fadeOut()
    $('.left1_content').fadeOut();
    $('.left2_content').fadeIn();
    $('.next').click(function(){
        sug_index2++;
        sug_index2  = sug_index2 > 1 ? 0 : sug_index2 ;
        $('.r2 li').eq(sug_index2).css({
            width : 26,
            background : "#e4393c",
        }).siblings().css({
            width: 8,
            background : "#aaa"
        })
        $('.left2_content .sug_content').eq(sug_index2).fadeIn().siblings().fadeOut();
    })
    $('.pre').click(function(){
        sug_index2--;
        sug_index2  = sug_index2 < 0 ? 1 : sug_index2 ;
        $('.r2 li').eq(sug_index2).css({
            width : 26,
            background : "#e4393c",
        }).siblings().css({
            width: 8,
            background : "#aaa"
        })
        $('.left2_content .sug_content').eq(sug_index2).fadeIn().siblings().fadeOut();
    })
})
r1Click();
$('.left1').mouseenter(function(){
    $(this).css({
        color: "#E2231A",
        "font-weight": 700,
        "border-color": "#E2231A",
    }).siblings().css({
        "border-color" : '#fff',
        color : "#666",
        "font-weight": 200,
    })
    $('.r1').fadeIn().siblings('.r2').fadeOut()
    $('.left2_content').fadeOut();
    $('.left1_content').fadeIn();
    // r1Click();
})
function r1Click(){
    $('.next').click(function(){
        sug_index++;
        sug_index  = sug_index > 2 ? 0 : sug_index ;
        $('.right li').eq(sug_index).css({
            width : 26,
            background : "#e4393c",
        }).siblings().css({
            width: 8,
            background : "#aaa"
        })
        $('.sug_content').eq(sug_index).fadeIn().siblings('.sug_content').fadeOut();
    })
    $('.pre').click(function(){
        sug_index--
        sug_index  = sug_index < 0 ? 2 : sug_index ;
        $('.right li').eq(sug_index).css({
            width : 26,
            background : "#e4393c",
        }).siblings().css({
            width: 8,
            background : "#aaa"
        })
        $('.sug_content').eq(sug_index).fadeIn().siblings('.sug_content').css('display','none');
    })
}
// 固定定位
$('.fix1').hover(function(){
    $('.focus').animate({
        left : -59
    })
},function(){
    $('.focus').animate({
        left : 59
    })
})
$('.fix2').hover(function(){
    $('.jd_cart').animate({
        left : -59
    })
},function(){
    $('.jd_cart').animate({
        left : 59
    })
})
}


