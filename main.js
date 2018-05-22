var app=document.getElementById('app');
var scan=document.getElementById('scan');
var menu1=document.getElementById('menu1');
var menu2=document.getElementById('menu2');
var menu3=document.getElementById('menu3');
var menu4=document.getElementById('menu4');
var menu5=document.getElementById('menu5');
var menu6=document.getElementById('menu6');
var menu7=document.getElementById('menu7');


app.onmouseenter=function () {
    scan.style.display='block';
}
app.onmouseleave=function () {
    scan.style.display='none';
}

var item1=document.getElementsByClassName('item1')[0];

menu1.onmouseenter=function () {
    item1.style.display='block';
    menu1.style.background='red'
}
menu1.onmouseleave=function () {
    item1.style.display='none';
    menu1.style.background='#4b4b4b'
}
