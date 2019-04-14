"use strict";
let button=document.querySelector(".btn.btn-primary");
let progress=document.querySelector(".progress");
let progress_bar=document.querySelector(".cos-progress-bar");
let bar_rem=document.querySelector(".bar-rem")
let i=parseInt(window.getComputedStyle(progress_bar).width);
let ba=1;
let count=1;
button.onclick=function(){
 if(count==1){
      count=2;
      f_incrice(); 
    }
    
}

let f_incrice=function(){
   
let incrice =setInterval(
    
  
    function(){
        ba=1;
        i=i+0.25/4;
        progress_bar.style.width=i+"%";
        if(i%5===0){document.querySelector(".sending > span").innerText=i}
        if(i===100){
            progress.style.display="none";
            document.querySelector(".sending").innerHTML="Successfully sent <i class=\"far fa-smile-beam\"></i>";
            button.style.opacity="0";
            

            clearInterval(incrice)}
    }
    ,25/2
)
  progress.onmouseover=function(){
      clearInterval(incrice);
      
      bar_rem.style.opacity="1"
      
    };
    
      
  progress.onmouseout=function(){
      bar_rem.style.opacity="0"
      if(ba==1)
      {
          
      f_incrice();
      
      }
      
    };
        progress.onclick=function(){
     
     
        clearInterval(incrice);
        count=1
        ba=ba+2;
        
       }
      
   
  
}

