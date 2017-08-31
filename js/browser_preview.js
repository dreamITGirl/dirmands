function getWindowSize() {//获取浏览器可见区域高度
    var client = {
        y:0
    };
    if(typeof document.compatMode != 'undefined' && document.compatMode == 'CSS1Compat') {
        client.y = document.documentElement.clientHeight;
    } else if(typeof document.body != 'undefined' && (document.body.scrollLeft || document.body.scrollTop)) {
        client.y = document.body.clientHeight;
    }
    return client;
}
function firstLoad(){//首次加载页面的时候
    var size = getWindowSize();
    var browseHeight=size.y;
    var getDiv=document.getElementById('test').style.height;
    var getDiv=getDiv.replace("px","");
    var marginDistance=parseInt((browseHeight-getDiv)/2);
    var marginDistance=marginDistance.toString()+"px";
    document.getElementById('test').style.marginTop=marginDistance;
}
function getsize(){//浏览器窗口大小改变的时候
    var size = getWindowSize();
    var browseHeight=size.y;
    var getDiv=document.getElementById('test').style.height;
    var getDiv=getDiv.replace("px","");
    var marginDistance=parseInt((browseHeight-getDiv)/2);
    var marginDistance=marginDistance.toString()+"px";
    document.getElementById('test').style.marginTop=marginDistance;
}
