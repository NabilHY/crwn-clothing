import React, { useState, useEffect } from 'react';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  password_confirmation: '',
}

export const SignUpForm = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  

  useEffect(() => {
    console.log(formFields)
  }, [formFields])

    const { 
      displayName,
      email,
      password,
      password_confirmation: passwordConfirmation
    } = formFields;
  
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({
      ...formFields,
      [name]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      throw new Error("Passwords not matching!");
    } else {
      const response = await createAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      const { user } = response;
      const userDocRef = await createUserDocumentFromAuth(user);
      return userDocRef;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button type='submit'>
          Sign Up
      </button>
    </form>
  )
}
