import React from 'react';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import newsData from '../data/news-data';
import projectsData from '../data/projects-data';
import journalData from '../data/Journal-paper-data';
import publicationsData from '../data/experiment';
import teamData from '../data/team-data';
import photosData from '../data/photos-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import { StaticImage } from 'gatsby-plugin-image';
import Image from '../components/ImageComponent';
import { GatsbyImagesProvider } from '../components/ImagesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {
  faTwitter,
  faFacebook,
  faPinterest,
  faGithub,
  faWhatsapp,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faHouse, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

library.add(faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram, faHouse, faUser, faLinkedin);


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip
} from '@material-tailwind/react';
import { graphql } from 'gatsby';

let pubscount = 1;
let final_count = 30;
let max_years = 4;
let date = new Date()
let currentYear = date.getFullYear();

const App = () => {
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear - 3;

  const filteredData = publicationsData.filter(entry => entry.year >= maxYear);

  console.log(filteredData);

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

const Index = ({ data, deviceType }) => {
  return (
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
            <p className="mt-4 text-gray-600">Video/Image Modeling and Synthesis (VIMS) Lab</p>
            <p className="mt-8 md:mt-12">
              <a href="mailto:vims@cis.udel.edu">
                <Button size="lg">Contact</Button>
              </a>
            </p>
          </div>
          <div className="lg:w-2/5">
            <StaticImage src="../images/landing-glasses.jpg" alt="Landing" />
          </div>
        </div>
      </section>
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
        </div>
      </section>

      <section id='publications'>
        <div className="container mx-auto items-stretch">
          <h2 className="text-3xl lg:text-5xl text-center font-semibold pb-8">Publications</h2>
          {App()}
        </div>
      </section>

      <section id="news" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-gray-600 text-center">News</LabelText>
          <div className="grid grid-cols-3  lg:grid-cols-3 items-stretch md:flex-row md:-mx-3">

            {newsData.map(news => (
              <div key={news.key} className="flex-1 px-3 py-3 lg:py-6">

                <Card className="flex flex-col mt-6 w-80 h-full">
                  <CardHeader color="blue-gray" className="relative h-60 mt-6">
                    <GatsbyImagesProvider>
                      <Image src={news.image} alt="card-image" />
                    </GatsbyImagesProvider>
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
      <section id="team" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-gray-600 text-center">Team</LabelText>
          <div className="grid grid-cols-4 items-stretch md:flex-row md:-mx-3">

            {teamData.map(teamMember => (
              <div key={teamMember.key} className="flex-1 px-3 py-1 lg:py-3">

                <Card className="flex flex-col mt-6 w-70 h-full">
                  <CardHeader floated={false} className="">
                    <GatsbyImagesProvider>
                      <Image src={teamMember.image} alt="card-image" />
                    </GatsbyImagesProvider>
                  </CardHeader>
                  <CardBody className="text-center pb-4">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                      {teamMember.name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                      {teamMember.title}
                    </Typography>
                    <Typography color="blue-gray" className="font-small h-8">
                      {teamMember.research_areas}
                    </Typography>
                  </CardBody>
                  <CardFooter className="flex justify-center gap-1 pt-4 pb-1">
                    <Tooltip content="e-mail">
                      <Typography
                        as="a"
                        href={teamMember.email}
                        variant="lead"
                        color="black"
                      >
                        <FontAwesomeIcon className="p-5" icon={faEnvelope} />
                        <i className="fab fa-envelope" />
                      </Typography>
                    </Tooltip>
                    {teamMember.linkedin && (
                      <Tooltip content="Follow">
                        <Typography
                          as="a"
                          href={teamMember.linkedin}
                          variant="lead"
                          color="blue"
                        >
                          <FontAwesomeIcon className="p-5" icon="fab fa-linkedin text-lg" />
                        </Typography>
                      </Tooltip>
                    )}
                    {teamMember.link && (
                      <Tooltip content="Visit personal website">
                        <Typography
                          as="a"
                          href={teamMember.link}
                          variant="lead"
                        >
                          <FontAwesomeIcon className="p-5" icon={faGlobe} />
                        </Typography>
                      </Tooltip>
                    )}
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="photos" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-gray-600 text-center">Photos</LabelText>
          {/*<div className="grid grid-cols-3  lg:grid-cols-3 items-stretch md:flex-row md:-mx-3">*/}
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={deviceType !== 'mobile' ? true : false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            focusOnSelect={true}
            itemClass="carousel-item-padding-40-px"
          >
            {photosData.map(photo => (
              <div className="p-3">
                <GatsbyImagesProvider>
                  <Image src={photo.image} alt={photo.key} hasBorder={true} />
                </GatsbyImagesProvider>
                <Typography variant="small" color="blue-gray" className="mb-2">
                  {photo.title}
                </Typography>
              </div>
            ))}
          </Carousel>
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
                <h2 className="text-2xl lg:text-2xl text-gray-600 text-center">Three workstations with 4x2080Ti
                  each</h2>
                <br></br>
                <h2 className="text-2xl lg:text-2xl text-gray-600 text-center">One workstation with 2x2080Ti</h2>
                <br></br>
                <h2 className="text-2xl lg:text-2xl text-gray-600 text-center">One workstation with 1x2080Ti and
                  1x1080Ti</h2>
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
        <h3 className="text-5xl font-semibold">Join us in advancing computer vision</h3>
        <p className="mt-8 text-xl font-light ml-20 mr-20">
          Our lab is at the forefront of advancing computer vision through deep learning. Get involved and help us
          explore the next generation of visual understanding technologies.
        </p>
        <p className="mt-8">
          <a href="mailto:vims@cis.udel.edu">
            <Button size="xl">Contact</Button>
          </a>

        </p>
      </section>
    </Layout>

  );
};


export default Index;
