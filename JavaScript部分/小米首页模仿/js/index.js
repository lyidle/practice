// nav里搜索框获取与失去焦点
let search_1=document.querySelector('.search_1'),
    search_2=document.querySelector('.search_2'),
    search_nav=document.querySelector('.search_nav')
search_1.onfocus=()=>{
    search_1.classList.add('search')
    search_2.classList.add('search')
    search_nav.style.display='block'
}
search_1.onblur=()=>{
    search_1.classList.remove('search')
    search_2.classList.remove('search')
    search_nav.style.display='none'
}
// 循环搜索搜索提示
let search=['全部商品','小米手机','黑鲨5','电视','红米','风扇','耳机'],
    index=0
    search_1.setAttribute('placeholder',search[0])
setInterval(() => {
    index++
    if(index===Number(search.length-1)){
        index=0
    }
    search_1.setAttribute('placeholder',search[index])
}, 2000);
// 返回顶部
let aside_bottom=document.querySelector('.aside_bottom')
window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset
    if(scrollTop>1000){
        aside_bottom.style.height='89px'
        aside_bottom.style.visibility='visible'
        aside_bottom.onclick=()=>{
        window.scroll(0,0)
        }
    }else{
        aside_bottom.style.height='0'
        aside_bottom.style.visibility='hidden'
    }
});
// 选项卡切换
// 智能穿戴
let title_2_0=document.querySelectorAll('.title_2_0'),
content_2_0=document.querySelectorAll('.content_2_0'),
// 生活电器
title_4_0=document.querySelectorAll('.title_4_0'),
content_4_0=document.querySelectorAll('.content_4_0'),
// 家电
title_2_1=document.querySelectorAll('.title_2_1'),
content_2_1=document.querySelectorAll('.content_2_1'),
// 厨房电器
title_4_1=document.querySelectorAll('.title_4_1'),
content_4_1=document.querySelectorAll('.content_4_1'),
// 智能家居
title_4_2=document.querySelectorAll('.title_4_2'),
content_4_2=document.querySelectorAll('.content_4_2'),
// 运动出行
title_4_3=document.querySelectorAll('.title_4_3'),
content_4_3=document.querySelectorAll('.content_4_3'),
// 日用百货
title_4_4=document.querySelectorAll('.title_4_4'),
content_4_4=document.querySelectorAll('.content_4_4')
// 智能穿戴
for (let i = 0; i < title_2_0.length; i++) {
    // 所有都隐藏
    content_2_0[i].style.display='none'
    // 第一个显示
    content_2_0[0].style.display='flex'
    title_2_0[i].onmouseenter=()=>{
        // 悬浮标题时
        for (let i = 0; i < title_2_0.length; i++) {
            // 所有都隐藏
            content_2_0[i].style.display='none'
            // 所有类名都移除
            title_2_0[i].classList.remove('title_on')
        }
        // 对应显示
        content_2_0[i].style.display='flex'
        // 对应添加类名
        title_2_0[i].classList.add('title_on')
    }
}
// 生活电器
for (let i = 0; i < title_4_0.length; i++) {
    // 所有都隐藏
    content_4_0[i].style.display='none'
    // 第一个显示
    content_4_0[0].style.display='flex'
    title_4_0[i].onmouseenter=()=>{
        // 悬浮标题时
        for (let i = 0; i < title_4_0.length; i++) {
            // 所有都隐藏
            content_4_0[i].style.display='none'
            // 所有类名都移除
            title_4_0[i].classList.remove('title_on')
        }
        // 对应显示
        content_4_0[i].style.display='flex'
        // 对应添加类名
        title_4_0[i].classList.add('title_on')
    }
}
// 家电
for (let i = 0; i < title_2_1.length; i++) {
    // 所有都隐藏
    content_2_1[i].style.display='none'
    // 第一个显示
    content_2_1[0].style.display='flex'
    title_2_1[i].onmouseenter=()=>{
        // 悬浮标题时
        for (let i = 0; i < title_2_1.length; i++) {
            // 所有都隐藏
            content_2_1[i].style.display='none'
            // 所有类名都移除
            title_2_1[i].classList.remove('title_on')
        }
        // 对应显示
        content_2_1[i].style.display='flex'
        // 对应添加类名
        title_2_1[i].classList.add('title_on')
    }
}
// 厨房电器
for (let i = 0; i < title_4_1.length; i++) {
    // 所有都隐藏
    content_4_1[i].style.display='none'
    // 第一个显示
    content_4_1[0].style.display='flex'
    title_4_1[i].onmouseenter=()=>{
        // 悬浮标题时
        for (let i = 0; i < title_4_1.length; i++) {
            // 所有都隐藏
            content_4_1[i].style.display='none'
            // 所有类名都移除
            title_4_1[i].classList.remove('title_on')
        }
        // 对应显示
        content_4_1[i].style.display='flex'
        // 对应添加类名
        title_4_1[i].classList.add('title_on')
    }
}
// 智能家居
for (let i = 0; i < title_4_2.length; i++) {
    // 所有都隐藏
    content_4_2[i].style.display='none'
    // 第一个显示
    content_4_2[0].style.display='flex'
    title_4_2[i].onmouseenter=()=>{
        // 悬浮标题时
        for (let i = 0; i < title_4_2.length; i++) {
            // 所有都隐藏
            content_4_2[i].style.display='none'
            // 所有类名都移除
            title_4_2[i].classList.remove('title_on')
        }
        // 对应显示
        content_4_2[i].style.display='flex'
        // 对应添加类名
        title_4_2[i].classList.add('title_on')
    }
}
// 运动出行
for (let i = 0; i < title_4_3.length; i++) {
    // 所有都隐藏
    content_4_3[i].style.display='none'
    // 第一个显示
    content_4_3[0].style.display='flex'
    title_4_3[i].onmouseenter=()=>{
        // 悬浮标题时
        for (let i = 0; i < title_4_3.length; i++) {
            // 所有都隐藏
            content_4_3[i].style.display='none'
            // 所有类名都移除
            title_4_3[i].classList.remove('title_on')
        }
        // 对应显示
        content_4_3[i].style.display='flex'
        // 对应添加类名
        title_4_3[i].classList.add('title_on')
    }
}
// 日用百货
for (let i = 0; i < title_4_4.length; i++) {
    // 所有都隐藏
    content_4_4[i].style.display='none'
    // 第一个显示
    content_4_4[0].style.display='flex'
    title_4_4[i].onmouseenter=()=>{
        // 悬浮标题时
        for (let i = 0; i < title_4_4.length; i++) {
            // 所有都隐藏
            content_4_4[i].style.display='none'
            // 所有类名都移除
            title_4_4[i].classList.remove('title_on')
        }
        // 对应显示
        content_4_4[i].style.display='flex'
        // 对应添加类名
        title_4_4[i].classList.add('title_on')
    }
}
// 用户协议
let pro_true=document.querySelector('.pro_true'),
pro_false=document.querySelectorAll('.pro_false'),
protocol=document.querySelector('.protocol'),
reg=document.querySelectorAll('.reg'),
kg=true
// 出现
protocol.style.transition='0s'
for (let i = 0; i < reg.length; i++) {
    reg[i].style.cursor='pointer'
    reg[i].onclick=()=>{
        if(!kg) return
        protocol.style.display='flex'
        setTimeout(() => {
            protocol.style.transition='.7s'
            protocol.classList.add('protocol_on')
            protocol.classList.remove('protocol_false')
        }, 0);
        kg=false
        setTimeout(() => {
            kg=true
        }, 700);
    }
}
pro_true.onclick=()=>{
    window.open('./login.html','_self')
}
// 关闭
for (let i = 0; i < pro_false.length; i++) {
    pro_false[i].onclick=()=>{
        if(!kg) return
        protocol.style.transition='.7s'
        protocol.classList.add('protocol_false')
        protocol.classList.remove('protocol_on')
        setTimeout(() => {
            protocol.style.display='none'
        }, 1000);
        kg=false
        setTimeout(() => {
            kg=true
        }, 700);
    }    
}
// 视频
let video_list_=document.querySelector('.video_list_'),
video_li=document.querySelectorAll('.video_list>li'),
video_false=document.querySelector('.video_false'),
video_play=document.querySelector('.video_play'),
video_box=document.querySelector('.video_box'),
// 视频
vieo_lis=[
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4',
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4',
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4',
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4'
]
video_list_.style.transition='0s'
// 出现
for (let i = 0; i < video_li.length; i++) {
    video_li[i].onclick=()=>{
        if(!kg) return
        video_list_.style.display='flex'
        // 其他所有都一样
        setTimeout(() => {
            video_list_.style.transition='.7s'
            video_list_.classList.add('protocol_on')
            video_list_.classList.remove('protocol_false')
            video_play.src=vieo_lis[i]
            if(i===3){
                video_box.style.height='426px'
            }else{
                video_box.style.height='550px'
            }
        }, 0);
        kg=false
        setTimeout(() => {
            kg=true
            video_play.play()
        }, 700);
    }
}
// 关闭
video_false.onclick=()=>{
    if(!kg) return
    video_list_.style.transition='.7s'
    video_list_.classList.add('protocol_false')
    video_list_.classList.remove('protocol_on')
    video_play.pause()
    setTimeout(() => {
        video_list_.style.display='none'
    }, 1000);
    kg=false
    setTimeout(() => {
        kg=true
    }, 700);
}    

// 导航悬浮
let nav2_list=document.querySelectorAll('.nav2_list'),
nav2_max=document.querySelector('.nav2_max'),
nav_2_li=document.querySelectorAll('.nav_2>ul>li'),
nav_2_ul=document.querySelector('.nav_2>ul'),
video_kg=true
nav_2_ul.onmouseenter=()=>{
    nav2_max.style.height='243px'
}
// 移入
for (let i = 0; i < nav2_list.length; i++) {
    nav_2_li[i].onmouseenter=()=>{
        for (let i = 0; i < nav2_list.length; i++) {
            nav2_list[i].style.display='none'
        }
        nav2_list[i].style.display='flex'
    }
}
// 移出
nav_2_ul.onmouseleave=()=>{
    console.log('ul');
    nav2_max.style.height='0'
}
