import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Icon, Button, Header, Modal } from "semantic-ui-react";

export default function WithFilter() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Event ID",
        field: "eventID",
        textAlign: "center",
        width: 100,

        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Creator",
        field: "creator",
        width: 200,
        textAlign: "center",
      },
      {
        label: "Account ID",
        field: "accountID",
        textAlign: "center",
        width: 200,
      },
      {
        label: "Account Name",
        field: "accountName",
        textAlign: "center",
        width: 200,
      },
      {
        label: "Event Information",
        field: "eventInformation",
        textAlign: "center",
        width: 200,
      },
      {
        label: "Date",
        field: "eventDate",
        textAlign: "center",
        width: 100,
      },
    ],
    rows: [
      {
        eventID: "1001",
        creator: "admin",
        accountID: "101",
        accountName: "Cash",
        eventInformation: (
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Debit</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td>Credit</td>
                <td>$200.00</td>
                <td>$300.00</td>
              </tr>
              <tr>
                <td>Balance</td>
                <td>$200.00</td>
                <td>$300.00</td>
              </tr>
            </tbody>
          </table>
        ),
        eventDate: "3/23/2021 at 5:30PM"
      },
      {
        eventID: "1002",
        creator: "admin",
        accountID: "301",
        accountName: "Prepaid Rent",
        eventInformation: (
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Debit</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td>Credit</td>
                <td>$1000.00</td>
                <td>$5000.00</td>
              </tr>
              <tr>
                <td>Balance</td>
                <td>$1000.00</td>
                <td>$5000.00</td>
              </tr>
            </tbody>
          </table>
        ),
        eventDate: "3/24/2021 at 1:22PM"
      },
      {
        eventID: "1003",
        creator: "admin",
        accountID: "303",
        accountName: "Advertising",
        eventInformation: (
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Debit</td>
                <td>$100.00</td>
                <td>$200.00</td>
              </tr>
              <tr>
                <td>Credit</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td>Balance</td>
                <td>$100.00</td>
                <td>$200.00</td>
              </tr>
            </tbody>
          </table>
        ),
        eventDate: "3/25/2021 at 4:42PM"
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
      <Icon name="book" size="huge" color="grey" />
      <h1>Event Log</h1>

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
