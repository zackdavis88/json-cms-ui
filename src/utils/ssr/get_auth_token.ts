import { initializeStore } from 'src/store';
import { AUTH_SUCCESS } from 'src/store/actions';
import isServerReq from './is_server_request';
import { TOKEN_HEADER } from 'src/constants';
import appConfig from 'config';
import { GetServerSidePropsContext } from 'next';
const { API_FQDN } = appConfig;

// TODO: This is going to be used by other SSR util methods. Probably needa move it to a common location.
export const authenticateToken = async (token: string) => {
  const res = await fetch(`${API_FQDN}/auth/token`, {
    headers: { [TOKEN_HEADER]: token },
  });
  const body = await res.json();
  return { status: res.status, body };
};

interface PageOptions {
  authRequired?: boolean;
}

export const getAuthToken =
  (pageOptions?: PageOptions) => async (context: GetServerSidePropsContext) => {
    const options = pageOptions ?? {};
    // If this is a client side request, return no initial props.
    if (!isServerReq(context)) {
      return { props: { ...options } };
    }

    const cookies = context.req.cookies;
    const reduxStore = initializeStore();
    if (cookies.token) {
      const { status, body } = await authenticateToken(cookies.token);
      if (status === 200) {
        reduxStore.dispatch({
          type: AUTH_SUCCESS,
          response: { body, headers: { [TOKEN_HEADER]: cookies.token } },
        });
      }
    }
    return {
      props: {
        initialReduxState: reduxStore.getState(),
        ...options,
      },
    };
  };

export default getAuthToken;
