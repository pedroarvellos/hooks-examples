import { useState, useEffect } from 'react'

function UseLocalStorageState(key, defaultValue) {
    const [state, setState] = useState(() => {
        let val
        try{
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
        } catch(e) {
            val = defaultValue
        }
        return val
    })


}

export default UseLocalStorageState