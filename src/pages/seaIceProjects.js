import React, { useEffect, useState } from 'react';
import LabelText from '../components/LabelText';
import OtherLayout from '../components/layout/OtherLayout';
import seaIceProjectsData from '../data/seaice-data'
import { StaticImage } from 'gatsby-plugin-image';
import Image from '../components/ImageComponent';
import { GatsbyImagesProvider } from '../components/ImagesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <section id="projects" className="py-10 lg:pb-10 lg:pt-10">
        <div className="container mx-auto">
          <LabelText className="mb-2 text-gray-600 text-center">Projects</LabelText>
          <p className="mt-4 ml-4 mr-4">
            VIMS Lab works on Sea Ice include high-resolution motion analysis of sea ice fields 
            using optical flow, deep learning for detecting sea ice leads, and a web app for analyzing sea ice rasters. 
            Additionally, we work on 3D reconstruction of sea ice with custom stereo algorithms, understanding 
            non-rigid sea ice dynamics, and coastal ice dynamics through reflector track extraction. 
            Also, some works focus on motion analysis of satellite imagery and 3D non-rigid motion analysis from cloud image sequences.
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
    </OtherLayout>

  );
};


export default SIP;
