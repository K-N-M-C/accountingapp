import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BasicTable3 = () => {
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
          <td>501</td>
          <td>Prepaid Rent</td> 
          <td>$750.00 </td> 
          <td> </td>         
        </tr>
        <tr>
          <td>502</td>
          <td>Prepaid Insurance</td>
          <td> $1,050.00</td> 
          <td> </td>
          
        </tr>
        <tr>
          <td>503</td>
          <td>Advertising Expense</td>
          <td> $690.00</td> 
          <td> </td>
          
        </tr>
        <tr>
          <td>504</td>
          <td>Salaries Expense</td>
          <td> $5,350.00</td> 
          <td> </td>
          
        </tr>
        <tr>
          <td>505</td>
          <td>Telephone Expense</td>
          <td> $1,250.00</td> 
          <td> </td>
          
        </tr>
        <tr>
          <td>506</td>
          <td>Utilities Expense</td>
          <td> $652.00</td> 
          <td> </td>
          
        </tr>
        <tr>
          <td>507</td>
          <td>Insurance Expense</td>
          <td> $2,000.00</td> 
          <td> </td>
          
        </tr>
        <tr>
          <td>508</td>
          <td>Depreciation Expense</td>
          <td>$720.00 </td> 
          <td> </td>
          
        </tr>
        <tr>
          <td>509</td>
          <td>Rent</td>
          <td> $3,280.00</td> 
          <td> </td>
          
        </tr>
        <tr>
          <td>510</td>
          <td>Supplies</td>
          <td> $478.00</td> 
          <td> </td>
          
        </tr>
        <tr>
          <td>Total Expenses</td>
          <td></td>
          <td>$11,294.80 </td> 
          <td> </td>          
        </tr>
        <tr> 
        <td> </td> 
        <td> </td> 
        </tr>
        <tr style={{borderTop: "2pt solid black"}}> 
        <td> Net Income: </td>
        <td> </td> 
        <td> </td> 
        <td> $4,205.20</td>
        
        </tr>
        </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable3;