import NewTodo from '../NewTodo'
import InfoTodo from '../InfoTodo'
import TodoList from '../TodoList'

import styles from './styles.module.css'
import useLocalStorage from '../../hooks/useLocalStorage'

export interface ITodo {
  id: string
  title: string
  isCompleted: boolean
}

export default function TodoArea() {
  const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', [])

  function handleAddNewTodo(newTodo: ITodo) {
    setTodos((prevState) => [...prevState, newTodo])
  }

  function handleToggleCompleteTask(id: string) {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        }

        return todo
      })
    })
  }

  function handleDeleteTask(id: string) {
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        if (todo.id === id) {
          return false
        }

        return true
      })
    })
  }

  return (
    <main className={styles.wrapper}>
      <NewTodo onNewTodo={handleAddNewTodo} />

      <InfoTodo todos={todos} />

      <TodoList
        todos={todos}
        onToggleTask={handleToggleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  )
}
