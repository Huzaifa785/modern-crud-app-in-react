import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsersContext from '../UserContext'

function Users() {
    const userContext = useContext(UsersContext)

    let handleDelete = (index) => {
        let confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            userContext.userList.splice(index - 1, 1)
            userContext.setUserList([...userContext.userList])
        }
    }
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-plus fa-sm text-white-50"></i> Create User</Link>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Users Data</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    userContext.userList.map((user, index) => {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.position}</td>
                                            <td>{user.office}</td>
                                            <td>{user.age}</td>
                                            <td>{user.startDate}</td>
                                            <td>{user.salary}</td>
                                            <td>
                                                <Link to={`/edit-user/${index + 1}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                                <button onClick={() => handleDelete(index + 1)} className="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Users
