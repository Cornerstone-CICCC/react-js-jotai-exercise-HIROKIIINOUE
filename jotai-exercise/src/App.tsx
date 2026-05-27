import { useState } from 'react'
import type { FormEvent } from 'react'
import { useSetAtom } from 'jotai'
import {
  ageAtom,
  firstNameAtom,
  hobbiesAtom,
  lastNameAtom,
} from './atoms/user.atom'
import { User } from './User'
import './App.css'

function App() {
  const setFirstName = useSetAtom(firstNameAtom)
  const setLastName = useSetAtom(lastNameAtom)
  const setAge = useSetAtom(ageAtom)
  const setHobbies = useSetAtom(hobbiesAtom)
  const [firstName, setFirstNameInput] = useState('')
  const [lastName, setLastNameInput] = useState('')
  const [age, setAgeInput] = useState('')
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([])

  const hobbyOptions = ['Reading', 'Music', 'Sports']

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFirstName(firstName)
    setLastName(lastName)
    setAge(Number(age) || 0)
    setHobbies(selectedHobbies)
  }

  const handleHobbyChange = (hobby: string) => {
    setSelectedHobbies((current) =>
      current.includes(hobby)
        ? current.filter((item) => item !== hobby)
        : [...current, hobby],
    )
  }

  return (
    <main className="app">
      <h1>Jotai User Form</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstNameInput(event.target.value)}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastNameInput(event.target.value)}
          />
        </label>

        <label>
          Age
          <input
            type="number"
            value={age}
            onChange={(event) => setAgeInput(event.target.value)}
          />
        </label>

        <fieldset>
          <legend>Hobbies</legend>
          {hobbyOptions.map((hobby) => (
            <label key={hobby} className="checkbox">
              <input
                type="checkbox"
                checked={selectedHobbies.includes(hobby)}
                onChange={() => handleHobbyChange(hobby)}
              />
              {hobby}
            </label>
          ))}
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      <User />
    </main>
  )
}

export default App
