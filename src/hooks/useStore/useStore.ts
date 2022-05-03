import { useMemo } from 'react';
import { initializeStore, RootState } from 'src/store/store';

function useStore(initialState: RootState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

export default useStore;
