$(document).ready(function(){
    function Random(a,b){
      return Math.round(Math.random()*(b-a)+a);
    }
    var arr = "A、B、C、D、E、F、G、H、I、J、K、L、M、N、O、P、Q、R、S、T、U、V、W、X、Y、Z"
    var lowerArr = "a、b、c、d、e、f、g、h、i、j、k、l、m、n、o、p、q、r、s、t、u、v、w、x、y、z"
    arr = arr.split('、')
    lowerArr = lowerArr.split('、')
    var newArr = arr.concat(lowerArr);
     function yz(){
        $.each($('.yanzheng span'),function(index,item){
            $(item).css({
                left : Random(Number(`${index * 36}`), Number(`${(index+1) * 32}`)),
                transform : `rotate(${Random(-90,90)}deg)` ,
                color : `rgb(${Random(0,255)},${Random(0,255)},${Random(0,255)})`
            })
            $(item).html(newArr[Random(0,52)])
        })
     }
     yz()
    $('.yanzheng').click(()=>{
        yz()
    })
    // 判断验证
    var userRex = /^[0-9]{11}$/
    var pwdRex = /^(?![0-9]*$)(?![a-zA-Z]*$)[\w]{6,12}$/
    $(".user").blur(function(){
        if(!userRex.test($(this).val())){
            $('.error').css({
                display : 'block',
                color : 'red',
            })
            $(".error span").text('用户名格式不正确')
            $('.error i').css({
                background : 'url(../img/false.png) no-repeat right -45px'
            })
        }else{
            $('.error').css({
                display : 'block',
                color : 'lightgreen',
            })
            $(".error span").text('用户名格式正确')
            $('.error i').css({
                background : 'url(../img/true.png) no-repeat center center',
                backgroundSize : "20px 20px"              
            })
        }
   })
   $(".pwd").blur(function(){
    if(!pwdRex.test($(this).val())){
        $('.pwderror').css({
            display : 'block',
            color : 'red',
        })
        $(".pwderror span").text('密码格式不正确')
        $('.pwderror i').css({
            background : 'url(../img/false.png) no-repeat right -45px'
        })
    }else{
        $('.pwderror').css({
            display : 'block',
            color : 'lightgreen',
        })
        $(".pwderror span").text('密码格式正确')
        $('.pwderror i').css({
            background : 'url(../img/true.png) no-repeat center center',
            backgroundSize : "20px 20px"              
        })
    }
})
    $('.btn-register').click(function(){
        var user = $('.user').val();
        var pwd = $('.pwd').val();
        var yanzhengma = $('.yanzhengma').val()
        var yz = $(".yz1").text() + $(".yz2").text() + $(".yz3").text()  + $(".yz4").text() 
        if(pwdRex.test(pwd) && userRex.test(user)){
            if(yanzhengma === yz || yanzhengma === yz.toLowerCase()){
                alert('注册成功，点击跳转')
                $('form').attr('onsubmit','return true')
            }else{
                $('.yaz_error').css('display','block')
            }
        //  var xhr = new XMLHttpRequest();
        //   xhr.open('post','http://localhost:3001/doRegister',true)
        //   xhr.setRequestHeader('Content-type',"application/x-www-form-urlencoded")
        //   xhr.withCredentials = true;
        //   xhr.send(`username=${user}&password=${pwd}`)
        //   xhr.onreadystatechange = function(){
        //       if(xhr.status == 200 && xhr.readyState == 4){
        //         $("html").html(xhr.responseText)
        //       }
        //   }
        }
    })
    // 文件上传
    $('.fileipt').click(function(){
        $('.fileipt').attr('onclick','return true')
    })
    $('.filebtn').click(function(){
        $('.fileipt').trigger('click')
    })
})