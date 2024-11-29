import { useEffect, useState } from "react";
import './count.css'

function Count() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Count");
    }, [count])
    return (
        <div className="count">
            <h1>Counter</h1>
            <h2>* You Click Me <span>{count}</span> Times</h2>
            <button disabled={count == 0} onClick={() => setCount(count - 1)}>-</button>
            <button className="reset" disabled={count == 0} onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>+</button>

        </div>
    )
}
export default Count;
