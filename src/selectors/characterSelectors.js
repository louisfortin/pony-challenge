import {
	CHARACTER,
	CHARACTER_COMICS,
	CHARACTER_EVENTS,
	CHARACTER_SERIES,
	CHARACTER_STORIES
} from '../constants/characterTypes';

export const selectCharacters = (state) => state.collections[CHARACTER];
export const selectCharacter = (state, id) => state.collections[CHARACTER]
	.find((character) => character && character.id === Number(id));

export const selectCharacterComics = (state) => state.collections[CHARACTER_COMICS];
export const selectCharacterEvents = (state) => state.collections[CHARACTER_EVENTS];
export const selectCharacterSeries = (state) => state.collections[CHARACTER_SERIES];
export const selectCharacterStories = (state) => state.collections[CHARACTER_STORIES];

export const selectCharacterParams = (state) => state.collections.params[CHARACTER];
