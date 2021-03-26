import { React, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import {
  Dropdown,
  TextArea,
  Form,
  Input,
  Icon,
  Button,
  Modal,
  Header,
} from "semantic-ui-react";
import { db } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
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
  const [type, setType] = useState();
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    // setDescription(event.target.value);
    // setBalance(event.target.value);
    console.log(e.target);
  };

  const addEntryToDB = () => {
    try {
      db.collection("journalEntry").doc("test").set({});
    } catch (e) {
      console.error(e);
    }
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
      <Modal
        style={{
          height: "auto",
          top: "auto",
          left: "auto",
          right: "auto",
          bottom: "auto",
        }}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Add Journal</Button>}
      >
        <Modal.Content>
          <Modal.Description>
            <Header
              style={{
                textAlign: "Center",
              }}
            >
              Add Account
            </Header>
            <Form>
              <Form.Group>
                <Form.Dropdown
                  placeholder="Select Type of Account"
                  search
                  selection
                  id="account"
                  onChange={(e) => handleChange(e)}
                  value={type}
                  options={accounts}
                />
                <Form.Dropdown
                  placeholder="Select Term for Account"
                  search
                  selection
                  onChange={handleChange}
                  options={termType}
                />
                <Input
                  icon="dollar"
                  iconPosition="left"
                  placeholder="Enter Balance"
                  onChange={(e) => console.log("Selected", e.value)}
                />
              </Form.Group>

              <Form.TextArea
                label="Description"
                placeholder="Add a description (Optional)"
              />
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Delete
          </Button>
          <Button
            content="Add"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}
