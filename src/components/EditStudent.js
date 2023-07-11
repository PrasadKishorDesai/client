import React from 'react'
import Navbar from './Navbar'

const EditStudent = () => {
    document.title = "Edit Student";
    return (
        <div>
            <Navbar />
            <div className='container'>
                <h4 className='my-3' style={{ textAlign: 'center' }}>Edit Student</h4>
                <form>
                    <div className="form-group row my-2">
                        <label className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fname" placeholder="Enter First Name" required />
                        </div>
                    </div>

                    <div className="form-group row my-2">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" required />
                        </div>
                    </div>

                    <div className="form-group row my-2">
                        <label className="col-sm-2 col-form-label">DOB</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="dob" min="1999-01-01" max="2030-12-31" placeholder='dd-mm-yyyy' required />
                        </div>
                    </div>

                    <div className="form-group row my-2">
                        <label className="col-sm-2 col-form-label">Blood Group</label>
                        <div className="col-sm-10">
                            <select className='custom-select form-control' name="bloodgrp" id="bloodgrp" required>
                                <option defaultValue={'A+'} value="">Select option</option>
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="AB+">AB+</option>
                                <option value="O+">O+</option>
                                <option value="A-">A-</option>
                                <option value="B-">B-</option>
                                <option value="AB-">AB-</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row my-2">
                        <label className="col-sm-2 col-form-label">Gender</label>
                        <div className="col-sm-10">
                            <select className='custom-select form-control' name="gender" id="gender" required>
                                <option defaultValue={'male'} value="">Select option</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row my-2">
                        <label className="col-sm-2 col-form-label">Phone No.</label>
                        <div className="col-sm-10">
                            <input type="tel" pattern="[0-9]{10}" className="form-control" id="phoneno" placeholder="12345-67890" required />
                        </div>
                    </div>

                    <div className='d-flex justify-content-center my-3'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditStudent;
