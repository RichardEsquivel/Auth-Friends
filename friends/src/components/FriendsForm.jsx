import React, { useState } from 'react';

const FriendsForm = ({ submitMyFriend, setFriendsList }) => {
	const [myFriend, setMyFriend] = useState({ name: "", age: "", email: "" });

	const handleChange = e => setMyFriend({ ...myFriend, [e.target.name]: e.target.value })



	// [] allows us to access event.target.name expression to access name

	const handleSubmit = e => {
		e.preventDefault();
		submitMyFriend(myFriend);
	};


	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="name" placeholder="name" value={myFriend.name} onChange={handleChange} />
				<input type="text" name="age" placeholder="age" value={myFriend.age} onChange={handleChange} />
				<input type="text" name="email" placeholder="email" value={myFriend.email} onChange={handleChange} />
				<button type="submit"> Add Your Friend!</button>
			</form>
		</div>
	)
}








export default FriendsForm;