var check = document.querySelector(".menu");

var navitems = document.querySelector(".nav-items");

check.addEventListener("change" , function(){
    if(this.checked){                              //cross on
        navitems.style.transform = 'translateX(0)'
        navitems.classList.remove("sec-items");
        social.classList.remove("socio");
    }
    else{                                         //bars on
        navitems.style.transform = 'translateX(-100%)'
        navitems.classList.add("sec-items");
        social.classList.add("socio");
    }
});

window.addEventListener("resize",function(){

     if(this.innerwidth>768){
            check.checked = false
            navitems.style.transform = 'translateX(0)'
     }
     if(this.innerwidth<=768){
        if(!check.checked){
            navitems.style.transform = 'translateX(-100%)'
        }
     }

});

var social = document.querySelector(".social");

check.addEventListener("change",function(){
    if(this.checked){
        social.style.transform = "translateX(0)"
    }
    else{
        social.style.transform = "translateX(-100%)"
    }
});

window.addEventListener('resize' ,function(){
    if(this.innerwidth>768){
        check.checked = false
        social.style.transform = "translateX(0)"
    }
    if(this.innerwidth<= 768){
        if(!check.checked){
            social.style.transform = "translateX(-100%)"
        }
    }
});


var len = document.querySelectorAll(".nav-links").length;
var mynav = document.querySelector("nav");
for(i=0;i<len;i++){

    document.querySelectorAll(".nav-links")[i].addEventListener("click", function(){
        navitems.classList.add("sec-items");
        social.classList.add("socio");
        check.checked=false
    })

}

var sociolen = social.querySelectorAll("a").length;

for(i=0;i<sociolen;i++){

    social.querySelectorAll("a")[i].addEventListener("click",function(){
        navitems.classList.add("sec-items");
        social.classList.add("socio");
        check.checked=false
        
    })

}




