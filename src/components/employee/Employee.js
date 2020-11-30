import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__branch">Branch: {location.name}</div>
        <div className="employee__hourlyRate">Starting Hourly Rate: {employee.hourlyRate}</div>
        <div className="employee__fullTime">Full-time? {employee.fullTime}</div>
        <div className="employee__manager">Manager? {employee.manager}</div>
    </section>
)

