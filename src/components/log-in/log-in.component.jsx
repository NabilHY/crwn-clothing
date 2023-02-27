import { useState } from 'react';
import { FormInput } from "../form-input/form-input.component";
import { Button } from '../button/button.component';

const defaultCredentials = {
    email: '',
    password: '',
}

export const LogIn = () => {
    
    const [credentials, setCredentials] = useState(defaultCredentials)

    const handleChange = (e) => {
        const { name, value } = e.target.value;
        setCredentials({
            ...credentials,
            [name]: value,
        })
    }

    const { email, password } = credentials;

    const handleSubmit = () => {

    }
  
    return (
    <form onSubmit={handleSubmit}>
          <FormInput
                label="Email"
                name="email"
                type="text"
                value={email}
                onChange={handleChange}
                required
            />
            
            <FormInput
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                required
            />
            <Button type='submit'>
                Sign In
            </Button>

    </form>
  )
}
