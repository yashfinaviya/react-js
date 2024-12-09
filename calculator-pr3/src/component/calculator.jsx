import { useState } from "react";
import './calculator.css'

const Calculator = () => {
    let [value, setValue] = useState('')
    const handle = (e) => {
        setValue(value+e.target.innerHTML)
    }
    const equal = () => {
        setValue(eval(value))
    }
    const Ac = () => {
        setValue("")
    }
    const dell = () => {
        setValue(value.toString().slice(0,-1))
    }
    return (
        <>
            <div className="calculator">
                <input className="display" type="text" placeholder="" value={value} />
                <div className="keys">

                    <div className="button" onClick={Ac} >AC</div>
                    <div className="button" onClick={dell}>DELL</div>
                    <div className="button">%</div>
                    <div className="button" onClick={handle}>/</div>


                    <div className="button" onClick={handle}>7</div>
                    <div className="button" onClick={handle}>8</div>
                    <div className="button" onClick={handle}>9</div>
                    <div className="button" onClick={handle}>x</div>



                    <div className="button" onClick={handle}>4</div>
                    <div className="button" onClick={handle}>5</div>
                    <div className="button" onClick={handle}>6</div>
                    <div className="button" onClick={handle}>-</div>


                    <div className="button" onClick={handle}>1</div>
                    <div className="button" onClick={handle}>2</div>
                    <div className="button" onClick={handle}>3</div>
                    <div className="button" onClick={handle}>+</div>


                    <div className="button" onClick={handle}>00</div>
                    <div className="button" onClick={handle}>0</div>
                    <div className="button" onClick={handle}>.</div>
                    <div id="equal" onClick={equal}>=</div>
                </div>
            </div>
        </>
    )
}
export default Calculator;