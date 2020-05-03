import React, { useState } from 'react';
import { Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={this.toggleNewExercise} className="my-5">Add Exercise</Button>  
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={this.state.newExercise} toggle={this.toggleNewExercise}>
        <ModalHeader toggle={this.toggleNewExercise}>Add a new book</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input id="title" value={this.state.newExerciseData.title} onChange={(e) => {
              let { newExerciseData } = this.state;

              newExerciseData.title = e.target.value;

              this.setState({ newExerciseData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="rating">Rating</Label>
            <Input id="rating" value={this.state.newExerciseData.rating} onChange={(e) => {
              let { newExerciseData } = this.state;

              newExerciseData.rating = e.target.value;

              this.setState({ newExerciseData });
            }} />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addExercise.bind(this)}>Add Book</Button>{' '}
          <Button color="secondary" onClick={this.toggleNewExercise.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;