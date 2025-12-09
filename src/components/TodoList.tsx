import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { Todo } from '../types'
import './TodoList.css'

interface TodoListProps {
  todos: Todo[]
  onAdd: (text: string) => void
  onRemove: (id: string) => void
  onMarkAsDone: (id: string) => void
}

const TodoList = ({ todos, onAdd, onRemove, onMarkAsDone }: TodoListProps) => {
  return (
    <div className="todo-list">
      <TodoForm onAdd={onAdd} />

      <ul className="todo-items">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onMarkAsDone={onMarkAsDone}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList

