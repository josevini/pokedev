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
        max-width: 1200px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        
    }

    .card-pokemon {
        flex-basis: calc(33% - 1em);
        height: 360px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 5px;
        margin: .5em;
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

    .name {
        font-size: 20px;       
    }

    @media screen and (max-width: 880px) {
        .card-pokemon {
            flex-basis: calc(50% - 1em);
        }
    }

    @media screen and (max-width: 650px) {
        .card-container {
            justify-content: center;
        }

        .card-pokemon {
            flex-basis: calc(100% - 1em);
        }
    }
</style>