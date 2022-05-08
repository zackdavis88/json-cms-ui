import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

/*
  TODO: Making a hook that is local to LoginForm for checking when a request is in progress.
        If more use-cases for this hook come up then we should move it to src/hooks.
*/
function useAuthLoading() {
  const isLoading = useSelector(({ auth }: RootState) => auth.isLoading);
  return isLoading;
}

export default useAuthLoading;
