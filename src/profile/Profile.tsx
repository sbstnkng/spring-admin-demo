import { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Title, useLogout } from 'react-admin';
import firebase from 'firebase';
import Item from './Item';
import { GithubContext } from '../context/GithubContext';

const Profile = () => {
  const { userInfo } = useContext(GithubContext);
  const logout = useLogout();

  const handleAccountDelete = async () => {
    const user = firebase.auth().currentUser;
    try {
      await user?.delete();
      logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
          onClick={handleAccountDelete}
        >
          Delete Account
        </Button>
      </CardActions>
    </Card>
  );
};

export default Profile;
