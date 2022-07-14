let rollImg=document.querySelectorAll('.roll-img img'),
toggle=document.querySelector('.roll-toggle'),
// 创建个仓库存储按钮  弄完后再添加到toggle里面
toggleFragment=document.createDocumentFragment(),
btnLeft=document.querySelector('.roll-btn-left'),
btnRight=document.querySelector('.roll-btn-right'),
roll=document.querySelector('.roll-img'),
// 过渡时间
timer=1,
// 图片索引
index=0,
// 开关
toggle_=false,
radio=null,
maxRoll=document.querySelector('.max-roll')
// 克隆第一张图
imgClone=rollImg[0].cloneNode()
// 找到父级添加到最后一张图的后面
rollImg[0].parentNode.appendChild(imgClone)
// 获取到的数据是静态的再获取一下就有最后一张了
// 为了方便就不用重新再获取了  
// 根据图片数量生成底部按钮数量
rollImg.forEach((val,i)=>{
    // 创建div元素
    let div=document.createElement('div')
    // 添加数字 i从0开始
    div.innerHTML=i+1
    // 添加到仓库中
    toggleFragment.appendChild(div)
})
// 把仓库中的内容添加到toggle里面
toggle.appendChild(toggleFragment)
radio=document.querySelectorAll('.roll-toggle div')
// 容器自适应
// 重新获取  
rollImg=document.querySelectorAll('.roll-img img')
roll.style.width=(rollImg.length)*100+'%'
rollImg.forEach((vla,i)=>{
    rollImg[i].style.width=100/(rollImg.length)+'%'
})
/*
    js轮播思路
    在最后一张时移动到克隆的图片    紧跟着移动到第一张没有过渡
    在第一张时瞬间移动到克隆图      紧跟着移动到最后一张图片有过渡
*/
// 上一张
let palyRoll=btnRight.onclick=()=>{
    // flase 不执行return
    if(toggle_) return
    index++
    play()
    // 执行完后true  执行return
    toggle_=true
    // 过渡时间完后再复原开关
    setTimeout(()=>{toggle_=false},timer*1000)
}

btnLeft.onclick=()=>{
    if(toggle_) return
    index--
    play()
    toggle_=true
    setTimeout(()=>{toggle_=false},timer*1000)
}

function play(){
    roll.style.transition='left 1s'
    roll.style.left=-100*index+'%'
    // 最后一张时
    if(index===rollImg.length-1){
        // 移动到克隆图
        roll.style.left=-100*index+1+'%'
        // 索引更新为第一张
        index=0
        // 延迟过渡时间到第一张没有过渡
        setTimeout(()=>{
            roll.style.left=-100*0+'%'
            roll.style.transition='left 0s'
        },timer*1000)
    }
    // 第一张时
    if(index===-1){
        // 没有过渡移动到克隆图
        roll.style.transition='left 0s'
        roll.style.left=-100*(rollImg.length-1)+'%'
        // 索引更新为最后一张图的索引
        index=rollImg.length-2
        // 移动到最后一张
        setTimeout(() => {
            roll.style.left=-100*(rollImg.length-2)+'%'
            roll.style.transition='left 1s'
        }, timer*0);
    }
    radio_()
}
// 对应按钮激活
function radio_(){
    radio.forEach((val,i)=>{
        if(i===index){
           radio[i].classList.add('only')
        }else{
            radio[i].classList.remove('only')
        }
    })
}
radio_()

// 点击按钮
radio.forEach((val,i)=>{
    radio[i].onclick=()=>{
        // flase 不执行return
        if(toggle_) return
        roll.style.transition='left 1s'
        index=i
        radio[i].classList.add('only')
        roll.style.left=-100*index+'%'
        radio_()
        toggle_=true
        setTimeout(()=>{toggle_=false},timer*1000)
    }
})

// 自动轮播
let play_=setInterval(palyRoll,timer*1000)
// 网页失去焦点停止获取焦点播放
// 失去焦点不执行
if(!toggle_){
    maxRoll.onmouseleave=()=>{
        clearInterval(play_)
        play_=setInterval(palyRoll,timer*1000)
    }
    maxRoll.onmouseenter=()=>{
        clearInterval(play_)
    }
}
window.onblur=()=>{
    toggle_=true
    console.log(toggle_);
    clearInterval(play_)
}
window.onfocus=()=>{
    toggle_=false
    console.log(toggle_);
    clearInterval(play_)
    play_=setInterval(palyRoll,timer*1000)
}
