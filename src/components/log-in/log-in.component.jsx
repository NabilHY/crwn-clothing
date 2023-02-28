import { useState, useContext } from 'react';
import { FormInput } from "../form-input/form-input.component";
import { Button } from '../button/button.component';
import { signInUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { retrieveUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'; 
import { UserContext } from '../../contexts/user.context';
import './log-in.styles.scss';

const defaultCredentials = {
    email: '',
    password: '',
}

export const LogIn = ({signIn}) => {

    const [credentials, setCredentials] = useState(defaultCredentials)
    
    const { email, password } = credentials;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCredentials(defaultCredentials);
        const response = await signInUserWithEmailAndPassword(email, password);
        const { user } = response;
        setCurrentUser(user);
        const { uid } = user;
        const userSnapshot = await retrieveUserDocumentFromAuth(uid)
        console.log(userSnapshot);
    }

    const { setCurrentUser } = useContext(UserContext);
  
    return (
        <div>
            <h1>Sign In</h1>
            <form className='sign-in-container' onSubmit={handleSubmit}>
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
                <Button type='button' onClick={signIn} buttonType='google'>
                    Sign in With Google
                </Button>
            </form>
        </div>
  )
}
