export default function WeatherInfo({
	weather = "Sunny",
	lowC = 15,
	highC = 32,
}) {
	return (
		<div id="weatherInfo" className="container row d-flex align-items-baseline">
			<span className="col-auto">Weather: {weather}</span>
			<span className="col-auto">Low: {lowC} C</span>
			<span className="col-auto">High: {highC} C</span>
		</div>
	);
}
