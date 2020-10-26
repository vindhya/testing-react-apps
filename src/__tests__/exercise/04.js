// form testing
// http://localhost:3000/login

import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  const buildLoginForm = (overrides = {}) => {
    const login = {}

    login.username = overrides.username ? overrides.username : faker.internet.userName()
    login.password = overrides.password ? overrides.password : faker.internet.password()

    return login
  }

  render(<Login onSubmit={handleSubmit} />)

  const {username, password} = buildLoginForm()
  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)

  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  expect(handleSubmit).toHaveBeenCalledWith({username, password})
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
