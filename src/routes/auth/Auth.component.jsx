import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { SignUpForm } from '../../components/sign-up-form/SignUp.component';
import { LogIn } from '../../components/log-in/log-in.component';
import './auth.styles.scss';

export const Auth = () => {


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef)
  }

  return (
    <div className='authentication-container'>
        <LogIn signIn={logGoogleUser} />
        <SignUpForm />
    </div>
  )
}
