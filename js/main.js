//搜索框候选
var input=$('.text');
input.focus(function () {
    $('.prepare').show();
})
input.blur(function () {
    setTimeout(function () {
        $('.prepare').hide();
    },300)

})
$('.prepare').on('click','li',function(){
    $('.text').attr('value',$(this).html())
    id=$(this).attr('id');
})
var path="//www.wenkoor.com/";
var ids=['a','b','c','d']
var hrefs=[path+"page/ktv.html",path+"page/convert.html",
    "http://www.zjuice.cn", path+"page/mouseover.html"]
$('.icon-search').click(function () {
    var index=$.inArray(id,ids);
    window.open(hrefs[index],'_blank');
})

// function search(id) {
//     console.log(id);
//     $('.icon-search').click(function () {
//         var index=$.inArray(id,ids);
//         window.open(hrefs[index],'_blank');
//     })
// }


// 二级菜单触发事件
$('.item').hover(function () {
    var index=$(this).index();
    $('.sub-menu').eq(index).show();
},function () {
    var index=$(this).index();
    $('.sub-menu').eq(index).hide();
});

// 返回顶部
var goTop=document.getElementById('goTop');
goTop.onclick=function back() {
    timer=setInterval(function () {
        if(document.documentElement.scrollTop!=0)
            document.documentElement.scrollTop-=20
        else{
            clearInterval(timer)
        }
    },10)
};
// 侧边小工具栏的显示
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


