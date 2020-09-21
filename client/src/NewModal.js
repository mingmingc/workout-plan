import React from 'react';
import { Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NewExerciseModal = (props) => {
  return (
    <div>
      <Button color="primary" onClick={() => props.toggleNewExercise()} className="my-5">Add Exercise</Button>    
      <Modal isOpen={props.newExerciseModal} toggle={() => props.toggleNewExercise()}>
        <ModalHeader toggle={() => props.toggleNewExercise()}>Add a new exercise</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input id="name" name="name" value={props.newExerciseData.name} onChange={(e) => {
              let { newExerciseData } = props.state;
              newExerciseData.name = e.target.value;
              props.handler(newExerciseData);
            }}  />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input id="description" name="description" value={props.newExerciseData.description} onChange={(e) => {
              let { newExerciseData } = props.state;
              newExerciseData.description = e.target.value;
              props.handler(newExerciseData);
            }}  />
          </FormGroup>
          <FormGroup>
            <Label for="muscles">Muscles</Label>
            <Input id="muscles" name="muscles" value={props.newExerciseData.muscles} onChange={(e) => {
              let { newExerciseData } = props.state;
              newExerciseData.muscles = e.target.value;
              props.handler(newExerciseData);
            }}  />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" value="submit" onClick={() => props.addExercise()}>Add Exercise</Button>{' '}
          <Button color="secondary" onClick={() => props.toggleNewExercise()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default NewExerciseModal;