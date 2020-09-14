import React, { Component } from 'react'
import axios from 'axios'


export class EmployeeList extends Component {
  state = {
    employees: []
  }

  // when component mounts I want the function to run
  componentDidMount(){
    this.fetchEmployeeData()
  }
  // now I am defining the function
  async fetchEmployeeData () {
    let employeeData = await axios.get(
      "https://reqres.in/api/users?per_page=5"
    ) 
    this.setState( {employees: employeeData.data.data} )
  }
  
  render() {

    let employeeList = this.state.employees.map((employee) => {
      return (
      <li 
      data-cy="list"
      key={employee.id}
      >
        {`${employee.first_name} ${employee.last_name}`}
      </li>
      )
    })
    return (
      <div data-cy="main-container">
        <ul>{employeeList}</ul>
      </div>
    )
  }
}

export default EmployeeList
