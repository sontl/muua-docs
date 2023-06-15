import React from 'react';

const ImageWithWidth = ({ src, alt, width }) => {
  return <img src={src} alt={alt} style={{ width: `${width}px` }} />;
};

export default ImageWithWidth;
