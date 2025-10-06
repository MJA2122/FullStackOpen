const Content = ({ parts }) => {
    return (
        <>
            {parts.map((item) =>
                <p key={item.id}>{item.name}: {item.exercises}</p>
            )}

            <b>Number of exercises: {parts.reduce((prev, current) => prev + current.exercises, 0)}</b>
        </>
    )
}

export default Content