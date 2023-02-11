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
    <section>
        <input v-model="search" class="form-search" />
        <button @click="getPokemonByName(search).then(response => {

            // searchData.setPokemonId(response.data.id)
            // searchData.setPokemonName(response.data.name)
            // searchData.setPokemonStats(response.data.stats)

            getPokemonSpecies(search).then(response => {

            getPokemonEvolutionChains(response.data.evolution_chain.url).then(response => {
                
                getChain(response.data.chain).forEach((value) => {

                    getPokemonByName(value).then(response => {
                        allEvolutions.push(response.data)
                    })
                })

                searchData.setPokemonEvolutions(allEvolutions)
                
            })
        })
        })">Pesquisar</button>
        {{ allEvolutions.length }}
    </section>
</template>
<style scoped>
    .form-container {

    }

    .form-search {
        outline: none;
        border: 1px solid rgb(216, 216, 216);
        border-radius: 20px;
        padding: 5px;
    }

    .btn-search {
        
    }
</style>