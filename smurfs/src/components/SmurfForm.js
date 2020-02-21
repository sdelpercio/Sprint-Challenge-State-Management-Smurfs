import React, { useState, useContext } from 'react';
import Axios from 'axios';

import { SmurfContext } from '../contexts';

const SmurfForm = () => {
	// setting up state for inputs
	const [nameInput, setNameInput] = useState('');
	const [ageInput, setAgeInput] = useState('');
	const [heightInput, setHeightInput] = useState('');

	// handle changes for inputs
	const handleName = e => {
		setNameInput(e.target.value);
	};
	const handleAge = e => {
		setAgeInput(e.target.value);
	};
	const handleHeight = e => {
		setHeightInput(e.target.value);
	};

	// finding length of smurfs array for id
	const { smurfs } = useContext(SmurfContext);

	const handleSubmit = () => {
		const newSmurf = {
			name: nameInput,
			age: Number(ageInput),
			height: heightInput,
			id: Number(smurfs.length)
		};
		Axios.post('http://localhost:3333/smurfs', newSmurf)
			.then(res => {
				console.log('post request response', res);
			})
			.catch(err => {
				console.log('post request error', err);
			});

		setNameInput('');
		setAgeInput('');
		setHeightInput('');
	};

	return (
		<>
			<h1>Add a Smurf to the Village</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={nameInput}
					onChange={handleName}
					placeholder='name'
					required
				/>
				<input
					type='number'
					value={ageInput}
					onChange={handleAge}
					placeholder='age'
					required
				/>
				<input
					type='text'
					value={heightInput}
					onChange={handleHeight}
					placeholder='height'
					required
				/>
				<button type='submit'>Submit</button>
			</form>
		</>
	);
};
export default SmurfForm;
