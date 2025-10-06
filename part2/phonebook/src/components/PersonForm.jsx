const PersonForm = ({name, nameHandler, phone, phoneHandler, addHandler}) => {
    return(
        <form onSubmit={addHandler}>
            <div>
            name: <input value={name} onChange={(event) => nameHandler(event.target.value)} />
            </div>
            <div>
            phone: <input value={phone} onChange={(event) => phoneHandler(event.target.value)} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm