//先获取元素对象(滑动门内容)
var all_ul = document.getElementsByClassName("nav-list-all");
//获取到所有鼠标悬停的li元素
//querySelectorAll 返回的是一个静态的 NodeList
var all_li = document.querySelectorAll(".nav-shop>li>a");
//对所有li中的a元素添加事件监听，监听鼠标停在哪个li上
for(var i=0;i<all_li.length;i++){
    all_li[i].addEventListener("mouseover",function(event){
        //获取当前悬停的 a 元素
        var current_li = event.target;
        // 将元素集合转为数组，以至于可以使用数组的方法
        var list_arr = Array.from(all_li);
        //找到当前悬停的 a 元素的索引
        var li_a_index = list_arr.indexOf(current_li);
        //先将所有ul元素的opcity属性设置为0
        for(var j=0;j<all_ul.length;j++){
            all_ul[j].style.opacity = 0;
        }
        //从all_ul中获取到对应的ul元素,并修改opcity属性
        all_ul[li_a_index].style.opacity = 1;
    })
}


//搜索区域的鼠标悬停在搜索按钮上，输入框颜色变亮
var search_btn = document.getElementById("search-btn");
var search_input = document.getElementById('search-input');
search_btn.addEventListener("mouseover",function(){
    // 动态添加css的class属性值
    search_input.classList.add("active-input")
    search_btn.classList.add("active-button")
})
//监听鼠标移出搜索按钮，输入框颜色变回原色
search_btn.addEventListener("mouseleave",function(){
    search_input.classList.remove("active-input")
    search_btn.classList.remove("active-button")
})
//对搜索区域的输入框添加鼠标悬停事件监听
search_input.addEventListener("mouseover",function(){
    search_input.classList.add("active-input")
    search_btn.classList.add("active-button")
})
//监听鼠标移出搜索按钮，输入框颜色变回原色
search_input.addEventListener("mouseleave",function(){
    search_input.classList.remove("active-input")
    search_btn.classList.remove("active-button")
})
//搜索框获取焦点事件
search_input.addEventListener("focus",function(){
    search_input.classList.add("fouce-input")
    search_btn.classList.add("fouce-button")
})
//搜索框失去焦点事件
search_input.addEventListener("blur",function(){
    search_input.classList.remove("fouce-input")
    search_btn.classList.remove("fouce-button")
})

//模拟搜索框内容的变化
var search_list_text = ["小米手机","手机换新","空调","小米手环9 Pro","风扇","扫地机器人晾衣架","油烟机","笔记本"];
// 定时切换搜索框的内容
var search_index = 0;
setInterval(function(){
    search_index++;
    if(search_index>=search_list_text.length){
        search_index = 0;
    }
    search_input.placeholder= search_list_text[search_index];
},3000)


//轮播图
var banner_img = document.getElementsByClassName("banner-img");
var index = 0;
//通过定时器周期切换图片
//定时器id
var timer;
//获取到小圆点元素
var dot_list = document.getElementsByClassName("btn-circle");;
//进来时第一个圆点是亮的
dot_list[index].style.backgroundColor = "rgb(213,213,213)";
function Interval(){
    timer = setInterval(function(){
    index++;
    if(index>=banner_img.length){
        index = 0;
    }
    //先将所有图片的opacity属性设置为0--不显示
    for(var i=0;i<banner_img.length;i++){
        banner_img[i].style.opacity = 0;
    }
    //将当前图片的opacity属性设置为1-显示
    banner_img[index].style.opacity = 1;
    // 还原小圆点的样式
    for(var i=0;i<dot_list.length;i++){
        dot_list[i].style.backgroundColor = "#33333382";
    }
    // 更改小圆点的样式
    dot_list[index].style.backgroundColor = "rgb(213,213,213)";
    },4000)
}
Interval();


//点击左右切换按钮切换图片
var btn_left = document.getElementsByClassName("box-left");
var btn_right = document.getElementsByClassName("box-right")
btn_left[0].addEventListener("click",function(){
    // 清空定时器
    clearInterval(timer);
    // 切换图片
    index--;
    if(index<0){
        index = banner_img.length-1;
        }
        //先将所有图片的opacity属性设置为0
        for(var i=0;i<banner_img.length;i++){
            banner_img[i].style.opacity = 0;
        }
        banner_img[index].style.opacity = 1;
        for(var i=0;i<dot_list.length;i++){
        dot_list[i].style.backgroundColor = "#33333382";
        }
        // 更改小圆点的样式
        dot_list[index].style.backgroundColor = "rgb(213,213,213)";
        // 重新启动定时器
        Interval();
})
btn_right[0].addEventListener("click",function(){
    // 清空定时器
    clearInterval(timer);
    // 切换图片
    index++;
    if(index>=banner_img.length){
            index = 0;
        }
        //先将所有图片的opacity属性设置为0
        for(var i=0;i<banner_img.length;i++){
            banner_img[i].style.opacity = 0;
        }
        banner_img[index].style.opacity = 1;
        for(var i=0;i<dot_list.length;i++){
        dot_list[i].style.backgroundColor = "#33333382";
        }
        // 更改小圆点的样式
        dot_list[index].style.backgroundColor = "rgb(213,213,213)";
        // 重新启动定时器
        Interval();
})




