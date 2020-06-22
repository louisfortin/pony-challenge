import {
  addCharactersToCollection,
  fetchHeroes,
  fetchHeroFail,
  setCharacterCollection,
  setCharacterCollectionElement,
  updateParams
} from './collectionActions';
import { CHARACTER } from '../constants/characterTypes';
import {
  fetchCharacter,
  fetchCharacterAppearances,
  fetchCharacters
} from '../api/characterApi';

export const getCharacters = (params) => (dispatch) => {
  dispatch(fetchHeroes(CHARACTER));
  return fetchCharacters(params)
  .then(({ data: { data: { results }}}) => {
    const action = params.offset === 0 ? setCharacterCollection : addCharactersToCollection;
    dispatch(action(CHARACTER, results, 'id'));
    dispatch(updateParams(CHARACTER, params));
  })};

export const getCharacter = (id) => (dispatch) => {
  dispatch(fetchHeroes(CHARACTER));
  return fetchCharacter(id)
    .then(({ data: { data: { results }}}) => {
      dispatch(setCharacterCollectionElement(CHARACTER, results[0], 'id'));
      return results[0]
    })
    .catch((err) => {
      dispatch(fetchHeroFail(err, CHARACTER));
      return null;
    });
};

export const getCharacterAppearances = (url, collection, params) => (dispatch) => fetchCharacterAppearances(url, params)
  .then(({ data: { data: { results }}}) => dispatch(setCharacterCollection(collection, results)));