import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./style.css";

function Steeper({ number }) {
  const [idtheme, setIdTheme] = useState(localStorage.getItem("themeId"));
  const [tariffId, setIdTariff] = useState(
    localStorage.getItem("TariffIdPrices")
  );

  useEffect(() => {
    setIdTheme(localStorage.getItem("themeId"));
    setIdTariff(localStorage.getItem("TariffIdPrices"));
  }, []);

  const steps = [
    { name: "Barcha mahsulotlar", url: "/categories", number: "01" },
    { name: "Dizayn tanlash", url: `/theme/${idtheme ? idtheme : 1}`, number: "02" },
    { name: "Ta'rifni tanlash", url: `/prices`, number: "03" },
    { name: "To'lov bosqichi", url: `/pricepage/${tariffId ? tariffId : 1}`, number: "04" },
  ];

  return (
    <div className="container">
      <Box sx={{ width: "100%", margin: "20px 0" }}>
        <Stepper activeStep={number} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index} completed={number > index}>
              <StepLabel className="steeper_step">
                <Link to={label.url}>
                  <span className="fs-4 me-0 me-md-3">{label.number}</span> {label.name}
                </Link>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}

export default Steeper;
