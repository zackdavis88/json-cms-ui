import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

function useUserLoading() {
  const isLoading = useSelector(({ user }: RootState) => user.isLoading);
  return isLoading;
}

export default useUserLoading;
