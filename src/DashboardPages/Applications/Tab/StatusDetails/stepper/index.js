import React, { useEffect, useState } from 'react';
import { Stepper } from 'react-form-stepper';
import { StepKey } from 'utils/getStepKey';

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

// export interface StepperProps extends React.HTMLProps<HTMLDivElement> {
//   steps?: StepDTO[];
//   activeStep?: number;
//   connectorStateColors?: boolean;
//   stepClassName?: string;
//   styleConfig?: StepStyleDTO;
//   connectorStyleConfig?: ConnectorStyleProps;
//   hideConnectors?: boolean | 'inactive';
//   nonLinear?: boolean;
// }

// export interface StepStyleDTO {
//   [key: string]: any;
//   activeBgColor: string;
//   activeTextColor: string;
//   completedBgColor: string;
//   completedTextColor: strsing;
//   inactiveBgColor: string;
//   inactiveTextColor: string;
//   size: React.ReactText;
//   circleFontSize: React.ReactText;
//   labelFontSize: React.ReactText;
//   borderRadius: React.ReactText;
//   fontWeight: React.ReactText;
// }

const ConnectorStyleProps = {
  disabledColor: '#cccccc',
  activeColor: '#00A953',
  completedColor: '#a10308',
  size: 10,
  style: 'solid',
};

// export interface ConnectorStyleProps {
//   [key: string]: any;
//   disabledColor: string;
//   activeColor: string;
//   completedColor: string;
//   size: React.ReactText;
//   stepSize?: React.ReactText;
//   style: string;
// }

const StepperWrap = ({ active, data }) => {
  const [ActiveSstep, SetActiveSstep] = useState();

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
