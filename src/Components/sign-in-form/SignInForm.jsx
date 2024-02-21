import React, { useState } from "react";

export default function SignInForm() {
	// State to toggle between user and administrator sign-in
	const [isAdmin, setIsAdmin] = useState(false);
	const toggleAdmin = () => setIsAdmin(!isAdmin);

	return (
		<form className="mt-4">
			<div className="mb-3">
				<label htmlFor="signInEmail" className="form-label">
					Email address
				</label>
				<input
					type="email"
					className="form-control"
					id="signInEmail"
					required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="signInPassword" className="form-label">
					Password
				</label>
				<input
					type="password"
					className="form-control"
					id="signInPassword"
					required
				/>
			</div>
			<div className="mb-3 form-check form-switch">
				<input
					type="checkbox"
					className="form-check-input"
					id="roleToggle"
					onChange={toggleAdmin}
					checked={isAdmin}
				/>
				<label className="form-check-label" htmlFor="roleToggle">
					Sign in as Administrator
				</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Sign In
			</button>
		</form>
	);
}
