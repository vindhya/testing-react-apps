// form testing
// http://localhost:3000/login

import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  const buildLoginForm = build({
    fields: {
      username: fake(f => f.internet.userName()),
      password: fake(f => f.internet.password())
    }
  })

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
