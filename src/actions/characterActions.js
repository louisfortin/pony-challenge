import {
  fetchHeroes,
  fetchHeroFail,
  setCharacterCollection,
  setCharacterCollectionElement
} from './collectionActions';
import { CHARACTER } from '../constants/characterTypes';
import {
  fetchCharacter,
  fetchCharacterAppearances,
  fetchCharacters
} from '../api/characterApi';

export const getCharacters = () => dispatch => fetchCharacters()
  .then(({ data: { data: { results }}}) => dispatch(setCharacterCollection(CHARACTER, results)));

export const getCharacter = (id) => (dispatch) => {
  dispatch(fetchHeroes());
  return fetchCharacter(id)
    .then(({ data: { data: { results }}}) => {
      dispatch(setCharacterCollectionElement(CHARACTER, results[0], 'id'));
      return results[0]
    })
    .catch((err) => {
      dispatch(fetchHeroFail(err));
      return null;
    });
};

export const getCharacterAppearances = (url, collection, params) => (dispatch) => fetchCharacterAppearances(url, params)
  .then(({ data: { data: { results }}}) => dispatch(setCharacterCollection(collection, results)));