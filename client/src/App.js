import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: "",
      error: {}
    }
  }

  componentDidMount() {
    const url = "https://wger.de/api/v2/"
    fetch(`${url}/exercise`)
    .then(res => res.json())
    .then(({res}) => this.setState({results: res.results[0].description}))
    .then(console.log(this.state))
    .catch((error) => this.setState({error}))
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
