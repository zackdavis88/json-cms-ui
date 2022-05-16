import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

function useIsAuthenticated() {
  const token = useSelector(({ auth }: RootState) => auth.token);
  const isAuthenticated = !!token;
  return isAuthenticated;
}

export default useIsAuthenticated;
