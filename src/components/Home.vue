<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <gpx-route-container />
  </div>
</template>

<script>

import GpxRouteContainer from './gpxroutes/GPXRouteContainer'

export default {
    components: {
        GpxRouteContainer
    },
    name: 'Home',
    data () {
        return {
            msg: 'Fell Routes/Races'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  padding-top: 2rem;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
