import { useState } from "react";
import jobInfo from "./jobInfo";
import { useNavigate } from "react-router-dom";

export default function JobList() {
	const [jobs, setJobs] = useState(jobInfo);
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault()
		const jobNumber = e.currentTarget.id;
		navigate(`/fieldBook/${jobNumber}`)
	}

	return (
	<div className="container">
		<ul className="list-group">
			<li className="btn bg-dark text-light list-group-item container d-flex text-start z-3">
				<span className="col p-2">Job Name</span>
				<span className="col-2 p-2">Job Number</span>
				<span className="col-2 p-2">Days Left</span>
			</li>
		</ul>
		<ul className="list-group">
		{jobs.map((job) => {
			return (<button type="submit" key={job.number} id={job.number}  className="btn btn-warning list-group-item container d-flex text-start p-0 z-2" onClick={handleClick}>
				<span className="col p-2 border border-dark z-1">{job.name}</span>
				<span className="col-2 p-2 border border-dark z-1">{job.number}</span>
				<span className="col-2 p-2 border border-dark z-1">{job.workingDaysRemaining}</span>
			</button>)
		})}
		</ul>
	</div>
	)
}
