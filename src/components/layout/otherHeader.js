import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { StaticImage } from "gatsby-plugin-image"
import Button from '../Button';
import {Helmet} from "react-helmet";
import favicon from '../../images/logo-only.png'
import { BrowserRouter, useNavigate } from 'react-router-dom';

export const Item = () => {
    let navigate = useNavigate();
    return (
        <>
          <button onClick={() => navigate("/")}>Back</button> 
        </>
    );
};

const OtherHeader = () => (

    // let navigate = useNavigate();

  <header className="sticky top-0 bg-white shadow" style={{backgroundColor: "#f8cd05", zIndex: 30}}>
    {/* <Helmet>
      <meta charSet="utf-8" />
      <title>Big Data Vision - VIMS Lab @ University of Delaware</title>
      <meta name="icon" href={favicon} />
    </Helmet> */}
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <StaticImage src="../../images/logo-only.png" alt="Logo" />
        </div>
        VIMS Lab
      </div>
      <div className="flex mt-4 sm:mt-0">
      {/* <button onClick={() => useNavigate('/')}>Back to Homepage</button> */}
      <BrowserRouter>
      <button onClick={() => useNavigate("/")}>Back</button> 
      </BrowserRouter>
        {/* <Routes>
        <HashLink to="Index#projects">
          Projects
        </HashLink>
        </Routes>
        <AnchorLink className="px-4" href="Index#publications">
          Publications
        </AnchorLink>
        <AnchorLink className="px-4" href="Index#news">
          News
        </AnchorLink>
        <AnchorLink className="px-4" href="Index#team">
          Team
        </AnchorLink>
        <AnchorLink className="px-4" href="Index#photos">
          Photos
        </AnchorLink>
        <AnchorLink className="px-4" href="Index#testimonials">
          Resources
        </AnchorLink> */}
      </div>
        <a href="mailto:vims@cis.udel.edu">
          <Button>Contact</Button>
        </a>
    </div>
  </header>
);

export default OtherHeader;
