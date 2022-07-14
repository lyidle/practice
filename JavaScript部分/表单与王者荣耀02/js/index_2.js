// 左边动画
(function(){
    let on=document.querySelectorAll('.title li'),
    img=document.querySelectorAll('.switch ul')
    // 绿色下划线
    on[0].classList.add('title_left_on')
    // 第一个活动显示
    img[0].style.display='flex'
    for (let i = 0; i < on.length; i++) {
        on[i].onmouseover=function(){
            for (let i = 0; i < on.length; i++) {
                // 遍历  移除所有的class名是title_left_on的li
                on[i].classList.remove('title_left_on')
                // 所有活动隐藏
                img[i].style.display='none'
            }
            // 当前li添加class名为title_left_on
            on[i].classList.add('title_left_on')
            // 对应活动显示
            img[i].style.display='flex'
        }
    }
})();