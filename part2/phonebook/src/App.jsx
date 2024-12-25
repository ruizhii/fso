import { useState, useEffect } from 'react'
import service from './service'
import PersonListing from './PersonListing'
import UpsertPersonForm from './UpsertPersonForm'

const App = () => {
    const [persons, setPersons] = useState([]) 

    useEffect(() => {
        service
            .getAll()
            .then(res => setPersons(res));
    }, [])

    return (
        <div>
            <h1>Phonebook</h1>
            <UpsertPersonForm persons={persons} setPersons={setPersons} />

            <h2>Entries</h2>
            <PersonListing persons={persons} setPersons={setPersons} />
        </div>
    )
}

export default App
