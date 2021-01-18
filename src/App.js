import React  from 'react';

//import css file
import './asset/css/custom.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './asset/css/all.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;