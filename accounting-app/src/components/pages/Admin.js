import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Icon, Button, Header, Modal } from "semantic-ui-react";
import AddAccount from "../AddAccount";

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
      {
        label: "Edit",
        field: "edit",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Delete",
        field: "delete",
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
        edit: <Button icon="edit outline" color="blue" />,
        delete: <Button icon="trash alternate outline" color="black" />,
      },
      {
        accountName: "Garrett Winters",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Ashton Cox",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Cedric Kelly",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Airi Satou",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Brielle Williamson",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Herrod Chandler",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Rhona Davidson",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Colleen Hurst",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Sonya Frost",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Jena Gaines",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Quinn Flynn",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Charde Marshall",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Haley Kennedy",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Tatyana Fitzpatrick",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Michael Silva",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Paul Byrd",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: (
          <Button icon="trash alternate outline" width="100px" color="black" />
        ),
      },
      {
        accountName: "Gloria Little",
        accountNumber: "000987321",
        accountDescription: "Active Member",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
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
        marginLeft: "1px",
        marginRight: "5px",
        textAlign: "center",
      }}
    >
      <Icon name="user circle" size="huge" color="green" />
      <h1>Administrator</h1>

      <AddAccount />
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