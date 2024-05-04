import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    
                <aside class="overflow-y-auto " style={{ height: '100vh' }}>
                    <div class="vertical-nav bg-white">
                        <div class="mb-3">

                        </div>
                        <ul class="navbar-nav flex-column ps-2">
                            <li class="nav-item">
                                <Link to='/Deshboard' class="nav-link active" style={{ color: '#0E9F6E' }}>
                                    <i class="fa-solid fa-dashboard fs-5"></i>
                                    <span class="ms-2 fw-bold">Dashboard</span>
                                </Link>

                            </li>
                            <li class="nav-item">
                                <Link to='/party' class="nav-link" role="button" aria-expanded="false"><i class="fa-solid fa-users ms-3 arow-togle rotate"></i>
                                    <span class="ms-2 fw-bold">Party</span>
                                </Link>

                            </li>
                            <li class="nav-item">
                                <Link to='/election' class="nav-link"><i class="fa-solid fa-square-poll-vertical ms-3"></i>
                                    <span class="ms-2 fw-bold">Election</span>
                                </Link>

                            </li>
                            <li class="nav-item">
                                <Link to='/connection' class="nav-link"><i class="fa-solid fa-user ms-3"></i>
                                    <span class="ms-2 fw-bold">Connection</span>
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link to='/user' class="nav-link"><i class="fa-solid fa-list-ul ms-3"></i>
                                    <span class="ms-2 fw-bold">User</span>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </aside>           

  )
}

export default Sidebar;
