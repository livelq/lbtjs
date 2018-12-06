var main = document.getElementById("main");
// var picture = document.getElementById("picture");
// var li1 = picture.getElementsByTagName("li");
var mypic = document.getElementById("mypic");


var Left = document.getElementById("left");
var right = document.getElementById("right");
var list = document.getElementById("list");
var li = list.getElementsByTagName("li");
li[0].style.backgroundColor = "red";
var currentPage = 0;

//定时播放函数
var timer = setInterval(func, 10000);
function func() {
    currentPage++;
    changePic();
}

 function changePic() {
    if (currentPage == 8) {
        currentPage = 0;
    }
    if (currentPage == -1) {
        currentPage = 8;
    }
    //更换图片
    //"img/1.jpg"
    // picture.src = "img/" + currentPage + ".jpg";
    mypic.src = "E:/web/代码/js/js实现轮播图/图片/" + currentPage +".jpg";
    //将所有的小圆点颜色清空
    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "#aaa";
    }
    //改变对应小圆点为红色
    li[currentPage].style.backgroundColor = "red";
}


//鼠标进入
main.addEventListener("mouseover", func1, false);//事件，执行函数，默认
function func1() {
    //停止定时器
    clearInterval(timer);
    //显示左右按钮
    left.style.display = "block";
    right.style.display = "block";
}
//鼠标移出
main.addEventListener("mouseout", func2, false);
function func2() {
    //重启定时器
    timer = setInterval(func, 1000);
    //隐藏左右按钮
    left.style.display = "none";
    right.style.display = "none";
}
//点击左右按钮
left.addEventListener("click", func3, false);
function func3() {
    currentPage--;
    changePic();
}
//移进
left.onmouseover = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.6)"
}
//移出
left.onmouseout = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.2)";
}
right.addEventListener("click", func4, false);
function func4() {
    currentPage++;
    changePic();
}
right.onmouseover = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.6)";
}
right.onmouseout = function() {
    this.style.backgroundColor = "rgba(0,0,0,0.2)";
}
//进入小圆点
for (var j = 0; j < li.length; j++) {
    li[j].onmouseover = function() {
    currentPage = parseInt(this.innerHTML) - 1;
    changePic();
    };
}



