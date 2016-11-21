import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

export class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(el => el.main.temp);
        const humids = cityData.list.map(el => el.main.humidity);
        const pressure = cityData.list.map(el => el.main.pressure);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
            <td><GoogleMap lon={lon} lat={lat} /></td>
            <td><Chart data={temps} color="purple" units="F" /></td>
            <td><Chart data={pressure} color="orange" units="hPa" /></td>
            <td><Chart data={humids} color="green" units="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
