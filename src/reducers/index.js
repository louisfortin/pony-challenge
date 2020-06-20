import { combineReducers } from 'redux';
import collections from './collectionReducer';

export const replaceOrAddCollectionElement = (collection, element, idAttr) => {
  const el = collection.find((e) => e[idAttr] === element[idAttr]);
  if (!el) collection.push(element);
  else collection[collection.indexOf(el)] = element;
  return [ ...collection ];
}

export default combineReducers({
  collections
});