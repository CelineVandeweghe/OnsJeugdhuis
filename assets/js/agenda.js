"use strict";

document.addEventListener("DOMContentLoaded", schermgrootte);

function schermgrootte(){
    console.log(window.innerWidth);
    if (window.innerWidth > 588){
        console.log("groot genoeg");
    }
    else{
        init();
    }
}

function init(){
    document.querySelector("#jan").addEventListener("click", jan);
    document.querySelector("#feb").addEventListener("click", feb);
    document.querySelector("#maa").addEventListener("click", maa);
    document.querySelector("#apr").addEventListener("click", apr);
    document.querySelector("#me").addEventListener("click", me);
    document.querySelector("#jun").addEventListener("click", jun);
    document.querySelector("#jul").addEventListener("click", nog);
    document.querySelector("#aug").addEventListener("click", nog);
    document.querySelector("#sep").addEventListener("click", nog);
    document.querySelector("#okt").addEventListener("click", nog);
    document.querySelector("#nov").addEventListener("click", nog);
    document.querySelector("#dec").addEventListener("click", nog);
}

function jan(){
    const januari = document.querySelector("#januari");
    const februari = document.querySelector("#februari");
    const maart = document.querySelector("#maart");
    const april = document.querySelector("#april");
    const mei = document.querySelector("#mei");
    const juni = document.querySelector("#juni");
    const volgt = document.querySelector("#volgt"); 

    januari.classList.toggle("zien"); 
    if (februari.classList.contains('zien') || maart.classList.contains('zien') || april.classList.contains('zien') || mei.classList.contains('zien') || juni.classList.contains('zien') || volgt.classList.contains('zien')) {
        februari.classList.remove('zien');
        maart.classList.remove('zien');
        april.classList.remove('zien');
        mei.classList.remove('zien');
        juni.classList.remove('zien');
        volgt.classList.remove('zien');
    }
    else;
}

function feb(){
    const januari = document.querySelector("#januari");
    const februari = document.querySelector("#februari");
    const maart = document.querySelector("#maart");
    const april = document.querySelector("#april");
    const mei = document.querySelector("#mei");
    const juni = document.querySelector("#juni");
    const volgt = document.querySelector("#volgt"); 

    februari.classList.toggle("zien"); 
    if (januari.classList.contains('zien') || maart.classList.contains('zien') || april.classList.contains('zien') || mei.classList.contains('zien') || juni.classList.contains('zien') || volgt.classList.contains('zien')) {
        januari.classList.remove('zien');
        maart.classList.remove('zien');
        april.classList.remove('zien');
        mei.classList.remove('zien');
        juni.classList.remove('zien');
        volgt.classList.remove('zien');
    }
    else;
}

function maa(){
    const januari = document.querySelector("#januari");
    const februari = document.querySelector("#februari");
    const maart = document.querySelector("#maart");
    const april = document.querySelector("#april");
    const mei = document.querySelector("#mei");
    const juni = document.querySelector("#juni");
    const volgt = document.querySelector("#volgt"); 

    maart.classList.toggle("zien"); 
    if (januari.classList.contains('zien') || februari.classList.contains('zien') || april.classList.contains('zien') || mei.classList.contains('zien') || juni.classList.contains('zien') || volgt.classList.contains('zien')) {
        januari.classList.remove('zien');
        februari.classList.remove('zien');
        april.classList.remove('zien');
        mei.classList.remove('zien');
        juni.classList.remove('zien');
        volgt.classList.remove('zien');
    }
    else;
}

function apr(){
    const januari = document.querySelector("#januari");
    const februari = document.querySelector("#februari");
    const maart = document.querySelector("#maart");
    const april = document.querySelector("#april");
    const mei = document.querySelector("#mei");
    const juni = document.querySelector("#juni");
    const volgt = document.querySelector("#volgt"); 

    april.classList.toggle("zien"); 
    if (januari.classList.contains('zien') || maart.classList.contains('zien') || februari.classList.contains('zien') || mei.classList.contains('zien') || juni.classList.contains('zien') || volgt.classList.contains('zien')) {
        januari.classList.remove('zien');
        maart.classList.remove('zien');
        februari.classList.remove('zien');
        mei.classList.remove('zien');
        juni.classList.remove('zien');
        volgt.classList.remove('zien');
    }
    else;
}

function me(){
    const januari = document.querySelector("#januari");
    const februari = document.querySelector("#februari");
    const maart = document.querySelector("#maart");
    const april = document.querySelector("#april");
    const mei = document.querySelector("#mei");
    const juni = document.querySelector("#juni");
    const volgt = document.querySelector("#volgt"); 

    mei.classList.toggle("zien"); 
    if (januari.classList.contains('zien') || maart.classList.contains('zien') || april.classList.contains('zien') || februari.classList.contains('zien') || juni.classList.contains('zien') || volgt.classList.contains('zien')) {
        januari.classList.remove('zien');
        maart.classList.remove('zien');
        april.classList.remove('zien');
        februari.classList.remove('zien');
        juni.classList.remove('zien');
        volgt.classList.remove('zien');
    }
    else;
}

function jun(){
    const januari = document.querySelector("#januari");
    const februari = document.querySelector("#februari");
    const maart = document.querySelector("#maart");
    const april = document.querySelector("#april");
    const mei = document.querySelector("#mei");
    const juni = document.querySelector("#juni");
    const volgt = document.querySelector("#volgt"); 

    juni.classList.toggle("zien"); 
    if (februari.classList.contains('zien') || maart.classList.contains('zien') || april.classList.contains('zien') || mei.classList.contains('zien') || januari.classList.contains('zien') || volgt.classList.contains('zien')) {
        februari.classList.remove('zien');
        maart.classList.remove('zien');
        april.classList.remove('zien');
        mei.classList.remove('zien');
        januari.classList.remove('zien');
        volgt.classList.remove('zien');
    }
    else;
}

function nog(){
    const januari = document.querySelector("#januari");
    const februari = document.querySelector("#februari");
    const maart = document.querySelector("#maart");
    const april = document.querySelector("#april");
    const mei = document.querySelector("#mei");
    const juni = document.querySelector("#juni");
    const volgt = document.querySelector("#volgt"); 

    if(volgt.classList.contains('zien')){
    }
    else{
        volgt.classList.toggle("zien"); 
        if (februari.classList.contains('zien') || maart.classList.contains('zien') || april.classList.contains('zien') || mei.classList.contains('zien') || juni.classList.contains('zien') || januari.classList.contains('zien')) {
            februari.classList.remove('zien');
            maart.classList.remove('zien');
            april.classList.remove('zien');
            mei.classList.remove('zien');
            juni.classList.remove('zien');
            januari.classList.remove('zien');
        }
        else;
    };
}