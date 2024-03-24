import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsUserLoading,
  selectRioAccessToken,
  selectUser,
  selectUserError,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const rioAccessToken = useSelector(selectRioAccessToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isUserLoading = useSelector(selectIsUserLoading);
  const userError = useSelector(selectUserError);

  return {
    user,
    rioAccessToken,
    isLoggedIn,
    isRefreshing,
    isUserLoading,
    userError,
  };
};
