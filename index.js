let sideMax = document.querySelector('.sideMax')
let iframe = document.querySelector('.iframeDisplay')
// let url = window.location.href;
// url=url.replace("index.html","")
let date = [{
        title: 'Html+Css部分',
        name: [
            '3D翻盖',
            '精灵图',
            '太极（渐变）',
            '小树（border）',
            'hover与animation',
            '轮播图_checked伪类(含部分js)',
        ]
    },
    {
        title: 'JavaScript部分',
        name: [
            'iframe标签',
            '节点操作',
            '排序等综合练习',
            '商品价格计算',
            '随机泡泡',
            '拖拽盒子',
            '放大镜',
            '瀑布流',
            '王者荣耀',
            '小米首页模仿',
            'roll',
            '贪吃蛇'
        ]
    },
    {
        title: '毕设',
        name: [
            '大专毕设',
        ]
    }
]
// 装填数据
let div = document.createElement('div'),
    fragment = document.createDocumentFragment()
div.className = 'sideMin'
date.forEach((val1, i) => {
    let ul = document.createElement('ul')
    ul.className = 'side'
    let title = document.createElement('div')
    title.className = 'title'
    title.innerHTML = val1.title
    val1.name.forEach((val) => {
        let li = document.createElement('li')
        li.innerHTML = val
        li.onclick = () => {
            iframe.src = `./${val1.title}/${val}/index.html`
            // window.location.href=`${url}${val1.title}/${val}/index.html`
        }
        fragment.appendChild(li)
    })
    ul.appendChild(fragment)
    div.appendChild(title)
    div.appendChild(ul)
})
// 点击事件
let toggle = document.createElement('div')
toggle.className = 'sideToggle'
sideMax.appendChild(div)
sideMax.appendChild(toggle)
let sideMin = document.querySelector('.sideMin')
let sideToggle = document.querySelector('.sideToggle')
let toggle_ = true
sideToggle.onclick = function () {
    sideMax.classList.toggle('active')
    this.classList.toggle('active')
    if (toggle_) {
        toggle_ = false
        // 移动时移改变iframe的大小
        let windowWidth = document.documentElement.clientWidth
        let sideMinWidth = sideMin.clientWidth
        iframe.style.width = `${windowWidth - sideMinWidth }px`
    } else {
        toggle_ = true
        iframe.style.width = `100%`
    }
}
let windowHeight = document.documentElement.clientHeight
sideMin.style.height = `${windowHeight}px`