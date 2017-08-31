$(()=>{
    $("#footer").load("footer.html");
});
//接受服务器端数据，验证密码
$(".onlogin").click(function() {
    var u = $("#uname").val();
    var p = $("#upwd").val();
    var telPattern=/^((13[0-9])|(15([0-3]|[5-9]))|(18[0,5-9])|(14[5|7]))\d{8}$/;
    if(!telPattern.test($("#uname").val())){
        alert("用户名格式不正确，请重新输入");
        return;
    }

    var pwdPattern=/^([0-9]{1,}|[a-z]{1,}){6,20}$/;
    if(!pwdPattern.test($("upwd").val())){
        alert("密码格式有误，请重新设置");
        return;
    }
    if($("#againUpwd").val()!==$("#upwd").val()){
        alert("两次输入的密码不一致，请重新输入");
        return;
    }
    //如果用户名己存在禁止提交
   if($("h6.error").length>0){
       alert("用户名已存在,禁止提交");
       return ;
   }
    $.ajax({
        type: "POST",
        url: "/reg.do",
        data: {uname:u, upwd: p},
        success: function (data) {
            if (data.code > 0) {
                alert(data.msg);
                location.href = "login.html"
            }
        },
        error: function () {
            alert("网络故障，请检查网络");
        }
    })
});
//功能点二:判断注册的用户名是否存在
uname.onblur=function(){
    var u=this.value;
    $.ajax({
        url:"/existsuname",
        data:{uname:u},
        success:function(data){
            if(data.code==1){
                $("#tipMsg").html(data.msg);
                $("#tipMsg").removeClass("error");
            }else{
                $("#tipMsg").html(data.msg);
                $("#tipMsg").addClass("error");
            }
        }
    })
};


