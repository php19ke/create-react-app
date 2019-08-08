import React from 'react';
import Titles from './components/titles';
import Weather from './components/weather';
import Form from './components/form';

const API_KEY = '5aac476a0674676d51ece2175d1f3a86';

class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}

	getWeather = async (e) => {
		e.preventDefault(); debugger

		const city = e.target.elements.city.value;

		const country = e.target.elements.country.value;
			
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
		
		const response = await api_call.json();
		
		console.log(response);

		if (city && country) {
			this.setState({
				temperature: response.main.temp,
				city: response.name,
				country: response.sys.country,
				humidity: response.main.humidity,
				description: response.weather[0].description,
				error: ""
			}) 
		} else {
			this.setState({
				error: "Please input valid data..."
			})
		}
	}

	render() {
		return ( 
			<div >
				<Titles></Titles>
				
				<Form loadWeather={this.getWeather}>
					
				</Form>

				<Weather
					temperature={this.state.temperature}
					city={this.state.city}
					country={this.state.country}
					humidity={this.state.humidity}
					description={this.state.description}
					error={this.state.error} />
			</div>
		)
	}
}
export default App;