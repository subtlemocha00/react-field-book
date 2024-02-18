import { useState } from "react";

export default function CrewList() {
	const [numForemen, setNumForemen] = useState(0);
	const [numLabourers, setNumLabourers] = useState(0);
	const [numOperators, setNumOperators] = useState(0);
	return (
		<div className="">
			<span>
				Foreman: <>{numForemen}</>
				<button type="button" onClick={() => setNumForemen(numForemen + 1)}>
					+
				</button>
				<button
					type="button"
					onClick={() => {
						if (numForemen > 0) {
							setNumForemen(numForemen - 1);
						} else {
							setNumForemen(0);
						}
					}}
				>
					-
				</button>
			</span>
			<span>
				Labourers: <>{numLabourers}</>
				<button type="button" onClick={() => setNumLabourers(numLabourers + 1)}>
					+
				</button>
				<button
					type="button"
					onClick={() => {
						if (numLabourers > 0) {
							setNumLabourers(numLabourers - 1);
						} else {
							setNumLabourers(0);
						}
					}}
				>
					-
				</button>
			</span>
			<span>
				Operators: <>{numOperators}</>
				<button type="button" onClick={() => setNumOperators(numOperators + 1)}>
					+
				</button>
				<button
					type="button"
					onClick={() => {
						if (numOperators > 0) {
							setNumOperators(numOperators - 1);
						} else {
							setNumOperators(0);
						}
					}}
				>
					-
				</button>
			</span>
		</div>
	);
}
