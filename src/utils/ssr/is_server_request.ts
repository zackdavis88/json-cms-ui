import { GetServerSidePropsContext } from 'next';

/* This is a hack to detect if we are calling getServerSideProps on the server.
   For some reason getServerSideProps is called everytime a page loads even if its
   reached via client-side navigation O_o which is pretty shitty naming on nextJS's part.
*/
export default function isServerReq(context: GetServerSidePropsContext) {
  return !context.req.url.startsWith('/_next');
}
