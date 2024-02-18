import React, { useState } from "react";
import "./App.css";
import TitleBlock from "./Components/TitleBlock";
import CrewList from "./Components/CrewList";

const App = () => {
	return (
		<>
			<TitleBlock
				jobName={"Mornington Ave Storm Rehab"}
				jobNumber={224001}
				date={"04/15/2024"}
			/>
			<CrewList />
		</>
	);
};

export default App;
