import {Result} from "./result";
import {Numpad} from "./numpad";
import {Operators} from "./operator";
import React, {useCallback, useState} from "react";

function Calculator() {
    const [input, setInput] = useState('');
    const onClickNumpad = useCallback((number) => {
        setInput(input + `${number}`);
    }, [input])

    const onClickEqualOperator = useCallback((operator) => {
        setInput(`${eval(input)}`);
    }, [input])

    const clearInput = useCallback(() => setInput(''), []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center'
        }}>
            <Result input={input} />
            <div style={{
                display: 'flex',
            }}>
                <Numpad
                    onClickNumpad={onClickNumpad}
                    clearInput={clearInput} />
                <Operators
                    onClickNumpad={onClickNumpad}
                    onClickEqualOperator={onClickEqualOperator}
                />
            </div>
        </div>
    )
}

export default Calculator;