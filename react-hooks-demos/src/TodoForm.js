import React from 'react'
import { Paper, TextField } from '@material-ui/core'
import useInputState from './hooks/inputState'

const todoForm = ({ addTodo }) => {
    const [value, handleChange, reset] = useInputState('')
    return (
        <Paper>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    addTodo(value)
                    reset()
                }}>
                <TextField value={value} onChange={handleChange} />
            </form>
        </Paper>
    )
}

export default todoForm