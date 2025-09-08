const Content = (props) => {
    return (
        <>
            {props.parts.map((item, index) =>
                <p key={index}>{item.name}: {item.exercises}</p>
            )}
        </>
    )
}

export default Content