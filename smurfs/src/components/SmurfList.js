import React, { useContext } from 'react';
import { SmurfContext } from '../contexts';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	cardBox: {
		width: '100%',
		marginTop: '4rem',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'space-evenly'
	},
	aCard: {
		width: '20%',
		height: 'auto',
		textAlign: 'center',
		background: 'rgb(143,205,255)',
		background:
			'linear-gradient(325deg, rgba(143,205,255,0.6029762246695554) 50%, rgba(0,0,0,0.6001751042213761) 100%)'
	}
});

const SmurfList = props => {
	const { smurfs } = useContext(SmurfContext);

	const { classes } = props;

	return (
		<Box className={classes.cardBox}>
			{smurfs.map(item => (
				<Card className={classes.aCard} key={item.id}>
					<CardContent>
						<Typography variant='h6'>{item.name}</Typography>
						<Typography variant='body2'>
							Age: <span>{item.age}</span>
						</Typography>
						<Typography variant='body2'>
							Height: <span>{item.height}</span>
						</Typography>
					</CardContent>
				</Card>
			))}
		</Box>
	);
};
export default withStyles(styles)(SmurfList);
