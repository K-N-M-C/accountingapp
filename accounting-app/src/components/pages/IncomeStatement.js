import React from "react"; 
import "../App.css";
import BasicTable2 from "../BasicTable2"; 
import BasicTable3 from "../BasicTable3"; 
import { Icon, Button, Header, Modal } from "semantic-ui-react";
import IncomeButton from "../IncomeButton";
import IncomeButton2 from "../IncomeButton2";



function IncomeStatement() {
  return (
    <div style={{
      marginTop: "5%",
      marginLeft: "1px",
      marginRight: "5px",
      textAlign: "center",
    }}>
  
    <div align="left" ><IncomeButton /> < br /> <IncomeButton2 /> < br /> </div>
    <Icon name="clipboard outline" size="huge" />
    <h1>Income Statement</h1><br /> <br /> 
    <h2> Revenues </h2><br /> 

    <BasicTable2 /> <br /> <br /> 
    <h2> Expenses </h2><br />
    <BasicTable3 />
    </div>
  )
}

export default IncomeStatement;