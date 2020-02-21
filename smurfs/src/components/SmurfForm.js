import React, { useState, useContext } from 'react';
import Axios from 'axios';
import { SmurfContext } from '../contexts';

import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	form: {
		width: '400px',
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	inputs: {
		width: '100%',
		padding: '0',
		margin: '2rem 0'
	},
	button: {
		width: '200px',
		margin: '0 auto'
	}
});

const SmurfForm = props => {
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

	const handleSubmit = e => {
		e.preventDefault();

		console.log('submit fired');

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

	const { classes } = props;

	return (
		<>
			<Typography variant='h4' align='center' gutterBottom={true}>
				Add a Smurf to the Village
			</Typography>
			<form className={classes.form} onSubmit={handleSubmit}>
				<Input
					type='text'
					value={nameInput}
					onChange={handleName}
					placeholder='name'
					required
					className={classes.inputs}
				/>
				<Input
					type='number'
					value={ageInput}
					onChange={handleAge}
					placeholder='age'
					required
					className={classes.inputs}
				/>
				<Input
					type='text'
					value={heightInput}
					onChange={handleHeight}
					placeholder='height'
					required
					className={classes.inputs}
				/>
				<Button
					color='primary'
					size='medium'
					className={classes.button}
					type='submit'
				>
					Submit
				</Button>
			</form>
		</>
	);
};
export default withStyles(styles)(SmurfForm);
