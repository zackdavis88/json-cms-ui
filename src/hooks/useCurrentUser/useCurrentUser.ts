import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'src/store/store';

function useCurrentUser() {
  const user = useSelector(({ auth }: RootState) => auth.user, shallowEqual);
  return user;
}

export default useCurrentUser;
