google.maps.event.addDomListener(window, 'load', init);

function init() {
	'use strict';
	
	var mapOptions = {
		zoom: 14,
		center: new google.maps.LatLng(40.672324, -74.357372), // New York
		styles: 
		[
			{
				"featureType": "administrative",
				"elementType": "all",
				"stylers": [
					{
						"saturation": "-100"
					}
				]
			},
			{
				"featureType": "administrative.province",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 65
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": "50"
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": "-100"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "all",
				"stylers": [
					{
						"lightness": "30"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "all",
				"stylers": [
					{
						"lightness": "40"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"hue": "#ffff00"
					},
					{
						"lightness": -25
					},
					{
						"saturation": -97
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels",
				"stylers": [
					{
						"lightness": -25
					},
					{
						"saturation": -100
					}
				]
			}
		]
	};

	var mapElement = document.getElementById('map');

	var map = new google.maps.Map(mapElement, mapOptions);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.672324, -74.357372),
		map: map,
		icon: 'http://unicoderbd.com/theme/html/patron/fullwidth/images/map-marker.png',
		title: 'Snazzy!'
	});
}
