import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const appStyles = (theme: Theme) => createStyles({
  '.App': {
    textAlign: 'center',
    backgroundColor: theme.palette.common.white,
  },
  '.App-header': {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: theme.palette.common.white,
  },
  '.App-intro': {
    fontSize: 'large',
  },
  '.App-link': {
    color: '#61dafb',
  },
  container: {
    height: '100%',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexFlow: 'column',
  }
});

const useStyles = makeStyles((_theme: Theme) => createStyles({
  container: {
    height: '100%',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexFlow: 'column',
  }
}));


export { appStyles, useStyles };
