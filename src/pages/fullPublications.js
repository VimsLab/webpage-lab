import React, { useEffect, useState } from 'react';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import PubLayout from '../components/layout/PubLayout';
import 'react-multi-carousel/lib/styles.css';
import { StaticImage } from "gatsby-plugin-image";
import Button from '../components/Button';
import { Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from '@material-tailwind/react';


let max_years = 3;
const pubsFileURL = 'https://raw.githubusercontent.com/VimsLab/vims-publications-list/main/publications-list.js';

const fetchAndProcessJsFile = async (url, setData, maxYear) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const jsContent = xhr.responseText;

        const match = jsContent.match(/export\s+default\s+(\[.*\]);/s);
        if (match) {
          const data = match[1];
          try {
            const parsedData = JSON.parse(data);

            // const filteredData = parsedData.filter(entry => parseInt(entry.year, 10) >= maxYear);
            setData(parsedData);
          } catch (error) {
            console.error('Error parsing JSON data:', error);
          }
        } else {
          console.error('Failed to extract data from the .js file');
        }
      } else {
        console.error('Error fetching the .js file:', xhr.statusText);
      }
    }
  };

  xhr.send();
};

const App = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState({});
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear - max_years;

  useEffect(() => {
    fetchAndProcessJsFile(pubsFileURL, setFilteredData, maxYear);
  }, [maxYear]);

  useEffect(() => {
    const updatedCategories = {};

    filteredData.forEach(entry => {
      if (entry.year !== 'year') {
        if (!updatedCategories[entry.year + ' ']) {
          updatedCategories[entry.year + ' '] = {};
        }

        if (!updatedCategories[entry.year + ' '][entry.category]) {
          updatedCategories[entry.year + ' '][entry.category] = [];
        }

        if ('link_text' in entry) {
          updatedCategories[entry.year + ' '][entry.category] = updatedCategories[entry.year + ' '][entry.category].concat([[entry.text, entry.link_url, entry.link_text]]);
        } else {
          updatedCategories[entry.year + ' '][entry.category] = updatedCategories[entry.year + ' '][entry.category].concat([[entry.text, '', '']]);
        }
      }
    });

    setCategories(updatedCategories);
  }, [filteredData]);

  return (
    <div className="App ml-5 mr-5">
      {Object.keys(categories).map(years => (
        <div key={years}>
          <Typography variant="h5" color="blue-gray" className="mb-1 mt-1">
            {years}
          </Typography>
          {Object.keys(categories[years]).map(categ => (
            <div key={categ}>
              <Typography variant="h6" color="blue-gray" className="mt-2">
                {categ}
              </Typography>
              {categories[years][categ].map((text, index) => (
                <Typography key={index} className="items-center font-light">- {text[0]}
                  <a href={text[2]} className="text-blue-400">{text[1]}</a>
                </Typography>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const full_publications = ({ data, deviceType }) => {

const goBack = () => {
    window.close();
    };
  return (
    <PubLayout>
        <header className="sticky top-0 bg-white shadow" style={{backgroundColor: "#f8cd05", zIndex: 30}}>
            <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
            <div className="flex sm:mt-0">
                <Button onclick={goBack}>Back to Homepage</Button>
            </div>
            <div className="flex items-center text-2xl">
                <div className="w-12 mr-3">
                <StaticImage src="../../images/logo-only.png" alt="Logo" />
                </div>
                VIMS Lab
            </div>
            <div className="flex mt-4 sm:mt-0">
            </div>
                <a href="mailto:vims@cis.udel.edu">
                <Button>Contact</Button>
                </a>
            </div>
        </header>
      <section id="publications">
        <div className="container mx-auto items-stretch">
          <LabelText className="mb-8 text-gray-600 text-center">Publications</LabelText>
          {App()}
        </div>
      </section>
    </PubLayout>

  );
};


export default full_publications;
