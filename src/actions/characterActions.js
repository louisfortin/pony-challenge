import {
  addCharactersToCollection,
  fetchCharactersAction,
  fetchCharactersFail,
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
  dispatch(fetchCharactersAction(CHARACTER));
  return fetchCharacters(params)
  .then(({ data: { data: { results }}}) => {
    const action = params.offset === 0 ? setCharacterCollection : addCharactersToCollection;
    dispatch(action(CHARACTER, results, 'id'));
    dispatch(updateParams(CHARACTER, params));
  })};

export const getCharacter = (id) => (dispatch) => {
  dispatch(fetchCharactersAction(CHARACTER));
  return fetchCharacter(id)
    .then(({ data: { data: { results }}}) => {
      dispatch(setCharacterCollectionElement(CHARACTER, results[0], 'id'));
      return results[0]
    })
    .catch((err) => {
      dispatch(fetchCharactersFail(err, CHARACTER));
      return null;
    });
};

export const getCharacterAppearances = (url, collection, params) => (dispatch) => {
  dispatch(fetchCharactersAction(collection));
  return fetchCharacterAppearances(url, params)
    .then(({ data: { data: { results }}}) => dispatch(setCharacterCollection(collection, results)))};