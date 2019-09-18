import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';

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
	//map over friendsList
	return (
		<div>
			<h1>I have Friends!</h1>
			{friendsList.map(friend => {
				return <div key={friend.id}>{friend.name}</div>
			})}
		</div>
	);
};

export default Friends;