import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import './Sidebar.css'

function sidebar() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='bg-dark col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-column'> 
        </div>
        <div>
            <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2'>
                <i className='fs-4 bi bi-speedometer'></i>
                <span className='ms-1 fs-4'>Brand</span>
            </a>
            <hr className= 'text-secondary d-none d-sm-block'/>
            <ul
                class="nav nav-pills flex column mt-3 mt-sm-0"
            >
                <li class="nav-item text-white fs-4 my-1 py-sm-0">
                    <a href="#" class="nav-link text-white fs-5" aria-current="page"
                        > <i className='bi bi-speedometer2'></i>
                        <span className='ms-2 d-none d-sm-inline'> Dashboard</span>
                            </a >
                </li>
                <li class="nav-item text-white fs-4 my-1 py-sm-0">
                    <a href="#" class="nav-link text-white fs-5" aria-current="page"
                        > <i className='bi bi-house'></i>
                        <span className='ms-2 d-none d-sm-inline'> Home </span>
                            </a >
                </li>
                <li class="nav-item text-white fs-4 my-1 py-sm-0">
                    <a href="#" class="nav-link text-white fs-5" aria-current="page"
                        > <i className='bi bi-table'></i>
                        <span className='ms-2 d-none d-sm-inline'> Orders</span>
                            </a >
                </li>
                <li class="nav-item text-white fs-4 my-1 py-sm-0">
                    <a href="#" class="nav-link text-white fs-5" aria-current="page"
                        > <i className='bi bi-grid'></i>
                        <span className='ms-2 d-none d-sm-inline'> Products</span>
                            </a >
                </li>
                <li class="nav-item text-white fs-4 my-1 py-sm-0">
                    <a href="#" class="nav-link text-white fs-5" aria-current="page"
                        > <i className='bi bi-people'></i>
                        <span className='ms-2 d-none d-sm-inline'> Customers</span>
                            </a >
                </li>
            </ul>
        </div>  
        <div class="dropdown open">
            <a
                class="text-decoration-none text-white dropdown-toggle p-3"
                type="button"
                id="triggerId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <i className='bi bi-user-circle'></i> <span className='ms-2 d-none d-sm-inline'>MUST</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
                <a class="dropdown-item" href="#"> <span className='d-none d-sm-block'></span>Profile</a>
                <a class="dropdown-item disabled" href="#"><span className='d-none d-sm-block'></span>Settings</a>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default sidebar

