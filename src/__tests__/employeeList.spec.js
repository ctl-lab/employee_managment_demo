import React from 'react'
import { shallow, mount } from 'enzyme'
import EmployeeList from '../EmployeeList'
import axios from 'axios'

describe('<EmployeeList />', () => {
  it('Shuold fetch employees from API using Axios', () => {
    const axiosSpy = jest.spyOn(axios, 'get')
    shallow(<EmployeeList/>)
    expect(axiosSpy).toBeCalled()
  })
})