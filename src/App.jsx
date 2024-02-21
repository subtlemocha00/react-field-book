import React, { useState } from "react";
import "./App.css";
import TitleBlock from "./Components/title-block/TitleBlock";
import CrewList from "./Components/field-notes/CrewList";
import SignInPage from "./Components/sign-in-form/SignInPage";

const App = () => {
	const [currentJob, setCurrentJob] = useState(224001);
	return (
		<>
			<SignInPage />
			{/* <TitleBlock
				jobName={"Mornington Ave Storm Rehab"}
				jobNumber={currentJob}
				date={"04/15/2024"}
			/>
			<CrewList /> */}
		</>
	);
};

export default App;
