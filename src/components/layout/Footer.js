import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faXTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { Tooltip, Typography } from '@material-tailwind/react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faXTwitter, faYoutube);

const Footer = () => (
  <footer style={{ backgroundColor: '#f8cd05' }}>
    <div className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
      <div className="flex flex-wrap ">
        <div className="flex-none px-3 pb-3 w-80">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="mt-5">VIMS Lab focuses on cutting-edge research in computer vision and deep learning by
            developing
            innovative algorithms and applications that push the boundaries of visual understanding.</p>
        </div>
        <div className="flex-none px-3 pb-3 w-60">
          <h2 className="text-lg font-semibold">Important Links</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://vims.cis.udel.edu/exams/">PhD Program Policies</a>
            </li>
            <li>
              <a href="https://vims.cis.udel.edu/miscellaneous/">Miscellaneus</a>
            </li>
          </ul>
        </div>
        <div className="flex-none px-3 pb-3 w-80">
          <h2 className="text-lg font-semibold">Headquarters</h2>
          <p className="mt-5">212 Smith Hall, Department of Computer & Information Sciences, University of Delaware,
            Newark DE 19716</p>
        </div>
        <div className="flex-1 px-3 pb-3 w-60">
          <h2 className="text-lg font-semibold">Social Media</h2>

          <div className="flex">
            <div>
              <Tooltip content="YouTube">
                <Typography
                  as="a"
                  href="https://www.youtube.com/@vimslab/videos"
                  variant="lead"
                  color="red"
                >
                  <FontAwesomeIcon className="p-5" icon={faYoutube} />
                  <i className="fab fa-youtube" />
                </Typography>
              </Tooltip>
            </div>
            <div>
              <Tooltip content="X">
                <Typography
                  as="a"
                  href="https://twitter.com/UD_CIS?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  variant="lead"
                  color="black"
                >
                  <FontAwesomeIcon className="p-5" icon={faXTwitter} />
                  <i className="fab fa-x-twitter" />
                </Typography>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>


  </footer>
);

export default Footer;
