import { useState } from 'react';
import service from './service';

const UpsertPersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const existingPerson = persons.find(person => person.name === newName);

        if (existingPerson) {
            if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`) === false) {
                return
            }

            const personToUpdate = {
                ...existingPerson,
                number: newNumber,
            }

            service.update(personToUpdate).then(updatedPerson => {
                setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
                resetInputFields()
            })
        } else {
            const person = {
                id: `${persons.length + 1}`,
                name: newName,
                number: newNumber,
            };

            service.add(person).then(newPerson => {
                setPersons(persons.concat(newPerson))
                resetInputFields()
            });
        }
    };

    const resetInputFields = () => {
        setNewName('');
        setNewNumber('');
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>

    );
};

export default UpsertPersonForm
