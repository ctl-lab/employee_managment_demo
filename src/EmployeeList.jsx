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
    return (
      <div>
        
      </div>
    )
  }
}

export default EmployeeList
