import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Components/login';
import { Signup } from './Components/signup';  // Import Signup from remote branches
import Dashboard from './dashboard/Dashboard';  // Import Dashboard from remote branches

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
