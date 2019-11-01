import React from 'react'
import { Paper, List, ListItem, ListItemText, Divider } from '@material-ui/core'

const todoList = props => {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <>
                        <ListItem>
                            <ListItemText>{todo.task}</ListItemText>
                        </ListItem>
                        <Divider/>
                    </>
                ))}
            </List>
        </Paper>
    )
}

export default todoList