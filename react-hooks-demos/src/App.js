import React, { useState } from 'react';
import TodoApp from './TodoApp'
import TodoList from './TodoList'
import './App.css';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

const app = props => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'Clean Fishtank',
      completed: false
    },
    {
      id: 2,
      task: 'Wash the car',
      completed: true
    },
    {
      id: 3,
      task: 'Grow Beard',
      completed: 'false'
    }
  ])

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos}/>
    </Paper>
  )
}

export default app;
