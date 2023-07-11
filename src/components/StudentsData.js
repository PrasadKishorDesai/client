import React from 'react'

const StudentsData = () => {
    return (
        <div className='my-3 m-5'>
            <table className="table table-striped border ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Phone No.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>temp</td>
                        <td>temp</td>
                        <td>@temp</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>temp</td>
                        <td>temp</td>
                        <td>@temp</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>temp</td>
                        <td>temp</td>
                        <td>@temp</td>
                    </tr>
                </tbody>
            </table>

            <div className='d-flex justify-content-between'>
                <button type="button" className="btn btn-dark">Add Student</button>
                <button type="button" className="btn btn-dark">Edit Student</button>
                <button type="button" className="btn btn-dark">Delete Student</button>
            </div>
        </div>
    )
}

export default StudentsData
