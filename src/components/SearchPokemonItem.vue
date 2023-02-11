<script setup>
    import { getPokemonByName, getPokemonSpecies, getPokemonEvolutionChains } from '../service/queriesApi'
    import { ref } from 'vue'
    import { useSearchDataStore } from '../stores/SearchDataStore'

    const search = ref('')
    const allEvolutions = ref([])
    const searchData = useSearchDataStore()

    function getChain(chain, evolutions = []) {

        evolutions.push(chain.species.name)

        if (chain.evolves_to.length) {
            getChain(chain.evolves_to[0], evolutions)
        }

        return evolutions
    }
    
</script>

<template>
    <section class="form-container">
        <input v-model="search" class="form-search" />
        <button class="btn-search" @click="getPokemonSpecies(search).then(response => {

            getPokemonEvolutionChains(response.data.evolution_chain.url).then(response => {

                allEvolutions = []
                
                getChain(response.data.chain)
                .forEach((value) => {

                    getPokemonByName(value).then(response => {
                        allEvolutions.push(response.data)
                    })
                })

                searchData.setPokemonEvolutions(allEvolutions)
                
            })
        })">Pesquisar</button>
    </section>
</template>
<style scoped>
    .form-container {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form-search {
        width: calc(50% - 10px);
        height: 30px;
        outline: none;
        border: 1px solid rgb(216, 216, 216);
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding: 7px;
    }

    .btn-search {
        background-color: #FFDC7D;
        height: 30px;
        padding: 7px;
        border: none;
        color: #a08334;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
</style>