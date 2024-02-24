import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignInPage from "./Components/sign-in-form/SignInPage";

const App = () => {
	const [currentJob, setCurrentJob] = useState(224001);
	return (
		<Router>
			<Routes>
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/" exact element={<SignInPage />} />
				<Route />
			</Routes>
			{/* <TitleBlock
				jobName={"Mornington Ave Storm Rehab"}
				jobNumber={currentJob}
				date={"04/15/2024"}
			/>
			<CrewList /> */}
		</Router>
	);
};

export default App;
