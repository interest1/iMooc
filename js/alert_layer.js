var backdrop=$('#backdrop');
var signForm=$('#signForm');

//点击弹出登录框
$('#signInBtn').click(function () {
    $('#signForm, #backdrop').show()
    $('#headSignIn').css('color','red');
    $('#headSignUp').css('color','black');
})
$('#signUpBtn').click(function () {
    $('#signForm, #backdrop').show()
    $('#headSignUp').css('color','red');
    $('#headSignIn').css('color','black');
})

$('.icon-cancel, #backdrop').click(shutDown);

function shutDown() {
    $('#signForm, #backdrop').hide();
}

//弹窗里的事件
$('#headSignIn').click(function () {
    $('#headSignIn').css('color','red');
    $('#headSignUp').css('color','black');
})
$('#headSignUp').click(function () {
    $('#headSignUp').css('color','red');
    $('#headSignIn').css('color','black');
})

// 登录注册验证
var login=document.getElementById('login');
var username=document.getElementById('checkName');
username.onblur=checkName;
login.onclick=function () {
    checkPwd();
    if(checkPwd){
        shutDown();
    }
};

var remindName=$('#remindName')[0];
var remindPwd=$('#remindPwd')[0];

function checkName() {
    var name=username.value;
    var isPhone = /^[1][3,4,5,7,8][0-9]{9}$/;
    var isEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if(!isPhone.test(name) && !isEmail.test(name)){
        remindName.innerText='请输入正确的手机号或邮箱';
        remindName.style.color='red';
    }else{
        remindName.innerText='用户名有效'
        remindName.style.color='red';
    }

}
function checkPwd() {
    var passwd=document.getElementById('checkPwd').value;
    var isPasswd=  /^[A-Za-z0-9]{6,16}$/;
    if(!isPasswd.test(passwd)){
        remindPwd.innerText='请输入有效的密码';
        remindPwd.style.color='red';
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
