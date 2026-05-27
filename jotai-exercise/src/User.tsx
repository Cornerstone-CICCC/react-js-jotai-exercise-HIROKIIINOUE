import { useAtomValue } from 'jotai'
import {
  ageAtom,
  firstNameAtom,
  hobbiesAtom,
  lastNameAtom,
} from './atoms/user.atom'

export function User() {
  const firstName = useAtomValue(firstNameAtom)
  const lastName = useAtomValue(lastNameAtom)
  const age = useAtomValue(ageAtom)
  const hobbies = useAtomValue(hobbiesAtom)

  return (
    <section className="user">
      <h2>User</h2>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Age: {age}</div>
      <div>Hobbies: {hobbies.join(', ') || 'None'}</div>
    </section>
  )
}
