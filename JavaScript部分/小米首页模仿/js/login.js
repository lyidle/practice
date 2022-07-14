// 账号密码
let input_=document.querySelectorAll('.input_'),
plac=document.querySelectorAll('.plac'),
placc=document.querySelectorAll('.placc')
for (let i = 0; i < plac.length; i++) {
    input_[i].onfocus=()=>{
        plac[i].classList.add('plac_focus')
        input_[i].classList.add('input_focus')
        // 空时改变提示文本颜色
        if(input_[i].value===''){
            plac[i].style.color='#f04645'
        }
        input_[i].onkeyup=()=>{
            // 输入时为空就不移除颜色反之改为白色
            if(input_[i].value!==''){
                input_[i].style.backgroundColor='rgb(249,249,249)'
                // 为空时移除下方提示文本
                a=placc[i].style.display='none'
            }else{
                input_[i].style.backgroundColor='rgb(252,242,243)'
            }
        }
    }
    input_[i].onblur=()=>{
        // 为空时才移除
        if (input_[i].value==='') {
            plac[i].classList.remove('plac_focus')
            placc[i].style.display='block'
        }else{
            input_[i].classList.remove('input_focus')
            plac[i].style.color='#838383'
            placc[i].style.display='none'
        }
    }
}
// 密码可见和不可见
let pass_img=document.querySelector('.pass_img'),
kg=true
for (let i = 0; i < plac.length; i++) {
    pass_img.onclick=()=>{
        if(kg){
            input_[i].type='text'
            pass_img.style.background='url(./images/眼睛_显示.png)'
            kg=false
        }else{
            input_[i].type='password'
            pass_img.style.background='url(./images/眼睛-闭眼.png)'
            kg=true
        }
        console.log(kg,2);
    }
}

pass_img.style.background='url(./images/眼睛-闭眼.png)'