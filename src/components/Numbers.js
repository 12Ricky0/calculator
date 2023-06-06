import React, { useState, useRef } from "react";

function Calculator() {

    const [value, setValue] = useState("399,981");
    const inputRef = useRef();
    const operator = ["*", "+", "-", "/", "."];

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleNumberClick = (num) => {

        if (
            operator.includes(num) && operator.includes(value.slice(-1))

        ) {
            return;
        }

        else if (operator.includes(num) && value === "") {
            return;
        }

        setValue(value + num);

    };


    const handleDelete = () => {
        let input = inputRef.current.value;
        input = input.slice(0, -1);
        setValue(input);
    };

    const handleReset = () => {
        setValue("");
    }

    const calculate = () => {
        let input = inputRef.current.value;

        // if (input.includes("+")) {
        // return (num + value)
        // }
        const cal = eval(input);
        const formattedResult = formatNumberWithCommas(cal);

        setValue(formattedResult);

    };

    return (
        <div className="container">
            <div className="display-section">
                <input ref={inputRef} type="text" value={value} className="input-display" name="display" readOnly />
                {/* {value} */}
            </div>

            <section className="keys-container">
                <form>
                    <div className="contain">
                        <input className="numbers" type="button" value="7" onClick={() => handleNumberClick(7)} />
                        <input className="numbers" type="button" value="8" onClick={() => handleNumberClick(8)} />
                        <input className="numbers" type="button" value="9" onClick={() => handleNumberClick(9)} />
                        <input className=" delete" type="button" value="DEL" onClick={handleDelete} />
                    </div>
                    <div className="contain">
                        <input className="numbers" type="button" value="4" onClick={() => handleNumberClick(4)} />
                        <input className="numbers" type="button" value="5" onClick={() => handleNumberClick(5)} />
                        <input className="numbers" type="button" value="6" onClick={() => handleNumberClick(6)} />
                        <input className="numbers" type="button" value="+" onClick={() => handleNumberClick("+")} />
                    </div>
                    <div className="contain">
                        <input className="numbers" type="button" value="1" onClick={() => handleNumberClick(1)} />
                        <input className="numbers" type="button" value="2" onClick={() => handleNumberClick(2)} />
                        <input className="numbers" type="button" value="3" onClick={() => handleNumberClick(3)} />
                        <input className="numbers" type="button" value="-" onClick={() => handleNumberClick("-")} />
                    </div>
                    <div className="contain">
                        <input className="numbers" type="button" value="." onClick={() => handleNumberClick(".")} />
                        <input className="numbers" type="button" value="0" onClick={() => handleNumberClick(0)} />
                        <input className="numbers" type="button" value="/" onClick={() => handleNumberClick("/")} />
                        <input className="numbers" type="button" value="x" onClick={() => handleNumberClick("*")} />
                    </div>
                    <div>
                        <input className="function reset" type="button" value="RESET" onClick={handleReset} />
                        <input className="function equal" type="button" value="=" onClick={calculate} />
                    </div>
                </form>


            </section>
        </div>
    )
}

export default Calculator;