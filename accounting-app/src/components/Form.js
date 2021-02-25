import { React, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Dropdown, TextArea } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function InfoForm() {
  const classes = useStyles();
  const [description, setDescription] = useState();
  const [balance, setBalance] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const handleChange = (event) => {
    setDescription(event.target.value);
    setBalance(event.target.value);
  };

  const accounts = [
    //Asset Accounts
    {
      value: 101,
      text: "Cash",
      type: "Debit",
    },
    {
      value: 120,
      text: "Accounts Receivable",
      type: "Debit",
    },
    {
      value: 150,
      text: "Supplies",
      type: "Debit",
    },
    //Liabability Accounts
    {
      value: 210,
      text: "Notes Payable",
      type: "Credit",
    },
    {
      value: 215,
      text: "Accounts Payable",
      type: "Credit",
    },
    {
      value: 220,
      text: "Wages Payable",
      type: "Credit",
    },
    //Expense Account
    {
      value: 500,
      text: "Salaries Expense",
      type: "Debit",
    },
    {
      value: 510,
      text: "Wages Expense",
      type: "Debit",
    },
    {
      value: 540,
      text: "Supplies Expense",
      type: "Debit",
    },
  ];
  const termType = [
    {
      value: "Current",
      text: "Current",
    },
    {
      value: "Long-Term",
      text: "Long-Term",
    },
  ];
  return (
    <div>
      <Dropdown
        placeholder="Select Type of Account"
        search
        selection
        onChange={handleChange}
        options={accounts}
      />
    </div>
  );
}
