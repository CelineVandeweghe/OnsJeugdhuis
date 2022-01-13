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
    const para = h2.nextSibling.nextSibling;

    switch (parseInt(para.id)) {
        case 1:
            setTimeout(() => {  para.innerHTML = "Wij zijn een jeugdhuis voor en door jongeren. Dit wil zeggen dat iedereen van 14-30 jaar welkom is om langs te komen of vrijwilliger te worden."; }, 1500);
            break;
        case 2:
            setTimeout(() => {  para.innerHTML = "Ons Jeugdhuis is altijd op zoek naar nieuwe vrijwilligers. Wil je graag een activiteit organiseren? Of meehelpen met een feestje? Eens een avond achter de bar staan? Neem dan zeker contact met ons op en we ontvangen je met open armen!"; }, 1500);
            break;
        case 3:
            setTimeout(() => {  para.innerHTML = "We organiseren verschillende Open Cafés tijdens onze openingsuren, maar ook extra activiteiten zoals themafeestjes, quizzen, workshops... Neem zeker een kijkje op onze kalender door hier te klikken. Vind je niet echt iets dat je ligt? Neem dan contact met ons op en we kijken of we iets kunnen toevoegen aan ons aanbod. Wil je zelf iets organiseren? Dat kan ook. Neem dan ook zeker contact op."; }, 1500);
            break;
    }
}

function shrink(e){
    const h2 = e.target;
    
    const para = h2.nextSibling.nextSibling;

    setTimeout(() => {  para.innerHTML = ""; }, 500);
}

function postPara(){
    const para1 = document.querySelector("#p1");
    const para2 = document.querySelector("#p2");
    const para3 = document.querySelector("#p3");
    para1.innerHTML = "Wij zijn een jeugdhuis voor en door jongeren. Dit wil zeggen dat iedereen van 14-30 jaar welkom is om langs te komen of vrijwilliger te worden.";
    para2.innerHTML = "Ons Jeugdhuis is altijd op zoek naar nieuwe vrijwilligers. Wil je graag een activiteit organiseren? Of meehelpen met een feestje? Eens een avond achter de bar staan? Neem dan zeker contact met ons op en we ontvangen je met open armen!";
    para3.innerHTML = "We organiseren verschillende Open Cafés tijdens onze openingsuren, maar ook extra activiteiten zoals themafeestjes, quizzen, workshops... Neem zeker een kijkje op onze kalender door hier te klikken. Vind je niet echt iets dat je ligt? Neem dan contact met ons op en we kijken of we iets kunnen toevoegen aan ons aanbod. Wil je zelf iets organiseren? Dat kan ook. Neem dan ook zeker contact op.";
}