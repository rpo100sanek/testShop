import { createSlice } from '@reduxjs/toolkit'

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        currentPokemon: null
    },
    reducers: {
        setCurrentPokemon: (state, action) => {
            state.currentPokemon = action.payload
        },
    }
});

export const { setCurrentPokemon } = pokemonSlice.actions;
export const selectPokemon = (state) => state.pokemon.currentPokemon;
export default pokemonSlice.reducer;