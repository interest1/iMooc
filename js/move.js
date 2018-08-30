function move(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        //取计时过程中的当前值
        var flag=true;
        for(var attr in json){
            var cur=0;
            if(attr=='opacity'){
                cur=Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                cur=parseInt(getStyle(obj,attr));
            }
            //2计算速度
            var speed=(json[attr]-cur)/8;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //3检测停止
            if(cur!=json[attr]) {
                flag = false;
            }
            if(attr=='opacity'){
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }else{
                obj.style[attr]=cur+speed+'px';
            }
        }
        //4如果所有属性的动画都到头了
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },30)
}
// move(obj,{attr1:sign1, attr2:sign2},fn)
function getStyle(obj,attr) {
    if(obj.currentStyle){
        return document.defaultView.getComputedStyle(obj, null)[attr];//IE
    }else{
        return getComputedStyle(obj,false)[attr];//其他
    }
}