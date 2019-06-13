import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { AsyncStorage } from 'react-native'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk),
  );
const persistedReducer = persistReducer(persistConfig, reducers)
let store = createStore(persistedReducer,{}, enhancer);
let persistor = persistStore(store)
export { store, persistor }
