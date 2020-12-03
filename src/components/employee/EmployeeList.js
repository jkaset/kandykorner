import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { Employee } from "./Employee"
import "./Employee.css"

export const EmployeeList = (props) => {
  const { employees, getEmployees, removeEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)


  useEffect(() => {
    console.log("EmployeeList: Initial render before data")
    getLocations()
      .then(getEmployees)
  }, [])

  return (
    <div className="employees">
      <h1>Employees</h1>
      <button onClick={() => props.history.push("/employees/create")}>
        Add Employee
        </button>
      <article className="employeeList">
        {
          employees.map(employee => {
            const branch = locations.find(l => l.id === employee.locationId)

            return <Employee key={employee.id}
            location={branch}
            employee={employee} />
          })
        }
      </article>
       
    </div>
  )
}

