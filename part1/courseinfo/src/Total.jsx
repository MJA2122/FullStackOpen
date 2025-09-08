const Total = (props) => {
    return (
        <>
            <p>Number of exercises: {props.parts.reduce((prev, current) => prev + current.exercises, 0)}</p>
        </>
    )
}

export default Total