import { FC } from 'react';
import { Box, Card, CardActions, Button, Typography } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';
import publishArticleImage from './welcome_illustration.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(to right, #21618c 0%, #2874a6 35%), linear-gradient(to bottom, #21618c 0%, #2e86c1 50%), #2e86c1`,

    color: '#fff',
    padding: 20,
    marginTop: theme.spacing(2),
    marginBottom: '1em',
  },
  media: {
    background: `url(${publishArticleImage}) top right / cover`,
    marginLeft: 'auto',
  },
}));

export const Welcome: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box display="flex">
        <Box flex="1">
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            data-testid="title"
          >
            Welcome to GitHub Ground Control
          </Typography>
          <Box maxWidth="40em">
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              data-testid="subtitle"
            >
              This is a imaginary back-office tool. Feel free to explore and
              modify the data - it's local to your computer, and will reset each
              time you reload.
            </Typography>
          </Box>
          <CardActions>
            <Button
              variant="contained"
              href="https://github.com/sbstnkng/react-admin-demo"
              target="_blank"
              startIcon={<CodeIcon />}
              data-testid="source-code-button"
            >
              Source for this demo
            </Button>
          </CardActions>
        </Box>

        <Box
          display={{ xs: 'none', sm: 'none', md: 'block' }}
          className={classes.media}
          width="16em"
          height="9em"
          overflow="hidden"
        />
      </Box>
    </Card>
  );
};
