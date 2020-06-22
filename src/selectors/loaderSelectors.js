import {
	CHARACTER,
	CHARACTER_COMICS,
	CHARACTER_EVENTS,
	CHARACTER_SERIES,
	CHARACTER_STORIES
} from '../constants/characterTypes';

export const characterLoader = (state) => state.loaders[CHARACTER];
export const comicsLoader = (state) => state.loaders[CHARACTER_COMICS];
export const eventsLoader = (state) => state.loaders[CHARACTER_EVENTS];
export const seriesLoader = (state) => state.loaders[CHARACTER_SERIES];
export const storiesLoader = (state) => state.loaders[CHARACTER_STORIES];
