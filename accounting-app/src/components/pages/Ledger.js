import React from "react";
import { Dropdown } from "semantic-ui-react";
//import { Button, Header, Modal } from "semantic-ui-react";
import Cash from "./Cash";
import Accounting from "./Accounting";
import { useState } from "react";

const ledgerOptions = [
  { key: "ca", value: "ca", text: <Cash /> },
  { key: "ar", value: "ar", text: <Accounting /> },
  { key: "pi", value: "pi", text: "Prepaid Insurance" },
  { key: "se", value: "se", text: "Salaries Expence" },
  { key: "cc", value: "cc", text: "Contributed Capital" },
];
export default function Ledger() {
  const [value, setValue] = useState();
  const onChange = (event, result) => {
    const { value } = result || event.target;
    switch (value) {
      case "ca":
      // window.location.href = "http://localhost:3001/ledger/cashaccounts";
    }
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "4em",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "auto",
        }}
      >
        Select An Account
      </h1>
      <Dropdown
        style={{ marginTop: "2em", marginLeft: "45em" }}
        placeholder="Select"
        options={ledgerOptions}
        selection
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
