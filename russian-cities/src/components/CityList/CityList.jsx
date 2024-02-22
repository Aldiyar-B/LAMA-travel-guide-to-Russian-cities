// CityList.jsx
import React from 'react';
import City from '../../components/City/City';

const cities = [
	{ name: 'Москва', imageUrl: '/assets/moscow.jpg' },
	{ name: 'Санкт-Петербург', imageUrl: '/assets/saint-petersburg.jpg' },
	// Другие города...
];

const CityList = () => {
	return (
		<div className="cities">
			{cities.map((city, index) => (
				<City key={index} name={city.name} imageUrl={city.imageUrl} />
			))}
		</div>
	);
};

export default CityList;
