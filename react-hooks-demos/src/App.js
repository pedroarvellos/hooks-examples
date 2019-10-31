import React from "react";
import TodoApp from './TodoApp'
import Paper from '@material-ui/core/Paper'
import "./App.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const app = props => {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{height: "64px"}}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  )
}

export default app;
