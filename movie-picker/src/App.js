import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PickMovie from './components/PickMovie';
import Catalog from './components/Catalog';
import AddMovie from './components/AddMovie';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/> 
      <Router>
        <Routes>
          <Route path="/" element={<Catalog/>}/>
          <Route path="/movie" element={<PickMovie/>}/>
          <Route path="/add" element={<AddMovie/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
