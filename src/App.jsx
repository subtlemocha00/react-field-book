import React, { useState } from "react";
import "./App.css";
import TitleBlock from "./Components/title-block/TitleBlock";
import CrewList from "./Components/field-notes/CrewList";
import SignInPage from "./Components/sign-in-form/SignInPage";
import UserHome from "./Components/home-user/UserHome";

const App = () => {
	const [currentJob, setCurrentJob] = useState(224001);
	return (
		<>
			<UserHome />
			{/* <SignInPage /> */}
			{/* <TitleBlock
				jobName={"Mornington Ave Storm Rehab"}
				jobNumber={currentJob}
				date={"04/15/2024"}
			/> */}
			{/* <CrewList /> */}
		</>
	);
};

export default App;
