import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchDataStore = defineStore('dataSearch', () => {
    const pokemonId = ref(undefined)
    const pokemonName = ref('')
    const pokemonIcon = ref('')
    const pokemonStats = ref([])
    const pokemonEvolutions = ref([])

    function setPokemonId(id) {
        pokemonId.value = id
    }

    function setPokemonName(name) {
        pokemonName.value = name
    }

    function setPokemonIcon(sprites) {
        pokemonIcon.value = sprites
    }

    function setPokemonStats(stats) {
        pokemonStats.value = stats
    }

    function setPokemonEvolutions(evolutions) {
        pokemonEvolutions.value = evolutions
    }

    return { pokemonId, pokemonName, pokemonIcon, pokemonStats, pokemonEvolutions, setPokemonId, setPokemonName, setPokemonIcon, setPokemonStats, setPokemonEvolutions }
})