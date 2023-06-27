import NewTodo from '../NewTodo'
import InfoTodo from '../InfoTodo'
import TodoList from '../TodoList'

import styles from './styles.module.css'
import { useState } from 'react'

export interface ITodo {
  id: string
  title: string
  isCompleted: boolean
}

export default function TodoArea() {
  const [todos, setTodos] = useState<ITodo[]>([])

  function handleAddNewTodo(newTodo: ITodo) {
    setTodos((prevState) => [...prevState, newTodo])
  }

  console.log(todos)
  return (
    <main className={styles.wrapper}>
      <NewTodo onNewTodo={handleAddNewTodo} />

      <InfoTodo />

      <TodoList />
    </main>
  )
}
