import React from 'react';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import newsData from '../data/news-data';
import projectsData from '../data/projects-data';
import SvgCharts from '../svg/SvgCharts';
import { StaticImage } from "gatsby-plugin-image"
import Image from '../components/ImageComponent'
import { GatsbyImagesProvider } from '../components/ImagesContext'


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { graphql } from 'gatsby';

let max_years = 3;
let date = new Date()
let currentYear = date.getFullYear();
let filteredData = '';
const maxYear = currentYear - max_years;

const pubsFileURL = 'https://raw.githubusercontent.com/VimsLab/vims-publications-list/main/publications-list.js';

function fetchAndProcessJsFile(url) {
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const jsContent = xhr.responseText;

        // Process the content (e.g., extract the export default data)
        const match = jsContent.match(/export\s+default\s+(\[.*\]);/s);
        if (match) {
          const data = match[1];
          
          // Parse the data as JSON (if it's a valid JSON array)
          const parsedData = JSON.parse(data);
          console.log('Parsed data:', parsedData);

          filteredData = parsedData.filter(entry => entry.year >= maxYear);
          console.log('Filtered data:', filteredData);
          
          // Further processing of parsedData if needed
        } else {
          console.error('Failed to extract data from the .js file');
        }
      } else {
        console.error('Error fetching the .js file:', xhr.statusText);
      }
    }
  };
  
  xhr.send();
}

// Run the function
fetchAndProcessJsFile(pubsFileURL);

const App = () => {

  let categories = {};

  filteredData.forEach(entry => {
      if (entry.year !== 'year') {

        if (!categories[entry.year + ' ']) {
          categories[entry.year + ' '] = {};
        }

        if (!categories[entry.year + ' '][entry.category]) {
          categories[entry.year + ' '][entry.category] = [];
        }
        // categories[entry.year + ' '][entry.category] = categories[entry.year + ' '][entry.category].concat(entry.text);
        if ("link_text" in entry){
          categories[entry.year + ' '][entry.category] = categories[entry.year + ' '][entry.category].concat([[entry.text, entry.link_text, entry.link_url]]);
        } else {
          categories[entry.year + ' '][entry.category] = categories[entry.year + ' '][entry.category].concat([[entry.text, "", ""]]);
        }
      }
  });
  return (
    <div className="App">
      {Object.keys(categories).map(years => (
        <div>
          <h3 class="mb-2 text-3xl font-semibold text-gray-400 dark:text-white pt-7 pb-1">{years}</h3>
          {Object.keys(categories[years]).map( categ => (
            <div>
            <h3 class="mb-2 text-3xl font-semibold text-gray-400 dark:text-white pt-2 pb-1">{categ}</h3>
            <ul class="w-full space-y-1 text-gray-500 list-disc list-inside justify dark:text-gray-400">
            {/* {categories[years][categ].map(text => ( */}
            {categories[years][categ].map((text, index) => (
                <li id={index} className='items-center'>{text[0]} <a href={text[1]} className='text-blue-400'>{text[2]}</a> </li>
            ))}
            </ul>
            </div>
          ))}
          </div>
      ))}
      <br></br><br></br>
      <h2 className='text-1xl lg:text-2xl text-gray-500'>For full list of publications, please visit <a href="https://www.eecis.udel.edu/wiki/vims/index.php/Main/Publications"><u>this</u></a> page.</h2>
    </div>
  );
};

const Index = ({data}) => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Transforming Big Data into Reality: Your Vision, Our Mission
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Discover VIMS Lab @ University of Delaware
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Contact</Button>
          </p>
          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
        </div>
        <div className="lg:w-1/2">
          <StaticImage src="../images/landing-glasses.jpg" alt="Landing" />
        </div>
      </div>
    </section>
    {/* <section id="features" className="py-20 lg:pb-40 lg:pt-48"> */}
    <section id="projects" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Projects</h2>
        <p className='mt-4'>
        There are many ongoing and supported research projects in the VIMS lab. Currently, work is being done in the following research areas:
        Stereo Vision, Machine Learning, Image Processing, Virtual Reality, Data Mining, Biomedical Image Analysis, and more.
        </p>
        <br></br><br></br><br></br>
          <div className="flex flex-wrap content-center">
            {projectsData.map(projects => (
              // <div key={projects.key} className="flex-auto">
              <div key={projects.key} className='mr-4 mb-5'>
                {/* <Card className="w-full max-w-[26rem] shadow-lg"> */}
                {/* <Card className="flex flex-col mt-6 w-64 h-full shadow-lg"> */}
                {/* <Card className='card card-compact shadow-xl col-span-1 h-fit bg-gray-100 hover:bg-base-200'> */}
                <Card className='card card-compact shadow-xl col-span-1 gap-5 w-28 md:w-44 lg:w-60 h-full bg-gray-100 hover:bg-base-200'>
                  <CardHeader floated={false} color="blue-gray">
                      <GatsbyImagesProvider>
                        <Image src={projects.image} alt="card-image" />
                      </GatsbyImagesProvider>
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3 flex justify-center size-auto">
                      <Typography variant="h5" color="blue-gray">
                        <span class='inline-block'>{projects.title}</span>
                        
                      </Typography>
                    </div>
                    <Typography color="gray">
                      {projects.content}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-3">
                    <a href={projects.readMore} className="inline-block">
                      <Button size="sm" fullWidth={true}>
                        Learn More
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
            </div>
            ))}
          </div>
        {/* </div> */}
      </div>
    </section>
    <section id='publications'>
      <div className="container mx-auto items-stretch">
        <h2 className="text-3xl lg:text-5xl text-center font-semibold pb-8">Publications</h2>
        {App()}
      </div>
    </section>

    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="news" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">News</LabelText>
        <div className="grid grid-cols-3 items-stretch md:flex-row md:-mx-3">

          {newsData.map(news => (
            <div key={news.key} className="flex-1 px-3">

              <Card className="flex flex-col mt-6 w-96 h-full">
                <CardHeader color="blue-gray" className="relative h-56">
                 <GatsbyImagesProvider>
                  <Image src={news.image} alt="card-image" />
                </GatsbyImagesProvider>
                  {/*<StaticImage src="../images/news/cheers-academic-elite-article.png" alt="Landing" />*/}

                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {news.title}
                  </Typography>
                  <Typography>
                    {news.content}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href={news.readMore}>
                    <Button>Read More</Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center">Computational Resources</h2>
        <SplitSection
          id="services"
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              {/* <h4 className="text-3xl font-semibold text-center">Computational Resources</h4> */}
              {/* <br></br> */}
              <h2 className="text-2xl lg:text-2xl text-gray-600 text-center">Two servers with 4xA6000 each</h2>
              <br></br>
              <h2 className="text-2xl lg:text-2xl text-gray-600 text-center">Two workstations with 2x3090 each</h2>
              <br></br>
              <h2 className="text-2xl lg:text-2xl text-gray-600 text-center">Three workstations with 4x2080Ti each</h2>
              <br></br>
              <h2 className="text-2xl lg:text-2xl text-gray-600 text-center">One workstation with 2x2080Ti</h2>
              <br></br>
              <h2 className="text-2xl lg:text-2xl text-gray-600 text-center">One workstation with 1x2080Ti and 1x1080Ti</h2>
              <br></br>
              <h2 className="text-2xl lg:text-2xl text-gray-600 text-center">One server with 2xPascal GPUs</h2>
            </div>
          }
          secondarySlot={
            <div className="gpu">
              <StaticImage src="../images/Machine.png" alt="Logo" />
            </div>
          }
        />
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>

);



export default Index;
