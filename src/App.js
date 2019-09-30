import React, { Fragment, Component } from "react";
import "./App.css";
import ParticleComponent from "./ParticleComponent";
import Map from "./Map";
import moment from "moment";

class App extends Component {
  state = {
    time: moment()
      .utc()
      .format("LTS"),
    date: moment().format("LL"),
    country: "UTC",
    gmt: 0
  };

  updateTime = () => {
    this.setState({
      time: moment()
        .utc()
        .add(this.state.gmt, "hours")
        .format("LTS"),
      country: this.state.country,
      date: moment().format("LL")
    });
  };

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  changeTime = (name, gmt) => {
    this.setState({
      gmt: gmt,
      country: name,
      time: moment()
        .utc()
        .add(gmt, "hours")
        .format("LTS"),
      date: moment().format("LL")
    });
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
            <h2 className="counter-text">
              {this.state.time + " (" + this.state.country + ")"}
            </h2>
            <h5 className="counter-text">{this.state.date}</h5>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
