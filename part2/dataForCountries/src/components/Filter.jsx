const Filter = ({ search, searchHandler}) => {
    return (
        <form>
            <label>find countries: </label>
            <input value={search} onChange={searchHandler} />
        </form>
    )
}

export default Filter