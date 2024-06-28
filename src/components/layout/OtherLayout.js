import React from 'react';
import Footer from './Footer';
import OtherHeader from './otherHeader';

const OtherLayout = ({ children }) => {
  return (
    <>
      <OtherHeader />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default OtherLayout;
