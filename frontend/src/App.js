import './App.css'
import StockTable from './components/StockTable'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Status from './components/Status';
import Gainers from './components/Gainers';
import Losers from './components/Losers';

function App() {


  return (
    <Router>
      <div className="App">
          <Header />
          <Status />
        <div className="spacing">
          <Routes>
            <Route path='/' element={<StockTable />} />
            <Route path='/gainers' element={<Gainers />} />
            <Route path='/losers' element={<Losers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
