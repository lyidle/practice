let goods=document.querySelectorAll('.goods'),
price=document.querySelectorAll('.price'),
remove_=document.querySelectorAll('.remove'),
add_=document.querySelectorAll('.add'),
goodsNum=document.querySelectorAll('.goodsNum'),
totalNum=document.querySelector('.totalNum'),
totalPrice=document.querySelector('.totalPrice'),
priceMin=document.querySelectorAll('.priceMin')
goods.forEach((val,i)=>{
    // ++
    add_[i].onclick=()=>{
        goodsNum[i].innerHTML=goodsNum[i].innerHTML*1+1
        // 要把参数传进来不然函数访问不到 not defined
        price_(i)
    }
    // --
    remove_[i].onclick=()=>{
        goodsNum[i].innerHTML<=0?goodsNum[i].innerHTML=0:goodsNum[i].innerHTML=goodsNum[i].innerHTML*1-1
        // 要把参数传进来不然函数访问不到 not defined
        price_(i)
    }
})
function price_(i){
    // 计算小计
    priceMin[i].innerHTML=price[i].innerHTML*goodsNum[i].innerHTML
    let arr=[],
    num=null,
    arr1=[],
    num1=null
    goods.forEach((val,i)=>{
        // 个数
        arr.push(goodsNum[i].innerHTML*1)
        num+=arr[i]*1
        // 总价
        arr1.push(priceMin[i].innerHTML*1)
        num1+=arr1[i]*1
    })
    console.log(num1);
    totalNum.innerHTML=num
    totalPrice.innerHTML=num1
}
// 顺序都是一样的，数量也一致
// console.log(goods,price,remove_,add_,goodsNum,totalNum,totalPrice);