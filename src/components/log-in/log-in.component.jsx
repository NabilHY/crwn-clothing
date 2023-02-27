import { useState, useEffect } from 'react';
import { FormInput } from "../form-input/form-input.component";
import { Button } from '../button/button.component';
import { signInUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { retrieveUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'; 

const defaultCredentials = {
    email: '',
    password: '',
}

export const LogIn = () => {

    const [credentials, setCredentials] = useState(defaultCredentials)
    
    useEffect(() => {
        console.log(credentials);
    }, [credentials])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        })
    }

    const { email, password } = credentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await signInUserWithEmailAndPassword(email, password);
        setCredentials(defaultCredentials);
        const { user } = response;
        const { uid } = user;
        const userSnapshot = await retrieveUserDocumentFromAuth(uid)
        console.log(userSnapshot);
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
