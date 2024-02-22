// CityDetail.jsx
import React from 'react';

const CityDetail = ({ match }) => {
	const cityName = match.params.cityName; // Получаем имя города из URL
	// Здесь можно реализовать подробную информацию о выбранном городе
	return (
		<div>
			<h2>Детали города {cityName}</h2>
			{/* Здесь будет информация о городе */}
		</div>
	);
};

export default CityDetail;
