const Matches = ({ matches, matchHandler }) => {

    if (matches.length > 10) {
        return (
            <p>too many matches</p>
        )
    } else if (matches.length === 1) {
        return (<></>)
    } else {
        return (
            <>
                {matches.map(x =>
                    <p key={x.cca3}>{x.name.common} <button onClick={() => matchHandler(x)}>show info</button></p>
                )}
            </>
        )
    }
}

export default Matches