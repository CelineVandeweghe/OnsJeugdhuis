"use strict";

document.addEventListener("DOMContentLoaded", init);


function init() {
    const ham = document.querySelector("nav");
    const test = document.querySelector("#test");
    ham.classList.add("hidden");
    test.classList.add("test");

    document.querySelector("#hamburger").addEventListener("click", hamburger);
    window.addEventListener('resize', function () { 
        "use strict";
        window.location.reload(); 
    });
}

function hamburger(){
    const line1 = document.querySelector("#line1");
    const line2 = document.querySelector("#line2");
    const line3 = document.querySelector("#line3");
    const test = document.querySelector("#test");
    
    
    line1.classList.toggle("line1");
    line2.classList.toggle("line2");
    line3.classList.toggle("line3");
    test.classList.toggle("test2");


    setTimeout(navigatie, 100);
}

function navigatie(){
    const ham = document.querySelector("nav");
    ham.classList.toggle("hidden");
}