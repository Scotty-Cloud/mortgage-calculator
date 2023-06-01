import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import LoanSelect from "./Components/LoanSelect";

function App() {
    const [data, setData] = useState({
      homeValue: 30000,
      downPayment: 30000 * 0.2,
      loanAmount: 30000 * 0.8,
      loanTerm: 5,
      interestRate: 5,
      // monthlyPayment: 0,
    });
  
    return (
      <div className="App">
        <Navbar />
        <Container maxWidth="xl" sx={{marginTop:4}}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <SliderSelect data={data} setData={setData} />
              <LoanSelect data={data} setData={setData}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Result data={data}/>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }

export default App;