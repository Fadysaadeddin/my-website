let img = document.querySelector('.img')
let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
let image1 = document.getElementById('image1')
let image2 = document.getElementById('image2')
let image3 = document.getElementById('image3')
let btnscroll = document.getElementById("btnscroll")
let dollar = document.getElementById('dollar')
let euro = document.querySelector('#euro')

//* function of changing the color of the phones*//

 function phones(phone){
    img.src = phone;
}

    //* function of the scroll buttom*//

window.onscroll = function(){
    if(scrollY >= 95){
        btnscroll.style.display = "block";
        
}else{
    btnscroll.style.display = "none"
}
}

btnscroll.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}


//* function of changing dollar *//


dollar.onkeyup = function(){
    euro.value = dollar.value *0.93;
   
}
euro.onkeyup = function(){
    dollar.value = euro.value / 0.93;}




   
//* function togglecolor in the container2 *//


   function toggleColor(div1){
    if (
    div1.style.color === 'white' ){
        div1.style.color = 'red'
    }else {
        div1.style.color = 'white'
    }
    
   }

   function toggleColor(div2){
    if (
    div2.style.color === 'white' ){
        div2.style.color = 'red'
    }else {
        div2.style.color = 'white'
    }
    
   }
   function toggleColor(div3){
    if (
    div3.style.color === 'white' ){
        div3.style.color = 'red'
    }else {
        div3.style.color = 'white'
    }
    
   }
  