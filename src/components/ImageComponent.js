import React, { useContext, useMemo } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImagesContext } from './ImagesContext';
const Image = ({ src, alt }) => {
  const { data } = useContext(ImagesContext);
  const fluid = useMemo(
    () => data.allFile.nodes
      .find(({ relativePath }) => src === relativePath)
      .childImageSharp.gatsbyImageData,
    [data, src],
  );  return <GatsbyImage image={fluid} alt={alt} />;
};
export default Image;