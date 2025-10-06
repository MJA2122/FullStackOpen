const Filter = ({ search, handler }) => {
    return (
        <div>
          filter by name: <input value={search} onChange={(event) => handler(event.target.value)} />
        </div>
    )
}

export default Filter