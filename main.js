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

// 轮播图
var index=0;
setInterval(function() {
    index++;
    show(index%6);
    move(pics[index%6],-1100)
},14000);

var pics=document.getElementById('banner').getElementsByTagName('img');
var dots=document.getElementById('dots').getElementsByTagName('span');
for(var i=0;i<6;i++) {
    dots[i].id=i;//为按钮们赋id,当然也可以在html里赋值
    dots[i].onclick=function () {
        show(this.id)//传入被点击按钮的索引值,并显示相应的图片和按钮,
        // 如果this.id用i则由于i始终为6因此异常，可以用闭包解决
    };
}

function show(index) {
    for(var i=0;i<6;i++){
        pics[i].style.display='none';
        dots[i].className='';
    }
    pics[index].style.display='block';
    dots[index].className='active';
}


function move(ele,target) {
    clearInterval(ele.timer);
    var speed=target>ele.offsetLeft?10:-10;

    ele.timer=setInterval(function () {
        var v=target-ele.offsetLeft;
        ele.style.left=ele.offsetLeft+speed+'px';

        if(Math.abs(v)<Math.abs(speed)){
            ele.style.left=target+'px';
            clearInterval(ele.timer);
        }
    })
}
// 返回顶部
var goTop=document.getElementById('goTop');
goTop.onclick=function back() {
    document.documentElement.scrollTop=0;
}
