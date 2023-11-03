<!-- <template>
    <v-card>
        <v-card-title>
            Most searched locations
        </v-card-title>

        <v-card-text>
            <l-map style="height: 500px;" :zoom="zoom" :center="center" @update:zoom="updateZoom">
                <l-tile-layer :url="tileLayerUrl" :attribution="attribution"></l-tile-layer>

                <l-marker v-for="(city, index) in cities" :key="index" :lat-lng="city.latLng" @click="onMarkerClick(city)">
                    <l-popup>{{ city.name }} (Density: {{ city.density }})</l-popup>
                </l-marker>

                <l-control-zoom position="topright"></l-control-zoom>
            </l-map>
        </v-card-text>
    </v-card>
</template>

<script>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import MapChart from 'vue2-map-chart';
// import 'vue2-map-chart/dist/style.css';
import { LMap, LTileLayer, LMarker, LPopup, LControlZoom } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        LControlZoom,
    },
    data() {
        return {
            center: [51.505, -0.09], // Initial map center coordinates
            zoom: 13, // Initial zoom level
            tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            cities: [
                { name: 'Hanoi', isoCode: 'VN-HN', density: 500 },
                { name: 'Hung Yen', isoCode: 'VN-66', density: 500 },
                // Add more cities as needed
            ],
        };
    },
    methods: {
        updateZoom(newZoom) {
            this.zoom = newZoom;
        },
        onMarkerClick(city) {
            alert(`Clicked on ${city.name}`);
        },
    }
}
</script> -->

<template>
    <div >
        <l-map style="height: 500px;" :zoom="zoom" :center="center" @update:zoom="updateZoom">
            <l-tile-layer :url="tileLayerUrl" :attribution="attribution"></l-tile-layer>

            <l-marker v-if="cities.length > 0" v-for="city in cities" :key="city.name" :lat-lng="city.latlng"
                @click="onMarkerClick(city.name)">
                <!-- <l-icon :icon-size="dynamicSize" icon-url="static/images/baseball-marker.png"></l-icon> -->
                <l-tooltip>{{ city.name }}: {{ city.density }} </l-tooltip>
            </l-marker>

            <l-control-zoom position="topright"></l-control-zoom>
        </l-map>
    </div>
</template>
  
<script>
import { LMap, LTileLayer, LMarker, LControlZoom, LTooltip, LIcon } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import Vue2LeafletGeosearch from 'vue2-leaflet-geosearch';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {

    components: {
        LMap,
        LTileLayer,
        LMarker,
        LTooltip,
        LIcon,
        LControlZoom,
        'l-geosearch': Vue2LeafletGeosearch,
    },
    async mounted() {
        await this.citilist()
    },
    data() {
        return {
            zoom: 4,
            center: [25.0583, 120.2772],
            tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            cities: [
                // VN: { name: 'Vietnam', isoCode: 'VN', density: 500 },
                // { name: 'Hanoi', isoCode: '', latlng: [0, 0], density: 20 },
                // Add more cities as needed
            ],
            // locate: {
            //     Hanoi: 'VN-HN',
            //     HungYen: 'VN-66',
            //     HaiDuong: 'VN-61',
            //     HaiPhong: 'VN-HP',
            //     BacNinh: 'VN-56',
            //     BacGiang: 'VN-54',
            //     VinhPhuc: 'VN-70',
            //     HaNam: 'VN-63',
            //     HoaBinh: 'VN-14',
            //     Danang: 'VN-DN',
            //     NhaTrang: ''
            // }

        };
    },
    computed: {
        geosearchProvider() {
            return new OpenStreetMapProvider();
        },

    },
    methods: {
        updateZoom(newZoom) {
            this.zoom = newZoom;
        },
        onMarkerClick(isoCode) {
            // alert(`Clicked on ${this.cities[isoCode].name}`);
        },
        async getLatLng(isoCode) {
            console.log(isoCode)
            const results = await this.geosearchProvider.search({ query: isoCode });

            const firstResult = results[0];
            console.log([firstResult.y, firstResult.x].map(str => parseFloat(str)));
            return [firstResult.y, firstResult.x].map(str => parseFloat(str));
        },
        // async getISOCode(name) {
        //     const results = await this.geosearchProvider.search({ query: name });
        //     console.log(results[0])
        //     return results[0]
        // },

        async citilist() {
            let cities = [{ name: 'Hanoi', density: 20 }, { name: 'Japan', density: 30 }]


            for (const city of cities) {
                // let code = await this.getISOCode(city.name)
                // let isoCode = this.locate[city.name]
                let latlng = await this.getLatLng(city.name)

                city.latlng = latlng
            }
            this.cities = cities
        },

        // textstyle() {
        //     let textlength = this.formatFigure(this.statistics).figure.length + this.formatFigure(this.statistics).unit.length
        //     switch (textlength) {
        //         // case 4:
        //         //   return 'length4'
        //         case 5:
        //             return 'length5'
        //         case 6:
        //             return 'length6'
        //         default:
        //             return 'length1'
        //     }
        // }

    },
};
</script>

<style>
.length6 {
  font-size: 5.5rem !important;
}

.length5 {
  font-size: 5.75rem !important;
}
.length1 {
  font-size: 6rem !important;
}

</style>