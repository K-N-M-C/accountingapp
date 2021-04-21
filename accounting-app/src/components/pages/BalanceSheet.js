import React from "react"; 
import "../App.css";
import BasicTable from "../BasicTable"; 
import { Icon, Button, Header, Modal } from "semantic-ui-react";
import IncomeButton from "../IncomeButton";
import IncomeButton2 from "../IncomeButton2";



function BalanceSheet() {
  return (
    <div style={{
      marginTop: "5%",
      marginLeft: "1px",
      marginRight: "5px",
      textAlign: "center",
    }}>
  
    <div align="left" ><IncomeButton /> < br /> <IncomeButton2 /> < br /> </div>
    <Icon name="clipboard outline" size="huge" />
    <h1>Balance Sheet</h1><br /> 

    <BasicTable /> <br /> <br /> <br /> <br /> <br /> <br /> 
    </div>
  )
}

export default BalanceSheet;