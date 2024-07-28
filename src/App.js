import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Components/login';
<<<<<<< HEAD
import {sidebar} from './Components/Sidebar/sidebar';
=======
import {Signup }  from './Components/signup';

>>>>>>> origin/lavanya
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
<<<<<<< HEAD
         <Route path="/" element={<sidebar />} />
=======
         <Route path="/signup" element = {<Signup />} />
>>>>>>> origin/lavanya
      </Routes>
    </Router>
  );
}

export default App;
