const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn=document.getElementById('btn');
let hexColor='';
function getColor(){
    hexColor='#';
    for(let i=0;i<6;i++){
        hexColor+=hex[Math.floor(Math.random()*15)]
    }
    document.querySelector('span').textContent=hexColor;
    document.body.style.backgroundColor=hexColor;

}

btn.addEventListener('click',getColor)