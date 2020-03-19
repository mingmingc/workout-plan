import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: "",
      error: {}
    }
  }

  componentDidMount() {
    const url = "https://wger.de/api/v2/"
    fetch(`${url}/exercise`)
    .then(res => res.json())
    .then(({res}) => this.setState({workouts: res.results[0].description.getElementsByTagName('p').innerHTML}))
    .catch((error) => this.setState({error}))
    .then(console.log(this.state))
  }

  render() {
    return (
      <div> 
        <div className = "results"> 
          <h1> Today's workout </h1>
          {this.state.results}
        </div>
      </div>
    )
  }
}

export default App;
