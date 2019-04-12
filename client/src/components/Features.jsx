import React from 'react';

const Features = (props) => (
    <ul>
      {props.features.map((feature, idx) => {
        return <li key={idx}>{feature}</li>
      })}
    </ul>
)

export default Features;