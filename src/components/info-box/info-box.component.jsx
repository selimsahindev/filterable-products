import React from 'react';

import './info-box.styles.css';

export const InfoBox = (props) => {
  return (
    <div className='info-box'>
      <code>{props.text}</code>
    </div>
  );
}