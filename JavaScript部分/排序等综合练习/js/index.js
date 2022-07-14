let wrap = document.querySelector('.wrap'),
    // 内容
    list = [{
            imgSrc: './images/1.webp',
            title: 'Redmi Note 11T Pro+',
            minTitle: '天玑8100｜真旗舰芯',
            price: '1999元起',
            priceDel: '2099元'
        },
        {
            imgSrc: './images/2.webp',
            title: 'Redmi Note 11T Pro',
            minTitle: '天玑8100｜真旗舰芯',
            price: '1699元起',
            priceDel: '1799元'
        },
        {
            imgSrc: './images/3.webp',
            title: 'Redmi Note 11SE',
            minTitle: '双卡双5G｜疾速登陆',
            price: '999元起',
            priceDel: '1099元'
        },
        {
            imgSrc: './images/4.webp',
            title: 'Xiaomi Civi 1S',
            minTitle: '原生美肌人像｜奇迹阳光动人新色｜骁龙778G Plus',
            price: '1999元起',
            priceDel: '2099元'
        },
        {
            imgSrc: './images/5.webp',
            title: 'RRedmi 10Aedmi Note 11T Pro+',
            minTitle: '大电量、大音量、大屏幕',
            price: '649元起',
            priceDel: '699元'
        },
        {
            imgSrc: './images/6.webp',
            title: 'Redmi K50 Pro',
            minTitle: '2K直屏的狠旗舰',
            price: '2999元起',
            priceDel: ''
        },
        {
            imgSrc: './images/7.webp',
            title: 'Redmi K50',
            minTitle: '2K直屏的狠旗舰',
            price: '2399元起',
            priceDel: ''
        },
        {
            imgSrc: './images/8.webp',
            title: 'Redmi K40S',
            minTitle: '口碑真旗舰',
            price: '1799元起',
            priceDel: ''
        },
    ],
    // 创建个仓库
    Fragment = document.createDocumentFragment(),
    ascend = document.querySelector('.ascend'),
    desc = document.querySelector('.desc'),
    random = document.querySelector('.random'),
    num = list.length
// 动态生成元素
function menu() {
    list.forEach((val, i) => {
        // 创建元素
        let li = document.createElement('li'),
            img = document.createElement('img'),
            title = document.createElement('div'),
            minTitle = document.createElement('div'),
            maxprice = document.createElement('div'),
            price = document.createElement('span'),
            delprice = document.createElement('span')
        // 添加元素
        li.appendChild(img)
        li.appendChild(title)
        li.appendChild(minTitle)
        li.appendChild(maxprice)
        maxprice.appendChild(price)
        maxprice.appendChild(delprice)
        // 设置类名
        li.className = 'list'
        img.className = 'img'
        title.className = 'title'
        minTitle.className = 'mintitle'
        maxprice.className = 'maxprice'
        price.className = 'price'
        delprice.className = 'delprice'
        // 添加内容
        img.src = val.imgSrc
        title.innerHTML = val.title
        minTitle.innerHTML = val.minTitle
        price.innerHTML = val.price
        delprice.innerHTML = val.priceDel
        // 添加到仓库种  刚搞错了是先在里面添加到仓库里在完了后添加到wrap里这样会快些
        Fragment.appendChild(li)
    })
}
menu()
// menu()完后 添加到wrap上
wrap.appendChild(Fragment)
// 排序
function sortList() {
    // 这样就不会更改长度
    for (let i = 0; i < num; i++) {
        // 移除第1个元素  0的一个是sort  循环删除个数和list个数一样
        wrap.children[1].remove()
    }
    menu()
    // menu()完后 添加到wrap上
    wrap.appendChild(Fragment)
}
// 按钮
// 升序
ascend.onclick = () => {
    list.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price)
    })
    sortList()
}
// 降序
desc.onclick = () => {
    list.sort((a, b) => {
        return parseFloat(b.price) - parseFloat(a.price)
    })
    sortList()
}
// 随机排序
random.onclick = () => {
    list.sort((a, b) => {
        // 所以这里面每次都不一样了
        return Math.random() - 0.5
    })
    sortList()
}
// 这是在0到1之间的 减去0.5就是 负0.5到正0.5之间了 有正有负了
// console.log(Math.random() - 0.5);