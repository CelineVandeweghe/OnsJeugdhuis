"use strict";

document.addEventListener("DOMContentLoaded", schermgrootte);

function schermgrootte(){
    console.log(window.innerWidth);
    if (window.innerWidth > 588){
        go();
        console.log("groot genoeg");
    }
    else{
        postPara();
        console.log("te klein")
    }
}

function go() {
    const h2s = document.querySelectorAll("h2");

    h2s.forEach(h2 => {
        h2.addEventListener("mouseover", grow);
        h2.addEventListener("mouseout", shrink);
    });
}

function grow(e){
    const h2 = e.target;
    
    const para = h2.parentElement.nextSibling.nextSibling;

    switch (parseInt(para.id)) {
        case 1:
            setTimeout(() => {  para.innerHTML = "Wij zijn een jeugdhuis. Dat is een vereniging voor en door jongeren. <br>Leer ons kennen door hier te klikken."; }, 1500);
            break;
        case 2:
            setTimeout(() => {  para.innerHTML = "Ons café, lounge en droomzaal zijn te huur. Je kan bij ons terecht voor al jouw activiteiten. <br>Klik om de details te bekijken!"; }, 1500);
            break;
        case 3:
            setTimeout(() => {  para.innerHTML = "Op 9 januari is er onze nieuwste filmavond. Jij komt toch ook?"; }, 1500);
            break;
        case 4:
            setTimeout(() => {  para.innerHTML = "Ons Jeugdhuis is altijd op zoek naar nieuwe vrijwilligers. Wil je graag een activiteit organiseren? Of meehelpen met een feestje? Eens een avond achter de bar staan? Neem dan zeker contact met ons op en we ontvangen je met open armen!"; }, 1500);
            break;
        case 5:
            setTimeout(() => {  para.innerHTML = "We zijn een jeugdhuis voor en door jongeren. En er is altijd plaats genoeg. Kom zeker eens een kijkje nemen. Je vindt hier vast jouw plaats. Kom je het liefst tijdens een open Café-avond of een activiteit? Het kan allebei! Klik hier voor onze contactgegevens."; }, 1500);
            break;
    }
}

function shrink(e){
    const h2 = e.target;
    
    const para = h2.parentElement.nextSibling.nextSibling;

    setTimeout(() => {  para.innerHTML = ""; }, 500);
}

function postPara(){
    const para1 = document.querySelector("#p1");
    const para2 = document.querySelector("#p2");
    const para3 = document.querySelector("#p3");
    const para4 = document.querySelector("#p4");
    const para5 = document.querySelector("#p5");
    para1.innerHTML = "Wij zijn een jeugdhuis. Dat is een vereniging voor en door jongeren. <br>Leer ons kennen door hier te klikken.";
    para2.innerHTML = "Ons café, lounge en droomzaal zijn te huur. Je kan bij ons terecht voor al jouw activiteiten. <br>Klik om de details te bekijken!"; 
    para3.innerHTML = "Op 9 januari is er onze nieuwste filmavond. Jij komt toch ook?";
    para4.innerHTML = "Ons Jeugdhuis is altijd op zoek naar nieuwe vrijwilligers. Wil je graag een activiteit organiseren? Of meehelpen met een feestje? Eens een avond achter de bar staan? Neem dan zeker contact met ons op en we ontvangen je met open armen!";
    para5.innerHTML = "We zijn een jeugdhuis voor en door jongeren. En er is altijd plaats genoeg. Kom zeker eens een kijkje nemen. Je vindt hier vast jouw plaats. Kom je het liefst tijdens een open Café-avond of een activiteit? Het kan allebei! Klik hier voor onze contactgegevens.";
}
