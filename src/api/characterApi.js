import { get, marvelApiKey } from '../utilities/apiUtilities';

export const fetchCharacters = () => get({
	url: `/v1/public/characters?apikey=${marvelApiKey}`
});

export const fetchCharacter = (id) => get({
	url: `/v1/public/characters/${id}?apikey=${marvelApiKey}`
});

