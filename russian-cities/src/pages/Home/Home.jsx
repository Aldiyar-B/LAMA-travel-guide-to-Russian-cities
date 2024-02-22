// Home.jsx
import React from 'react';
import CityList from '../../components/CityList/CityList'; // Импортируем CityList

const Home = () => {
	return (
		<div>
			<h1>Путеводитель по городам России</h1>
			<CityList /> {/* Включаем CityList здесь */}
		</div>
	);
};

export default Home;
