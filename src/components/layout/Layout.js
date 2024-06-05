import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
      <Helmet>
        {/*Default Statcounter code for VIMS Lab website
    https://bigdatavision.org/*/}
        <script type="text/javascript">
          sc_project=5585336;
          sc_invisible=1;
          sc_security='980e937b';
        </script>
        <script type="text/javascript"
                src="https://www.statcounter.com/counter/counter.js"
                async></script>
        <noscript>{`<div class="statcounter"><a title="Web Analytics Made Easy - Statcounter" href="https://statcounter.com/"
                                              target="_blank"><img class="statcounter"
                                                                   src="https://c.statcounter.com/5585336/0/980e937b/1/"
                                                                   alt="Web Analytics Made Easy - Statcounter"
                                                                   referrerPolicy="no-referrer-when-downgrade"></img></a></div>`}</noscript>
        {/*End of Statcounter Code*/}
      </Helmet>
    </>
  );
};

export default Layout;
