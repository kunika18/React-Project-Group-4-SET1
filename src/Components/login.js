import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './login.css';

export const Login = () => {
  const navigate = useNavigate();

  const notify = () => toast("Login Successful");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    notify();
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="main">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <h4 id= "pink">Not a user? click here <button type="button" onClick={handleSignUp}>Sign up</button></h4>
      <ToastContainer />
    </div>
  );
};
