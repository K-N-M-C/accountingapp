import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Icon, Button, Header, Modal } from "semantic-ui-react";
import AddAccount from "../AddAccount";
import AddEmail from "../AddEmail";


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
        accountName: "Cash",
        accountNumber: "101",
        accountDescription: "Asset",
        initialBalance: "$25,000",
        debit: "$15,000",
        credit: "10,000",
        balance: "$5,000",
        edit: <Button icon="edit outline" color="blue" />,
        delete: <Button icon="trash alternate outline" color="black" />,
      },
      {
        accountName: "Accounts Receivable",
        accountNumber: "102",
        accountDescription: "Asset",
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
        accountName: "Supplies",
        accountNumber: "103",
        accountDescription: "Asset",
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
        accountName: "Contributed Capital",
        accountNumber: "201",
        accountDescription: "Equity",
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
        accountName: "Office Equipment",
        accountNumber: "104",
        accountDescription: "Asset",
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
        accountName: "Prepaid Rent",
        accountNumber: "301",
        accountDescription: "Expense",
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
        accountName: "Prepaid  Insurance",
        accountNumber: "302",
        accountDescription: "Expense",
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
        accountName: "Unearned Revenue",
        accountNumber: "401",
        accountDescription: "Revenue",
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
        accountName: "Accounts Payable",
        accountNumber: "501",
        accountDescription: "Liability",
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
        accountName: "Advertising",
        accountNumber: "303",
        accountDescription: "Expense",
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
        accountName: "Utilities",
        accountNumber: "304",
        accountDescription: "Expense",
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
        accountName: "Depreciation Expense",
        accountNumber: "305",
        accountDescription: "Expense",
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
        accountName: "Accumulated Depreciation",
        accountNumber: "502",
        accountDescription: "Liability",
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
        accountName: "Salaries Payable",
        accountNumber: "503",
        accountDescription: "Liability",
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
        accountName: "Rent Expense",
        accountNumber: "306",
        accountDescription: "Expense",
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
        accountName: "Service Revenue",
        accountNumber: "402",
        accountDescription: "Revenue",
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
        accountName: "Supplies Expense",
        accountNumber: "307",
        accountDescription: "Expense",
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
        accountName: "Phone Expense",
        accountNumber: "308",
        accountDescription: "Expense",
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
      <AddEmail /> 
       
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