import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormGroup,
  Form,
} from "reactstrap";

function PopUp(props) {
  const [open, setOpen] = useState(false);
  const [focusAfterClose, setFocusAfterClose] = useState(true);

  const toggle = () => setOpen(!open);
  const handleSelectChange = ({ target: { value } }) => {
    setFocusAfterClose(JSON.parse(value));
  };

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="focusAfterClose">Focus After Close</Label>
          <Input
            className="mx-2"
            type="select"
            id="focusAfterClose"
            onChange={handleSelectChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Input>
        </FormGroup>
        <Button color="danger" onClick={toggle}>
          Open
        </Button>
      </Form>
      <Modal
        returnFocusAfterClose={focusAfterClose}
        isOpen={open}
        toggle={toggle}
      >
        <ModalBody>
          <h1>
            "Veuillez vérifier votre e-mail pour valider votre inscription."
          </h1>
        </ModalBody>
        <ModalFooter>
          <Button color="#055D2B" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PopUp;
