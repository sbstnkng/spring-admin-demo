import { Login as RaLogin, LoginForm } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hint: {
    marginTop: '1em',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.grey[500],
  },
}));

export const Login = (props: any) => {
  const classes = useStyles();
  return (
    <RaLogin backgroundImage="https://source.unsplash.com/1600x900/?landscape">
      <div>
        <div className={classes.hint}>Hint: demo / demo</div>
        <LoginForm {...props} />
      </div>
    </RaLogin>
  );
};
