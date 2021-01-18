import React  from 'react';

//import css file
import './asset/css/custom.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './asset/css/all.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import HomeTopBanner from './components/HomeTopBanner/HomeTopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';

function App() {
  return (
    <Router>
      <TopNavigation/>
      <HomeTopBanner />
    </Router>
  );
}

export default App;