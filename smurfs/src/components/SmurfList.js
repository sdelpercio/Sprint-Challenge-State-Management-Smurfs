import React, { useContext } from 'react';

import { SmurfContext } from '../contexts';

const SmurfList = () => {
	const { smurfs } = useContext(SmurfContext);

	return (
		<>
			{smurfs.map(item => (
				<div key={item.id}>
					<h1>{item.name}</h1>
					<h3>
						Age: <span>{item.age}</span>
					</h3>
					<h3>
						Height: <span>{item.height}</span>
					</h3>
				</div>
			))}
		</>
	);
};
export default SmurfList;
