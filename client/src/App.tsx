import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Calendar } from './pages/Calendar';
import { paths } from './routes';
import { Nav } from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.calendar} element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
