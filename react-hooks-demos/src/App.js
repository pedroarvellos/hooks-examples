import React, { useState, useEffect } from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import './App.css';
import { AppBar, Toolbar, Typography, Paper, Grid } from '@material-ui/core';
import uuid from 'uuid/v4'

const app = props => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || [])

  const [todos, setTodos] = useState(initialTodos)

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default app;
