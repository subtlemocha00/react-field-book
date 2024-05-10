import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignInPage from "./Components/sign-in-form/SignInPage";
import JobList from "./Components/JobList";

const App = () => {
	// const [currentJob, setCurrentJob] = useState(224001);
	return (
		<>
		<Router>
			<Routes>
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/" exact element={<SignInPage />} />
				<Route path="/jobList" exact element={<JobList />} />
				<Route path="/jobList/:jobNumber" exact element={<JobList />} />
			</Routes>
			{/* <TitleBlock
				jobName={"Mornington Ave Storm Rehab"}
				jobNumber={currentJob}
				date={"04/15/2024"}
			/>
			<CrewList /> */}
		</Router>
		</>
	);
};

export default App;
