$(document).ready(function (){
    $(".menu").click(function(){
        $("nav").slideToggle();
    });
});
var  hinh=[
    'img/banner.jpg',
    'img/banner2.jpg',
    'img/banner3.jpg',
]
var index=0;
function prev (){
  index--;
  if(index<0) index=hinh.length-1;
  document.getElementById('banner').src=hinh[index];
  document.getElementById('0').style.color='white';
  document.getElementById('1').style.color='white';
  document.getElementById('2').style.color='white';
  document.getElementById('index').style.color='#1598d4';
}
function next(){
    index++;
    if(index==hinh.length) index=0;
    document.getElementById('banner').src=hinh[index];
    document.getElementById('0').style.color='white';
    document.getElementById('1').style.color='white';
    document.getElementById('2').style.color='white';
    document.getElementById('index').style.color='#1598d4';
}
setInterval('next()',2000);
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
const root = document.querySelector(':root');

c1.addEventListener('click',function(){
    root.style.setProperty('--color2','#f1fb32');
    localStorage.setItem('pickColor','#f1fb32');

})
c2.addEventListener('click',function(){
    root.style.setProperty('--color2','aquamarine');
    localStorage.setItem('pickColor','aquamarine');
    
})
c3.addEventListener('click',function(){
    root.style.setProperty('--color2','#FC6600');
    localStorage.setItem('pickColor','#FC6600');
    
})