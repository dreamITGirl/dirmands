//banner 部分图片轮播
$(()=>{
var imgs=[
    "images/banner_3.jpg",
    "images/banner_2.jpg",
    "images/banner_1.jpg",
    "images/banner_4.jpg",
    "images/banner_5.jpg"
];
var $ulList=$("#imglist"),
    $ulindex=$("#indexs"),
    LIWIDTH=1930,
    moved=0,
    interval=500,
    WAIT=interval+2500,
    timer=null;
var html="",i=1,indexhtml="";
for(var src of imgs){
    html+=`<li>
   <a href="#" target="_blank"><img src="${src}" class="img-responsive"></a></li>`;
    indexhtml+=`<li></li>`;
}
    html+=`<li><a href="#" target="_blank">
            <img src=${imgs[0]} class="img-responsive">
        </a></li>`;
$ulList.append(html).css("width",(imgs.length+1)*LIWIDTH);
$ulindex.append(indexhtml).children()
    .first().addClass("hovers");
//启动周期性定时器
function player(){
    timer=setInterval(()=>{
      moved++;
      $ulList.animate({
          left:-moved*LIWIDTH
      },interval,()=>{
          if(moved==5){
              moved=0;
              $ulList.css("left",0);
          }
       $ulindex.children(":eq("+moved+")").addClass("hovers")
           .siblings().removeClass("hovers");
      })
    },WAIT)
}
player();
//当鼠标进入时，清空定时器
$("#banner").hover(()=>{
    clearInterval(timer);
    timer=null;
},
    ()=>player()
);
//为下标绑定单击事件
$ulindex.on("click","li",(e)=>{
    $tar=$(e.target);
    moved=$tar.index();
    $ulList.stop(true).animate({
       left:-moved*LIWIDTH
    },
     interval,
        ()=>{
            $tar.addClass("hovers").siblings().removeClass("hovers")
        }
    )
});
});
//轮播和左右图片的移动都是ul在移动

//链接部分背景图轮播效果
$(()=>{
var p=$(".slider_bg>p");
var i=0;
var timer=setInterval(()=>{
 i++;
p.attr("style","background:url(images/diy_"+i+".jpg) no-repeat;");
    if(i===3)
    i=0
},1000);
});
//连接部分右侧图像HOVER时闪现的效果
$(()=>{
$(".second_conn img").hover(function(){
    if(!$(this).hasClass("flash"))
    $(this).addClass("flash");
    else
    $(this).removeClass("flash");
});
});
//系统产品的轮播
$(()=>{
 $("#slider_main").on("mouseenter","li", function(e) {
     e.preventDefault();
     var i = $(e.target).index();
     var tar = $(e.target).parent().parent().children();//#slider_main中的子内容
     var $tarcld = $(tar[i += 1]);
     if (i < 7) {
         if ($tarcld.hasClass("hiden")) {
             $tarcld.removeClass("hiden");
             $(e.target).addClass("active");
             $(e.target).siblings().removeClass("active");
             $tarcld.siblings().addClass("hiden");
         }
     }
 })
});
// 鼠标移动到图片时透明度改变
$(()=>{
$("#slider_main").on("mouseenter","img",function(e){
    e.preventDefault();
    $(e.target).css("opacity",0.90);
});
$("#slider_main").on("mouseleave","img",function(e){
    e.preventDefault();
    $(e.target).css("opacity",1);
});
});

//绑定左右按钮事件
var LIWIDTH=280;


//专门负责检查并修改两个a的状态

var LIWIDTH=280,
    OFFSET=15,
    moved=0,
    ullist=$(".upwalk>ul");
    console.log(1);
        $(".prev").addClass("hoverse");
        $(".prev").click(function(){
         if(this.indexOf("hoverse")==-1){
             moved++;
             ullist.css("left",-moved*LIWIDTH+OFFSET+"px");
             checkA();
         }
    });
$(".next").click(function(){

    if(this.indexOf("hoverse")==-1){
        moved--;
        ullist.css("left",-moved*LIWIDTH+OFFSET+"px");
    }
    checkA();
})
function checkA(){
    if(moved==0)
        $(".next").className="prev hoverse";
    else if(ullist.children().length-moved==4)
        $(".next").className="next hoverse";
    else{
        $(".prev").className="prev";
        $(".next").className="next";
    }
}

//店面切换效果
$("#locates").on("mouseenter","a",function(e){
    e.preventDefault();
    var tar=$(e.target).parent().parent().next();
    var i=$(e.target).parent().index();
    var div=$(tar.children()[i+1]);
    if(div.hasClass("hiden")){
        div.removeClass("hiden").siblings().addClass("hiden");
        $(".mapcities>img").removeClass("hiden");
    }
});
