<template>
    <b-container>
        <span>Number of routes: {{ routesCount }}</span>
        <route-file 
            v-for="route in routes"
            :key="route.id"
            v-bind:route="route">
        </route-file>        
    </b-container>
</template>

<script>
import RouteFile from './GPXRouteFile'
export default {
    components:{
        RouteFile
    },
    name: 'GPXRouteContainer',
    computed:{
        routesCount: function(){
            return this.routes.length
        }
    },
    data () {
        return {
            routes: [
                { id: 1, name: "Carding Mill Canter", description: "The route follows rocky and grassy tracks, has 4 major climbs, 2 steep grassy descents, 3 minor road crossings and 2 stream crossings. Its 7.8km long with 580mtrs of ascent. As short Shropshire races go, this one is HARD!", url: "https://raw.githubusercontent.com/richb8/gpxroutes/master/routes/Carding_Mill_Canter.gpx" },
                { id: 2, name: "Long Mynd Valleys", description: "Long Mynd Valleys Race, starting in Carding Mill Valley, Event run in conjunction with the Titterstone Clee Race - part of The Shropshire Winter Series.", url: "https://raw.githubusercontent.com/richb8/gpxroutes/master/routes/Long_Mynd_Valleys.gpx" }
            ]
        }
    }
}

</script>