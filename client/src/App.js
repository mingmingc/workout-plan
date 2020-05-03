import React, {Component} from 'react';
import axios from 'axios';
import {Table, Button} from 'reactstrap';
import ExerciseModal from './Modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      newExerciseData: {
        name: '',
        description: '',
        muscles: ''
      },
      editExerciseData: {
        name: '',
        description: '',
        muscles: ''
      },
      newExercise: false,
      editExercise: false,
      error: {}
    }

    this.toggleNewExercise = this.toggleNewExercise.bind(this);
  }
  
  componentWillMount() {
    this._refreshData();
  }

  toggleNewExercise() {
    this.setState({
      newExercise: ! this.state.newExercise
    });
  }

  toggleEditExercise() {
    this.setState({
      editExercise: ! this.state.editExercise
    });
  }

  addExercise() {
    axios.post('http://localhost:3000/exercises', this.state.newExerciseData).then((response) => {
      let {exercises} = this.state;
      exercises.push(response.data);

      this.setState({exercises, newExercise: false, newExerciseData: {
        name: '',
        description: '',
        muscles: ''
      }})
    })
  }

  updateExercise() {
    let {name, description, muscles} = this.state.editExerciseData;

    axios.put('http://localhost:3000/exercises' + this.state.editExerciseData.id, {
      name, description, muscles
    }).then((response) => {
      this._refreshData();

      this.setState({
        editExercise: false, editExerciseData: {
          name: '', 
          description: '', 
          muscles: ''
        }
      })
    })
  }

  editExerciseState(name, description, muscles) {
    this.setState({
      editExerciseData: { name, description, muscles }, editExercise: ! this.state.editExercise
    });
  }

  deleteExercise(id) {
    axios.delete('http://localhost:3000/exercises/' + id).then((response) => {
      this._refreshBooks();
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
            <Button color="success" size="sm" className="mr-2"> Edit </Button> 
            <Button color="danger" size="sm"> Delete </Button> 
          </td>
        </tr>
      )
    })

    return (
      <div className="App container"> 
        <h1 className="mt-5">Workout Planner</h1> 
        <ExerciseModal />
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
