import React, { useState } from "react";
import "./App.css";
import TitleBlock from "./Components/TitleBlock";

const App = () => {
	return (
		<>
			<TitleBlock
				jobName={"Mornington Ave Storm Rehab"}
				jobNumber={224001}
				date={"04/15/2024"}
			/>
		</>
	);
};

export default App;
