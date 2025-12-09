import { Todo } from '../types'

const STORAGE_KEY = 'todos'

export const loadTodos = (): Todo[] => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return []
  
  try {
    return JSON.parse(stored)
  } catch {
    return []
  }
}

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

