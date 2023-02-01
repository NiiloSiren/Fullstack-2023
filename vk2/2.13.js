import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])



  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [input, setInput] = useState('')

  const HandleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const HandleNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const Handleinput = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setInput(event.target.value)
  }
 
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.find(p => p.name === newName)) {
      alert(`${newName}is already added`)
      } else { 

         personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
      setNewNumber('')
        setNewName('')
    })
        
        
      }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <form> 
          Search:
          <input  value={input} onChange={Handleinput}/> <p></p>
          </form>
      </div>

      <AddPerson HandleName = {HandleName} HandleNumber = {HandleNumber} newName = {newName} newNumber = {newNumber} addPerson={addPerson} />

      <h2>Numbers</h2>
          
          < Filter persons={persons} input ={input} />
          
    </div>
  )

}

export default App
