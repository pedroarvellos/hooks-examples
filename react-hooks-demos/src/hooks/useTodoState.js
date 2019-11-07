import { useState, useEffect } from 'React'
import useLocalStorageState from './useLocalStorageState'
import uuid from 'uuid/v4'

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos)
    const [simulation, setSimulation] = useState('Value')

    useEffect(() => {
        console.log(simulation)
    }, [simulation])

    const check = () => {
        console.log(simulation)
    }

    return {
        todos,
        check,
        setSimulation,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
        },
        removeTodo: todoId => {
            const updatedTodos = todos.filter((todo) => todo.id !== todoId)
            setTodos(updatedTodos)
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
            setTodos(updatedTodos)
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTask } : todo
            )
            setTodos(updatedTodos)
        }
    }
}