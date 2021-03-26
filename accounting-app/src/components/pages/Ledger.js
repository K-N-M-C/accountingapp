import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Icon, Button, Header, Modal } from "semantic-ui-react";
import AddJournal from "../AddJournal";

export default function WithFilter() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Entry ID",
        field: "entryID",
        textAlign: "center",
        width: 100,

        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Entry Date",
        field: "entryDate",
        width: 200,
        textAlign: "center",
      },
      {
        label: "Status",
        field: "approvalStatus",
        width: 200,
      },
      {
        label: "Transaction Details",
        field: "transactionDetails",
        sort: "disabled",
        textAlign: "center",
        width: 1000,
      },
      {
        label: "Edit",
        field: "edit",
        sort: "disabled",
        textAlign: "center",
        width: 150,
      },
      {
        label: "Delete",
        field: "delete",
        sort: "disabled",
        textAlign: "center",
        width: 150,
      },
    ],
    rows: [
      {
        entryID: "0001",
        entryDate: "3/20/2021",
        approvalStatus: "Approved",
        transactionDetails: 
          <table>
            <thead>
              <tr>
                  <th>Account Name</th>
                  <th>Credit</th>
                  <th>Debit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>Supply Expense</td>
                  <td>$500</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Cash</td>
                  <td></td>
                  <td>$600</td>
              </tr>
            </tbody>
          </table>,
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        entryID: "0002",
        entryDate: "3/21/2021",
        approvalStatus: "Approved",
        transactionDetails: 
          <table>
            <thead>
              <tr>
                  <th>Account Name</th>
                  <th>Credit</th>
                  <th>Debit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>Checking</td>
                  <td>$100</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Design Income</td>
                  <td></td>
                  <td>$100</td>
              </tr>
            </tbody>
          </table>,
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        entryID: "88903",
        entryDate: "3/22/2021",
        approvalStatus: "Approved",
        transactionDetails: 
          <table>
            <thead>
              <tr>
                  <th>Account Name</th>
                  <th>Credit</th>
                  <th>Debit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>Business account</td>
                  <td>$300</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Office Supplies</td>
                  <td></td>
                  <td>$300</td>
              </tr>
            </tbody>
          </table>,
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        entryID: "0004",
        entryDate: "3/23/2021",
        approvalStatus: "Pending",
        transactionDetails: 
          <table>
            <thead>
              <tr>
                  <th>Account Name</th>
                  <th>Credit</th>
                  <th>Debit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>Cash</td>
                  <td>$200</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Service Revenue</td>
                  <td></td>
                  <td>$200</td>
              </tr>
            </tbody>
          </table>,
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
    ],
  });

  return (
    <div
      style={{
        marginTop: "5%",
        marginLeft: "5px",
        marginRight: "5px",
        textAlign: "center",
      }}
    >
      <Icon name="archive" size="huge" color="grey" />
      <h1>Supplies Expense Ledger</h1>

      
      <MDBDataTableV5
        hover
        data={datatable}
        filter="office"
        proSelect
        searchTop
        searchBottom={false}
      />
    </div>
  );
}