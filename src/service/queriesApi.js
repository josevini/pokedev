import api from './api'

export async function getPokemonByName(name) {
    return await api.get(`pokemon/${name.toLowerCase()}`)
}

export async function getPokemonSpecies(speccy) {
    return await api.get(`pokemon-species/${speccy.toLowerCase()}`)
}

export async function getPokemonEvolutionChains(url) {
    return await api.get(url)
}