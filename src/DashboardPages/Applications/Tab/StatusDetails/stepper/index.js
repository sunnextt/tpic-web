import React from 'react';
import { Stepper } from 'react-form-stepper';

const StepperWrap = () => {
  return (
    <Stepper
      steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: 'Step 4' }]}
      activeStep={2}
    />
  );
};

export default StepperWrap;
