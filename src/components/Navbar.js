import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info navbar-dark navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>

                    <ul className="navbar-nav d-flex flex-row me-1">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdown" role="button"
                                data-mdb-toggle="dropdown" aria-expanded="false"> <i className="fas fa-user mx-1"></i> Profile </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="/">My account</a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="/">Log out</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {/* <div className="navbar-nav d-flex flex-row me-1 ">
                        <select className='nav-item dropdown' name="bloodgrp" id="bloodgrp" >
                            <option value=""><a className="nav-link dropdown-toggle text-white dropdown-menu dropdown-menu-end" href="/" id="navbarDropdown" role="button"
                                data-mdb-toggle="dropdown" aria-expanded="false"> <i className="fas fa-user mx-1"></i> Profile </a></option>
                            
                            <option ><a className="dropdown-item" href="/myacc">My account</a></option>
                            <option ><a className="dropdown-item" href="/login">Log out</a></option>
                            {/* <option defaultValue={'A+'} value="">Select option</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option> */}
                        {/* </select> */}
                    {/* </div> */} 
                </div>

            </nav>
        </div>
    )
}

export default Navbar
