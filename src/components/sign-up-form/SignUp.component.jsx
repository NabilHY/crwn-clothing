import React, { useState } from 'react';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../button/button.component';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  password_confirmation: '',
}

export const SignUpForm = () => {
  
  const [formFields, setFormFields] = useState(defaultFormFields)

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
    }
      
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password);
      const { user } = response;
      const userDocRef = await createUserDocumentFromAuth(user, { displayName });
      console.log(userDocRef);
      return userDocRef;
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') alert('Cannot create user, email already in use');
      console.log('User creation failed!',err);
    }

    setFormFields(defaultFormFields);

  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
      <FormInput 
        label="Display Name"
        type="text"
        name="displayName"
        value={displayName}
        onChange={handleChange}
        required
      />
      <FormInput
        type="email"
        name="email"
        label="Email"
        value={email}
        onChange={handleChange}
        required
      />
      <FormInput
        type="password"
        name="password"
        label="Password"
        value={password}
        onChange={handleChange}
        required
      />
      <FormInput
        type="password"
        label="Password Confirmation"
        name="password_confirmation"
        value={passwordConfirmation}
        onChange={handleChange}
        required
      />
      <Button type='submit'>
          Sign Up
      </Button>
    </form>
    </div>
  )
}
