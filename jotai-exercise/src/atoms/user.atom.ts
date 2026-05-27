import { atom } from 'jotai'

export const firstNameAtom = atom('')
export const lastNameAtom = atom('')
export const ageAtom = atom(0)
export const hobbiesAtom = atom<string[]>([])
