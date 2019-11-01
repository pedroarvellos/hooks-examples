import React from 'react'
import { Paper, TextField } from '@material-ui/core'
import useInputState from './hooks/inputState'

const todoForm = ({ addTodo }) => {
    const [value, handleChange, reset] = useInputState('')
    return (
        <Paper style={{margin:'1em 0', padding: '0 1rem'}}>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    addTodo(value)
                    reset()
                }}>
                <TextField value={value} onChange={handleChange} margin='normal' label='Add New Todo' fullWidth/>
            </form>
        </Paper>
    )
}

export default todoForm