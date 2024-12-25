import { useState } from 'react';
import service from './service';

const PersonListing = ({ persons, setPersons }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleRemove = (personToRemove) => {
        if (window.confirm(`Remove ${personToRemove.name}?`) === false) {
            return
        }

        service.remove(personToRemove.id).then(() => {
            setPersons(persons.filter(person => person.id !== personToRemove.id))
        });
    }

    const filteredPersons = searchTerm
        ? persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : persons;

    return (
        <>
            <p>filter: <input value={searchTerm} onChange={handleSearchTermChange} /></p>
            {filteredPersons.map(person => (
                <div key={person.id}>
                    {person.name} {person.number} <button onClick={() => handleRemove(person)}>remove</button>
                </div>
            ))}
        </>
    );
};

export default PersonListing
