import React, { useState } from 'react';

const Login = (props) => {
	//Login will take in props and creds initial value will be a blank string and password setCreds will be utilized with a handleChange
	const [creds, setCreds] = useState({ username: "", password: "" });

	const handleChange = event => {
		setCreds({ ...creds, [event.target.name]: event.target.value })
	}
	return (
		//handleChange will take user value when and place into spread array of creds and add that new value to the array for username and password
		<form>
			<input type="text" name="username" placeholder="username" onChange={handleChange} value={creds.username} />
			<input type="password" name="password" placeholder="password" onChange={handleChange} value={creds.password} />
			<button type="submit"> Log in when ready!</button>
		</form>
	)
};

export default Login;