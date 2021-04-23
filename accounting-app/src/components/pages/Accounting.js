import React from "react";
import AccountingTable from "./AccountingTable";
import { Button, Modal } from "semantic-ui-react";

export default function Cash() {
  const [open, setOpen] = React.useState(false);
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
        trigger={<p>Accounting</p>}
      >
        <h3 style={{ textAlign: "center", marginTop: "1em" }}>
          Accounts Receivable Ledger{" "}
        </h3>
        <h6 style={{ textAlign: "center", marginTop: ".50em" }}>
          <a href="#">Add Entry</a>
        </h6>

        <AccountingTable onClick={() => setOpen(false)} positive />
      </Modal>
    </div>
  );
}
