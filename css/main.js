var app=document.getElementById('app');
var scan=document.getElementById('scan');

app.onmouseenter=function () {
    scan.style.display='block';
}
app.onmouseleave=function () {
    scan.style.display='none';
}

var items=document.getElementsByClassName('item');
for (var i=0; i<items.length; i++){
    !function (i) {
        items[i].onmouseenter=function () {
            items[i].style.background='#a7a7a7'
        }
        items[i].onmouseleave=function () {
            items[i].style.background='#4b4b4b'
        }
    }(i)
}

var index=0;
setInterval(function() {
    index++;
    show(index%6);
},2000);

var pics=document.getElementById('banner').getElementsByTagName('img');
var dots=document.getElementById('dots').getElementsByTagName('span');
for(var i=0;i<6;i++) {
    dots[i].id=i;//为按钮们赋id,当然也可以在html里赋值
    dots[i].onclick=function () {
        show(this.id)//传入被点击按钮的索引值,并显示相应的图片和按钮
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

var goTop=document.getElementById('goTop');
goTop.onclick=function back() {
    document.documentElement.scrollTop=0;
}
