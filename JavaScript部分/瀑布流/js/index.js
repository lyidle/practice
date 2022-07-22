// 模拟数据
let imgs = [{
        index: 1,
        src: "./images/1.png"
    },
    {
        index: 2,
        src: "./images/2.jpg"
    },
    {
        index: 3,
        src: "./images/3.png"
    },
    {
        index: 4,
        src: "./images/4.jpg"
    },
    {
        index: 5,
        src: "./images/5.png"
    },
    {
        index: 6,
        src: "./images/6.jpg"
    },
    {
        index: 7,
        src: "./images/7.png"
    },
    {
        index: 8,
        src: "./images/8.jpg"
    },
    {
        index: 9,
        src: "./images/9.png"
    },
    {
        index: 10,
        src: "./images/10.jpg"
    },
    {
        index: 11,
        src: "./images/11.png"
    },
    {
        index: 12,
        src: "./images/12.jpg"
    },
    {
        index: 13,
        src: "./images/13.png"
    },
    {
        index: 14,
        src: "./images/14.jpg"
    },
    {
        index: 15,
        src: "./images/15.png"
    },
    {
        index: 16,
        src: "./images/16.jpg"
    },
    {
        index: 17,
        src: "./images/17.png"
    },
    {
        index: 18,
        src: "./images/18.jpg"
    },
    {
        index: 19,
        src: "./images/19.png"
    },
    {
        index: 20,
        src: "./images/20.jpg"
    },
    {
        index: 21,
        src: "./images/21.png"
    },
    {
        index: 22,
        src: "./images/22.jpg"
    },
    {
        index: 23,
        src: "./images/23.png"
    },
    {
        index: 24,
        src: "./images/24.jpg"
    },
    {
        index: 25,
        src: "./images/25.jpg"
    },
]
waterfallList(imgs)
// 数据生成
function waterfallList(Data) {
    let farg = document.createDocumentFragment()
    Data.forEach(val => {
        let div = document.createElement('div'),
            img = document.createElement('img')
        div.className = 'list'
        img.src = val.src
        div.appendChild(img)
        farg.appendChild(div)
    });
    let max = document.querySelector('.max')
    max.appendChild(farg)
}
window.onload = () => {
    waterfall()
    window.onscroll = () => {
        if (reload()) {
            let parent = document.querySelector('.max')
            // 模拟数据  imgs 可以自定义数据
            let farg = document.createDocumentFragment()
            imgs.forEach(val => {
                let div = document.createElement('div'),
                    img = document.createElement('img')
                div.className = 'list'
                img.src = val.src
                div.appendChild(img)
                farg.appendChild(div)
            });
            parent.appendChild(farg)
            // 重新布局
            waterfall()
        }
    }
    window.onresize = () => {
        waterfall()
    }
}
// 第一个父级
function waterfall() {
    // 获取父级与子集
    let wrap = document.querySelector('.max'),
        item = document.querySelectorAll('.max .list')
    // 第一个盒子的宽度
    let boxWidth = item[0].offsetWidth
    // 可视区域宽度
    let pagex = document.documentElement.clientWidth
    // 列数
    clos = ~~(pagex / boxWidth)
    // 父盒子居中
    wrap.style.cssText = `
    width:${boxWidth*clos}px;
    margin:0 auto;
    `
    // 子元素高度数组  子元素高度 最小子元素高度 最小子元素索引
    let heightArray = [],
        itemHeight = 0,
        minItemHeight = 0,
        minItemIndex = 0
    for (i = 0; i < item.length; i++) {
        itemHeight = item[i].offsetHeight
        if (i < clos) {
            // 第一行的高度放到数组里
            heightArray.push(itemHeight)
            // 清空第一行的style，防止改变页面时加上
            item[i].style=''
        } else {
            // 超出第一行时
            // 找出高度最低的元素
            let arr = [...heightArray]
            // 最小的高度
            minItemHeight = arr.sort((a, b) => {
                return a - b
            })[0]
            // 最小盒子的索引
            minItemIndex = heightArray.indexOf(minItemHeight)
            // 对应样式
            item[i].style.position = 'absolute'
            item[i].style.left = minItemIndex * boxWidth + 'px'
            item[i].style.top = minItemHeight + 'px'
            // 更新高度  最小的索引基础上增加 超出第一行后每次进来都是找最小的高度放到那个元素的下面
            heightArray[minItemIndex] += itemHeight
        }
    }
}

// 滚动加载
function reload() {
    let item = document.querySelectorAll('.max .list')
    // 获取滚动条的距离
    let scrollY = document.documentElement.scrollTop
    // 可视区域的高度
    let clientY = document.documentElement.clientHeight
    // 最后一个盒子距离父级顶部的距离
    let lastItem = item[item.length - 1]
    let lastItemY = lastItem.offsetTop
    // 页面高度
    let pageHeight = clientY + scrollY
    document.title = `${lastItemY}---${pageHeight}`
    // 超过就返回true 没超过就false
    return lastItemY < pageHeight ? true : false
}