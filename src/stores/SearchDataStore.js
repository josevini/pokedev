import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchDataStore = defineStore('dataSearch', () => {
    const pokemonId = ref(undefined)
    const pokemonName = ref('')
    const pokemonStats = ref([])
    const pokemonEvolutions = ref([])

    function setPokemonId(id) {
        pokemonId.value = id
    }

    function setPokemonName(name) {
        pokemonName.value = name
    }

    function setPokemonStats(stats) {
        pokemonStats.value = [stats]
    }

    function setPokemonEvolutions(evolutions) {
        pokemonEvolutions.value = evolutions
    }

    return { pokemonId, pokemonName, pokemonStats, pokemonEvolutions, setPokemonId, setPokemonName, setPokemonStats, setPokemonEvolutions }
})