import React, { useContext } from 'react';

import { SmurfContext } from '../contexts';

const SmurfList = () => {
	const { smurfs } = useContext(SmurfContext);

	return (
		<>
			{smurfs.map(item => (
				<div key={item.id}>
					<h3>{item.name}</h3>
					<h6>
						Age: <span>{item.age}</span>
					</h6>
					<h6>
						Height: <span>{item.height}</span>
					</h6>
				</div>
			))}
		</>
	);
};
export default SmurfList;
