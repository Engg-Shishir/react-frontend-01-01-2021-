import React  from 'react';

//import css file
import './asset/css/custom.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './asset/css/all.min.css';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Frontend</h1>
    </BrowserRouter>
  );
}

export default App;