import React  from 'react';

//import css file
import './asset/css/custom.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './asset/css/all.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoute from './router/AppRoute';

function App() {
  return (
    <Router>
     <AppRoute />
    </Router>
  );
}

export default App;