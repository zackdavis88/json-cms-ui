import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

function useAuthLoading() {
  const isLoading = useSelector(({ auth }: RootState) => auth.isLoading);
  return isLoading;
}

export default useAuthLoading;
