import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchDataStore = defineStore('dataSearch', () => {
    const pokemonId = ref(undefined)
    const pokemonName = ref('')
    const pokemonStats = ref([])

    function setPokemonId(id) {
        pokemonId.value = id
    }

    function setPokemonName(name) {
        pokemonName.value = name
    }

    function setPokemonStats(stats) {
      pokemonStats.value.push(stats)
    }

    return { pokemonId, pokemonName, pokemonStats, setPokemonId, setPokemonName, setPokemonStats }
})