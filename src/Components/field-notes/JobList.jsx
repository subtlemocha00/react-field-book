import { useState } from "react";

const jobInfo = [{ number: "224001", name: "Storm and Sanitary Sewers 2025" }];

export default function JobList() {
	const [jobs, setJobs] = useState(jobInfo);
	return <div className="container"></div>;
}
