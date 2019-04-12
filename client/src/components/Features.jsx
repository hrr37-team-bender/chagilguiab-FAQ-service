import React from 'react';

const Features = (props) => (
  <div>
    {props.features.map((feature, idx) => {
      return <div key={idx}>{feature}</div>
    })}
  </div>
)

export default Features;