import { useContext } from 'react';
import { Login as RaLogin, useNotify } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { GithubContext } from '../../context/GithubContext';
import { IGithubContext, IGithubUserInfo } from '../../types/context.interface';

const useStyles = makeStyles((theme) => ({
  hint: {
    margin: '1.5em',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.grey[500],
  },
}));

export const Login = (props: any) => {
  const classes = useStyles();
  const { setUserInfo }: IGithubContext = useContext(GithubContext);
  const notify = useNotify();

  // Configure FirebaseUI
  const uiConfig = {
    // Popup signin flow rather than redirect flow
    signInFlow: 'popup',
    // Redirect to root page after sign in is successful.
    signInSuccessUrl: '#/',
    // Dispay GitHub as auth provider
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: (authResult: any, redirectUrl: any) => {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        const { additionalUserInfo, credential } = authResult;
        const userInfo: IGithubUserInfo = {
          username: additionalUserInfo.username,
          token: credential.accessToken,
        };
        setUserInfo(userInfo);
        notify('Login successful!', 'success');

        return true;
      },
    },
  };

  return (
    <RaLogin backgroundImage="https://source.unsplash.com/1600x900/?landscape">
      <div>
        <div className={classes.hint}>
          Please sign in with your GitHub account.
        </div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </RaLogin>
  );
};
