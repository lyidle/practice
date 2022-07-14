// 元素子集和父级
let menuLeftTor = document.querySelector('.menu-left'),
    menuRightTor = document.querySelector('.menu-right'),
    menuLeft = document.querySelectorAll('.menu-left>div'),
    menuRight = document.querySelectorAll('.menu-right>div'),
    // 输入框
    menuText = document.querySelector('.menu-text'),
    // 底部按钮
    // 移动
    menuTranslateLeft = document.querySelector('.menu-left-button>.menu-translate'),
    menuTranslateRight = document.querySelector('.menu-right-button>.menu-translate'),
    // 增加
    menuAddLeft = document.querySelector('.menu-left-button>.menu-add'),
    menuAddRight = document.querySelector('.menu-right-button>.menu-add'),
    // 移除
    menuRemoveLeft = document.querySelector('.menu-left-button>.menu-remove'),
    menuRemoveRight = document.querySelector('.menu-right-button>.menu-remove'),
    menu = document.querySelector('.menu')
// 类名处理
function className_(menu) {
    menu.forEach((val) => {
        val.onclick = () => {
            // 有则移除 无责加
            if (val.className.includes('active')) {
                val.classList.remove('active')
            } else {
                val.classList.add('active')
            }
        }
    })
}
// 移动
function translate_(menu, button, translate) {
    button.onclick = () => {
        menu.forEach((val) => {
            // 有active类名的
            if (val.className.includes('active')) {
                val.classList.remove('active')
                translate.appendChild(val)
            }
        })
    }
}
// 增加
function Add_(menu, button) {
    button.onclick = () => {
        menu.forEach((val) => {
            // 有active类名的
            if (val.className.includes('active')) {
                // 在父级下最后节点之后添加克隆的val
                val.classList.remove('active')
                val.parentNode.appendChild(val.cloneNode(true))
            }
        })
    }
}
// 移除
function rmove_(menu, button) {
    button.onclick = () => {
        menu.forEach((val) => {
            // 有active类名的
            if (val.className.includes('active')) {
                // 在父级下最后节点之后添加克隆的val
                val.remove()
            }
        })
    }
}
// 输入框
menuText.onfocus = () => {
    document.onkeydown = (e) => {
        // 左按键(37)  右按键(39)
        if (e.keyCode === 37) {
            // 创建div元素
            let div=document.createElement('div')
            div.innerHTML=menuText.value
            menuLeftTor.appendChild(div)
        }
        if (e.keyCode === 39) {
            // 创建div元素
            let div=document.createElement('div')
            div.innerHTML=menuText.value
            menuRightTor.appendChild(div)
        }
    }
}
// 随时都要改变menu里div的个数
menu.onmousemove = () => {
    menuLeft = document.querySelectorAll('.menu-left>div')
    menuRight = document.querySelectorAll('.menu-right>div')
    // 类名
    className_(menuLeft)
    className_(menuRight)
    // 移动
    translate_(menuLeft, menuTranslateLeft, menuRightTor)
    translate_(menuRight, menuTranslateRight, menuLeftTor)
    // 增加
    Add_(menuLeft, menuAddLeft)
    Add_(menuRight, menuAddRight)
    // 移除
    rmove_(menuLeft, menuRemoveLeft)
    rmove_(menuRight, menuRemoveRight)
}