import React, { useContext, useRef, useEffect } from "react"
import "./Employee.css"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"

export const EmployeeForm = (props) => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  const name = useRef(null)
  const location = useRef(null)
  const hourlyRate = useRef(null)
  const manager = useRef(null)
  const fullTime = useRef(null)

  useEffect(() => {
    getLocations()
  }, [])

  const constructNewEmployee = () => {
    const locationId = parseInt(location.current.value)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      addEmployee({
        name: name.current.value,
        manager: manager.current.value,
        fullTime: fullTime.current.value,
        hourlyRate: hourlyRate.current.value,
        locationId
      })
        .then(() => props.history.push("/employees"))
    }
  }
  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeName">Employee name: </label>
          <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Hiring Branch: </label>
          <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
            <option value="0">Select a location</option>
            {locations.map(e => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="hourlyRate">Starting Hourly Rate: </label>
          <input type="text" id="hourlyRate" ref={hourlyRate} required autoFocus className="form-control" placeholder="12" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="fullTime">Full-time? </label>
          <select defaultValue="" name="fullTime" id="fullTime" ref={fullTime} className="form-control" >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="manager">Manager? </label>
          <select defaultValue="false" name="manager" id="manager" ref={manager} className="form-control" >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
      </fieldset>
      <button type="submit"
        onClick={evt => {
          evt.preventDefault() // Prevent browser from submitting the form
          constructNewEmployee()
        }}
        className="btn btn-primary">
        Hire
            </button>
    </form>
  )
}

//took out ref on following form elements