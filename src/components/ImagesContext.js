import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
const ImagesContext = React.createContext({ data: {} });
function GatsbyImagesProvider({ children }) {  const data = useStaticQuery(graphql`{ 
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }`);
  const context = { data };  return (
  <ImagesContext.Provider value={context}>
    {children}
  </ImagesContext.Provider>
);}
export { ImagesContext, GatsbyImagesProvider };