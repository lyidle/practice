let Fragment = document.createDocumentFragment(),
    wrap = document.querySelector('.wrap'),
    // 泡泡个数
    num = randomNum(10, 30),
    // 屏幕宽度和高度
    windowY = document.documentElement.clientHeight,
    windowX = document.documentElement.clientWidth
// 随机整数函数  后面颜色和大小位置之类的好弄
function randomNum(num1, num2) {
    return ~~(Math.random() * (num2 - num1 + 1) + num1)
}
// 随机生成泡泡
for (let i = 0; i <= num; i++) {
    // 创建div和span
    let div = document.createElement('div'),
        span = document.createElement('span'),
        // 大小
        divSize = randomNum(20, 100),
        // 范围
        positionY = windowY - divSize,
        positionX = windowX - divSize,
        // 位置
        divTop = randomNum(0, positionY),
        divLeft = randomNum(0, positionX),
        arr = [1, -1],
        // 速度和方向
        setpY = randomNum(1, 5) * arr[randomNum(0, 1)],
        setpX = randomNum(1, 5) * arr[randomNum(0, 1)],
        // 颜色
        red = randomNum(0, 255),
        green = randomNum(0, 255),
        blue = randomNum(0, 255)
    div.className = 'bubble'
    span.className = 'small'
    div.appendChild(span)
    div.style = `
    position:absolute;
    width:${divSize}px;
    height:${divSize}px;
    top:${divTop}px;
    left:${divLeft}px;
    box-shadow:inset 0 10px 30px rgb(${red},${green},${blue}); 
    `
    let bubbleObj = {
        div,
        positionY,
        positionX,
        divTop,
        divLeft,
        divSize,
        setpY,
        setpX,
    }
    Fragment.appendChild(div)
    run(bubbleObj)
}
wrap.appendChild(Fragment)

function run(bubbleObj) {
    windowY = document.documentElement.clientHeight
    windowX = document.documentElement.clientWidth
    // 结构赋值
    let {
        div,
        positionY,
        positionX,
        divTop,
        divLeft,
        divSize,
        setpY,
        setpX,
    } = bubbleObj

    function runbubble() {
        // 范围
        positionY = windowY - divSize
        positionX = windowX - divSize
        // 速度
        divTop += setpY
        divLeft += setpX
        // // 上边界
        // if(divTop<=0){
        //     divTop=0
        //     setpY=-setpY
        // }
        // 上下边界
        if(divTop<=0||divTop>=positionY){
            // console.log('上下');
            // 变大后也超出了~
            // divSize = randomNum(20, 100)
            divTop=Math.max(0,Math.min(divTop,positionY))
            setpY=-setpY
            // 撞到改变颜色
            div.style.cssText+=`
            box-shadow:inset 0 10px 30px rgb(${randomNum(0,255)},${randomNum(0,255)},${randomNum(0,255)});
            width:${divSize}px;
            height:${divSize}px;
            `
        }
        // 左右边界
        if(divLeft<=0||divLeft>=positionX){
            // console.log('左右');
            // 变大后也超出了~
            // divSize = randomNum(20, 100)
            divLeft=Math.max(0,Math.min(divLeft,positionX))
            setpX=-setpX
            // 撞到改变颜色
            div.style.cssText+=`
            box-shadow:inset 0 10px 30px rgb(${randomNum(0,255)},${randomNum(0,255)},${randomNum(0,255)});
            width:${divSize}px;
            height:${divSize}px;
            `
        }
        // // 下边界
        // if(divTop>=positionY){
        //     divTop=positionY
        //     setpY=-setpY
        // }
        // // 左边界
        // if(divLeft<=0){
        //     divLeft=0
        //     setpX=-setpX
        // }
        // // 右边界
        // if(divLeft>=positionX){
        //     divLeft=positionX
        //     setpX=-setpX
        // }
        div.style.cssText+=`
        top:${divTop}px;
        left:${divLeft}px;
        `
        // 执行完后继续执行runbubble代码
        requestAnimationFrame(runbubble)
    }
    runbubble()
}
window.onresize = () => {
    // 要随时更改
    windowY = document.documentElement.clientHeight
    windowX = document.documentElement.clientWidth
}