import React from 'react';
import { Stepper } from 'react-form-stepper';

const styleConfig = {
  activeTextColor: '#ffffff',
  completedTextColor: '#ffffff',
  inactiveTextColor: '#cccccc',
  activeBgColor: '#00A953',
  completedBgColor: '#00A953',
  inactiveBgColor: '#FFFFFF',
  circleFontSize: 20,
  labelFontSize: 16,
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

const connectorStyleConfig = {
  disabledColor: '#cccccc',
  activeColor: '#00A953',
  completedColor: '#00A953',
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

const StepperWrap = ({ active }) => {
  return (
    <Stepper
      steps={[{ label: 'Sumitted' }, { label: 'In Review' }, { label: 'Approved' }, { label: 'Funds Disbursed' }]}
      activeStep={active}
      styleConfig={styleConfig}
      connectorStyleConfig={connectorStyleConfig}
    />
  );
};

export default StepperWrap;
