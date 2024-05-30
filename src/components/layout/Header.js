import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { StaticImage } from "gatsby-plugin-image"
import Button from '../Button';
import {Helmet} from "react-helmet";
import favicon from '../../images/logo-only.png'

const Header = () => (
  <header className="sticky top-0 bg-white shadow" style={{backgroundColor: "#f8cd05", zIndex: 30}}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Big Data Vision - VIMS Lab @ University of Delaware</title>
      <meta name="icon" href={favicon} />
    </Helmet>
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <StaticImage src="../../images/logo-only.png" alt="Logo" />
        </div>
        VIMS Lab
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#projects">
          Projects
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Publications
        </AnchorLink>
        <AnchorLink className="px-4" href="#news">
          News
        </AnchorLink>
        <AnchorLink className="px-4" href="#team">
          Team
        </AnchorLink>
        <AnchorLink className="px-4" href="#photos">
          Photos
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Resources
        </AnchorLink>
      </div>
        <a href="mailto:vims@cis.udel.edu">
          <Button>Contact</Button>
        </a>
    </div>
  </header>
);

export default Header;
