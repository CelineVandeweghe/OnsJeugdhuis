"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(){
    const knop = document.querySelector("#submit");
    knop.classList.remove;
    knop.className = 'normal';
    document.querySelector("#submit").addEventListener("onmouseover", hover);
    document.querySelector("#submit").addEventListener("click", check);
}

function hover(){
    knop.classList.remove;
    knop.className = 'hover';
}

function next(){
    event.preventDefault();

    const para = document.querySelector("#bedankt");

    para.innerHTML = 'Bedankt voor je bericht. We sturen je zo snel mogelijk een antwoord.'
    
    const knop = document.querySelector("#submit");
    knop.classList.remove;
    knop.className = 'change';

    document.querySelector("#submit").addEventListener("click", reloadPage);
}

function check(){
    const c1 = document.querySelector("#lastname");
    const c2 = document.querySelector("#firstname");
    const c3 = document.querySelector("#mail");
    const c4 = document.querySelector("#tele");
    const c5 = document.querySelector("#bericht");

    if (c1.value !== "", c2.value !== "", c3.value !== "", c4.value !== "", c5.value !== ""){
        next();
    } else {
        alert("Niet alles is ingevuld.")
    }
}

function reloadPage(){
    window.location.reload();
}