import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

class Map extends Component {
  state = {
    center: [0, 20],
    zoom: 1,
    cities: [
      { name: "Zurich", coordinates: [8.5417, 47.3769], gmt: 2 },
      { name: "Singapore", coordinates: [103.8198, 1.3521], gmt: 8 },
      { name: "San Francisco", coordinates: [-122.4194, 37.7749], gmt: -7 },
      { name: "Sydney", coordinates: [151.2093, -33.8688], gmt: 10 },
      { name: "Lagos", coordinates: [3.3792, 6.5244], gmt: 1 },
      { name: "India", coordinates: [75.7410984, 19.0825223], gmt: 5.5 },
      { name: "Shanghai", coordinates: [121.4737, 31.2304], gmt: 8 },
      { name: "Tokyo", coordinates: [139.42, 35.41], gmt: 9 },
      { name: "Moscow", coordinates: [37.37, 55.45], gmt: 3 },
      { name: "Columbia", coordinates: [-76.861046, 39.203712], gmt: -4 },
      { name: "Santiago", coordinates: [-70.64827, -33.45694], gmt: -3 }
    ]
  };

  handleCitySelection = evt => {
    const cityId = evt.target.getAttribute("data-city");
    const { changeTime } = this.props;
    const city = this.state.cities[cityId];
    this.setState({
      center: city.coordinates,
      zoom: 2
    });
    changeTime(city.name, city.gmt);
  };
  
  handleReset = () => {
    const { changeTime } = this.props;
    this.setState({
      center: [0, 20],
      zoom: 1
    });
    changeTime("UTC", 0);
  };

  render() {
    return (
      <div>
        <div style={wrapperStyles}>
          {this.state.cities.map((city, i) => (
            <button
              key={i}
              className="btn px1"
              data-city={i}
              onClick={this.handleCitySelection}
            >
              {city.name}
            </button>
          ))}
          <button onClick={this.handleReset}>{"Reset"}</button>
        </div>
        <div style={wrapperStyles}>
          <ComposableMap
            projectionConfig={{
              scale: 205
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto"
            }}
          >
            <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
              <Geographies geography="https://unpkg.com/world-atlas@1.1.4/world/50m.json">
                {(geographies, projection) =>
                  geographies.map(
                    (geography, i) =>
                      geography.id !== "ATA" && (
                        <Geography
                          key={i}
                          geography={geography}
                          projection={projection}
                          style={{
                            default: {
                              fill: "#ECEFF1",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none"
                            },
                            hover: {
                              fill: "#607D8B",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none"
                            },
                            pressed: {
                              fill: "#FF5722",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none"
                            }
                          }}
                        />
                      )
                  )
                }
              </Geographies>
              <Markers>
                {this.state.cities.map((city, i) => (
                  <Marker key={i} marker={city}>
                    <circle
                      cx={0}
                      cy={0}
                      r={6}
                      fill="#FF5722"
                      stroke="#DF3702"
                    />
                  </Marker>
                ))}
              </Markers>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    );
  }
}

export default Map;
