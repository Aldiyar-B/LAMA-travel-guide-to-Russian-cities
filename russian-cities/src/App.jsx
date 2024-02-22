// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import CityDetail from './pages/CityDetail/CityDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/city/:cityName" component={CityDetail} />
      </Switch>
    </Router>
  );
};

export default App;



// function App() {

//   return (
//     <>
//       <h1>Hello world!</h1>
//     </>
//   )
// }

// export default App
