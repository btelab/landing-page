<template>
    <div class="h-screen w-full flex justify-center items-center bg-white">
        <div class="container h-4/5 mx-4 lg:mx-0 w-full">
            <no-ssr>
                <l-map :zoom="zoom" :center="center">
                    <l-tile-layer :url="url" />
                    <l-marker :lat-lng="marker" />
                    <l-icon-default :image-path="path" />
                </l-map>
            </no-ssr>
        </div>
    </div>
</template>
  
<script>
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
                marker: (process.client)?L.latLng(39.4681277, -0.4081521):null,
            }
        }
}
</script>