import React from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'

const todoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
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
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}

export default todoList