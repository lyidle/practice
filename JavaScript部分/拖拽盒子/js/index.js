let wrap = document.querySelector('.wrap'),
    list = document.querySelectorAll('.list'),
    // 两个小圆点的宽度
    size = list[0].offsetWidth * 2,
    // 限制大小
    wrapWidthSize=500,
    wrapHeightSize=500
// 移动盒子
// 在wrap上按下鼠标左键
wrap.onmousedown = (e) => {
    // 在document上移动 防止速度过快被甩开
    // 初始位置
    let wrapTop = wrap.offsetTop,
        wrapLeft = wrap.offsetLeft,
        // 初始高宽
        wrapHeight = wrap.offsetHeight,
        wrapWidth = wrap.offsetWidth,
        // 初始鼠标位置
        cursorY = e.clientY,
        cursorX = e.clientX,
        // 范围  文档高宽减去元素高宽活动范围
        positionY = document.documentElement.clientHeight - wrapHeight,
        positionX = document.documentElement.clientWidth - wrapWidth
    document.onmousemove = (e) => {
        // 变动值  当前鼠标位置减去初始的位置 最后加上元素本身的位置就是变动值
        let changeY = e.clientY - cursorY + wrapTop,
            changeX = e.clientX - cursorX + wrapLeft
        // // 范围
        // if(changeY<=0){
        //     changeY=0
        // }
        // if(changeY>=positionY){
        //     changeY=positionY
        // }
        // 因为条件差不多 可以合并一下
        // 上下
        if (changeY <= 0 || changeY > positionY) {
            changeY = Math.max(0, Math.min(changeY, positionY))
        }
        // 左右
        if (changeX <= 0 || changeX > positionX) {
            changeX = Math.max(0, Math.min(changeX, positionX))
        }
        // 设置样式
        wrap.style.cssText += `
            top:${changeY}px;
            left:${changeX}px;
            `
        // 样式修改不直接修改在基础上增加  增加的是后来的会覆盖前面相同的样式
    }
}
// 拉伸事件
list.forEach((val, i) => {
    // 按下对应元素 在文档上移动  一样是为了防止被甩开
    val.onmousedown = (e) => {
        // 阻止继续往上冒泡 e可以换成event
        e.stopPropagation()
        // 初始位置
        let wrapTop = wrap.offsetTop,
            wrapLeft = wrap.offsetLeft,
            // 初始高宽
            wrapHeight = wrap.offsetHeight,
            wrapWidth = wrap.offsetWidth,
            // 初始鼠标位置
            cursorY = e.clientY,
            cursorX = e.clientX,
            // 最小范围
            positionY = wrapTop + wrapHeight - size,
            positionX = wrapLeft + wrapWidth - size
        document.onmousemove = (e) => {
            // 变动值
            let changeY = e.clientY - cursorY,
                changeX = e.clientX - cursorX,
                // 为了方便区分先解构赋值一下
                [
                    iwrapTop,
                    iwrapLeft,
                    iwrapHeight,
                    iwrapWidth
                ] = [
                    wrapTop,
                    wrapLeft,
                    wrapHeight,
                    wrapWidth
                ]
            // 运用switch实现按下对应元素的效果
            switch (i) {
                // 左上
                case 0:
                    // X和Y都是负的(小的减去大的)  top和left都在减小 所以加上change值   高宽都在增大所以减去change值
                    iwrapTop = wrapTop + changeY
                    iwrapLeft = wrapLeft + changeX
                    iwrapWidth = wrapWidth - changeX
                    iwrapHeight = wrapHeight - changeY
                    break;
                    // 右上
                case 1:
                    // X正 Y负 top减少+ left无 宽增加+ 高增加-
                    iwrapTop = wrapTop + changeY
                    iwrapWidth = wrapWidth + changeX
                    iwrapHeight = wrapHeight - changeY
                    break;
                    // 右下角
                case 2:
                    // X正 y正 top无 left无 高度增加+ 宽度增加+
                    iwrapWidth = wrapWidth + changeX
                    iwrapHeight = wrapHeight + changeY
                    break;
                case 3:
                    // X负 Y正 top无 left减少+ 高度增加+ 宽度增加-
                    iwrapLeft = wrapLeft + changeX
                    iwrapWidth = wrapWidth - changeX
                    iwrapHeight = wrapHeight + changeY
                    break;
                case 4:
                    //Y负 top减少+ 高度增加-
                    iwrapTop = wrapTop + changeY
                    iwrapHeight = wrapHeight - changeY
                    break;
                case 5:
                    // Y正 top无 高度增加+
                    iwrapHeight = wrapHeight + changeY
                    break;
                case 6:
                    // X负 left减少+ 宽度增加-
                    iwrapLeft = wrapLeft + changeX
                    iwrapWidth = wrapWidth - changeX
                    break;
                case 7:
                    // X正 left无 宽度增加+
                    iwrapWidth = wrapWidth + changeX
                    break;
            }
            // 界限
            // top和left都是选最小的，正常情况下会大于这个最小的范围值 所以小于最小的范围就是position
            iwrapTop = Math.min(iwrapTop, positionY)
            iwrapLeft = Math.min(iwrapLeft, positionX)
            // 宽高取最大值 正常情况下都是iwrpa最大的  小于两个宽度的圆点就赋值size
            iwrapWidth = Math.max(size, iwrapWidth)
            iwrapHeight = Math.max(size, iwrapHeight)
            // ==或者===的话鼠标过快就识别不到了
            if(iwrapWidth>=wrapWidthSize){
                iwrapWidth=wrapWidthSize
                iwrapLeft=wrap.offsetLeft
            }
            if(iwrapHeight>=wrapHeightSize){
                iwrapHeight=wrapHeightSize
                iwrapTop=wrap.offsetTop
            }
            // 设置样式
            wrap.style.cssText += `
            top:${iwrapTop}px;
            left:${iwrapLeft}px;
            width:${iwrapWidth}px;
            height:${iwrapHeight}px
            `
        }
    }
})
// 放开鼠标事件
// 在document(文档)上抬起鼠标左键
document.onmouseup = () => {
    // 移动赋值为空
    document.onmousemove = null
}