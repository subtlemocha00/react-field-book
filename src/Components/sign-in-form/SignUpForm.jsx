export default function SignUpForm() {
	return (
		<form className="mt-4">
			<div className="mb-3">
				<label htmlFor="signUpEmail" className="form-label">
					Email address
				</label>
				<input
					type="email"
					className="form-control"
					id="signUpEmail"
					required
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
					required
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Sign Up
			</button>
		</form>
	);
}
