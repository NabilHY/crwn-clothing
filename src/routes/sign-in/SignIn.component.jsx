import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { Button } from '../../components/button/button.component';
import { SignUpForm } from '../../components/sign-up-form/SignUp.component';
import { LogIn } from '../../components/log-in/log-in.component';


export const SignIn = () => {


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <LogIn />
      <Button onClick={logGoogleUser} buttonType='google'>
        Sign in With Google
      </Button>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <SignUpForm />
    </div>
  )
}
