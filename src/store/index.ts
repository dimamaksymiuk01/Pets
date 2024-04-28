import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from '@/store/themeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }),
});
export const persistor = persistStore(store);
export default store;
