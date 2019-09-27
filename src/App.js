import React, { Fragment, Component } from "react";
import "./App.css";
import ParticleComponent from "./ParticleComponent";
import Map from "./Map";
import moment from 'moment';

class App extends Component {
  state = {
    // data: [],
    country: '',
    gmt: 0
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  // componentDidMount() {
  //   const url =
  //     "https://en.wikipedia.org/w/api.php?action=opensearch&search=vignesh&format=json&origin=*";

  //   fetch(url)
  //     .then(result => result.json())
  //     .then(result => {
  //       this.setState({
  //         data: result
  //       });
  //     });
  // }

  changeTime = (name, gmt) => {
    this.setState({ gmt: gmt, country: name });
  };

  render() {

    // const result = data.map((entry, index) => {
    //   return <li key={index}>{entry}</li>;
    // });

    return (
      <Fragment>
        <div className="main">
          <div className="particle-component">
            <ParticleComponent />
          </div>
          <div className="counter">
            <Map changeTime={this.changeTime}/>
            <h1 className="counter-text">{moment().utc().add(this.state.gmt, 'hours').format('LTS') + " " + this.state.country }</h1>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
