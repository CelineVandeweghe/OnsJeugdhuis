"use strict";

document.addEventListener("DOMContentLoaded", init);

let map;

function init() {
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(function(pos) {
            showLocationNow(pos);
            showLocationPlace();
        },
			locationDenied);
	} else {
	}
}

function locationDenied(reason) {
	console.log(reason.message);
    const here = document.querySelector("#map");
    here.innerHTML = `<p>Geen geolocatie beschikbaar</p>`;
}

function showLocationNow(pos) {
	// bepalen van de coördinaten
    const coords = pos.coords;

    const lat = coords.latitude;
    const lon = coords.longitude;

	// centrum bepalen voor kaart én pin
    const center = ol.proj.fromLonLat([lon, lat]);

	// oproepen hulpfuncties om kaart én pin te bouwen
    map = buildMap(center);
    const marker = buildMarker(center);

	// pin toevoegen aan kaart
    map.addOverlay(marker);
}

function showLocationPlace() {
    
    console.log("begin functie 2")
    
    const lat = 50.814709;
    const lon = 3.258911;

    const center = ol.proj.fromLonLat([lon, lat]);

    console.log("functie 2 punt 2")

    const marker2 = buildMarker2(center);

    console.log("functie 2 punt 3")

    map.addOverlay(marker2);

    console.log("einde functie 2")


    }

function buildMap(center) {
	// hier sturen we een Map-object terug, met verschillende
	// eigenschappen
	// Dit vereist tevens een div met id "map" op de pagina
	
    return new ol.Map({
        target: "map",
        layers: [
        	// één laag met daarop een OpenStreetMap
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        // standaard centreren we op ons centrum
        // we zoomen in tot niveau 16
        view: new ol.View({
            center: center,
            zoom: 10
        })
    });
}

function buildMarker(center) {
	// hier sturen we een Overlay-object terug, met daarop
	// onze pin. Dit vereist dat er een pin is met id marker.
   return new ol.Overlay({
        position: center,
        element: document.getElementById("marker")
    });
}

function buildMarker2(center) {
	// hier sturen we een Overlay-object terug, met daarop
	// onze pin. Dit vereist dat er een pin is met id marker.
   return new ol.Overlay({
        position: center,
        element: document.getElementById("marker2")
    });
}