import React, { useEffect, useState } from 'react';
import { Stepper } from 'react-form-stepper';

const styleConfig = {
  activeTextColor: '#ffffff',
  completedTextColor: '#ffffff',
  inactiveTextColor: '#cccccc',
  activeBgColor: '#00A953',
  completedBgColor: '#00A953',
  inactiveBgColor: '#FFFFFF',
  circleFontSize: 20,
  // labelFontSize: 16,
  borderRadius: 50,
  fontWeight: 600,
  size: 40,
};

const ConnectorStyleProps = {
  disabledColor: '#cccccc',
  activeColor: '#00A953',
  completedColor: '#a10308',
  size: 10,
  style: 'solid',
};

const StepperWrap = ({ active, data }) => {
  const [ActiveSstep, SetActiveSstep] = useState();

  const StepKey = (step) => {
    let key;
    if (data.fund_disbursed_status === 'Yes') {
      key = 3;
      return key;
    }

    if (step === 'In Review') {
      key = 1;
      return key;
    } else if (step === 'Approved') {
      key = 2;
      return key;
    } else return (key = 0);
  };

  useEffect(() => {
    if (data) {
      SetActiveSstep(data.application_status);
    }
  }, [data]);

  return (
    <Stepper
      steps={[{ label: 'Sumitted' }, { label: 'In Review' }, { label: 'Approved' }, { label: 'Funds Disbursed' }]}
      activeStep={StepKey(ActiveSstep)}
      styleConfig={styleConfig}
      connectorStyleConfig={ConnectorStyleProps}
    />
  );
};

export default StepperWrap;
