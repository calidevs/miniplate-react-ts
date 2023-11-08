import React, { CSSProperties } from "react";

interface ImageProps {
  src: string;
  alt: string;
  style?: CSSProperties;
}

const imageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

const Image: React.FC<ImageProps> = ({ src, alt, style }) => {
  return <img src={src} alt={alt} style={{ ...imageStyle, ...style }} />;
};

export default Image;
