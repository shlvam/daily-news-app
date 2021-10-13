import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import './App.css';
import Clock from './components/Clock';
import Navbar from './components/Navbar';
import News from './components/News';
import Weather from './components/Weather';

export class App extends Component {
  NewsApiKey = process.env.REACT_APP_NEWS_API;
  weatherApiKey = process.env.REACT_APP_WEATHER_API;

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
                    <Route exact path="/"> <News key="general/" NewsApiKey={this.NewsApiKey} setProgress={this.setProgress} pageSize={20} category="general" /></Route>
                    <Route exact path="/business"><News key="business" NewsApiKey={this.NewsApiKey} setProgress={this.setProgress} pageSize={20} category="business" /></Route>
                    <Route exact path="/entertainment"><News key="entertainment" NewsApiKey={this.NewsApiKey} setProgress={this.setProgress} pageSize={20} category="entertainment" /></Route>
                    <Route exact path="/general"><News key="general" NewsApiKey={this.NewsApiKey} setProgress={this.setProgress} pageSize={20} category="general" /></Route>
                    <Route exact path="/health"><News key="health" NewsApiKey={this.NewsApiKey} setProgress={this.setProgress} pageSize={20} category="health" /></Route>
                    <Route exact path="/science"><News key="science" NewsApiKey={this.NewsApiKey} setProgress={this.setProgress} pageSize={20} category="science" /></Route>
                    <Route exact path="/sports"><News key="sports" NewsApiKey={this.NewsApiKey} setProgress={this.setProgress} pageSize={20} category="sports" /></Route>
                    <Route exact path="/technology"><News key="technology" NewsApiKey={this.NewsApiKey} setProgress={this.setProgress} pageSize={20} category="technology" /></Route>
                  </Switch>
                </div>
              </Router>
            </div>
            <div className="col-sm-4" style={{float: "left"}}>
              <Clock />
              <Weather weatherApiKey={this.weatherApiKey} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;

