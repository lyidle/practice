let box=document.querySelectorAll('.box')
box.forEach((val,i)=>{
    // 每个都设置开关 false
    box[i].bool=false
    box[i].onclick=()=>{
        for (let j = 0; j < box.length; j++) {
            // 跳过自身
            if(i===j) continue
            // 除自身外开关都复原
            box[j].bool=false
            // 其他的都移除类名
            box[j].classList.remove('cont_toggle')
        }
        // 展开收回 ture 移除类名  false 添加类名
        box[i].bool ? box[i].classList.remove('cont_toggle') : box[i].classList.add('cont_toggle')
        // 每点击一下取反
        box[i].bool=!box[i].bool
    }
})