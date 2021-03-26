import React from "react";
import { Icon, Button, Header, Modal } from "semantic-ui-react";
import InfoForm from "./InfoForm";
export default function AddJournal() {
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
            <InfoForm />
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
