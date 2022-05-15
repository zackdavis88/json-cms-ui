import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'src/store/store';
import { UserData } from 'src/store/reducers/auth/auth';

function useCurrentUser() {
  const user: UserData | null = useSelector(
    ({ auth }: RootState) => auth.user,
    shallowEqual,
  );
  return user;
}

export default useCurrentUser;
