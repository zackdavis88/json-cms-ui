import { GetServerSidePropsContext } from 'next';
import { AUTH_SUCCESS, BLUEPRINT_SUCCESS } from 'src/store/actions';
import { TOKEN_HEADER } from 'src/constants';
import isServerReq from './is_server_request';
import { initializeStore } from 'src/store';
import { authenticateToken } from './get_auth_token';
import appConfig from 'config';
const { API_FQDN } = appConfig;

interface PageOptions {
  authRequired?: boolean;
}

const getBlueprintById =
  (pageOptions?: PageOptions) => async (context: GetServerSidePropsContext) => {
    const options = pageOptions ?? {};
    // If this is a client side request, return no initial props.
    if (!isServerReq(context)) {
      return { props: { ...options } };
    }

    const cookies = context.req.cookies;
    const reduxStore = initializeStore();
    let tokenIsValid = false;

    if (cookies.token) {
      const { status, body } = await authenticateToken(cookies.token);
      if (status === 200) {
        tokenIsValid = true;
        reduxStore.dispatch({
          type: AUTH_SUCCESS,
          response: { body, headers: { [TOKEN_HEADER]: cookies.token } },
        });
      }
    }

    if (tokenIsValid) {
      const blueprintId = context.params?.id;
      const blueprintResponse = await fetch(`${API_FQDN}/blueprints/${blueprintId}`, {
        headers: { [TOKEN_HEADER]: cookies.token },
      });
      const blueprintResponseBody = await blueprintResponse.json();
      if (blueprintResponse.status === 200) {
        reduxStore.dispatch({
          type: BLUEPRINT_SUCCESS,
          response: { body: blueprintResponseBody },
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

export default getBlueprintById;
