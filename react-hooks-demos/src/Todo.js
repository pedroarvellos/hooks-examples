import React from 'react'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'

const todo = ({ id, task, completed, removeTodo, toggleTodo, editTodo }) => {
    const [isEditing, toggle] = useToggleState()
    return (
        <ListItem>
            {
                isEditing ? <EditTodoForm id={id} task={task} editTodo={editTodo} toggle={toggle} /> :
                    <>
                        <Checkbox tabIndeex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                        <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}> {task} </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => removeTodo(id)}>
                                <Delete aria-label='Delete' />
                            </IconButton>
                            <IconButton>
                                <Edit aria-label='Edit' onClick={toggle} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
            }
        </ListItem>
    )
}

export default todo