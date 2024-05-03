'use client';

/* core */
import type { FC, PropsWithChildren } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
/* instruments */
import store, { persistor } from '@/store';

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      {children}
    </PersistGate>
  </Provider>
);
