<template>
    <div class="h-auto w-full flex justify-center items-center bg-white">
        <div class="container"><!-- h-4/5 mx-4 lg:mx-0 w-full -->
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.037173726494!2d-0.40829610000000005!3d39.468488900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f74e1b1b461%3A0xb39d8ea7de8387f5!2sConsorcio%20Hospital%20General%20Universitario%20de%20Val%C3%A8ncia!5e0!3m2!1ses!2ses!4v1706009019260!5m2!1ses!2ses"
                width="1300" height="450" style="border:0; max-width: 100%;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            <!-- <no-ssr>
                <l-map :zoom="zoom" :center="center">
                    <l-tile-layer :url="url" />
                    <l-marker :lat-lng="marker" />
                    <l-icon-default :image-path="path" />
                </l-map>
            </no-ssr> -->
        </div>
    </div>
</template>
  
<!-- <script>
export default {
    name: "Mapa",
}
</script>
  
<script>
let Vue2Leaflet = {}
if (process.client) Vue2Leaflet = require('vue2-leaflet')

export default {
    name: "Map",
    components: {
        'l-map': Vue2Leaflet.LMap,
        'l-tile-layer': Vue2Leaflet.LTileLayer,
        'l-marker': Vue2Leaflet.LMarker,
    },
    data() {
        return {
            zoom: 16,
            path: '/images/',
            center: [39.4681277, -0.4081521],
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            marker: (process.client) ? L.latLng(39.4681277, -0.4081521) : null,
        }
    }
}
</script> -->