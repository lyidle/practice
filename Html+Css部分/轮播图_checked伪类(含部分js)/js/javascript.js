// 获取所有的单选按钮
var input = document.getElementsByTagName('input');
// 给第一个添加展开的样式，实现默认展开的效果
input[0].classList.add('only');
// 遍历所有单选按钮，点击时清除添加的样式
for (let i = 0; i < input.length; i++) {
    input[i].onclick = function () {
        input[0].classList.remove('only');
    }
}