import JobInfo from "./JobInfo";
import WeatherInfo from "./WeatherInfo";

export default function TitleBlock() {
	return (
		<div>
			<JobInfo jobName={"Mornington"} jobNumber={224000} date={"04/15/2024"} />
			<WeatherInfo />
		</div>
	);
}

// ERIS Logbook App