// 点击小圆点切换图片
for(var i=0;i<dot_list.length;i++){
    dot_list[i].addEventListener("click",function(event){
        // 清空定时器
        clearInterval(timer);
        // 获取当前点击的小圆点的索引
        var current_dot = event.target;
        // 将小圆点的元素集合装为数组
        var dotlist = Array.from(dot_list);
        // 获取当前点击的小圆点的索引
        index= dotlist.indexOf(current_dot);
        // 切换图片
        //先将所有图片的opacity属性设置为0
        for(var i=0;i<banner_img.length;i++){
            banner_img[i].style.opacity = 0;
        }
        banner_img[index].style.opacity = 1;
        for(var i=0;i<dot_list.length;i++){
        dot_list[i].style.backgroundColor = "#33333382";
        }
        // 更改小圆点的样式
        dot_list[index].style.backgroundColor = "rgb(213,213,213)";
        // 重新启动定时器
        Interval();
    }) 
}



// 对轮播图片进行监听,当鼠标移入时停止切换,鼠标移出时开始切换
// 获取轮播图父容器
var bannerBox = document.querySelector(".banner-box");

// 鼠标移入暂停
bannerBox.addEventListener("mouseenter", function() {
    clearInterval(timer);
});

// 鼠标移出恢复
bannerBox.addEventListener("mouseleave", function() {
    clearInterval(timer); // 先清除旧定时器
    Interval();
});


// ///* 动态替换商品列表 */
// 获取所有选项卡元素
var goods_list = document.querySelectorAll(".wear-tab li");
// 为每个选项卡添加鼠标移入事件监听器
for(var i=0; i<goods_list.length; i++){
    goods_list[i].addEventListener("mouseover", function(event){
        // 移除所有选项卡的激活状态
        for(var j=0; j<goods_list.length; j++){
            goods_list[j].classList.remove("tab-active");
        }
        // 添加当前选项卡激活状态
        var li = event.currentTarget;
        li.classList.add("tab-active");
        // 获取当前选项卡的索引
        var list_arr = Array.from(goods_list);
        var li_index = list_arr.indexOf(li);
        // 获取耳机和穿戴区域元素
        var eye = document.querySelector(".eye-po");
        var wear = document.querySelector(".wear-po");
        if(li_index === 0) {
            // 显示耳机区域，启用鼠标事件
            eye.classList.add('active');
            eye.style.pointerEvents = 'auto';
            // 隐藏穿戴区域，禁用鼠标事件
            wear.classList.remove('active');
            wear.style.pointerEvents = 'none';
        } else if(li_index === 1) {
            // 显示穿戴区域，启用鼠标事件
            wear.classList.add('active');
            wear.style.pointerEvents = 'auto';
            // 隐藏耳机区域，禁用鼠标事件
            eye.classList.remove('active');
            eye.style.pointerEvents = 'none';
        }
    });
}



// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 默认激活耳机区域
    var eye = document.querySelector(".eye-po");
    if(eye) eye.classList.add('active');
    // 默认隐藏穿戴区域并禁用鼠标事件
    var wear = document.querySelector(".wear-po");
    if(wear) {
        wear.classList.remove('active');
        wear.style.pointerEvents = 'none';
    }
    // 初始化所有悬停元素的事件监听器
    const targets = document.querySelectorAll('.js-shadow');
    targets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            target.classList.add('js-hover-shadow');
        });
        target.addEventListener('mouseleave', () => {
            target.classList.remove('js-hover-shadow');
        });
    });
});




//底部logo来回切换
var link_img_index = 0;
setInterval(function(){
    var link_img = document.getElementsByClassName("stop-img");
    link_img_index++;
    if(link_img_index>=2)
    {
        link_img_index=0;
    }
    if(link_img_index==1)
    {
        link_img[1].classList.remove("bottom-img-hide");
        link_img[0].classList.add("bottom-img-hide");
    }
    else if(link_img_index==0)
    {
        link_img[0].classList.remove("bottom-img-hide");
        link_img[1].classList.add("bottom-img-hide");
    }
},3000)


//通过Bom对象window来监听鼠标滚轮的滚动事件
window.addEventListener('scroll',function(){
    //获取滚条距离顶部的距离
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //添加条件
    if(scrollTop>=400){
        var returnTop = document.querySelector(".return-top");
        //删除让元素隐藏的样式
        returnTop.classList.remove("right-menu-hide");
        //让上面的块往上移动,保证回顶部是最后一个元素
        var right_menu = document.querySelector(".right-menu");
        right_menu.style.top = "253px";
    }
    else{
        var returnTop = document.querySelector(".return-top");
        //添加让元素隐藏的样式
        returnTop.classList.add("right-menu-hide");
        //让上面的块往下移动,保证购物车是最后一个元素
        var right_menu = document.querySelector(".right-menu");
        right_menu.style.top = "410px";
    }
})




