import 'styles/globals.css';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import { RootProvider } from 'context/rootContext';
import Header from 'components/global/Header';
import Footer from 'components/global/Footer';

(() => {
  NProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
})();

export default function _app({ Component, pageProps }) {
  return (
    <RootProvider>
      <div className="text-gray-800 dark:text-gray-50 bg-gray-100 dark:bg-gray-900 relative">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </RootProvider>
  );
}
