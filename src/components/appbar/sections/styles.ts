import { createStyles, makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles(
  (_theme: Theme) => createStyles({
    indicator: {
      display: 'none'
    },
  })
);


export default useStyles;
