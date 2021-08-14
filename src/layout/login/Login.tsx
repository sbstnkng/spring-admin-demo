import { Login as RaLogin } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  hint: {
    margin: '1.5em',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.grey[500],
  },
}));

// Configure FirebaseUI
const uiConfig = {
  // Popup signin flow rather than redirect flow
  signInFlow: 'popup',
  // Redirect to root page after sign in is successful.
  signInSuccessUrl: '#/',
  // Dispay GitHub as auth provider
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

const SignInScreen = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
);

export const Login = (props: any) => {
  const classes = useStyles();
  return (
    <RaLogin backgroundImage="https://source.unsplash.com/1600x900/?landscape">
      <div>
        <div className={classes.hint}>
          Please sign in with your GitHub account.
        </div>
        <SignInScreen />
      </div>
    </RaLogin>
  );
};
