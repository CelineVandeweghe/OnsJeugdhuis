"use strict";

document.addEventListener("DOMContentLoaded", init);

const kiesExtra = [];
const vorigeBestellingen = [];

function init() {
    const nav = document.querySelector("nav");
    const fase1 = document.querySelector("#fase1");
    const fase2 = document.querySelector("#fase2");
    const fase3 = document.querySelector("#fase3");
    const fase4 = document.querySelector("#fase4");

    fase1.classList.remove;
    fase2.classList.remove;
    fase3.classList.remove;
    fase4.classList.remove;
    nav.classList.remove;
    fase1.className = 'shown';
    fase2.className = 'hid';
    fase3.className = 'hid';
    fase4.className = 'hid';

    console.log(nav);


    const lastCall = localStorage.getItem("vorigeBestel");
    const zieVorige = JSON.parse(lastCall);
    console.log(zieVorige);

    if(zieVorige === null){

    }
    else{
        vorig.innerHTML = `<h3>Dit was je laatste boeking</h3>
        <ul>
            <li><strong>Jouw zaalkeuze:</strong> ${zieVorige[0]}</li>
            <li><strong>De datum:</strong> ${zieVorige[1]}</li>
            <li><strong>Start- en einduur:</strong> ${zieVorige[2]} tot ${zieVorige[3]}</li>
            <li><strong>Je boekte de zaal voor ${zieVorige[4]} personen</strong></li>
            <li><strong>De reden voor je boeking was:</strong> ${zieVorige[5]}</li>
            <li><strong>De gevraagde extra's:</strong>${zieVorige[6]}</li>
        </ul>`;
    }
    

    document.querySelector("#f1").addEventListener("click", two);
    document.querySelector("#f2").addEventListener("click", two);
    document.querySelector("#f3").addEventListener("click", two);
}

function two(e) {
    fase1.classList.remove;
    fase2.classList.remove;
    fase3.classList.remove;
    fase4.classList.remove;
    fase1.className = 'hid';
    fase2.className = 'shown';
    fase3.className = 'hid';
    fase4.className = 'hid';

    const keuze = document.querySelector("#keuze");
    const overzicht = document.querySelector("#overzicht");
    const vorig = document.querySelector("#vorig");

    console.log(e.target.innerHTML);
    const zaalKeuze = e.target.innerHTML;
    vorigeBestellingen.push(zaalKeuze);
    keuze.innerHTML = `<p><strong>De zaal van uw keuze:</strong> <br>${zaalKeuze}</p>`;
    overzicht.innerHTML = `<p><strong>De zaal van je keuze:</strong> ${zaalKeuze} </p>`;
    vorig.innerHTML = "";

    document.querySelector("#naar3").addEventListener("click", check)
}

function check(e){
    const p1 = document.querySelector("#datum");
    const p2 = document.querySelector("#startuur");
    const p3 = document.querySelector("#einduur");``
    const overzicht = document.querySelector("#overzicht");

    if (p1.value !== "", p2.value !== "", p3.value !== ""){
        console.log("Alles is ingevuld.");
        console.log(p1.value);
        console.log(p2.value);
        console.log(p3.value);

        const dagKeuze = p1.value;
        vorigeBestellingen.push(dagKeuze);
        keuze.innerHTML += `<p><strong>De dag van uw keuze:</strong> <br>${dagKeuze}</p>`;
        overzicht.innerHTML += `<p><strong>De dag van uw keuze:</strong> ${dagKeuze}`;
        
        const startKeuze = p2.value;
        vorigeBestellingen.push(startKeuze);
        const slotKeuze = p3.value;
        vorigeBestellingen.push(slotKeuze);

        keuze.innerHTML += `<p>Je koos voor een reservatie van ${startKeuze} tot ${slotKeuze}</p>`;
        overzicht.innerHTML += `<p>Je koos voor een reservatie van ${startKeuze} tot ${slotKeuze}</p>`;
        three();
    } else {
        alert("Niet alles is ingevuld.")
    }
}

function three(){
    fase1.classList.remove;
    fase2.classList.remove;
    fase3.classList.remove;
    fase4.classList.remove;
    fase1.className = 'hid';
    fase2.className = 'hid';
    fase3.className = 'shown';
    fase4.className = 'hid';

    document.querySelector("#naar4").addEventListener("click", checkTwee)
}

function four(){
    const overzicht = document.querySelector("#overzicht");



    if(document.querySelector("#popc").checked) {
        kiesExtra.push(" Popcornmachine");
    }
    else{
    }
    
    if(document.querySelector("#stoelen").checked) {
        kiesExtra.push(" 20 extra stoelen");
    }
    else{
    }
    
    if(document.querySelector("#tafel").checked) {
        kiesExtra.push(" 2 extra tafels");
    }
    else{
    }
    
    if(document.querySelector("#drank").checked) {
        kiesExtra.push(" drankconsumpties");
    }
    else{
    }
    
    if(document.querySelector("#snacks").checked) {
        kiesExtra.push(" snacks");
    }
    else{
    }
    

    if(kiesExtra.length === 0){
        kiesExtra.push(" /");
        overzicht.innerHTML += `<p><strong>Je koos voor deze extra's:</strong> ${kiesExtra}</p>`;
    }
    else{
        overzicht.innerHTML += `<p><strong>Je koos voor deze extra's:</strong> ${kiesExtra}</p>`;
    }
    
    vorigeBestellingen.push(kiesExtra);
    keuze.innerHTML = "";

    console.log(vorigeBestellingen);

    fase1.classList.remove;
    fase2.classList.remove;
    fase3.classList.remove;
    fase4.classList.remove;
    fase1.className = 'hid';
    fase2.className = 'hid';
    fase3.className = 'hid';
    fase4.className = 'shown';

    const vorigeKeuze = JSON.stringify(vorigeBestellingen);
    localStorage.setItem("vorigeBestel", vorigeKeuze);

    document.querySelector("#naar1").addEventListener("click", reloadPage);
}

function checkTwee(e){
    const personen = document.querySelector("#personen");
    const reden = document.querySelector("#reden");

    if (personen.value !== "", reden.value !== ""){
        console.log("Alles is ingevuld");
        console.log(personen.value);
        vorigeBestellingen.push(personen.value);
        overzicht.innerHTML += `<p>De zaal is gereserveerd voor ${personen.value} personen</p>`;
        console.log(reden.value);
        vorigeBestellingen.push(reden.value);
        overzicht.innerHTML += `<p><strong>De reden van je reservatie:</strong> ${reden.value}</p>`;
        four();
    } else {
        alert("Niet alle verplichte velden zijn ingevuld (nl. aantal personen en reden)")
    }
}

function reloadPage(){
    window.location.reload();
}
