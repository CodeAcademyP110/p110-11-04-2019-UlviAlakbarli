"use strict";
document.querySelector(".btn.btn-primary").onclick=function(){
 f_incrice();  
    

    
}


let f_incrice=function(){
let i=0;   
let incrice =setInterval(
    
   
    function(){
        
        i=i+0.25/4;
        document.querySelector(".cos-progress-bar").style.width=i+"%";
        if(i%5===0){document.querySelector(".sending > span").innerText=i}
        if(i===100){
            document.querySelector(".progress").style.opacity="0";
            document.querySelector(".sending").innerHTML="Successfully sent <i class=\"far fa-smile-beam\"></i>";
            document.querySelector(".btn.btn-primary").style.opacity="0";


            clearInterval(incrice)}
    }
    ,25/2
)
}
