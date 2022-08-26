import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';

function App(props) {


  
  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route exact path='/' element={<Login />}/>
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
