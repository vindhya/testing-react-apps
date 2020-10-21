// simple test with ReactDOM
// http://localhost:3000/counter

import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

// renders div.remove() at the end of each test unnecessary
beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  const div = document.createElement('div')  
  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.append(div)

  // 🐨 use ReactDOM.render to render the <Counter /> to the div
  ReactDOM.render(<Counter />, div)

  // 🐨 get a reference to the increment and decrement buttons:
  const buttons = div.querySelectorAll('button')
  const decrementButton = buttons[0]
  const incrementButton = buttons[1]
  // 🐨 get a reference to the message div:
  const message = div.firstChild.querySelector('div')

  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  });

  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(message.textContent).toBe('Current count: 0')
  // 🐨 click the increment button (💰 increment.click())
  incrementButton.dispatchEvent(clickEvent)
  // 🐨 assert the message.textContent
  expect(message.textContent).toBe('Current count: 1')
  // 🐨 click the decrement button (💰 decrement.click())
  decrementButton.dispatchEvent(clickEvent)
  // 🐨 assert the message.textContent
  expect(message.textContent).toBe('Current count: 0')

  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
  div.remove()
})

/* eslint no-unused-vars:0 */
