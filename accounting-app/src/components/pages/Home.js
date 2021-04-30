import React from "react";
import { MDBIcon } from "mdbreact";
import "../App.css";

function Home () {
  return (
    <div align="center"><br /> <br />
      <h1>Welcome to K-N-M-C Accounting App!</h1> <br /> <br />
      <h2> <u>Ratio Updates</u> </h2> 
      <p style={{fontSize: "20px"}}><MDBIcon icon="circle" size="2x" style={{color:"green"}} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Ratio: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14.9</p><br /> 
      <p style={{fontSize: "20px"}}><MDBIcon icon="circle" size="2x" style={{color:"green"}} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quick  Ratio: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8.11</p> <br />
      <p style={{fontSize: "20px"}}><MDBIcon icon="circle" size="2x" style={{color:"green"}} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Debt Asset Ratio: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.07</p> <br />
      <p style={{fontSize: "20px"}}><MDBIcon icon="circle" size="2x" style={{color:"green"}} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Debt Equity Ratio:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.08</p><br />
      <br /> <br /><br /> <br />

    </div>
  )
}

export default Home;