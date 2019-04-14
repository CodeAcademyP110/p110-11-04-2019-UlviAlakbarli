"use strict";
let leftArrow=document.querySelector(".arrow-left");
let rightArrow=document.querySelector(".arrow-right");
let closeBT=document.querySelector(".close");
let ul=document.querySelector(".slider ul");
let li=document.querySelectorAll(".slider ul li");

let index=0;
let lg=-li.length;

leftArrow.onclick=function(){
    index++;
    if(index>0){ index=lg+1;}
    ul.style.left=index*100+"%";
};
rightArrow.onclick=function(){
    index--;
   if(index === lg){ index=0}
     ul.style.left=index*100+"%";
   
};
closeBT.onclick=function(){
        document.querySelector(".slider").style.display="none"
};


[...document.querySelectorAll(".gallery img")].map(img=>{
    img.onclick=function(){
        document.querySelector(".slider").style.display="none"
       let t=this.getAttribute("data-id");
        
        ul.style.left=-1*t*100+100+"%";
        document.querySelector(".slider").style.display="block"
    }
}
     
)