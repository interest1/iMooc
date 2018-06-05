var signInBtn=document.getElementById('signInBtn');
var signUpBtn=document.getElementById('signUpBtn');

var signForm=document.getElementById('signForm');
var backdrop=document.getElementById('backdrop');

var headSignIn=document.getElementById('headSignIn');
var headSignUp=document.getElementById('headSignUp');

var remindUserName=document.getElementById('remindUserName');
var remindPassWd=document.getElementById('remindPassWd');
signInBtn.onclick=function () {
    signForm.style.display='block';
    backdrop.style.display='block';
    headSignIn.style.color='red';
}
signUpBtn.onclick=function () {
    signForm.style.display='block';
    backdrop.style.display='block';
    headSignUp.style.color='red';
}
var cancel=document.getElementsByClassName('icon-cancel')[0];
backdrop.onclick=turnOffForm;
cancel.onclick=turnOffForm;

function turnOffForm() {
    signForm.style.display='none';
    backdrop.style.display='none';
}
headSignIn.onclick=function () {
    headSignIn.style.color='red';
    headSignUp.style.color='black';
}
headSignUp.onclick=function () {
    headSignUp.style.color='red';
    headSignIn.style.color='black';
}

function validate() {
    var username=document.getElementById('checkUserName').value;
    var passwd=document.getElementById('checkPassWd').value;

    var isPhone = /^[1][3,4,5,7,8][0-9]{9}$/;
    var isEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    var isPasswd=  /^[A-Za-z0-9]{6,16}$/;
    if(!isPhone.test(username) && !isEmail.test(username)){
        remindUserName.innerText='请输入正确的手机号或邮箱';
        remindUserName.style.color='red';
    }else{
        remindUserName.innerText='用户名有效'
        remindUserName.style.color='red';
    }
    if(!isPasswd.test(passwd)){
        remindPassWd.innerText='请输入有效的密码';
        remindPassWd.style.color='red';
    }
}


//悬停触发下载App二维码弹出层
var app=document.getElementById('app');
var scan=document.getElementById('scan');

app.onmouseenter=function () {
    scan.style.display='block';
}
app.onmouseleave=function () {
    scan.style.display='none';
}

// 二级菜单触发事件
var subMenus=document.getElementsByClassName('sub-menu');
var items=document.getElementsByClassName('item');

for (var i=0; i<items.length; i++){
    // 用闭包实现
    !function (i) {
        items[i].onmouseenter=function () {
            items[i].style.background='rgba(180,180,180,0.5)'
            subMenus[i].style.display='block';
        }
        items[i].onmouseleave=function () {
            items[i].style.background='#2b333b'
            subMenus[i].style.display='none';
        }
    }(i)
}



// 返回顶部
var goTop=document.getElementById('goTop');
goTop.onclick=function back() {
    document.documentElement.scrollTop=0;
}
var feedback=document.getElementById('feedback');
var problem=document.getElementById('problem');
var dload=document.getElementById('dload');

var side=document.getElementById('side');
var divs=side.getElementsByTagName('div');
for (var i=0; i<4; i++){
    divs[i].onmouseenter=function () {
        showText(this)
    };
    divs[i].onmouseleave=function () {
        hideText(this)
    }
}

function showText(ele) {
    var span=ele.getElementsByTagName('span')[0];
    var i=ele.getElementsByTagName('i')[0];
    span.style.display='block';
    i.style.display='none';
}
function hideText(ele) {
    var span=ele.getElementsByTagName('span')[0];
    var i=ele.getElementsByTagName('i')[0];
    span.style.display='none';
    i.style.display='block';
}


