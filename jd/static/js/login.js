var saoma = document.getElementById("saoma");
var mima = document.getElementById("mima");
var smlogin = document.getElementsByClassName("smlogin")[0];
var mmlogin = document.getElementsByClassName("mmlogin")[0];
var code = document.getElementsByClassName("code")[0];
var codeimg = document.querySelector(".code img");
var noneimg = document.querySelector(".noneimg");
var loginform = document.querySelector(".login-form");
saoma.onclick = function() {
    loginform.style.height = "438px";
    if (this.classList.contains("active")) {} else {
        this.classList.add("active");
    }
    mima.classList.remove("active");
    smlogin.classList.remove("xianshi");
    mmlogin.classList.remove("xianshi");
    smlogin.classList.add("xianshi");
}
mima.onclick = function() {
    loginform.style.height = "400px";
    if (this.classList.contains("active")) {} else {
        this.classList.add("active");
    }
    smlogin.classList.remove("xianshi");
    saoma.classList.remove("active");
    if (mmlogin.classList.contains("xianshi")) {
        mmlogin.classList.remove("xianshi");
    } else {
        mmlogin.classList.add("xianshi");
    }
}
$('.submit').click(function(){
    var $user = $('.user').val();
    var $pwd = $('.pwd').val();
    // $.ajax({
    //     type : 'post',
    //     data : `username=${$user}&password=${$pwd}`,
    //     url : 'http://localhost:3001/doLogin',
    //     withCredentials : true,
    //     crossDomain:true, 
    //     success(data){
    //         console.log(data);
    //     }
    // })
    $('form').attr('onsubmit','return true')

          
})