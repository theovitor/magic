import React from 'react';
import './index.css';
const FlexBox = (props) => {
  return (
    <>
      <h2>{props.titulo}</h2>
      <div className="flex-box">{props.children}</div>
    </>
  );
};

export default FlexBox;
