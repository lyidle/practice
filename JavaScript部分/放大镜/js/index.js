let obj = [{
        index: 0,
        src: './images/1.jpg'
    },
    {
        index: 1,
        src: './images/2.jpg'
    },
    {
        index: 2,
        src: './images/3.jpg'
    },
    {
        index: 3,
        src: './images/4.jpg'
    },
]
// 第一个参数，图片数据，第二个参数div类名，第三个参数指定父元素
scale(obj, '.maxScale','body')
function scale(Data, maxBox, parent) {
    // 创建元素
    let frag = document.createDocumentFragment(),
        // samll盒子
        smallElement = document.createElement('div')
    smallElement.className = 'smallImg'
    let img = document.createElement('img');
    let span = document.createElement('span');
    img.src = './images/1.jpg'
    smallElement.appendChild(img)
    // mask
    span.className = 'mask'
    smallElement.appendChild(span)
    frag.appendChild(smallElement)
    let max = document.querySelector(`${maxBox}`)
    max.appendChild(frag)
    // max盒子
    let maxElement = document.createElement('div')
    maxElement.className = 'maxImg'
    let maxImg = img.cloneNode()
    maxElement.appendChild(maxImg)
    frag.appendChild(maxElement)
    max.appendChild(frag)
    // list
    let list = document.createElement('ul')
    list.className = 'list'
    Data.forEach((val) => {
        let li = document.createElement('li'),
            img = document.createElement('img')
        img.src = val.src
        // 第一个li添加点击类名
        if (val.index === 0) {
            li.classList.add('active')
        }
        list.appendChild(li)
        li.appendChild(img)
        frag.appendChild(list)
    })
    max.appendChild(frag)
    let li = null,
        imges = null,
        maxImgs = null
    if (parent === undefined) {
        // list里的li
        li = document.querySelectorAll(`${maxBox}>.list>li`)
        // 小图片
        imges = document.querySelector(`${maxBox}>.smallImg>img`)
        // 大图片
        maxImgs = document.querySelector(`${maxBox}>.maxImg>img`)
    } else {
        // list里的li
        li = document.querySelectorAll(`${parent}>${maxBox}>.list>li`)
        // 小图片
        imges = document.querySelector(`${parent}>${maxBox}>.smallImg>img`)
        // 大图片
        maxImgs = document.querySelector(`${parent}>${maxBox}>.maxImg>img`)
    }
    // 移入
    smallElement.onmouseenter = function (e) {
        maxElement.style.display = 'block'
        span.style.display = 'block'
        // 范围
        let postionX = this.offsetWidth - span.offsetWidth,
            postionY = this.offsetHeight - span.offsetHeight
        smallElement.onmousemove = function (e) {
            // 移动
            let x = e.offsetX - span.offsetWidth * 0.5,
                y = e.offsetY - span.offsetHeight * 0.5
            // 左右
            // if (x < 0) {
            //     x = 0
            // }
            // if(x>postionX){
            //     x=postionX
            // }
            x < 0 ? x = 0 : x > postionX ? x = postionX : null
            // 上下
            y < 0 ? y = 0 : y > postionY ? y = postionY : null
            span.style.cssText += `
        left:${x}px;
        top:${y}px;
        `
            maxImgs.style.cssText += `
        left:${(x*(this.offsetWidth-maxImgs.offsetWidth))/(this.offsetWidth -span.offsetWidth)}px;
        top:${(y*(this.offsetWidth-maxImgs.offsetWidth))/(this.offsetWidth -span.offsetHeight)}px;
        `
        }
    }
    // 移出
    smallElement.onmouseleave = function () {
        maxElement.style.display = 'none'
        span.style.display = 'none'
    }

    // 点击切换
    li.forEach((val) => {
        val.onclick = function () {
            let imgs = this.children[0].src
            imges.src = imgs
            maxImgs.src = imgs
            for (let i = 0; i < li.length; i++) {
                li[i].classList.remove('active')
            }
            this.classList.add('active')
        }
    })
}