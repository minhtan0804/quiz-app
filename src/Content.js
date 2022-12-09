import { clear } from '@testing-library/user-event/dist/clear'
import { useEffect, useLayoutEffect, useState, useRef } from 'react'



function Content() {

    const [count, setCount] = useState(60)

    let timerId

    const handleStart = () => {
        timerId = setInterval(() => {
            setCount(prevCo => prevCo - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId)
    }

    

    return (
        <div>
            
        </div>
    )
}

export default Content