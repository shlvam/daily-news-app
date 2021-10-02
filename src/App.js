import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Weather from './components/Weather';

export class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;

  // state variable for top loading bar
  state = {
    progress: 0
  };
  setProgress = (prog) => {
    this.setState({
      progress: prog
    })
  };

  render() {

    return (
      <div>
        <Router>
          <Navbar />
        </Router>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <Router>
                
                <LoadingBar
                  color='blue'
                  height={4}
                  progress={this.state.progress}
                // onLoaderFinished={this.setProgress(0)}
                />
                <div className="container my-3">
                  <Switch>
                    <Route exact path="/"><News key="general/" apiKey={this.apiKey} setProgress={this.setProgress} pageSize={20} category="general" /></Route>
                    <Route path="/business"><News key="business" apiKey={this.apiKey} setProgress={this.setProgress} pageSize={20} category="business" /></Route>
                    <Route path="/entertainment"><News key="entertainment" apiKey={this.apiKey} setProgress={this.setProgress} pageSize={20} category="entertainment" /></Route>
                    <Route path="/general"><News key="general" apiKey={this.apiKey} setProgress={this.setProgress} pageSize={20} category="general" /></Route>
                    <Route path="/health"><News key="health" apiKey={this.apiKey} setProgress={this.setProgress} pageSize={20} category="health" /></Route>
                    <Route path="/science"><News key="science" apiKey={this.apiKey} setProgress={this.setProgress} pageSize={20} category="science" /></Route>
                    <Route path="/sports"><News key="sports" apiKey={this.apiKey} setProgress={this.setProgress} pageSize={20} category="sports" /></Route>
                    <Route path="/technology"><News key="technology" apiKey={this.apiKey} setProgress={this.setProgress} pageSize={20} category="technology" /></Route>
                  </Switch>
                </div>
              </Router>
            </div>
            <div className="col-sm-4" style={{float: "left"}}>
              <Weather />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;

