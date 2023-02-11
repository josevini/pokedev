<script setup>
    import { useSearchDataStore } from '../stores/SearchDataStore'
    import { getPokemonByName } from '../service/queriesApi'
    import { useRoute } from 'vue-router'
    import { storeToRefs } from 'pinia';

    const route = useRoute()
    const searchData = useSearchDataStore();
    const { pokemonName, pokemonIcon, pokemonStats } = storeToRefs(searchData)

    getPokemonByName(route.params.name).then(response => {
        searchData.setPokemonName(response.data.name)
        searchData.setPokemonIcon(response.data.sprites.other.dream_world.front_default)
        searchData.setPokemonStats(response.data.stats)
    })

</script>

<template>
    <section class="card-container">
        <article class="card-pokemon">
            <section class="container-info">
                <p class="name">{{ pokemonName.toUpperCase() }}</p>
                <img class="img" v-bind:src="pokemonIcon" />
            </section>
            <section class="container-stats" v-for="currentPokemonStat in pokemonStats">
                <p>{{ currentPokemonStat.stat.name }}</p>
                <p>{{ currentPokemonStat.base_stat }}</p>
            </section>
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
        font-size: 20px;
    }

    .card-pokemon {
        width: 300px;
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .container-info {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .container-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .img {
        width: 80%;
        height: 80%;
        border-radius: 20px;
    }

    .name {
        font-weight: bold;
    }
</style>