import React, { Fragment, Component } from "react";
import "./App.css";
import ParticleComponent from "./ParticleComponent";
import Map from "./Map";
import moment from "moment";

class App extends Component {
  state = {
    date: moment().format("LTS"),
    country: "UTC",
    gmt: 0
  };

  updateTime = () => {
    this.setState({
      date:
        moment()
          .utc()
          .add(this.state.gmt, "hours")
          .format("LTS") +
        " " +
        this.state.country
    });
  };

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  changeTime = (name, gmt) => {
    this.setState({ gmt: gmt, country: name });
  };

  render() {
    return (
      <Fragment>
        <div className="main">
          <div className="particle-component">
            <ParticleComponent />
          </div>
          <div className="counter">
            <Map changeTime={this.changeTime} />
            <h1 className="counter-text">{this.state.date}</h1>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
