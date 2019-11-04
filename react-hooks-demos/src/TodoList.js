import React from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'

const todoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
    if(todos.length)
    return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <>
                        <Todo
                            id={todo.id}
                            task={todo.task}
                            key={todo.key}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        {i < todos.length - 1 && <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    )
    return null
}

export default todoList