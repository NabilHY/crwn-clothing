import React, { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  password_confirmation: '',
}

export const SignUpForm = () => {

  
  const [formFields, setFormFields] = useState(defaultFormFields)
  
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({
      ...formFields,
      [name]: value
      })
  }

  const handleSubmit = () => {

  }

  const { displayName,
    email,
    password,
    password_confirmation: passwordConfirmation
  } = formFields;

  return (
    <form>
      <label>Display Name</label>
      <input
        type="text"
        name="displayName"
        onChange={handleChange}
        value={displayName}
        required
      />
      <label>email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />
      <label>Password Confirmation</label>
      <input
        type="password"
        name="password_confirmation"
        value={passwordConfirmation}
        onChange={handleChange}
        required
      />
      <button type='submit' onSubmit={handleSubmit} >
          Sign Up
      </button>
    </form>
  )
}
