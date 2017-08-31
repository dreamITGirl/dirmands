//加载网页底部
$("#footer").load("footer.html");

//分类按钮呈现下拉菜单样式
$(()=>{
    $(".select_list").on("click","a>img",function(e){
        e.preventDefault();
        var tar=$(e.target).attr("src");//当前照片的地址
        if(tar=="images/select_down.png"){
            $(e.target).attr("src","images/select.png");
            $(e.target).parent().removeClass("hovers");
            $(e.target).parent().next().addClass("hide");
        }
        else{
            $(e.target).attr("src","images/select_down.png");
            $(e.target).parent().addClass("hovers");
            $(e.target).parent().next().removeClass("hide");
        }
    })
});
//为筛选框添加效果
$(()=>{
    $(".searchs").click(function(){
        var html=$(this).html();
        console.log(html);
        if(html=="展开高级搜索"){
            $(this).siblings().removeClass("hide");
            $(this).css("top","96%");
            $(this).html("收起高级搜索")
        }else{
            $(".searchsa ul:gt(2)").addClass("hide");
            $(this).html("展开高级搜索");
            $(this).css("top","88%");
        }
})
});
//为sort里的li绑定点击事件
$(()=>{
$(".sort").on("click","li",function(e){
    e.preventDefault();
    console.log($(this));
    var i=$($(this).children().children());
    console.log(i);
    if($(this).hasClass("clickedli")){
        $(this).removeClass("clickedli");
        i.removeClass("clickedi");
    }else{
        $(this).addClass("clickedli");
        $(this).siblings().removeClass("clickedli");
        i.addClass("clickedi");
        $(this).siblings().children().children().removeClass("clickedi")
    }
})});
//为商品做修饰效果
$(".drm_detail").on("mouseenter","dt",function(e){
        e.preventDefault();
        $(this).parent().css("border-bottom", "4px solid #FEB8AE");
    var ishow= $(this).children().children().first();
    console.log(ishow);
    var ishown=ishow.next();
    var ishowp=ishow.prev();
    if(ishown.hasClass("hide")){
       ishow.addClass("hide");
        ishown.removeClass("hide");
    }
});
$(".drm_detail").on("mouseleave","dt",function(e){
    e.preventDefault();
    $(this).parent().css("border-bottom", "1px solid #ddd");
    var ishow= $(this).children().children().first();
    console.log(ishow);
    var ishown=ishow.next();
   // var ishowp=ishow.prev();
    if(!ishown.hasClass("hide")){
        ishow.removeClass("hide");
        ishown.addClass("hide");
    }
})