// City.jsx
import React from 'react';

const City = ({ name, imageUrl }) => {
	return (
		<div className="city">
			<a href={`/city/${name}`}>
				<div className="city__overlay">
					<p className="city__name">{name}</p>
				</div>
				<img className="city__background" src={imageUrl} alt={name} />
			</a>
		</div>
	);
};

export default City;
