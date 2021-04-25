import React, {useState, useEffect} from "react";
import * as date from "./data/data.json";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import MapContent from "./mapContent";
import pin from '../../assets/pin.svg';
import plusIcon from '../../assets/plus.svg';

export default function Map() {
    useEffect(() => {

        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
        mapboxgl.accessToken = 'pk.eyJ1Ijoia293YWxwMTAyIiwiYSI6ImNrbnU0MW94djA5N2cycG1uczQ0M3E0Z2MifQ.V67f-C4Dp8tWak7dqNoWag';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-77.034084, 38.909671], // starting position [lng, lat]
            zoom: 13 // starting zoom
        });
        date.features.forEach(function (store, i) {
            store.properties.id = i;
        });

        map.on('load', function (e) {
            map.addSource('places', {
                type: 'geojson',
                data: date.default
            });
            addMarkers(map);
        });

        map.on('click', function (e) {
            const coordinates = document.getElementById('coordinates');
            //TODO: save it to the backend to add it to the list
            const el = document.createElement('div');
            /* Assign a unique `id` to the marker. */
            el.id = "marker-" + Date.now();
            /* Assign the `marker` class to each marker for styling. */
            el.className = 'marker';
            const marker = new mapboxgl.Marker(el, {
                draggable: true
            }).setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(map);
            const onDragEnd = (e) => {

                const lngLat = marker.getLngLat();
                coordinates.style.display = 'block';
                coordinates.innerHTML =
                    'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
            }

            marker.on('dragend', onDragEnd);
            /* Determine if a feature in the "locations" layer exists at that point. */
            const features = map.queryRenderedFeatures(e.point, {
                layers: ['locations']
            });

            /* If yes, then: */
            if (features.length) {
                const clickedPoint = features[0];
                /* Fly to the point */
                flyToStore(clickedPoint, map);

                /* Close all other popups and display popup for clicked store */
                createPopUp(clickedPoint, map);

                /* Highlight listing in sidebar (and remove highlight for all other listings) */
                const activeItem = document.getElementsByClassName('active');
                if (activeItem[0]) {
                    activeItem[0].classList.remove('active');
                }
                const listing = document.getElementById('listing-' + clickedPoint.properties.id);
                listing.classList.add('active');
            }

        });

        buildLocationList(date.default, map);
    }, []);

    function buildLocationList(data, map) {
        data.features.forEach(function (store, i) {
            /**
             * Create a shortcut for `store.properties`,
             * which will be used several times below.
             **/
            const prop = store.properties;

            /* Add a new listing section to the sidebar. */
            const listings = document.getElementById('listings');
            const listing = listings.appendChild(document.createElement('div'));
            /* Assign a unique `id` to the listing. */
            listing.id = "listing-" + data.features[i].properties.id;
            /* Assign the `item` class to each listing for styling. */
            listing.className = 'item';
            const img = listing.appendChild(document.createElement('img'));
            img.src = pin;
            img.style.height = "40px";
            img.style.width = "40px";
            /* Add the link to the individual listing created above. */
            const link = listing.appendChild(document.createElement('a'));
            link.href = '#';
            link.className = 'title';
            link.id = "link-" + prop.id;
            // link.innerHTML = prop.address;
            listenerForClick(link, map);

            /* Add details to the individual listing. */
            const details = link.appendChild(document.createElement('div'));
            details.innerHTML = prop.city;
            const plus = details.appendChild(document.createElement('img'));
            plus.src = plusIcon;
            plus.style.height = "16px";
            plus.style.width = "16px";

            if (prop.distance) {
                const roundedDistance = Math.round(prop.distance * 100) / 100;
                details.innerHTML +=
                    '<p><strong>' + roundedDistance + ' miles away</strong></p>';
            }

        });
    }


    function flyToStore(currentFeature, map) {
        map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
        });
    }

    function listenerForClick(link, map) {
        const data = date.default;
        link.addEventListener('click', function (e) {
            for (let i = 0; i < data.features.length; i++) {
                if (this.id === "link-" + data.features[i].properties.id) {
                    const clickedListing = data.features[i];
                    document.querySelector('.map-container').classList.remove('open');
                    const nav = document.querySelector('nav');
                    nav.style.opacity = "1";
                    nav.style.zIndex = "1";

                    flyToStore(clickedListing, map);
                    createPopUp(clickedListing, map);
                }
            }
            const activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });
    }

    function createPopUp(currentFeature, map) {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();

        const popup = new mapboxgl.Popup({closeOnClick: false})
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML('<h3>' + currentFeature.properties.city + '</h3>')
            .addTo(map);
    }

    function addMarkers(map) {
        /* For each feature in the GeoJSON object above: */
        date.default.features.forEach(function (marker) {
            /* Create a div element for the marker. */
            const el = document.createElement('div');
            /* Assign a unique `id` to the marker. */
            el.id = "marker-" + marker.properties.id;
            /* Assign the `marker` class to each marker for styling. */
            el.className = 'marker';

            /**
             * Create a marker using the div element
             * defined above and add it to the map.
             **/
            //TODO: save new position to the backend to add it and call again reset createPopUp() function to have pop up in right place
            new mapboxgl.Marker(el, {offset: [0, -23], draggable: true})
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);

            el.addEventListener('click', function (e) {
                /* Fly to the point */
                flyToStore(marker, map);
                /* Close all other popups and display popup for clicked store */
                createPopUp(marker, map);
                /* Highlight listing in sidebar */
                const activeItem = document.getElementsByClassName('active');
                e.stopPropagation();
                if (activeItem[0]) {
                    activeItem[0].classList.remove('active');
                }
                const listing = document.getElementById(
                    'listing-' + marker.properties.id
                );
                listing.classList.add('active');
            });
        });
    }

    return (
        <MapContent displayInfo={true}>
        </MapContent>
    );
}
