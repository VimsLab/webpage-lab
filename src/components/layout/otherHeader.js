import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Button';
import { Helmet } from 'react-helmet';
import favicon from '../../images/logo-only.png';
import { useState } from "react"; // import state

const OtherHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
    return (
      <header className="sticky top-0 bg-white shadow"
              style={{ backgroundColor: '#f8cd05', zIndex: 30 }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Big Data Vision - VIMS Lab @ University of Delaware</title>
          <meta name="icon" href={favicon} />
        </Helmet>
        <nav>
          <section className="MOBILE-MENU container flex md:hidden lg:hidden justify-between items-center mx-auto py-4 px-8">
            <div className="flex items-center text-2xl">
              <div className="w-12 mr-3">
                <StaticImage src="../../images/logo-only.png" alt="Logo" />
              </div>
              VIMS Lab
            </div>
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]"
                  onClick={() => setIsNavOpen(false)}>
                {/* <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#projects">Projects</a>
                </li> */}
                {/* <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#publications">Publications</a>
                </li> */}
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#final">Contact</a>
                </li>
              </ul>
            </div>
          </section>

          <div
            className="DESKTOP-MENU container hidden lg:flex md:flex flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
            <div className="flex items-center text-2xl">
              <div className="w-12 mr-3">
                <StaticImage src="../../images/logo-only.png" alt="Logo" />
              </div>
              VIMS Lab
            </div>
            <div className="flex items-center text-2xl">
              {/* <AnchorLink className="px-4" href="#projects">
                Projects
              </AnchorLink> */}
              <h1>SEA ICE ANALYSIS</h1>
              {/* <AnchorLink className="px-4" href="#publications">
                Publications
              </AnchorLink> */}
            </div>
            <a href="mailto:chandrak@udel.edu">
              <Button>Contact</Button>
            </a>
          </div>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>

      </header>
    )
  }
;
export default OtherHeader;
