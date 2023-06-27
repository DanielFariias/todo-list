import { Trash } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { ITodo } from '../TodoArea'

interface ITodoListProps {
  todos: ITodo[]
  onToggleTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export default function TodoList({
  todos,
  onToggleTask,
  onDeleteTask,
}: ITodoListProps) {
  function handleToggleCompleteTask(id: string) {
    onToggleTask(id)
  }

  function handleDeleteTask(event: any, id: string) {
    event.stopPropagation()
    onDeleteTask(id)
  }

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <button
          className={styles.todo}
          key={todo.id}
          type="button"
          onClick={() => handleToggleCompleteTask(todo.id)}
        >
          <div
            className={
              todo.isCompleted ? styles.checkboxChecked : styles.checkbox
            }
          />
          <span className={todo.isCompleted ? styles.todoCompleted : ''}>
            {todo.title}
          </span>

          <div
            className={styles.trash}
            onClick={(e) => handleDeleteTask(e, todo.id)}
            tabIndex={0}
          >
            <Trash size={20} />
          </div>
        </button>
      ))}
    </div>
  )
}
