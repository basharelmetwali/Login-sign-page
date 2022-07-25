let user=document.querySelector(".enteruser");
let pass=document.querySelector(".enterpassword");
let userlabel=document.querySelector(".userlabel");
let passlabel=document.querySelector(".passuser");
let loginback=document.querySelector(".loginback");
let signback=document.querySelector(".signback");
let login=document.querySelector(".login")
console.log()
user.onfocus=function(){
    userlabel.style.color="#4b4988"

}
user.onblur=function(){
    userlabel.style.color="#a7a7a7";
}
pass.onfocus=function(){
    passlabel.style.color="#4b4988"

}
pass.onblur=function(){
    passlabel.style.color="#a7a7a7";
 }
let pos=0

let loginbutton=document.querySelector(".loginbutton");
let signbutton=document.querySelector(".signbutton");

let signDiv=document.querySelector(".sign");
loginbutton.onclick=function(){
let intervsign=setInterval(function(){
    signback.style.visibility="visible";
    
    pos+=20
signDiv.style.left=pos+"px"
if(pos>=500){
    login.style.left=signDiv.style.left

   
    login.style.visibility="visible";
    signDiv.style.visibility="hidden";

  clearInterval(intervsign)
}
},1)
}
signbutton.onclick=function(){
    let intervsign=setInterval(function(){
        pos-=20
    login.style.left=pos+"px"
    if(pos<=0){
        signDiv.style.left=login.style.left
                                signDiv.style.visibility="visible";
        login.style.visibility="hidden";
      clearInterval(intervsign)
    }
    },1)
    }
    let usersign=document.querySelectorAll(".enteruser")[1];
let passsign=document.querySelectorAll(".enterpassword")[1];
let userlabelsign=document.querySelectorAll(".userlabel")[1];
let passlabelsign=document.querySelectorAll(".passuser")[1];

usersign.onfocus=function(){
    userlabelsign.style.color="#4b4988"

}
usersign.onblur=function(){
    userlabelsign.style.color="#a7a7a7";
}
passsign.onfocus=function(){
    passlabelsign.style.color="#4b4988"

}
passsign.onblur=function(){
    passlabelsign.style.color="#a7a7a7";
 }