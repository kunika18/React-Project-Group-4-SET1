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
    setTimeout(() => {
      navigate('/dashboard'); // Navigate to dashboard
    }, 2000); // Delay navigation to allow the toast notification to be seen
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
        <div className="signup-link">
          <span>Not a user? Click here </span>
          <button type="button" onClick={handleSignUp} id="signup-button">Sign up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
