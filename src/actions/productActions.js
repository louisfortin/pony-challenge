import { setProductCollection, setProductCollectionElement } from './collectionActions';
import { ARTICLES, WHISKEYS } from '../constants/productTypes';
import { fetchArticles, fetchWhiskey, fetchWhiskeys } from '../api/productApi';

export const getArticles = () => dispatch => fetchArticles()
  .then((data) => dispatch(setProductCollection(ARTICLES, data)));

export const getWhiskeys = () => dispatch => fetchWhiskeys()
  .then((data) => dispatch(setProductCollection(WHISKEYS, data)));

export const getWhiskey = id => dispatch => fetchWhiskey(id)
  .then((data) => dispatch(setProductCollectionElement(WHISKEYS, data, 'title')));
