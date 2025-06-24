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

var leave = document.querySelector(".leave");
leave.addEventListener("click",function(){
    document.querySelector(".login-box").style.display = "none";
})

        // 轮播图功能
        var banner_img = document.getElementsByClassName("banner-img");
        var index = 0;
        var timer = null;
        var dot_list = document.getElementsByClassName("btn-circle");
        var isHovering = false;

        // 初始化轮播状态
        dot_list[index].style.backgroundColor = "#757575";

        function startCarousel() {
            clearInterval(timer);
            timer = setInterval(function() {
                if (!isHovering) {
                    index++;
                    if (index >= banner_img.length) {
                        index = 0;
                    }
                    updateSlide();
                }
            }, 4000);
        }

        // 更新轮播状态
        function updateSlide() {
            for (var i = 0; i < banner_img.length; i++) {
                banner_img[i].style.opacity = 0;
            }
            banner_img[index].style.opacity = 1;
            
            for (var i = 0; i < dot_list.length; i++) {
                dot_list[i].style.backgroundColor = "#b0b0b0";
            }
            dot_list[index].style.backgroundColor = "#757575";
        }

        // 启动轮播
        startCarousel();

        // 点击左右切换按钮
        var btn_left = document.getElementsByClassName("box-left");
        var btn_right = document.getElementsByClassName("box-right");

        btn_left[0].addEventListener("click", function() {
            clearInterval(timer);
            index--;
            if (index < 0) {
                index = banner_img.length - 1;
            }
            updateSlide();
            startCarousel();
        });

        btn_right[0].addEventListener("click", function() {
            clearInterval(timer);
            index++;
            if (index >= banner_img.length) {
                index = 0;
            }
            updateSlide();
            startCarousel();
        });

        // 点击小圆点切换图片
        for (var i = 0; i < dot_list.length; i++) {
            dot_list[i].addEventListener("click", function(event) {
                clearInterval(timer);
                var dotlist = Array.from(dot_list);
                index = dotlist.indexOf(event.target);
                updateSlide();
                startCarousel();
            });
        }

        // 放大镜效果优化
        function initMagnifier() {
            const banner_box = document.querySelector(".banner-box");
            const zoom = document.querySelector(".zoom");
            const bigImgContainer = document.querySelector(".big-img");
            const bigImg = bigImgContainer.querySelector("img");
            // 尺寸预计算
            const BANNER_WIDTH = banner_box.offsetWidth;
            const BANNER_HEIGHT = banner_box.offsetHeight;
            const ZOOM_SIZE = zoom.offsetWidth;
            const BIG_IMG_RATIO = 2; // 放大倍率
            function updateMagnifier(e) {
                const rect = banner_box.getBoundingClientRect();
                let x = e.clientX - rect.left - ZOOM_SIZE/2;
                let y = e.clientY - rect.top - ZOOM_SIZE/2;
                // 边界限制
                x = Math.max(0, Math.min(x, BANNER_WIDTH - ZOOM_SIZE));
                y = Math.max(0, Math.min(y, BANNER_HEIGHT - ZOOM_SIZE));
                // 更新遮罩层位置
                zoom.style.transform = `translate(${x}px, ${y}px)`;
                // 计算大图偏移量
                const moveX = -x * BIG_IMG_RATIO;
                const moveY = -y * BIG_IMG_RATIO;
                bigImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(${BIG_IMG_RATIO})`;
            }
            // 添加悬停事件
            banner_box.addEventListener('mouseenter', () => {
                isHovering = true;
                clearInterval(timer);
                // 同步当前轮播图
                bigImg.src = banner_img[index].querySelector('img').src;
                zoom.style.opacity = '1';
                bigImgContainer.style.opacity = '1';
                banner_box.addEventListener('mousemove', updateMagnifier);
            });
            banner_box.addEventListener('mouseleave', () => {
                isHovering = false;
                zoom.style.opacity = '0';
                bigImgContainer.style.opacity = '0';
                banner_box.removeEventListener('mousemove', updateMagnifier);
                startCarousel();
            });
        }
        
        // 初始化放大镜
        initMagnifier();
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
