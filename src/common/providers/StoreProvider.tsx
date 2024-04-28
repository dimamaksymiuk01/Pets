'use client';

import type { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      {children}
    </PersistGate>
  </Provider>
);
