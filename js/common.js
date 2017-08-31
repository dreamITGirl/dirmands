"use strict";
  //购物车鼠标悬停事件
$(function(){
    var shopCart = document.querySelector("div.shoppcart");
    shopCart.onmouseover = function () {
        this.nextElementSibling.style.display = "block";
    };
    shopCart.onmouseout = function () {
        this.nextElementSibling.style.display = "none";
    }
}())
   //手机菜单点击事件

      var btn=document.querySelector("#btns");
     btn.onclick=function(){
         var uls=this.parentNode.previousElementSibling;
         if(uls.className!=="")
         uls.className="";
         else uls.className="rightlist"
     };

//菜单目录的点击事件
(function(){
   var lis=document.querySelectorAll("#nav>ul.catogry>li");
    for(var i= 0,len=lis.length;i<len;i++){
        lis[i].onmouseover=function(){
            var divs=this.lastElementChild;
            divs.className="hidebox";
        };
        lis[i].onmouseout=function(){
            var divs=this.lastElementChild;
          divs.className="hiden";
        }
    }

})();
//为NAV里的小列表帮设定事件函数
  // 1、为钻石列表左侧添加动态效果
$(".firstring a").hover(function(e) {
        e.preventDefault();
        var tar = $(e.target);
        var i = tar.parent().index();
        var imglist = tar.parent().parent().prev().children();
        var img = $(imglist[i]);
        if (img.hasClass("hiden")) {
                img.removeClass("hiden");
                img.addClass("show");
            img.siblings().removeClass("show").addClass("hiden");
        }
    }
);
  //右侧效果
 $(".rightpart>ul a").hover((e)=>{
     e.preventDefault();
     var tar = $(e.target);
     var i = tar.parent().index();
     var imglist = tar.parent().parent().parent().children();
     var img = $(imglist[i]);
     if (img.hasClass("hiden")) {
         img.removeClass("hiden");
         img.addClass("show");
         img.siblings().removeClass("show").addClass("hiden");
     }

 });
//实体店效果设计
   //效果一
    $(".locate>li>a").mouseover((e)=>{
        e.preventDefault();
        var $tar=$(e.target);
        var LIWIDTH=65,
            i=$tar.parent().index();
        var $p=$tar.parent().parent().next();
        var n=(i+1)*LIWIDTH+30.109;
        if(i>=1){
            $p.css("left",n+"px");
        }else{
           $p.css("left","9%");
        }
        $p.css("transition","all .5s linear");
    });
 //效果二
  var timer=setInterval((e)=>{
  var tars=$("#dmslider a");
      if($(tars[0]).hasClass("hiden")){
        $(tars[0]).removeClass("hiden").addClass("show");
        $(tars[0]).siblings().addClass("hiden").removeClass("show");
      }else{
          $(tars[0]).addClass("hiden").removeClass("show");
          $(tars[0]).siblings().removeClass("hiden").addClass("show");
      }
},2000)




