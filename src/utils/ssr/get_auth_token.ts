import { initializeStore } from 'src/store';
import { AUTH_SUCCESS } from 'src/store/actions';
import isServerReq from './is_server_request';
import appConfig from 'config';
const { API_FQDN } = appConfig;

export const getAuthToken = async (context) => {
  // If this is a client side request, return no initial props.
  if (!isServerReq(context)) return { props: {} };

  const cookies = context.req.cookies;
  const reduxStore = initializeStore();
  if (cookies.token) {
    const res = await fetch(`${API_FQDN}/auth/token`, {
      headers: { 'x-auth-token': cookies.token },
    });
    const body = await res.json();
    if (res.status === 200) {
      await reduxStore.dispatch({
        type: AUTH_SUCCESS,
        response: { body, headers: { 'x-auth-token': cookies.token } },
      });
    }
  }
  return {
    props: {
      initialReduxState: reduxStore.getState(),
    },
  };
};

export default getAuthToken;
