import { useState } from 'react'
import { reset } from 'ansi-colors'

export default initialValue => {
    const [value, setValue] = useState(initialValue)

    const handleChange = e => {
        setValue(e.target.value)
    }

    const reset = () => {
        setValue('')
    }

    return [value, handleChange, reset]
}