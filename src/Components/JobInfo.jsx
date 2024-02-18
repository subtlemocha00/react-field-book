export default function JobInfo({ jobName, jobNumber, date }) {
	return (
		<div id="jobInfo" className="container row d-flex align-items-baseline">
			<span id="jobName" className="col-auto">
				Job: {jobName}
			</span>
			<span id="jobNumber" className="col-auto">
				Job #: {jobNumber}
			</span>
			<span id="date" className="col-auto">
				Date: {date}
			</span>
		</div>
	);
}
