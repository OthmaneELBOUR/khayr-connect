import './App.css';
import { Routes, Route } from 'react-router';
import HomePage from './Screens/HomePage';
import LogInPage from './Screens/LogInPage';


function App() {
  return (
    <div className>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LogInPage />} />
      </Routes>

    </div>
  );
}

export default App;
