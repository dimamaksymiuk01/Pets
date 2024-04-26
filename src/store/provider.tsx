'use client';

import store from '@/store/index';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface IReduxProvider {
  children: ReactNode;
}

export function ReduxProvider({ children }: IReduxProvider) {
  return <Provider store={store}>{children}</Provider>;
}
