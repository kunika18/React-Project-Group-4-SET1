import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
