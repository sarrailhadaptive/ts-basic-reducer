import { useEffect, useRef, useState } from 'react'
import List from './components/List'
import Form from './components/Form'
import { Sub } from './types'
import './App.css'

export interface AppState {
  subs: Sub[]
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    subMonths: 8,
    description: 'Dapelu is a software engineer'
  },
  {
    nick: 'jorge',
    avatar: 'https://i.pravatar.cc/150?u=jorge',
    subMonths: 8,
  }
]

export default function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }

  return(
  <div className='App' ref={divRef}>
    <h1>midu subs</h1>
    <List subs={subs}/>
    New subs: {newSubsNumber}
    <Form onNewSub={handleNewSub}/>
  </div>
  )
}
