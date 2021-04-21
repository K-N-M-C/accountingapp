import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BasicTable2 = () => {
  return (
    <MDBTable striped>
    <MDBTableHead>
        <tr>
          <th>Account #</th>
          <th>Account Name</th>
          <th>Debits</th>
          <th>Credits</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>401</td>
          <td>Unearned Revenue</td> 
          <td> </td> 
          <td> $1,250.00</td>         
        </tr>
        <tr>
          <td>402</td>
          <td>Service Revenue</td>
          <td> </td> 
          <td> $14,250.00</td>
          
        </tr>
        <tr>
          <td>Total Revenue</td>
          <td></td>
          <td> </td> 
          <td> $15,500.00</td>
          
        </tr>
        </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable2;