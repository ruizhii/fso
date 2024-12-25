import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = async () => {
    try {
        const res = await axios.get(url)
        return res.data
    } catch {
        console.error('unable to get persons from db')
    }
}

const add = async (person) => {
    try {
        const res = await axios.post(url, person)
        return res.data
    } catch {
        console.error('unable to add new person to db')
    }
}

const update = async (person) => {
    try {
        const res = await axios.put(`${url}/${person.id}`, person)
        return res.data
    } catch {
        console.error('unable to update person in db')
    }
}

const remove = async (id) => {
    try {
        const res = await axios.delete(`${url}/${id}`)
        return res.data
    } catch {
        console.error('unable to remove person from db')
    }
}

export default {
    getAll,
    add,
    update,
    remove,
}

