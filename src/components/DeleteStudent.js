import React from 'react'
import Navbar from './Navbar';

const DeleteStudent = () => {
	document.title = "Delete Student";
	return (
		<div>
			<Navbar />
			<div className="container my-3">
				<h4 className='my-3' style={{ textAlign: 'center' }}>Delete Student</h4>
				<form>
					<div className="form-group my-3">
						<label>Student ID</label>
						<input type="number" className="form-control my-1" id="studid" placeholder="Enter Student ID" min={0} max={99} />
					</div>
					
					<div className='d-flex justify-content-center my-3'>
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</form>

			</div>
		</div>
	)
}

export default DeleteStudent;
