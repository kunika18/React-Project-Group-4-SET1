import './signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Signup =()=> { 

    const notify = () => toast("Successfully Registered");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        notify();
        setTimeout(() => {
          navigate('/');
      }, 500);

    };
   return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <h1 className='heading'> SIGNUP </h1>
        <label>
          User Name
          <input type="text" name="username" />
        </label>
        <label>
          No
          <input type="text" name="email" placeholder="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>
      
          <button type="submit" name="submit" class ='submit_btn'> REGISTER </button>
          <Link to="/" className='links'> Already have an account ? Login </Link>
    
          <ToastContainer />
      </form>
    </div>
   );
}



