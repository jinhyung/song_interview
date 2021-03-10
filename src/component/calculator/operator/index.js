export const Operators = ({
                              onClickNumpad,
                              onClickEqualOperator
                          })  => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <button onClick={() => onClickNumpad('/')}>/</button>
            <button onClick={() => onClickNumpad('*')}>*</button>
            <button onClick={() => onClickNumpad('-')}>-</button>
            <button onClick={() => onClickNumpad('+')}>+</button>
            <button onClick={() => onClickEqualOperator()}>=</button>
        </div>
    )
}