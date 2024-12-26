import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import './style.css'

const steps = [
  "Keyingi bosqich","Keyingi bosqich","Keyingi bosqich",
  "To'lov bosqichi",
];

function Steeper({number}) {
  return (
    <Box sx={{ width: "100%", margin: '20px 0' }}>
      <Stepper activeStep={number} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel className="steeper_step">{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Steeper;
