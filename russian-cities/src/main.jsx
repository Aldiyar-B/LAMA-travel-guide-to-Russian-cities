// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import CityList from './components/CityList/CityList';
import City from './components/City/City';
const Cities = () => {
  return (
    <>
      <CityList />
    </>
  );
};
// const CityInfo = () => {
//   return (
//     <>
//       <City />
//     </>
//   )
// }
ReactDOM.render(<Cities />, document.getElementById('cities'));
// ReactDOM.render(<CityInfo />, document.getElementById('test'));


// ReactDOM.createRoot(document.getElementById('cities')).render(
//   <React.StrictMode>
//     <CityList />
//   </React.StrictMode>,
// )

