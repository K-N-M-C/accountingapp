import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Icon, Button, Header, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function WithFilter() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Account Name",
        field: "accountName",
        textAlign: "center",
        width: 150,

        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Account Number",
        field: "accountNumber",
        width: 150,
        textAlign: "center",
      },
      {
        label: "Account Description",
        field: "accountDescription",
        width: 150,
      },
      {
        label: "Initial Balance",
        field: "initialBalance",
        sort: "asc",
        width: 100,
      },
      {
        label: "Debit",
        field: "debit",
        sort: "disabled",
        width: 100,
      },

      {
        label: "Credit",
        field: "credit",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Balance",
        field: "balance",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Event Log",
        field: "eventLog",
        sort: "disabled",
        width: 100,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
        eventLog: <Link to="/EventLog"><Icon name="book" color="grey" /></Link>,
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
