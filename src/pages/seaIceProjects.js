import React, { useEffect, useState } from 'react';
import LabelText from '../components/LabelText';
import OtherLayout from '../components/layout/OtherLayout';
import SplitSection from '../components/SplitSection';
// import newsData from '../data/news-data';
// import projectsData from '../data/projects-data';
import seaIceProjectsData from '../data/seaice-data'
// import photosData from '../data/photos-data';
import { StaticImage } from 'gatsby-plugin-image';
import Image from '../components/ImageComponent';
import { GatsbyImagesProvider } from '../components/ImagesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// import {
//   faFacebook,
//   faGithub,
//   faInstagram,
//   faLinkedin,
//   faPinterest,
//   faTwitter,
//   faWhatsapp
// } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faGlobe, faHouse } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Button, Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from '@material-tailwind/react';

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

const SIP = ({ data, deviceType }) => {
  return (
    <OtherLayout>
      {/* <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Fundamental Discoveries, Transformative Applications
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
      </section> */}
      <section id="projects" className="py-10 lg:pb-10 lg:pt-10">
        <div className="container mx-auto">
          <LabelText className="mb-2 text-gray-600 text-center">Projects</LabelText>
          <p className="mt-4 ml-4 mr-4">
            VIMS Lab works on Sea Ice include high-resolution motion analysis of sea ice fields 
            using optical flow, deep learning for detecting sea ice leads, and a web app for analyzing sea ice rasters. 
            Additionally, we worked on 3D reconstruction of sea ice with custom stereo algorithms, understanding 
            non-rigid sea ice dynamics, and coastal ice dynamics through reflector track extraction. 
            Some works focus on motion analysis of satellite imagery and 3D non-rigid motion analysis from cloud image sequences.
          </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch md:flex-row md:-mx-3">
              {seaIceProjectsData.map(projects => (
                <div key={projects.key} className="flex-1 px-3 py-3 lg:py-6">
                  <Card className="flex flex-col mt-6 w-70 h-full">
                    <CardHeader floated={false} color="blue-gray">
                      <GatsbyImagesProvider>
                        <Image src={projects.image} alt="card-image" />
                      </GatsbyImagesProvider>
                    </CardHeader>
                    <CardBody>
                      <div className="mb-3 flex justify-center size-auto">
                        <Typography variant="h5" color="blue-gray">
                          <span class="inline-block">{projects.title}</span>
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

      {/* <section id="publications">
        <div className="container mx-auto items-stretch">
          <LabelText className="mb-8 text-gray-600 text-center">Publications</LabelText>
          {App()}
        </div>
      </section> */}

      {/* <section id="news" className="py-20 lg:py-40">
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
                    {teamMember.email && (
                      <Tooltip content={`e-mail: ${teamMember.email}`}>
                        <Typography
                          as="a"
                          href={`mailto:${teamMember.email}`}
                          variant="lead"
                          color="black"
                        >
                          <FontAwesomeIcon className="p-5" icon={faEnvelope} />
                          <i className="fab fa-envelope" />
                        </Typography>
                      </Tooltip>
                    )}
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
          <div className="container mx-auto px-8 lg:flex justify-center">
            <p className="mt-8 md:mt-12">
              <a href="https://www.eecis.udel.edu/wiki/vims/index.php/Main/People">
                <Button size="lg">Alumni</Button>
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="photos" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-gray-600 text-center">Photos</LabelText>
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
          <LabelText className="mb-8 text-gray-600 text-center">Computational Resources</LabelText>
          <SplitSection
            id="services"
            primarySlot={
              <div className="lg:pr-32 xl:pr-48">
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
      </section> */}
    </OtherLayout>

  );
};


export default SIP;
