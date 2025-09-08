const Button = ({ onClickFn, text }) => {
    return (
        <>
            <button onClick={onClickFn}>{text}</button>
        </>
    )
}

export default Button