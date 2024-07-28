import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Components/login';
import {sidebar} from './Components/Sidebar/sidebar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/" element={<sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
