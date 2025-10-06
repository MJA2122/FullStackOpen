const PersonsList = ({ persons, deleteHandler }) => {
    return (
        <>
            {persons.map((person) =>
                <div key={person.id}>
                    <p>{person.id} - {person.name}: {person.phone} <button onClick={() => deleteHandler(person)}>delete</button></p>
                </div>
            )}
        </>
    )
}

export default PersonsList