import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function SignInPage() {
	// State to toggle between sign-in and sign-up forms
	const [isSignUp, setIsSignUp] = useState(false);

	const toggleSignUp = () => setIsSignUp(!isSignUp);

	return (
		<div className="container mt-5">
			<h2 className="mb-3">{isSignUp ? "Sign Up" : "Sign In"}</h2>
			{isSignUp ? <SignUpForm /> : <SignInForm />}

			<button className="btn btn-secondary mt-3" onClick={toggleSignUp}>
				{isSignUp
					? "Already have an account? Sign In"
					: "Don't have an account? Sign Up"}
			</button>
		</div>
	);
}
