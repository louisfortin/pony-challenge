import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = composeWithDevTools({
  name: 'Redux',
  realtime: true,
  trace: true,
  traceLimit: 10
});

const composers = (env) => {
  if (env === 'production') {
    return compose(applyMiddleware(thunk));
  }
  return composeEnhancers(applyMiddleware(thunk));
};

export default createStore(
  reducers,
  composers(process.env.REACT_APP_ENV)
);
