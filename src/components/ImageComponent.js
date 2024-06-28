import React, { useContext, useMemo } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImagesContext } from './ImagesContext';
// const Image = ({ src, alt, hasBorder }) => {
//   console.log(src);
//   const { data } = useContext(ImagesContext);
//   const fluid = useMemo(
//     () => data.allFile.nodes
//       .find(({ relativePath }) => src === relativePath)
//       .childImageSharp.gatsbyImageData,
//     [data, src],
//   );
//   const imageStyle = hasBorder ? { borderRadius: 'rounded-xl' } : {};
//   return <GatsbyImage image={fluid} alt={alt} style={imageStyle} />;
// };
// export default Image;

// const Image = ({ src, alt, hasBorder }) => {
//   const { data } = useContext(ImagesContext);

//   // Determine if the image is a .gif
//   const isGif = src.endsWith('.gif');

//   const fluid = useMemo(() => {
//     if (isGif) return null;
//     return data.allFile.nodes
//       .find(({ relativePath }) => src === relativePath)
//       .childImageSharp.gatsbyImageData;
//   }, [data, src, isGif]);

//   const imageStyle = hasBorder ? { borderRadius: 'rounded-xl' } : {};

//   if (isGif) {
//     return <img src={src} alt={alt} style={imageStyle} />;
//   }

//   return <GatsbyImage image={fluid} alt={alt} style={imageStyle} />;
// };

const Image = ({ src, alt, hasBorder }) => {
  const { data } = useContext(ImagesContext);

  const isGif = src.endsWith('.gif');

  const fluid = useMemo(() => {
    if (isGif) return null;
    const imageNode = data.allFile.nodes.find(({ relativePath }) => src === relativePath);
    return imageNode ? imageNode.childImageSharp.gatsbyImageData : null;
  }, [data, src, isGif]);

  const imageStyle = hasBorder ? { borderRadius: 'rounded-xl' } : {};

  if (isGif) {
    const gifNode = data.allFile.nodes.find(({ relativePath }) => src === relativePath);
    return gifNode ? <img src={gifNode.publicURL} alt={alt} style={imageStyle} /> : null;
  }

  return fluid ? <GatsbyImage image={fluid} alt={alt} style={imageStyle} /> : null;
};

export default Image;