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


