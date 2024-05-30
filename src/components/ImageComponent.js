import React, { useContext, useMemo } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImagesContext } from './ImagesContext';
const Image = ({ src, alt, hasBorder }) => {
  const { data } = useContext(ImagesContext);
  const fluid = useMemo(
    () => data.allFile.nodes
      .find(({ relativePath }) => src === relativePath)
      .childImageSharp.gatsbyImageData,
    [data, src],
  );
  const imageStyle = hasBorder ? { borderRadius: 'rounded-xl' } : {};
  return <GatsbyImage image={fluid} alt={alt} style={imageStyle} />;
};
export default Image;