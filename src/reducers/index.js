import { combineReducers } from 'redux';
import collections from './collectionReducer';

export const replaceOrAddCollectionElement = (collection, element, idAttr) => {
  const el = collection.find((e) => e[idAttr] === element[idAttr]);
  if (!el) collection.push(element);
  else collection[collection.indexOf(el)] = element;
  return [ ...collection ];
}

export const addNonExistingElements = (collection, values, idAttr) => {
  const ids = collection.map((e) => e[idAttr]);
  const newValues = values.filter((e) => ids.indexOf(e[idAttr]) === -1);
  return [ ...collection ].concat(newValues);
}

export default combineReducers({
  collections
});