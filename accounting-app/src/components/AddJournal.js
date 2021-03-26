import React from "react";
import { Icon, Button, Header, Modal } from "semantic-ui-react";
import { db } from "../firebase";
import InfoForm from "./InfoForm";
export default function AddJournal() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <InfoForm />
    </div>
  );
}
