import { useEffect, useState } from "react";
import axios from 'axios'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import Notification from "./components/Notification";
import notesService from './services/notes'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState()
  const [isError, setIsError] = useState()

  useEffect(() => {
    notesService.getAll().then(allPersons => {
      setPersons(allPersons)
    })
  }, [])

  const personsFiltered = search === ''
    ? persons
    : persons.filter(x => x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  const addName = (event) => {
    event.preventDefault()
    var exist = persons.find(x => x.name === newName)

    if (exist) {
      if (confirm(`${newName} is already added, you wanna update?`)) {
        notesService.updatePerson({ ...exist, name: newName, phone: newPhone }).then(res => {
          setPersons(persons.map(x => x.id === exist.id ? res : x))
        }).catch(() => {
          notificationHandler(`Information of ${newName} has already been removed`, true)
        })
      }
    } else {
      notesService.addPerson({ name: newName, phone: newPhone }).then(res => {
        setPersons(persons.concat(res))
        notificationHandler(`Added ${newName}`, true)
      })
    }
    setNewName('')
    setNewPhone('')
  }

  const deletePerson = (person) => {
    if (confirm(`delete ${person.name}?`)) {
      notesService.deletePerson(person.id).then(res => {
        setPersons(persons.filter(x => x.id !== res.id))
      })
    }
  }

  const notificationHandler = (msg, error) => {
    setNotification(msg)
    setIsError(error)
    setTimeout(() => {
      setNotification('')
    }, 3000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} error={isError} />
      <Filter filter={search} handler={setSearch} />
      <h2>Add new</h2>
      <PersonForm
        name={newName}
        nameHandler={setNewName}
        phone={newPhone}
        phoneHandler={setNewPhone}
        addHandler={addName} />
      <h2>Numbers</h2>
      <PersonsList persons={personsFiltered} deleteHandler={deletePerson} />
    </div>
  )
}

export default App
