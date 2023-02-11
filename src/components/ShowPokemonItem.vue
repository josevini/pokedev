<script setup>
    import { useSearchDataStore } from '../stores/SearchDataStore'
    import { storeToRefs } from 'pinia'
    import { RouterLink } from 'vue-router'

    const searchData = useSearchDataStore()
    const { pokemonEvolutions } = storeToRefs(searchData)
</script>

<template>
    <section class="card-container">
        <article class="card-pokemon" v-for="pokemonEvolution in pokemonEvolutions">
            <section class="img-container">
                <img class="img" v-bind:src="pokemonEvolution.sprites.other.dream_world.front_default" />
            </section>
            <RouterLink :to="{ path: `/info/${pokemonEvolution.name}` }">
                <p class="name">{{ pokemonEvolution.name }}</p>
            </RouterLink>
        </article>
    </section>
</template>

<style scoped>
    .card-container {
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .card-pokemon {
        width: 365px;
        height: 380px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px;
        margin: 0 .5em;
        background-color: #fff;
        border-radius: 10px;
    }

    .img-container {
        width: 100%;
        height: 80%;
    }

    .img {
        width: max(100%, 250px);
        width: 100%;
        height: 100%;
    }
</style>