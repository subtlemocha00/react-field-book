import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData((prevData) => ({
			...prevData, [name]: value
		}))
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// add verification
		console.log('changing!')
		navigate('/jobList');
	}

	return (
		<form className="mt-4" onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="signInEmail" className="form-label">
					Email address
				</label>
				<input
					type="email"
					name="email"
					className="form-control"
					id="signInEmail"
					// required
					onChange={handleChange}
					value={formData.email}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="signInPassword" className="form-label">
					Password
				</label>
				<input
					type="password"
					name="password"
					className="form-control"
					id="signInPassword"
					// required
					onChange={handleChange}
					value={formData.password}
				/>
			</div>
			<button type="submit" className="btn btn-primary" >
				Sign In
			</button>
		</form>
	);
}
