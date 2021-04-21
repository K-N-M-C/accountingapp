import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const DropdownPage = () => {
  return (
    <MDBDropdown dropright>
      <MDBDropdownToggle caret color="secondary">
        Report Type 
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem href="/reports">Trial Balance</MDBDropdownItem>
        <MDBDropdownItem href="/incomestatement">Income Report</MDBDropdownItem>
        <MDBDropdownItem href="/balancesheet">Balance Sheet</MDBDropdownItem>
        
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default DropdownPage;

