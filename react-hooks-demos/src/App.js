import React from 'react';
import useTodoState from './hooks/useTodoState'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import './App.css';
import { AppBar, Toolbar, Typography, Paper, Grid } from '@material-ui/core';

const app = () => {
  const initialTodos = [{ id: 1, task: 'Pet a Monkey', completed: false }]

  const { todos, addTodo, removeTodo, toggleTodo, editTodo, setSimulation } = useTodoState(initialTodos)

  const onRemove = (id) => {
    removeTodo(id)
    setSimulation('Value Updated')
  }

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
            // removeTodo={removeTodo}
            removeTodo={onRemove}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default app;
