import React from "react"
import "./Employee.css"

export const Employee = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__branch">Branch: {employee.locationId}</div>
        <div className="employee__hourlyRate">Starting Hourly Rate: {employee.hourlyRate}</div>
        <div className="employee__fullTime">Full-time? {employee.fullTime}</div>
        <div className="employee__manager">Manager? {employee.manager}</div>
    </section>
)