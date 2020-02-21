import React, { useState, useEffect } from 'react';
import axios from 'axios';

//components
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import { SmurfContext } from '../contexts';

import Typography from '@material-ui/core/Typography';
import Appbar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	appBar: {
		marginBottom: '4rem'
	}
});

const App = props => {
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
	}, [smurfs]);

	const { classes } = props;

	return (
		<div>
			<SmurfContext.Provider value={{ smurfs }}>
				<Appbar position='static' className={classes.appBar}>
					<Typography variant='h3' align='center'>
						Welcome to Smurf Management
					</Typography>
				</Appbar>
				<SmurfForm />
				<SmurfList />
			</SmurfContext.Provider>
		</div>
	);
};

export default withStyles(styles)(App);
