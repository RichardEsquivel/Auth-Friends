import React from 'react';
import './App.css';
import Login from './components/Login.js';
import { Route, Link, Redirect } from 'react-router-dom';
import Friends from './components/Friends.js';

//Create protected route to keep user from accessing certain areas like Friends if not logged in and will redirect to the login page. will take in a component as an argument and rename it Component through destructuring. Use spread operator ...rest to get all of the other properties passed into a rest variable
const ProtectedRoute = ({ component: Component, ...rest }) => {
	return <Route {...rest} render={props => {
		if (localStorage.getItem('token')) {
			return <Component {...props} />;
		} else {
			return <Redirect to="/login" />;
		}
	}} />;
}

function App() {
	return (
		//at /login we will display the login component using Route
		<div className="App">
			<Route path="/login" component={Login} />
			<ProtectedRoute path="/friends" component={Friends} />
		</div>
	);
}

export default App;
