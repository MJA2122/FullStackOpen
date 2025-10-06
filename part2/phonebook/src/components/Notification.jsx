const Notification = ({ message, error }) => {
    const notificationStyle = {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'green',
        color: 'green',
        paddingLeft: 10
    }

    const errorStyle = {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'red',
        color: 'red',
        paddingLeft: 10
    }

    if (!message) return null

    return (
        <div style={error === true ? errorStyle : notificationStyle}>
            <p>{message}</p>
        </div>
    )
}

export default Notification