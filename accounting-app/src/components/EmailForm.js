import { React, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Dropdown, TextArea, Form, Input, Icon } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function EmailForm() {
  const classes = useStyles();
  const [description, setDescription] = useState();
  const [balance, setBalance] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const handleChange = (event) => {
    setDescription(event.target.value);
    setBalance(event.target.value);
  };

  const users = [
    //Email Users 
    {
      value: 101,
      text: "Manager",
      type: "Manager Account",
    },
    {
      value: 120,
      text: "Accountant",
      type: "Regular User",
    },
    
  ];
  
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Dropdown
            placeholder="Select Type of User"
            search
            selection
            onChange={handleChange}
            options={users}
          />
          <Input
            placeholder="Enter Subject"
          />
        </Form.Group>

        <Form.TextArea
          label="Message"
          placeholder="Enter Message Here"
        />
      </Form>
    </div>
  );
}
