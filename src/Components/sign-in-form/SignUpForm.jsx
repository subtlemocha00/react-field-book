import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		// add verification
		console.log('changing!')
		navigate('/jobList');
	}
	return (
		<form className="mt-4" onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="signUpEmail" className="form-label">
					Email address
				</label>
				<input
					type="email"
					className="form-control"
					id="signUpEmail"
					// required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="signUpPassword" className="form-label">
					Password
				</label>
				<input
					type="password"
					className="form-control"
					id="signUpPassword"
					// required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="confirmPassword" className="form-label">
					Confirm Password
				</label>
				<input
					type="password"
					className="form-control"
					id="confirmPassword"
					// required
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Sign Up
			</button>
		</form>
	);
}
