import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Theme } from '@material-ui/core';
import { AppBar as RaAppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    flex: 'auto',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
});

export const AppBar: FC = (props: any) => {
  const classes = useStyles();
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <RaAppBar {...props} elevation={1}>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
      <Typography
        variant="h4"
        color="secondary"
        className={classes.title}
        id="app-title"
      >
        {!isSmall && <span>React-Admin Demo</span>}
      </Typography>
      <span className={classes.spacer} />
    </RaAppBar>
  );
};
