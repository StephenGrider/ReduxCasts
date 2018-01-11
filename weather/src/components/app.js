import React from "react";
import { Component } from "react";

import SearchBar from "../containers/search_bar";
//import WeatherList from "../containers/weather_list";
//AGGIUNGERE SOTTO <WeatherList />

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        
      </div>
    );
  }
}
