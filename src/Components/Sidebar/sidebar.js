import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='bg-dark sidebar min-vh-100 d-flex flex-column justify-content-between'>
        <div>
          <a className='sidebar-brand text-decoration-none text-white d-flex align-items-center ms-3 mt-2'>
            <i className='fs-4 bi bi-speedometer'></i>
            <span className='ms-1 fs-4'>Profile</span>
          </a>
          <hr className='text-secondary' />
          <ul className='nav nav-pills flex-column'>
            <li className='nav-item'>
              <a href="#" className='nav-link text-white'>
                <i className='bi bi-speedometer2'></i>
                <span className='ms-2'>Dashboard</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link text-white'>
                <i className='bi bi-house'></i>
                <span className='ms-2'>Home</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link text-white'>
                <i className='bi bi-table'></i>
                <span className='ms-2'>Events</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link text-white'>
                <i className='bi bi-grid'></i>
                <span className='ms-2'>Fees</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link text-white'>
                <i className='bi bi-people'></i>
                <span className='ms-2'>Groups</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown open p-3">
          <a
            className="text-decoration-none text-white dropdown-toggle"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className='bi bi-user-circle'></i> <span className='ms-2'>MUST</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="triggerId">
            <a className="dropdown-item" href="#">Profile</a>
            <a className="dropdown-item disabled" href="#">Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
