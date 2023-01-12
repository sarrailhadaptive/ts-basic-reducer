import React, { useReducer, useState } from 'react'
import { Sub } from '../types'
import useNewSubForm from '../hooks/useNewSubForm'


interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub(inputValues)
    dispatch({ type: 'clear'})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
    const {name, value} = e.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }

  const handleClear = () => dispatch({ type: 'clear'})

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder='nick' />
        <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder='subMonths' />
        <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder='avatar' />
        <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder='description' />
        <button type="button" onClick={handleClear}>Clear the form</button>
        <button type="submit">Save new sub!</button>
      </form>
    </>
  )
}

export default Form