let aClick=document.querySelector('.click_'),
aMax=document.querySelector('.max'),
flase_=document.querySelectorAll('.flase_')
aClick.onclick=()=>{aMax.style.display = 'flex'}
flase_.forEach((val,i)=>{flase_[i].onclick=()=>{aMax.style.display = 'none'}})