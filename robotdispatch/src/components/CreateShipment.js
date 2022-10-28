import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
const { Step } = Steps;
const steps = [
  {
    title: 'Address',
    content: 'From and To and Dimension and Pick up time',
  },
  {
    title: 'Vehicle',
    content: 'Vehicle Selection / 4 Types / Images',
  },
  {
    title: 'Estimation',
    content: 'Left is image and info (vehicle type, weight, dimension, pickup time, address), Right is Map from backend',
  },
  {
    title: 'Confirmation',
    content: 'Similar to Estimation, (plus tracking number and id). Need more discussion with backend',
  }
];
const CreateShipment = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Ship
          </Button>
        )}
        
      </div>
    </>
  );
};
export default CreateShipment;