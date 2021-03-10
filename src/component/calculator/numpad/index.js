export const Numpad = ({
                           onClickNumpad,
                           clearInput
                       }) => {

    return (
        <div>
            {new Array(3).fill(undefined).map((numpadRow, numpadRowIndex) => {
                return (
                    <div style={{
                        display: 'flex',
                    }}>
                        <button onClick={() => onClickNumpad(numpadRowIndex + 1)}>{numpadRowIndex + 1}</button>
                        <button onClick={() => onClickNumpad(numpadRowIndex + 2)}>{numpadRowIndex + 2}</button>
                        <button onClick={() => onClickNumpad(numpadRowIndex + 3)}>{numpadRowIndex + 3}</button>
                    </div>
                )
            })}
            <div style={{
                display: 'flex',
            }}>
                <button onClick={() => onClickNumpad(0)}>0</button>
                <button onClick={() => onClickNumpad('.')}>.</button>
                <button onClick={clearInput}>AC</button>
            </div>

        </div>
    )
}