import React from 'react'

const Login = () => {
    document.title = "Login Page";
    return (
        <div>
            <form className='my-3 container card w-50 p-3 h-50 d-flex justify-content-center' >
                <h4 className='my-3' style={{ textAlign: 'center' }}>Login</h4>
                <div className="form-group">
                    <label htmlFor="email" className='my-1'>Email</label>
                    <input type="email" className="form-control my-1" id="email" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='my-1'>Password</label>
                    <input type="password" className="form-control my-1" id="password" placeholder="Enter Password" />
                </div>
                <div className="form-group d-flex justify-content-center">
                    <input type="submit" value="Submit" className="btn btn-primary  my-1" />
                </div>
            </form>


            <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
            </div>
        </div>
    )
}

export default Login;
