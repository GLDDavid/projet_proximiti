// permet l'affichage de la carte en zoom 13 avec la lat et long de TOURS.
let mymap = L.map('mapid').setView([47.3833, 0.6833], 12);


// appel api 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGF2aWRnbGQiLCJhIjoiY2tybHc3YjBhNDFnaTJ1cDhhamVnMXE4OSJ9.eiEyQpKHMEBW8gPFmqE1rg'
}).addTo(mymap);

// permet de mettre un marker
let markerCefim = L.marker([47.3633906, 0.6814514]).addTo(mymap);

// permet de mettre un cerle
let circle = L.circle([47.3910171, 0.68927], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);


// les popup sur les marker et sur les cercle
markerCefim.bindPopup("<b>CEFIM</b><br>L'école du web et des réseaux").openPopup();
circle.bindPopup("<b>MAIRIE</b><br>I am a circle.");

// popup qui ouvre une fenêtre avec un commentaire
let popup = L.popup()
    .setLatLng([47.3633906, 0.68927])
    .setContent("Je suis une popup autonome.")
    .openOn(mymap);


// permet de créer une popup sur la carte avec la récupération de la lat et lon
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("Vous avez cliqué sur la carte à " + e.latlng.toString())
            .openOn(mymap);
    }
    
    mymap.on('click', onMapClick);

// permet de creer des icons
    var barIcon = L.icon({
        iconUrl: './img/bars.png',
        //shadowUrl: 'leaf-shadow.png',

        iconSize:     [35, 45], // size of the icon
        // shadowSize:   [50, 64], // size of the shadow
        // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        // shadowAnchor: [4, 62],  // the same for the shadow
        // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.marker([47.3913906, 0.6801514], {icon: barIcon}).addTo(mymap);



