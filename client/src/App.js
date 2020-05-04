import React, {Component} from 'react';
import axios from 'axios';
import {Table, Button} from 'reactstrap';
import NewModal from './NewModal';
import EditModal from './EditModal'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      newExerciseData: {
        id: '',
        name: '',
        description: '',
        muscles: ''
      },
      editExerciseData: {
        id: '',
        name: '',
        description: '',
        muscles: ''
      },
      newExerciseModal: false,
      editExerciseModal: false,
      error: {}
    }

    //We bind the methods that are being passed on to other methods, to ensure
    //that they have access to the component attributes as they are called throughout.
    this.toggleNewExercise = this.toggleNewExercise.bind(this);
    this.toggleNewExercise = this.toggleEditExercise.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.updateExercise = this.updateExercise.bind(this);
    this.handler = this.handler.bind(this);
    this.editHandler = this.editHandler.bind(this);
  }
  
  componentWillMount() {
    this._refreshData();
  }

  handler(data) {
    this.setState({
      data
    })
  }

  editHandler(id, name, description, muscles) {
    this.setState({
      editExerciseData: { id, name, description, muscles }, editExerciseModal: ! this.state.editExerciseModal
    });
  }

  toggleNewExercise() {
    this.setState({
      newExerciseModal: ! this.state.newExerciseModal
    });
  }

  toggleEditExercise() {
    this.setState({
      editExerciseModal: ! this.state.editExerciseModal
    });
  }

  addExercise() {
    axios.post('http://localhost:3000/exercises', this.state.newExerciseData).then((response) => {
      let {exercises} = this.state;
      exercises.push(response.data);

      this.setState({exercises, newExerciseModal: false, newExerciseData: {
        id: '',
        name: '',
        description: '',
        muscles: ''
      }})
    })
  }

  updateExercise() {
    let { id, name, description, muscles } = this.state.editExerciseData;

    axios.put('http://localhost:3000/exercises/' + this.state.editExerciseData.id, {
      id, name, description, muscles
    }).then((response) => {
      this._refreshData();

      this.setState({
        editExerciseModal: false, editExerciseData: { id: '', name: '', description: '', muscles: '' }
      })
    });
  }

  deleteExercise(id) {
    axios.delete('http://localhost:3000/exercises/' + id).then((response) => {
      this._refreshData();
    });
  }

  _refreshData() {
    axios.get('http://localhost:3000/exercises').then((response) => {
      this.setState({
        exercises: response.data
      });
    });
  }

  render() {
    let exercises = this.state.exercises.map((exercise) => {
      return (
        <tr key={exercise.id}> 
          <td> {exercise.id} </td>
          <td> {exercise.name} </td>
          <td className="w-25"> {exercise.description} </td>
          <td> {exercise.muscles} </td>
          <td> 
            <Button color="success" size="sm" className="mr-2" onClick={() => this.editHandler(exercise.id, exercise.name, exercise.description, exercise.muscles)}> Edit </Button> 
            <Button color="danger" size="sm" onClick={()=> this.deleteExercise(exercise.id)}> Delete </Button> 
          </td>
        </tr>
      )
    })

    return (
      <div className="App container"> 
        <h1 className="mt-5">Workout Planner</h1> 
        <NewModal toggleNewExercise={this.toggleNewExercise} 
        addExercise={this.addExercise}
        state={this.state}
        newExerciseModal={this.state.newExerciseModal} 
        newExerciseData={this.state.newExerciseData}
        handler={this.handler}/>
        <EditModal toggleEditExercise={this.toggleEditExercise}
        updateExercise={this.updateExercise}
        state={this.state}
        editExerciseModal={this.state.editExerciseModal}
        editExerciseData={this.state.editExerciseData}
        handler={this.handler}/> 
        <Table>
          <thead> 
            <tr> 
              <th> # </th>
              <th> Name </th>
              <th> Description </th> 
              <th> Muscles </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody> 
            {exercises}
          </tbody>
        </Table> 
      </div>
    )
  }
}

export default App;
