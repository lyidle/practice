//轮播图
(function(){
    let img=document.querySelectorAll('.roll_top')[0],
        li=document.querySelectorAll('.roll_bottom li');
        li[0].className='roll_hover'
        for (let i = 0; i < li.length; i++) {
            li[i].onmouseover=function(){
                index=20;
                img.style.left='-'+index*i+'%'
                for (let i = 0; i < li.length; i++) {
                    li[i].className = "";
                }
                this.className = "roll_hover";
            }
        }
})();
// 新闻
(function(){
    let title=document.querySelectorAll('.new_title div'),
        li=document.querySelectorAll('.new_content'),
        img=document.querySelectorAll('.new_title img');
        li[0].style.display='flex'
        img[0].style.display='block'
        for (let i = 0; i < li.length; i++) {
            title[i].onmouseover=function(){
                for (let i = 0; i < li.length; i++) {
                    li[i].style.display=''
                    img[i].style.display=''
                }
                li[i].style.display='flex'
                img[i].style.display='block'
            }
        }
})();