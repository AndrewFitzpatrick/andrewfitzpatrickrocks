import React, { useState } from 'react';


function RolloverImage(props) {
  const [hover, setHover] = useState(false);
  return (
    <img
      src={hover ? props.rolloverImage : props.defaultImage}
      alt={props.altImage}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
          transition: `opacity 0.5s`,
          opacity: `${hover ? '1' : '0'}`
      }}
    />
  );
}

export default RolloverImage;