import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';
import FriendsForm from './FriendsForm';
import { Route, Redirect } from 'react-router-dom';

const Friends = (props) => {
	//Will execute get request to get our array of friends and then map over friends array to create a friends list
	const [friendsList, setFriendsList] = useState([]);
	//utilize axios with Auth invocation to get friends list
	useEffect(() => {
		axiosWithAuth().get('http://localhost:5000/api/friends')
			.then(response => {
				setFriendsList(response.data);
			})
			.catch(error => console.log(error.response));

	}, []);
	const addFriend = friend => {
		axiosWithAuth().post('http://localhost:5000/api/friends', friend)
			.then(res => setFriendsList(res.data))
			.catch(error => console.log(error.response));
	};


	//map over friendsList
	return (
		<div>
			<h1>I have Friends!</h1>

			{friendsList.map(friend => {
				return <div key={friend.id}>{friend.name}</div>
			})}
			<Route exact path="/friends" render={props => <FriendsForm {...props} submitMyFriend={addFriend} />} />

		</div>
	);
};

export default Friends;