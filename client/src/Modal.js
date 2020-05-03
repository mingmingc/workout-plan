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
      <Button color="primary" onClick={toggle} className="my-5">Add Exercise</Button>    
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New Exercise</ModalHeader>
        <ModalBody>
          <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input id="description" />
          </FormGroup>
          <FormGroup>
            <Label for="muscles">Muscles</Label>
            <Input id="muscles" />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      
      {/*Code to return to:
      <Button color="primary" onClick={this.toggleNewExercise} className="my-5">Add Exercise</Button>    
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
      </Modal> */}
    </div>
  );
}

export default ModalExample;