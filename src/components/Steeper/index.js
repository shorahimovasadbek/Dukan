import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Link } from "react-router-dom/cjs/react-router-dom";
import './style.css'

const steps = [
  {
    name: "Keyingi bosqich",
    url: '/thems'
  },
  {
    name: "Keyingi bosqich",
    url: '/theme'
  },
  {
    name: "Keyingi bosqich",
    url: '/prices'
  },
  {
    name: "To'lov bosqichi",
    url: '/pricepage'
  }
];

function Steeper({number}) {
  return (
    <Box sx={{ width: "100%", margin: '20px 0' }}>
      <Stepper activeStep={number} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel className="steeper_step"><Link to={label.url}>{label.name}</Link></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Steeper;
