import { Todo } from '../types'
import './TodoItem.css'

interface TodoItemProps {
  todo: Todo
  onRemove: (id: string) => void
  onMarkAsDone: (id: string) => void
}

const TodoItem = ({ todo, onRemove, onMarkAsDone }: TodoItemProps) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onMarkAsDone(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button
        onClick={() => onRemove(todo.id)}
        className="todo-remove-button"
      >
        -
      </button>
    </li>
  )
}

export default TodoItem

