var backdrop=$('#backdrop');
var signForm=$('#signForm');

$('#signInBtn, #signUpBtn').click(function () {
    $('#signForm, #backdrop').show()
    $('#headSignIn').css('color','red');
    $('#headSignUp').css('color','black');
})

$('.icon-cancel, #backdrop').click(turnOffForm);

function turnOffForm() {
    $('#signForm, #backdrop').hide();
}
headSignIn.onclick=function () {
    headSignIn.style.color='red';
    headSignUp.style.color='black';
}
headSignUp.onclick=function () {
    headSignUp.style.color='red';
    headSignIn.style.color='black';
}

var login=document.getElementById('login');
var username=document.getElementById('checkUserName');
username.onblur=checkName;
login.onclick=function () {
    checkPwd();
    if(checkPwd){
        turnOffForm();
    }
};


var remindUserName=$('#remindUserName')[0];
var remindPassWd=$('#remindPassWd')[0];

function checkName() {
    var name=username.value;
    var isPhone = /^[1][3,4,5,7,8][0-9]{9}$/;
    var isEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if(!isPhone.test(name) && !isEmail.test(name)){
        remindUserName.innerText='请输入正确的手机号或邮箱';
        remindUserName.style.color='red';
    }else{
        remindUserName.innerText='用户名有效'
        remindUserName.style.color='red';
    }

}
function checkPwd() {
    var passwd=document.getElementById('checkPassWd').value;
    var isPasswd=  /^[A-Za-z0-9]{6,16}$/;
    if(!isPasswd.test(passwd)){
        remindPassWd.innerText='请输入有效的密码';
        remindPassWd.style.color='red';
    }else{
        return true;
    }
}


//悬停触发下载App二维码弹出层

$('#app').mouseenter(function () {
    $('#scan').show();
})
$('#app').mouseleave(function () {
    $('#scan').hide();
})
