import { useState } from "react";
import JobInfo from "./JobInfo";
import WeatherInfo from "./WeatherInfo";

export default function TitleBlock() {
	const [weather, setWeather] = useState({
		conditions: "Sunny",
		lowC: 15,
		highC: 32,
	});
	const updateWeatherInfo = (currentWeather) => {
		console.log(currentWeather);
	};
	return (
		<div>
			<JobInfo jobName={"Mornington"} jobNumber={224000} date={"04/15/2024"} />
			<WeatherInfo weather={weather} handleClick={updateWeatherInfo} />
		</div>
	);
}

// ERIS Logbook App - Colin Mentioned this
