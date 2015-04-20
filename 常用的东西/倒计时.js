
//京东倒计时
//  当秒数到达0，将分钟减一，将秒数变成59    如果分钟的数字也变成零，把小时减一，把分钟变成59 小时/分钟/秒数都是0之后，停止--
//什么时候执行倒计时？至少要等页面出来之后，在开始倒计时
//在window.onload之中写代码，会在整个页面加载之后才会执行
window.onload = function () {
    //1 获取元素 -- 的到的是父元素
    var father = document.getElementById("timeout");
    var h = father.children[0];
    var m = father.children[2];
    var s = father.children[4];
    //2 每隔1秒，修改时分秒的数字
    setInterval(function(){
        //获取分和小时
        var mm = parseInt(m.innerText);
        var hh = parseInt(h.innerText);
        //3 先修改秒
        var ss = parseInt(s.innerText);

        //当时分秒全都等于0
        if(hh == 0 && mm == 0 && ss == 0){
            //倒计时结束 -- 京东自己处理
        }

        //自减
        ss--;
        //当秒数小于0的时候，从分钟哪里的过来下一个分钟倒计时，把分-1，把秒变成59
        if(ss < 0){
            ss = 59;
            mm--;
        }
        //但是当秒数低于10，会显示的不一样，把0补回来
        if(ss <10){
            ss = "0" + ss;
        }

        //判断分
        if(mm < 0){
            mm = 59;
            h--;
        }
        if(mm <10){
            mm = "0" + mm;
        }

        if(hh <10){
            hh = "0" + hh;
        }


        //重新赋值
        h.innerText = hh;
        s.innerText = ss;
        m.innerText = mm;
    },1000);
}