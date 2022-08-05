;
// 获取数据
let scope = document.querySelector('.scope')
let start = document.querySelector('.start')
let suspend = document.querySelector('.suspend')
let score = document.querySelector('.score')
let status = document.querySelector('.status')
// 蛇的大小
let snakeSize = 20;
(function ({
    scope,
    snakeSize,
    start,
    suspend
}) {
    // 场景大小
    window.onresize = () => {
        scopeSize()
    }

    function scopeSize() {
        // 因为开启了怪异盒子所以加上border宽度值 左右两个
        let borderWidth=parseFloat(getComputedStyle(scope).borderWidth) *2
        scope.style = `
            width:${~~(scope.offsetWidth/snakeSize) * snakeSize + borderWidth}px;
            height:${~~(scope.offsetWidth/snakeSize) * snakeSize + borderWidth}px;
        `
    }
    scopeSize()
    // 食物
    ;
    (function () {
        // 食物序列
        window.foodArr = []

        function Food(x, y, width, height, background) {
            this.x = x || 0
            this.y = y || 0
            this.width = width || snakeSize
            this.height = height || snakeSize
            this.background = background || 'green'
            // 分数
            window.fraction = 0
        }
        // 添加食物
        Food.prototype.init = function () {
            // 先清除食物
            FoodRemove()
            // 创建div
            let div = document.createElement('div')
            this.y = ~~(Math.random() * (~~(scope.offsetWidth / this.width))) * this.width
            this.x = ~~(Math.random() * (~~(scope.offsetHeight / this.height))) * this.height
            // div的样式
            div.style = `
        width:${this.width}px;
        height:${this.height}px;
        background:${this.background};
        position:absolute;
        left:${this.x + 'px'};
        top:${this.y + 'px'};
        `
            // 放到场景中
            scope.appendChild(div)
            // 放到食物序列里
            foodArr.push(div)
        }
        // 删除食物
        function FoodRemove() {
            for (const key of foodArr) {
                // 从场景中删除元素
                key.remove()
                // 从数组中删除元素
                foodArr.splice(foodArr.indexOf(key), 1)
            }
        }
        window.Food = Food
        window.FoodRemove = FoodRemove
    })()
    // 蛇
    ;
    (function () {
        // 蛇元素
        let snakeArr = []

        function Snake(width, height, direction) {
            this.width = width || snakeSize
            this.height = height || snakeSize
            // 蛇的身体
            this.body = [{
                    x: 3,
                    y: 2,
                    color: 'red',
                },
                {
                    x: 2,
                    y: 2,
                    color: 'green',
                },
                {
                    x: 1,
                    y: 2,
                    color: 'green',
                },
            ]
            // 方向
            this.direction = direction || 'right'
        }
        // 蛇初始化
        Snake.prototype.init = function () {
            for (const key of this.body) {
                let div = document.createElement('div')
                // 属性
                div.style = `
                position:absolute;
                width:${this.width}px;
                height:${this.height}px;
                background:${key.color};
                left:${key.x * this.width}px;
                top:${key.y * this.width}px;
                `
                // 放到场景里
                scope.appendChild(div)
                // 添加到蛇元素里
                snakeArr.push(div)
            }
        }
        // 蛇移动
        Snake.prototype.move = function (food, snake) {
            // 先清除之前的蛇
            SnakeRemove()
            let i = this.body.length - 1
            // 移动身体
            for (; i > 0; i--) {
                this.body[i].x = this.body[i - 1].x
                this.body[i].y = this.body[i - 1].y
            }
            // 上面操作完后i就自减成0了
            // 蛇头
            switch (this.direction) {
                case 'right':
                    this.body[i].x += 1
                    break
                case 'left':
                    this.body[i].x -= 1
                    break
                case 'bottom':
                    this.body[i].y += 1
                    break
                case "top":
                    this.body[i].y -= 1
                    break
            }
            // 判断有没有吃到食物
            let x = this.body[0].x * snake.width
            let y = this.body[0].y * snake.height

            // 头部和食物重合时
            if (x === food.x && y === food.y) {
                // 获取尾巴
                let last = this.body[this.body.length - 1]
                switch (this.direction) {
                    case 'right':
                        this.body.push({
                            x: last.x - 1,
                            y: last.y,
                            color: last.color
                        })
                        break
                    case 'left':
                        this.body.push({
                            x: last.x + 1,
                            y: last.y,
                            color: last.color
                        })
                        break
                    case 'bottom':
                        this.body.push({
                            x: last.x,
                            y: last.y - 1,
                            color: last.color
                        })
                        break
                    case "top":
                        this.body.push({
                            x: last.x,
                            y: last.y + 1,
                            color: last.color
                        })
                        break
                }
                food.init()
                // 计算分数
                fraction += 1
            }
            // 撞到身体死亡
            if (this.direction === 'right' || this.direction === 'left') {
                for (let i = 1; i < this.body.length; i++) {
                    // 相同的y时，x重合触发
                    if (this.body[i].y === this.body[0].y) {
                        this.body[i].x === this.body[0].x ? death.call(this) : null
                    }
                }
            }
            if (this.direction === 'top' || this.direction === 'bottom') {
                for (let i = 1; i < this.body.length; i++) {
                    // 相同的x时，y重合触发
                    if (this.body[i].x === this.body[0].x) {
                        this.body[i].y === this.body[0].y ? death.call(this) : null
                    }
                }
            }
            // 蛇的边界
            let headx = scope.offsetWidth - snake.width
            let heady = scope.offsetHeight - snake.height
            x < 0 || y < 0 || x > headx || y > heady ? death.call(this) : null
            // 死亡
            function death() {
                status.innerHTML = '你死啦~'
                // 停掉定时
                clearInterval(timer)
                // 改变蛇的位置 不让蛇出去
                if (x < 0) {
                    let i = this.body.length - 1
                    for (; i >= 0; i--) {
                        this.body[i].x += 1
                    }
                } else
                if (y < 0) {
                    let i = this.body.length - 1
                    for (; i >= 0; i--) {
                        this.body[i].y += 1
                    }
                } else
                if (x > headx) {
                    let i = this.body.length - 1
                    for (; i >= 0; i--) {
                        this.body[i].x -= 1
                    }
                } else
                if (y > heady) {
                    let i = this.body.length - 1
                    for (; i >= 0; i--) {
                        this.body[i].y -= 1
                    }
                }
                // 清除
                SnakeRemove()
                // 初始化
                snake.init()
                // 弹出分数  会阻塞后面的代码
                alert('你的分数为:' + fraction)
                // 异步 结束游戏函数
                setTimeout(() => {
                    gameEnd()
                }, 0);
            }
            score.innerHTML = fraction
        }
        // 清除蛇函数
        function SnakeRemove() {
            let i = snakeArr.length - 1
            for (; i >= 0; i--) {
                // 从场景中删除蛇
                snakeArr[i].remove()
                // 从数组中删除蛇
                snakeArr.splice(snakeArr.indexOf(i), 1)
            }
        }
        window.SnakeRemove = SnakeRemove
        window.Snake = Snake
    })()
    // 游戏对象
    ;
    (function () {
        function Game() {
            this.food = new Food()
            this.snake = new Snake()
            this.changeDirection()
            this.init()
        }
        // 初始化游戏
        Game.prototype.init = function () {
            // 食物
            this.food.init()
            // 蛇
            this.snake.init()
            this.gameMove()
        }
        // 开始游戏
        Game.prototype.gameMove = function () {
            // 移动
            window.timer = setInterval(function () {
                if (!start.isState) {
                    return
                }
                // 蛇的初始化
                this.snake.move(this.food, this.snake)
                this.snake.init()
                keyDown = false
            }.bind(this), 500);
        }
        // 键盘事件
        Game.prototype.changeDirection = function () {
            // 上下左右移动
            document.onkeydown = function (e) {
                if (keyDown) return
                switch (e.key) {
                    case 'w':
                    case 'W':
                    case 'ArrowUp':
                        if (this.snake.direction === 'bottom') return
                        keyDown = true
                        this.snake.direction = 'top'
                        break;
                    case 's':
                    case 'S':
                    case 'ArrowDown':
                        if (this.snake.direction === 'top') return
                        keyDown = true
                        this.snake.direction = 'bottom'
                        break;
                    case 'a':
                    case 'A':
                    case 'ArrowLeft':
                        if (this.snake.direction === 'right') return
                        keyDown = true
                        this.snake.direction = 'left'
                        break;
                    case 'd':
                    case 'D':
                    case 'ArrowRight':
                        if (this.snake.direction === 'left') return
                        keyDown = true
                        this.snake.direction = 'right'
                        break;
                    default:
                        break;
                }
            }.bind(this)
        }
        window.Game = Game
    })()
    // 是否暂停
    start.isState = false
    // 游戏的状态
    start.toggle = false
    let game = null
    // 键盘限制
    let keyDown = false
    // 开始与暂停按钮
    start.onclick = function () {
        if (this.innerHTML === '暂停') {
            // 状态暂停
            start.isState = false
            this.innerHTML = '开始'
            status.innerHTML = '暂停ing……'
        } else
        if (this.innerHTML === '开始') {
            // 状态开始
            start.isState = true
            this.innerHTML = '暂停'
            status.innerHTML = '开始ing……'
        }
        if (!start.toggle) {
            // 只有第一次点时才new 防止蛇闪烁
            start.toggle = true
            game = new Game()
        }
    }
    // 结束按钮
    suspend.onclick = function () {
        if (typeof fraction === 'number') {
            let toggle = confirm('你的分数为:' + fraction)
            // 暂停游戏
            start.isState = false
            if (toggle) {
                gameEnd()
            } else {
                start.innerHTML = '开始'
                status.innerHTML = '暂停ing……'
            }
        }
    }
    // 结束游戏
    function gameEnd() {
        // 确认时
        // 清除定时器
        clearInterval(timer)
        // game赋值为null成为垃圾
        game = null
        // 清除蛇
        SnakeRemove()
        // 清除食物
        FoodRemove()
        // 状态复位
        start.toggle = false
        fraction = null
        start.innerHTML = '开始'
        status.innerHTML = '什么都没有'
        score.innerHTML=0
    }
})({
    scope,
    snakeSize,
    start,
    suspend
})