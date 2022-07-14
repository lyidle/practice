window.onload=(function(){
    // 克隆第一张图片添加到最后一张图片的后面
    let roll=document.querySelector('.roll'),
    clone_img=roll.firstElementChild.cloneNode()
    roll.appendChild(clone_img)
    // 获取个数
    let roll_img=document.querySelectorAll('.roll img'),
    // 底部按钮
    radio=document.querySelector('.roll_radio'),
    // 左右按钮
    lt=document.querySelector('.roll_left_button'),
    gt=document.querySelector('.roll_right_button'),
    roll_max=document.querySelector('.roll_max'),
    // 图片索引
    index=0,
    // 开关
    swch=true,
    // 过渡时间
    time_roll=1,
    play_time=1
    //容器自适应
    roll.style.width=100*roll_img.length+'%'
    for (let i = 0; i < roll_img.length; i++) {
        // 图片自适应
        roll_img[i].style.width=100/roll_img.length+'%'
        // 遍历图片自适应和底部按钮生成
        if(i<roll_img.length-1){
            radio_li=document.createElement('div'),
            radio_li.innerHTML=i+1
            radio.appendChild(radio_li)
        }
    }
    // 向左移动
    function play(){
        if (!swch) {
            return
        }
        index++
        roll.style.left='-100'*index+'%'
        roll.style.transition=`left ${time_roll}s`
        if(index===Number(roll_img.length-1)){
            roll.style.left='-100'*index+'%'
            index=0
            setTimeout(() => {
                roll.style.left='0'
                roll.style.transition='0s'
            }, time_roll*1000);
        }
        swch=false
        setTimeout(() => {
            swch=true
        }, time_roll*1000);
        radio_()
    }
    // 左按钮
    lt.onclick=()=>{
        if (!swch) {
            return
        }
        if(index===0){
            roll.style.left='-100'*Number(roll_img.length-1)+'%'
            roll.style.transition='0s'
            index=Number(roll_img.length-2)
            setTimeout(() => {
                roll.style.left='-100'*index+'%'
                roll.style.transition=`left ${time_roll}s`
            }, 0);
        }
        else{
            index--
            roll.style.left='-100'*index+'%'
            roll.style.transition=`left ${time_roll}s`
        }
        swch=false
        setTimeout(() => {
            swch=true
        }, time_roll*1000);
        radio_()
    }
    // 右按钮
    gt.addEventListener('click',play)
    // 轮播
    let roll_play=setInterval(play, play_time*1000);
    // 移入暂停
    roll_max.onmouseenter=()=>{clearInterval(roll_play)}
    // 移出播放
    roll_max.onmouseleave=()=>{clearInterval(roll_play),roll_play=setInterval(play, time_roll*1000);}
    // 按钮激活
    let radio_index=document.querySelectorAll('.roll_radio>div')
    function radio_(){
        for (let i = 0; i < roll_img.length-1; i++) {
            if(i===index){
                radio_index[index].classList.add("roll_radio_on")
            }else{
                radio_index[i].classList.remove("roll_radio_on")
            }
        }
    }
    // 底部按钮点击
    for (let i = 0; i < roll_img.length-1; i++) {
        radio_index[i].onclick=()=>{
            index=i
            roll.style.left='-100'*index+'%'
            roll.style.transition=`left ${time_roll}s`
            radio_()
        }
    }
    radio_()
}())