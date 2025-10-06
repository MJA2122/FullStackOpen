import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => {
        return res.data
    })
}

const addPerson = (newPerson) => {
    const req = axios.post(baseUrl, newPerson)
    return req.then(res => res.data)
}

const deletePerson = (id) => {
    const req = axios.delete(`${baseUrl}/${id.toString()}`)
    return req.then(res => res.data)
}

const updatePerson = (person) => {
    const req = axios.put(`${baseUrl}/${person.id}`, person)
    return req.then(res => res.data)
}

export default {
    getAll,
    addPerson,
    deletePerson,
    updatePerson
}