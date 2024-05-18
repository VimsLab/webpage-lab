import React from 'react';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import newsData from '../data/news-data';
import projectsData from '../data/projects-data';
import teamData from '../data/team-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import { StaticImage } from 'gatsby-plugin-image';
import Image from '../components/ImageComponent';
import { GatsbyImagesProvider } from '../components/ImagesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter,faFacebook,faPinterest, faGithub, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
library.add(faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram, faHouse, faUser, faLinkedin)


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton
} from '@material-tailwind/react';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
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
        <p className="mt-4">
          There are many ongoing and supported research projects in the VIMS lab. Currently, work is being done in the
          following research areas:
          Stereo Vision, Machine Learning, Image Processing, Virtual Reality, Data Mining, Biomedical Image Analysis,
          and more.
        </p>
        <br></br><br></br><br></br>
        {projectsData.map(projects => (
          <div key={projects.key} className="flex-1 px-3">
            {/* <Card className="flex flex-col mt-6 w-96 h-full">
                <CardHeader color="blue-gray" className="relative h-56"></CardHeader> */}
            <Card className="w-full max-w-[48rem] flex-row">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-1/12 shrink-0 rounded-r-none"
                // className="mt-0 flex-none w-100 h-100 rounded-r-none"
                // className='m-0 shrink h-100'
              >
                <GatsbyImagesProvider>
                  {/* <div className='flex-none w-50 h-50'> */}
                  <Image src={projects.image} alt="card-image" />
                  {/* </div> */}
                </GatsbyImagesProvider>
              </CardHeader>
              <CardBody>
                {/* <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    startups
                  </Typography> */}
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {projects.title}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                  {projects.content}
                </Typography>
                <a href={projects.readMore} className="inline-block">
                  <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
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
        <div className="grid grid-cols-3  lg:grid-cols-3 items-stretch md:flex-row md:-mx-3">

          {newsData.map(news => (
            <div key={news.key} className="flex-1 px-3 py-3 lg:py-6">

              <Card className="flex flex-col mt-6 w-80 h-full">
                <CardHeader color="blue-gray" className="relative h-60">
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
                <CardHeader floated={false} className="h-80">
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
                      <FontAwesomeIcon className='p-5' icon={faEnvelope} />
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
                        <FontAwesomeIcon className='p-5' icon="fab fa-linkedin text-lg" />
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
                        <FontAwesomeIcon className='p-5' icon={faGlobe} />
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
