import { CHARACTER } from '../constants/characterTypes';

export const selectCharacters = (state) => state.collections[CHARACTER];
export const selectCharacter = (state, id) => state.collections[CHARACTER]
	.find((character) => character && character.id === id);
