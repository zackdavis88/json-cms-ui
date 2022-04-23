import { useMemo } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { authReducer } from './reducers';
import { apiFetch } from './middleware';

/*
  This is the redux store config, updating this object should make the store behave as expected AND
  it will make our RootState and AppDispatch types accurate.
*/
const storeConfig = {
  reducer: {
    auth: authReducer,
  },
  middleware: [thunk, apiFetch],
};

/*
  Making this dummy _configuredStore for Typescript reasons, ideally I could base the typings off of
  the initStore method because that is what truly configures the store that the App is using but I
  cant figure out how (if its even possible..my Typescript is still beginner level).

  Because of the way we configure the store for SSR, if we follow the redux tutorials for getting the
  RootState and AppDispatch we will end up with two types that are 'any' which isnt useful.
*/
const _configuredStore = configureStore({
  ...storeConfig,
  middleware: [thunk],
});
export type RootState = ReturnType<typeof _configuredStore.getState>;
export type AppDispatch = typeof _configuredStore.dispatch;

let store;
function initStore(preloadedState = {}) {
  return configureStore({
    ...storeConfig,
    preloadedState,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type InitializeStore = (preloadedState?: any) => ReturnType<typeof initStore>;
export const initializeStore: InitializeStore = (preloadedState = undefined) => {
  let _store: ReturnType<typeof initStore> = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
