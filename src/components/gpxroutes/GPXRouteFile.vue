<template>
    <b-card bg-variant="dark" text-variant="white" v-bind:title="route.name" class="route">
        <p class="card-text">
           {{ route.description }}
        </p>
        <b-button v-bind:href="route.url" variant="primary">Download GPX</b-button>
    </b-card>
  
</template>

<script>

export default {
    props: ['route'],
    data(){
        return {
        }
    }
}

</script>

<style scoped>
    .route{
        margin: 10px;
    }
</style>
