const StatisticLine = ({ name, value }) => {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{value}</td>
            </tr>
        </>
    )
}

export default StatisticLine