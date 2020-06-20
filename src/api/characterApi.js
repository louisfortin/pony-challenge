import { get, getQueryParams, marvelApiKey } from '../utilities/apiUtilities';

export const fetchCharacters = (params) => get({
	url: `/v1/public/characters?apikey=${marvelApiKey}${getQueryParams(params)}`
});

export const fetchCharacter = (id) => get({
	url: `/v1/public/characters/${id}?apikey=${marvelApiKey}`
});

export const fetchCharacterAppearances = (url, params) => get({
	url: `${url}?apikey=${marvelApiKey}${getQueryParams(params)}`
})
