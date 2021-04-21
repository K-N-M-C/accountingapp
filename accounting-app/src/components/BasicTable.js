import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BasicTable = () => {
  return (
    <MDBTable striped>
      <MDBTableBody>
        <tr style={{borderBottom: "2pt solid black"}}>
          <td>Beginning Balance</td>
          <td>$22,402.00</td>          
        </tr>
        <tr>
          <td>Net Income</td>
          <td>$4,205.20</td>
          
        </tr>
        <tr>
          <td>Total Drawings</td>
          <td>$15,242.00</td>
          
        </tr>
        <tr style={{borderTop: "2pt solid black"}}>
          <td>Ending Balance</td>
          <td>$27,362.20</td>
          
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable;