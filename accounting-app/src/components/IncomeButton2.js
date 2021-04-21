import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const DropdownPage = () => {
  return (
    <MDBDropdown dropright>
      <MDBDropdownToggle caret color="secondary">
        Export To: 
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem width="200" href="/reports">PDF (.pdf) </MDBDropdownItem>
        <MDBDropdownItem href="/incomestatement">Excel Spreadsheet (.xcl) </MDBDropdownItem>
        <MDBDropdownItem href="/balancesheet">Word Doc (.docx) </MDBDropdownItem>
        
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default DropdownPage;