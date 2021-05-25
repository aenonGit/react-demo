import React from 'react';

import { makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from "@material-ui/lab";


const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(1, 2),
  },
}));


function Timeline(): JSX.Element {
  const classes = useStyles();
  return (
    <MuiTimeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            26 - 05 - 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <Star />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Meetup
            </Typography>
            <Typography>{"CI/CD"}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </MuiTimeline>
  );
}


export default Timeline;
