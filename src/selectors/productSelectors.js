import { createSelector } from 'reselect';
import { ARTICLES, WHISKEYS } from '../constants/productTypes';

export const selectWhiskeys = (state) => state.collections[WHISKEYS];
export const selectWhiskey = (state, id) => state.collections[WHISKEYS]
	.find((whiskey) => whiskey && whiskey.title === id);

export const selectArticles = (state) => state.collections[ARTICLES];
export const selectArticle = (state, id) => state.collections[ARTICLES]
	.find((article) => article && article.title === id);

export const selectWhiskeyByRegion = createSelector(
	selectWhiskeys,
	(_state, props) => props,
	(whiskeys, region) => whiskeys
		.filter((whiskey) => !region || (whiskey.region === region))
);
