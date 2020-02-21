import React, { useState, useEffect } from 'react';
import axios from 'axios';

//components
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import { SmurfContext } from '../contexts';

const App = () => {
	const [smurfs, setSmurfs] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3333/smurfs')
			.then(res => {
				console.log('response', res);
				setSmurfs(res.data);
			})
			.catch(err => {
				console.log('error', err);
			});
	}, []);

	return (
		<div>
			<SmurfContext.Provider value={{ smurfs }}>
				<h1>Welcome to Smurf Management</h1>
				<SmurfForm />
				<SmurfList />
			</SmurfContext.Provider>
		</div>
	);
};

export default App;
