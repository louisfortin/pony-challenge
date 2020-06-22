import {
	CHARACTER,
	CHARACTER_COMICS,
	CHARACTER_EVENTS,
	CHARACTER_SERIES,
	CHARACTER_STORIES
} from '../constants/characterTypes';

export const characterLoader = (state) => state.loaders[CHARACTER];
export const selectComicsLoader = (state) => state.loaders[CHARACTER_COMICS];
export const selectEventsLoader = (state) => state.loaders[CHARACTER_EVENTS];
export const selectSeriesLoader = (state) => state.loaders[CHARACTER_SERIES];
export const selectStoriesLoader = (state) => state.loaders[CHARACTER_STORIES];
