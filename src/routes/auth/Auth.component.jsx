import { useContext } from 'react';
import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { SignUpForm } from '../../components/sign-up-form/SignUp.component';
import { LogIn } from '../../components/log-in/log-in.component';
import { UserContext } from '../../contexts/user.context';
import './auth.styles.scss';

export const Auth = () => {

  const { setCurrentUser } = useContext(UserContext);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user)
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div className='authentication-container'>
        <LogIn signIn={logGoogleUser} />
        <SignUpForm />
    </div>
  )
}
