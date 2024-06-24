import React from 'react';
import Footer from './Footer';
// import Header from './Header';
import OtherHeader from './otherHeader';

const PubLayout = ({ children }) => {
  return (
    <>
      {/* <OtherHeader /> */}
      {/* <br></br> */}
      <main className="text-gray-900">{children}</main>
      <Footer />
      {/* <br></br> */}
    </>
  );
};

export default PubLayout;
