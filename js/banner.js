// 轮播图
var index=0;
setInterval(function() {
    index++;
    show(index%6);
    move(pics[index%6],-1100)
},4000);

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



// 动画框架运用
window.onload=function () {
    var items=document.getElementsByClassName('pathItem');

    for(var i=0;i<items.length;i++){
        items[i].onmouseenter=function () {
            move(this,{marginTop:18})
        }
        items[i].onmouseleave=function () {
            move(this,{marginTop:25})
        }
    }
}