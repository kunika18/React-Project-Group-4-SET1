import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='bg-dark col-auto col-md-3 min-vh-100 d-flex flex-column justify-content-between'>
          <div>
            <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-items-center ms-3 mt-2'>
              <i className='fs-4 bi bi-speedometer'></i>
              <span className='ms-1 fs-4'>Profile</span>
            </a>
            <hr className='text-secondary d-none d-sm-block'/>
            <ul className='nav nav-pills flex-column mt-3 mt-sm-0'>
              <li className='nav-item text-white fs-4 my-1 py-sm-0'>
                <a href="#" className='nav-link text-white fs-5' aria-current="page">
                  <i className='bi bi-speedometer2'></i>
                  <span className='ms-2 d-none d-sm-inline'> Dashboard</span>
                </a>
              </li>
              <li className='nav-item text-white fs-4 my-1 py-sm-0'>
                <a href="#" className='nav-link text-white fs-5' aria-current="page">
                  <i className='bi bi-house'></i>
                  <span className='ms-2 d-none d-sm-inline'> Home</span>
                </a>
              </li>
              <li className='nav-item text-white fs-4 my-1 py-sm-0'>
                <a href="#" className='nav-link text-white fs-5' aria-current="page">
                  <i className='bi bi-table'></i>
                  <span className='ms-2 d-none d-sm-inline'> Events</span>
                </a>
              </li>
              <li className='nav-item text-white fs-4 my-1 py-sm-0'>
                <a href="#" className='nav-link text-white fs-5' aria-current="page">
                  <i className='bi bi-grid'></i>
                  <span className='ms-2 d-none d-sm-inline'> Fees</span>
                </a>
              </li>
              <li className='nav-item text-white fs-4 my-1 py-sm-0'>
                <a href="#" className='nav-link text-white fs-5' aria-current="page">
                  <i className='bi bi-people'></i>
                  <span className='ms-2 d-none d-sm-inline'>Groups</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown open">
            <a
              className="text-decoration-none text-white dropdown-toggle p-3"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className='bi bi-user-circle'></i> <span className='ms-2 d-none d-sm-inline'>MUST</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <a className="dropdown-item" href="#"> <span className='d-none d-sm-block'></span>Profile</a>
              <a className="dropdown-item disabled" href="#"><span className='d-none d-sm-block'></span>Settings</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
