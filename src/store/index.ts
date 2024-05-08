//core
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
//instruments
import themeReducer from '@/store/themeSlice';
import storage from 'redux-persist/lib/storage';
import menuSlice from '@/store/menuSlice';
import pageSlice from '@/store/pageSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  menu: menuSlice,
  page: pageSlice,
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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
