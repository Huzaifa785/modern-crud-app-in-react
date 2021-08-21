import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UsersContext from '../UserContext'

function EditUser(props) {
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [office, setOffice] = useState("")
    const [age, setAge] = useState("")
    const [startDate, setStartDate] = useState("")
    const [salary, setSalary] = useState("")

    const userContext = useContext(UsersContext)
    const history = useHistory()
    
    useEffect( () => {
        let userData = userContext.userList[props.match.params.id - 1]
        setName(userData.name)
        setPosition(userData.position)
        setOffice(userData.office)
        setAge(userData.age)
        setStartDate(userData.startDate)
        setSalary(userData.salary)
    }, [])

    let handleSubmit = (e) => {
        e.preventDefault()
        let userData = {name, position, office, age, startDate, salary}
        userContext.userList[props.match.params.id - 1] = userData
        userContext.setUserList([...userContext.userList])
        history.push("/users")
    }

    return (
        <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
            <Link to="/users" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-left fa-sm text-white-50"></i> View All Users</Link>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="form-div">
            <div className="row">
                <div className="col-lg-4">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="name" required />
                </div>
                <div className="col-lg-4">
                    <label htmlFor="position">Position:</label>
                    <input type="text" className="form-control" id="position" value={position} onChange={(e) => setPosition(e.target.value)} required />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-lg-4">
                    <label htmlFor="office">Office:</label>
                    <input type="text" className="form-control" id="office" value={office} onChange={(e) => setOffice(e.target.value)} required />
                </div>
                <div className="col-lg-4">
                    <label htmlFor="age">Age:</label>
                    <input type="text" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-lg-4">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </div>
                <div className="col-lg-4">
                    <label htmlFor="salary">Salary:</label>
                    <input type="text" className="form-control" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
                </div>
            </div>
            <div className="row mt-3 ml-1">
                <input type="submit" className="btn btn-primary" value="Update" />
            </div>
        </div>
        </form>
        </>
    )
}

export default EditUser
