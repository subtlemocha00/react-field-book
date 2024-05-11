import { useState } from "react";

export default function CrewList() {
	const [numForemen, setNumForemen] = useState(0);
	const [numLabourers, setNumLabourers] = useState(0);
	const [numOperators, setNumOperators] = useState(0);
	return (
		<div className="row m-2">
			<span className="col row align-items-center">
				<span className="col-auto">Foreman: {numForemen}</span>
				<div className="btn-group col-4">
					<button
						className="btn btn-danger col-6"
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
					<button 
						className="btn btn-success col-6"
						type="button"
						onClick={() => setNumForemen(numForemen + 1)}>
						+
					</button>
				</div>
			</span>
			<span className="col row align-items-center">
				<span className="col-auto">Labourers: {numLabourers}</span>
				<div className="btn-group col-4">
					<button
						className="btn btn-danger col-6"
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
					<button
						className="btn btn-success col-6"
						type="button"
						onClick={() => setNumLabourers(numLabourers + 1)}>
						+
					</button>
				</div>
			</span>
			<span className="col row align-items-center">
				<span className="col-auto">Operators: {numOperators}</span>
				<div className="btn-group col-4">
					<button
						className="btn btn-danger col-6"
						type="button" onClick={() => {
							if (numOperators > 0) {
								setNumOperators(numOperators - 1);
							} else {
								setNumOperators(0);
							}
						}}
					>
						-
					</button>
					<button
						className="btn btn-success col-6"
						type="button"
						onClick={() => setNumOperators(numOperators + 1)}>
						+
					</button>
				</div>
			</span>
		</div>
	);
}
