import React, { useState } from 'react';
import { Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditExerciseModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={props.editExerciseModal} toggle={() => props.toggleEditExercise()}>
        <ModalHeader toggle={() => props.toggleEditExercise()}>Edit</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input id="name" name="name" value={props.editExerciseData.name} onChange={(e) => {
              let { editExerciseData } = props.state;
              editExerciseData.name = e.target.value;
              props.handler(editExerciseData);
            }}  />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input id="description" name="description" value={props.editExerciseData.description} onChange={(e) => {
              let { editExerciseData } = props.state;
              editExerciseData.description = e.target.value;
              props.handler(editExerciseData);
            }}  />
          </FormGroup>
          <FormGroup>
            <Label for="muscles">Muscles</Label>
            <Input id="muscles" name="muscles" value={props.editExerciseData.muscles} onChange={(e) => {
              let { editExerciseData } = props.state;
              editExerciseData.muscles = e.target.value;
              props.handler(editExerciseData);
            }}  />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" value="submit" onClick={() => props.updateExercise()}>Save Changes</Button>{' '}
          <Button color="secondary" onClick={() => props.toggleEditExercise()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditExerciseModal;