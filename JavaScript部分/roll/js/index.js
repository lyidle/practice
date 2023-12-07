// 把Array原型上的forEach拿下来给HTMLCollection的原型上添加上
HTMLCollection.prototype.forEach = Array.prototype.forEach
// 失去域获取焦点的开关，修复失去焦点后，获取焦点时点击图片轮播播放的bug
let onIamgeHover=true
// 数据
let imgData = [{
        name: 1,
        src: './images/1.jpg'
    },
    {
        name: 2,
        src: './images/2.jpg'
    },
    {
        name: 3,
        src: './images/3.jpg'
    },
    {
        name: 4,
        src: './images/4.jpg'
    },
    {
        name: 5,
        src: './images/5.jpg'
    },
]

function roll(className, imgData, timer, btn_left, btn_right) {
    // 获取max-roll
    let maxRoll = document.querySelector(className),
        // 创建仓库，节约资源
        Fragment = document.createDocumentFragment(),
        // 创建个div装img   roll-img
        imgList = document.createElement('div')
    // 给创建div添加类名
    imgList.classList.add('roll-img')
    // roll-img 添加到仓库里
    Fragment.appendChild(imgList)
    // 根据数据生成图片
    imgData.forEach((element, i) => {
        // 创建img
        val = document.createElement('img')
        // 遍历对象
        for (const key in element) {
            // 每个img身上添加属性
            val.setAttribute(`${key}`, `${element[key]}`)
        }
        Fragment.children[0].appendChild(val)
    });
    // 克隆第一张图添加到最后一张图之后
    imgList.appendChild(imgList.children[0].cloneNode())
    // 获取所有图片
    let img = imgList.children,
        // 底部按钮
        toggleBtns = document.createElement('div')
    // 底部按钮类名
    toggleBtns.className = `roll-toggle`
    // roll-img的宽度自适应
    imgList.style.width = `${100 * img.length}%`
    // 图片的宽度自适应与底部按钮的动态创建
    img.forEach((val, i) => {
        val.style.width = `${100 / img.length}%`
        // 底部按钮
        let toggleList = document.createElement('div')
        toggleList.innerHTML = `${i+1}`
        toggleBtns.appendChild(toggleList)
    })
    // 移除最后的一个按钮  图片加上假图要多一个
    toggleBtns.lastElementChild.remove()
    // 创建按钮
    let btn = document.createElement('div'),
        btnLeft = document.createElement('div'),
        btnRight = document.createElement('div')
    // 按钮类名
    btn.className = 'roll-btns'
    // 左右按钮类名
    btnLeft.className = 'roll-btn-left'
    btnRight.className = 'roll-btn-right'
    // 左右按钮内容
    btn_left === undefined ? '' : btnLeft.innerHTML = btn_left
    btn_right === undefined ? '' : btnRight.innerHTML = btn_right
    // 左右按钮添加到btn里 roll-btns
    btn.appendChild(btnLeft)
    btn.appendChild(btnRight)
    // 添加按钮到仓库
    Fragment.appendChild(btn)
    // 底部按钮添加到仓库
    Fragment.appendChild(toggleBtns)
    // 把仓库里的内容添加到max-roll里
    maxRoll.appendChild(Fragment)
    // 图片索引
    let index = 0,
        // 开关
        toggle = true
    // 移动动画
    imgList.style.transition = `left ${timer / 1000}s`
    // 左按钮
    let player = btnLeft.onclick = () => {
        rollPlay(1)
    }
    // 右按钮
    btnRight.onclick = () => {
        rollPlay(-1)
    }

    function rollPlay(add = 1) {
        if (!toggle) return
        // 自增
        index += add
        // left改变
        imgList.style.left = `${- index * 100}%`
        // 最后一张时 是克隆图 瞬间移动到第一张
        if (index === img.length - 1) {
            index = 0
            setTimeout(() => {
                imgList.style.left = `-${index * 100}%`
                imgList.style.transition = `left ${0}s`
            }, timer);
        }
        // 第一张时恢复动画
        imgList.style.transition = `left ${timer / 1000}s`
        // 第一张时  因为要点击所以是-1
        if (index === -1) {
            // 瞬间移动到最后 是克隆图
            imgList.style.left = `-${(img.length - 1) * 100}%`
            imgList.style.transition = `left ${0}s`
            // 紧跟着移动到最后一张图
            index = img.length - 2
            setTimeout(() => {
                imgList.style.left = `-${index * 100}%`
                imgList.style.transition = `left ${timer / 1000}s`
            }, 0);
        }
        radio()
        toggle = false
        setTimeout(() => {
            toggle = true
        }, timer);
    }

    function radio() {
        // 底部按钮
        let btns = toggleBtns.children
        for (let i = 0; i < btns.length; i++) {
            // 如果相等就添加不相等移除
            index === i ? btns[i].classList.add('only') : btns[i].classList.remove('only')
            btns[i].onclick = () => {
                // 点击对应按钮改变index
                index = i
                // 移动图片
                imgList.style.left = -100 * index + '%'
                // 如果相等就添加不相等移除
                for (let i = 0; i < btns.length; i++) {
                    index === i ? btns[i].classList.add('only') : btns[i].classList.remove('only')
                }
            }
        }
    }
    radio()
    // 轮播
    let roll = setInterval(() => {
            player()
        }, timer),
        // 移入清除
        enter = maxRoll.onmouseenter = function () {
            clearInterval(roll)
        },
        // 移出开始
        leave = maxRoll.onmouseleave = function () {
            if(onIamgeHover){
                clearInterval(roll)
                roll = setInterval(() => {
                    player()
                }, timer);
            }
        }
    // 失去焦点清除
    window.onblur = () => {
        onIamgeHover=false
        enter()
    }
    // 获得焦点开始
    window.onfocus = () => {
        // 第一次点击有效清除roll
        maxRoll.onclick=()=>{
            clearInterval(roll)
            maxRoll.onclick=null;
        }
        onIamgeHover=true
        leave()
    }

}
// 传入参数 类名 图片数据 过渡时间毫秒 左箭头(没写就是空) 右箭头(没写就是空)
roll('.max-roll', imgData, 1000, '&lt;', '&gt;')