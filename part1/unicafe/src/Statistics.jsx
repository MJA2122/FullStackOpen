import StatisticLine from "./StatisticLine"

const Statistics = ({ bad, neutral, good }) => {
    var all = bad + neutral + good
    var avg = bad * (-1) + good
    var positive = all > 0
        ? good / (bad + neutral + good)
        : 0

    if (all > 0) {
        return (
            <>
                <h2>Statistics</h2>
                <table>
                    <tbody>
                        <StatisticLine name='bad' value={bad} />
                        <StatisticLine name='neutral' value={neutral} />
                        <StatisticLine name='good' value={good} />
                        <StatisticLine name='all' value={all} />
                        <StatisticLine name='average' value={avg} />
                        <StatisticLine name='positive' value={positive} />
                    </tbody>
                </table>
            </>
        )
    } else {
        return (
            <>
                <p>no feedback given</p>
            </>
        )
    }
}

export default Statistics