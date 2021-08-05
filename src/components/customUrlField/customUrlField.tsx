import { useRecordContext } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

type Props = {
  source: string;
};

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  icon: {
    width: '0.5em',
    height: '0.5em',
    paddingLeft: 2,
  },
});

export const CustomUrlField = ({ source }: Props) => {
  const record = useRecordContext();
  const classes = useStyles();
  const url: string = record[source];

  return record ? (
    <a href={url} target="_blank" rel="noreferrer" className={classes.link}>
      {url}
      <LaunchIcon className={classes.icon} />
    </a>
  ) : null;
};
