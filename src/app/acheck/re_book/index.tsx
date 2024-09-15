
// import { Check } from '@mui/icons-material';
import { Col, Card, CardBody, Progress, Button } from "reactstrap";
import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepConnector, stepConnectorClasses, StepIconProps, styled } from '@mui/material';

const QontoConnector = styled(StepConnector)(({ theme }: any) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#FFFFFF', // White color for active
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#FFFFFF', // White color for completed
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
    borderStyle: 'dotted', // Dotted line
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean, completed?: boolean } }>(
  ({ theme, ownerState }: any) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    ...(ownerState.active && {
      color: '#FFFFFF', // White color for active
    }),
    ...(ownerState.completed && {
      color: '#FFFFFF', // FE8B4C color for completed
    }),
    '& .QontoStepIcon-completedIcon': {
      width: 13,
      height: 13,
      borderRadius: '50%',
      backgroundColor: 'currentColor', // Use currentColor to match the icon color
    },
    '& .QontoStepIcon-circle': {
      width: 12,
      height: 12,
      borderRadius: '50%',
      border: '2px solid #FFFFFF', // White outer circle
      backgroundColor: ownerState.active ? '#FFFFFF' : 'transparent', // Blank inner circle
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active, completed }} className={className}>
      {completed ? (
        <div className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const Steppers = ({ stepActive, setStepActive }: any) => {
  const stepperProgress = ['Date', 'Time', 'Patient Details', 'Summary'];

  return (
    <div>
      <Box sx={{ width: '50%', paddingTop: '1rem' }}>
        <Stepper 
          activeStep={stepActive} 
          alternativeLabel
          connector={<QontoConnector />}
        >
          {stepperProgress.map((menu: any, i: any) => (
            <Step 
              key={i} 
              onClick={() => {
                if (i < stepActive) {
                  // Only allow navigating back
                  setStepActive(i);
                }
              }}
            >
              <StepLabel StepIconComponent={QontoStepIcon} />
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}

export default Steppers;







const ProgressWithNumberStepsCart = ({ stepActive, setStepActive } : any) => {
  return (
    <Col xl="6">
      <Card>
        <CardBody className="mb-1">
          <div className="position-relative m-3 progress-number">
            {stepActive}
            <Progress value={(stepActive + 1) * 25} className="progress-wrapper" />
            <Button
              size="sm"
              color="primary"
              className="position-absolute top-0 start-0 p-0 translate-middle rounded-circle txt-light"
              onClick={() => setStepActive(0)}
            >
            </Button>
            <DynamicProgressWithNumberSteps stepActive={stepActive} setStepActive={setStepActive} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const DynamicProgressWithNumberSteps = ({ stepActive, setStepActive } : any) => {
  
  const ProgressNumberList = [
    {
      color: stepActive >= 0 ? 'primary' : 'transparent',
      number: '0',
      className: 'start-50 txt-light',
      step: 0,
    },
    {
      color: stepActive >= 1 ? 'primary' : 'transparent',
      number: '1',
      className: 'progress-btn start-100 txt-dark',
      step: 1,
    },
    {
      color: stepActive >= 2 ? 'primary' : 'transparent',
      number: '2',
      className: 'progress-btn start-150 txt-dark',
      step: 2,
    },
    {
      color: stepActive >= 3 ? 'primary' : 'transparent',
      number: '3',
      className: 'progress-btn start-150 txt-dark',
      step: 3,
    },
  ];

  return (
    <>
      {ProgressNumberList.map(({ color, number, className, step }, index) => (
        <Button
          size="sm"
          color={color}
          className={`position-absolute top-0 p-0 ${className} translate-middle rounded-circle`}
          style={{ width: '2rem', height: '2rem' }}
          // key={index}
          onClick={() => setStepActive(step)}
        >
          {number}
        </Button>
      ))}
    </>
  );
};
