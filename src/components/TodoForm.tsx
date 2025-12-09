import { useState } from 'react'
import './TodoForm.css'

interface TodoFormProps {
  onAdd: (text: string) => void
}

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input"
      />
      <button type="submit" className="todo-add-button">
        +
      </button>
    </form>
  )
}

export default TodoForm

