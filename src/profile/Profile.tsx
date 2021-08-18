import { useContext, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Title, useLogout, useNotify } from 'react-admin';
import firebase from 'firebase';
import Item from './Item';
import { GithubContext } from '../context/GithubContext';
import { IGithubContext } from '../types/context.interface';

const Profile = () => {
  const { userInfo }: IGithubContext = useContext(GithubContext);
  const [open, setOpen] = useState(false);
  const logout = useLogout();
  const notify = useNotify();

  const handleAccountDelete = async () => {
    const user = firebase.auth().currentUser;
    try {
      await user?.delete();
      logout();
      notify('Your account has been deleted.', 'success');
    } catch (error) {
      notify('Failed to delete Account.', 'error');
      console.error(error);
    }
  };

  return (
    <>
      <Card>
        <Title title="Profile" />
        <CardContent>
          <Typography variant="h2" component="h2" gutterBottom>
            Profile Page
          </Typography>
          <Item name="Name" value={userInfo.username} />
          <Item name="Access Token" value={userInfo.token} />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DeleteIcon />}
            style={{ backgroundColor: '#dc004e' }}
            onClick={() => setOpen(true)}
          >
            Delete Account
          </Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DeleteIcon />}
            style={{ backgroundColor: '#dc004e' }}
            onClick={handleAccountDelete}
          >
            Delete
          </Button>
          <Button autoFocus onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>{' '}
      </Dialog>
    </>
  );
};

export default Profile;
