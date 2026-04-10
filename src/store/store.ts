import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { combineReducers } from '@reduxjs/toolkit';
import favoritesReducer from './favorite.slice';
import userReducer from "./user.sclice"

import {filmsSlice} from "./films.slice"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'], // только избранное
};

const rootReducer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  films: filmsSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefault => getDefault({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;