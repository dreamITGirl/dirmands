$(()=>{
    $("#footer").load("footer.html");
});
//用户登录
$(".onlogin").click(function(){
    var uname=$("#uname").val();
    var upwd=$("#upwd").val();
    var telPattern=/^((13[0-9])|(15([0-3]|[5-9]))|(18[0,5-9])|(14[5|7]))\d{8}$/;
   if(!telPattern.test($("#uname").val())){
       alert("用户名不正确，请重新输入")
   }
    var pwdPattern=/^([0-9]{1,}|[a-z]{1,}){6,20}$/;
   if(!pwdPattern.test($("#upwd").val())){
       alert("密码错误，请检查")
   }
    $.ajax({
        type:"POST",
        url:"/userLogin",
        data:{uname:uname,upwd:upwd},
        success:function(data){
           if(data.code>0){
             alert(data.msg);
               sessionStorage.setItem("uid",data.uid);
               location.href="/usercenter.html";
           }else{
               alert(data.msg);
           }
        }
    })
})
