import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepConnector, stepConnectorClasses, StepIconProps, styled } from '@mui/material';
// import { Check } from '@mui/icons-material';

const QontoConnector = styled(StepConnector)(({ theme } : any) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#FE8B4C',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#FE8B4C',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState } : any) => ({
      color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
      ...(ownerState.active && {
        color: '#FE8B4C',
      }),
      '& .QontoStepIcon-completedIcon': {
        // color: '#FE8B4C',
        // zIndex: 1,
        // fontSize: 18,
        width: 13,
        height: 13,
        borderRadius: '100%',
        backgroundColor: '#FE8B4C',
      },
      '& .QontoStepIcon-circle': {
        width: 12,
        height: 12,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
      },
    }),
  );
  

  function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <div className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }
  

const Steppers = ({ stepActive, setStepActive }: any) => {
  const stepperProgress = [
    'Date',
    'Time',
    'Patient Details',
    'Summary'
  ]
    return (
        <div>
            {/* <h2 className='text-white ml-[7.8rem]'>{stepperProgress[stepActive]}</h2> */}
            <Box sx={{ width: '100%', '& .MuiStepIcon-active': { color: 'green' } , paddingTop : '1rem'}}
            >
                <Stepper 
                    activeStep={stepActive} 
                    alternativeLabel
                    connector={<QontoConnector />}
                     >
                    {
                        stepperProgress.map((menu: any, i: any) => (
                            <Step key={i} 
                            onClick={()=>setStepActive(i)}
                            
                            >
                                <StepLabel
                                StepIconProps={{ style: { color: i === stepActive ? '#FE8B4C' : undefined } }}
                                StepIconComponent={QontoStepIcon}
                                >
                                    </StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
            </Box>
        </div>
    );
}

export default Steppers;
