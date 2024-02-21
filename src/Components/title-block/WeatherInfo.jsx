export default function WeatherInfo({ weather }) {
	return (
		<div id="weatherInfo" className="container row d-flex align-items-baseline">
			<span className="col-auto">Weather: {weather.conditions}</span>
			<span className="col-auto">Low: {weather.lowC} C</span>
			<span className="col-auto">High: {weather.highC} C</span>
		</div>
	);
}
