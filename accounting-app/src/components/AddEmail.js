import React from "react";
import { Icon, Button, Header, Modal } from "semantic-ui-react";
import EmailForm from "./EmailForm";


export default function SendEmail() {
  const [open, setOpen] = React.useState(false); 

 
  return (
     
    <div><p></p>  

      <Modal 
        style={{
          height: "auto",
          top: "auto",
          left: "auto",
          right: "auto",
          bottom: "auto",
          padding: "20px",
           
        }}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Send Email</Button>}
      >
        <Modal.Content>
          <Modal.Description>
            <Header
              style={{
                textAlign: "Center",
              }}
            >
              Send Email
            </Header>
            <EmailForm />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Send"
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
