import { initializeStore } from 'src/store';
import { AUTH_SUCCESS } from 'src/store/actions';

/* This is a hack to detect if we are calling getServerSideProps on the server.
   For some reason getServerSideProps is called everytime a page loads even if its
   reached via client-side navigation O_o which is pretty shitty naming on nextJS's part.
*/
export const isServerReq = (req) => !req.url.startsWith('/_next');

export const getAuthToken = async (context) => {
  // If this is a client side request, return no initial props.
  if (!isServerReq(context.req)) return { props: {} };

  const cookies = context.req.cookies;
  const reduxStore = initializeStore();
  if (cookies.token) {
    const res = await fetch('http://localhost:3333/auth/token', {
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
