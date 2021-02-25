import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Icon, Button, Header, Modal } from "semantic-ui-react";

export default function WithFilter() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Account Name",
        field: "accountName",
        textAlign: "center",
        width: 200,

        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Account Number",
        field: "accountNumber",
        width: 200,
        textAlign: "center",
      },
      {
        label: "Account Description",
        field: "accountDescription",
        width: 200,
      },
      {
        label: "Initial Balance",
        field: "initialBalance",
        sort: "asc",
        width: 150,
      },
      {
        label: "Debit",
        field: "debit",
        sort: "disabled",
        width: 150,
      },

      {
        label: "Credit",
        field: "credit",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Balance",
        field: "balance",
        sort: "disabled",
        width: 150,
      },
    ],
    rows: [
      {
        accountName: "Tiger Nixon",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
      },
      {
        accountName: "Garrett Winters",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
      },
      {
        accountName: "Ashton Cox",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
      },
      {
        accountName: "Cedric Kelly",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
      },
      {
        accountName: "Airi Satou",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
      },
      {
        accountName: "Brielle Williamson",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
      },
      {
        accountName: "Herrod Chandler",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
      },
    ],
  });

  return (
    <div
      style={{
        marginTop: "5%",
        marginLeft: "1px",
        marginRight: "5px",
        textAlign: "center",
      }}
    >
      <Icon name="user circle" size="huge" color="teal" />
      <h1>User</h1>

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
