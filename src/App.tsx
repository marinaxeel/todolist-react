import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import { Todo } from './types'
import { loadTodos, saveTodos } from './utils/storage'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    setTodos(loadTodos())
  }, [])

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const addTodo = (text: string) => {
    if (!text.trim()) return

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
    }

    setTodos((prev) => [...prev, newTodo])
  }

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const markAsDone = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList
        todos={todos}
        onAdd={addTodo}
        onRemove={removeTodo}
        onMarkAsDone={markAsDone}
      />
    </div>
  )
}

export default App

