import React from "react"
import "./Employee.css"
//import {EmployeeContext} from "./EmployeeProvider"

export const Employee = ({ employee, location, props}) => (
    //const { removeEmployee } = useContext(EmployeeContext)
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__branch">Branch: {location.name}</div>
        <div className="employee__hourlyRate">Starting Hourly Rate: {employee.hourlyRate}</div>
        <div className="employee__fullTime">Full-time? {employee.fullTime}</div>
        <div className="employee__manager">Manager? {employee.manager}</div>
        <button>remove employee</button>
        {/* <button className="btn--release"
                onClick={() => {
                    removeEmployee(employee.id)
                        .then(() => {
                            props.history.push("/employees")
                        })
                }}
            >Remove Employee</button> */}
    </section>
)

