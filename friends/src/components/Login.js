import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
	//Login will take in props and creds initial value will be a blank string and password setCreds will be utilized with a handleChange
	const [creds, setCreds] = useState({ username: "", password: "" });

	const handleChange = event => {
		setCreds({ ...creds, [event.target.name]: event.target.value })
	}
	//preventDefault will keep page from reloading upon submittal will send credentials object from forms which holds that value from user input, will be with fake and fake login and password
	const handleSubmit = event => {
		event.preventDefault();
		axios.post('http://localhost:5000/api/login', creds)
			.then(response => {
				console.log(response);

			})
			.catch(error => console.log(error.response));

	}
	return (
		//handleChange will take user value when and place into spread array of creds and add that new value to the array for username and password handleSubmit will call axios.post upon submittal and push to server api/login
		<form onSubmit={handleSubmit}>
			<input type="text" name="username" placeholder="username" onChange={handleChange} value={creds.username} />
			<input type="password" name="password" placeholder="password" onChange={handleChange} value={creds.password} />
			<button type="submit"> Log in when ready!</button>
		</form>
	)
};

export default Login;