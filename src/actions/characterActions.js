import { setCharacterCollection, setCharacterCollectionElement } from './collectionActions';
import { CHARACTER } from '../constants/characterTypes';
import { fetchCharacter, fetchCharacters, } from '../api/characterApi';

export const getCharacters = () => dispatch => fetchCharacters()
  .then(({ data: { data: { results }}}) => dispatch(setCharacterCollection(CHARACTER, results)));

export const getCharacter = (id) => dispatch => fetchCharacter(id)
  .then(({ data: { data: { results }}}) => dispatch(setCharacterCollectionElement(CHARACTER, results)));
