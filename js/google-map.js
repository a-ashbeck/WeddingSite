// var google;

// // function init() {
// //     // Basic options for a simple Google Map
// //     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
// //     var myLatlng = new google.maps.LatLng(41.9579141, -87.7672749);

// //     var mapOptions = {
// //         // How zoomed in you want the map to start at (always required)
// //         zoom: 15,

// //         // The latitude and longitude to center the map (always required)
// //         center: myLatlng,

// //         // How you would like to style the map. 
// //         scrollwheel: false,
// //         styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#b1b881" }, { "lightness": 100 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#b1b881" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#b1b881" }, { "lightness": 90 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#b1b881" }, { "lightness": 50 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#b1b881" }, { "lightness": 25 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#b1b881" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#b1b881" }, { "lightness": 7 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#b1b881" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#b1b881" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#b1b881" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#b1b881" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#b1b881" }, { "lightness": 17 }] }]
// //     };



// //     // Get the HTML DOM element that will contain your map 
// //     // We are using a div with id="map" seen below in the <body>
// //     var mapElement = document.getElementById('map');

// //     // Create the Google Map using out element and options defined above
// //     var map = new google.maps.Map(mapElement, mapOptions);

// //     var addresses = ['1'];

// //     for (var x = 0; x < addresses.length; x++) {
// //         $.getJSON('http://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJUcuZTQ3MD4gRWageqNZ6Nto&key=IzaSyBHfW-_kyB1LP4UcaQ1DhWDrdt0YKFbCEo', null, function(data) {
// //             var p = data.results[0].geometry.location
// //             var latlng = new google.maps.LatLng(p.lat, p.lng);
// //             new google.maps.Marker({
// //                 position: latlng,
// //                 map: map,
// //                 icon: 'img/loc.png'
// //             });

// //         });
// //     }

// // }

// function initMap() {
//     // The location of biagio
//     var biagio = {
//         lat: 41.9579141,
//         lng: -87.7672749
//     };

//     // The map, centered at biagio
//     var map = new google.maps.Map(
//         document.getElementById('map'), {
//             zoom: 15,
//             center: biagio
//         }
//     );

//     var contentString =
//         '<div id="content">' +
//         '<div id="siteNotice">' +
//         '</div>' +
//         '<h1 id="firstHeading" class="firstHeading">Biagio!</h1>' +
//         '<div id="bodyContent">' +
//         '<p>4242 N Central Ave, Chicago, IL 60634</p> ' +
//         '<p><a target="_blank" href="https://www.google.com/maps/dir/41.9666134,-87.7565042/Biagio+Events+and+Catering,+4242+N+Central+Ave,+Chicago,+IL+60634/@41.9630008,-87.7618131,16z/data=!4m17!1m6!3m5!1s0x880fcc0d4d99cb51:0xda367ad6a81ea859!2sBiagio+Events+and+Catering!8m2!3d41.9580477!4d-87.7675412!4m9!1m1!4e1!1m5!1m1!1s0x880fcc0d4d99cb51:0xda367ad6a81ea859!2m2!1d-87.7675412!2d41.9580477!3e0?hl=en">Click here for directions</a>' +
//         '<p>Website: <a target="_blank" href="https://www.biagioevents.com/">' +
//         'www.biagioevents.com</a></p>' +
//         '</div>' +
//         '</div>';


//     var infowindow = new google.maps.InfoWindow({
//         content: contentString,
//         position: biagio,
//         map: map
//     });

//     // The InfoWindow, positioned at biagio
//     infowindow.open(map);
// }

// google.maps.event.addDomListener(window, 'load', initMap);