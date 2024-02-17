export default function TitleBlock({ jobName, jobNumber, date }) {
	return (
		<div className="container row d-flex align-items-baseline">
			<h1 className="col-8" id="jobName">
				{jobName}
			</h1>
			<span className="col-2" id="jobNumber">
				{jobNumber}
			</span>
			<span className="col-2" id="date">
				{date}
			</span>
		</div>
	);
}
