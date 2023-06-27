import NewTodo from '../NewTodo'
import InfoTodo from '../InfoTodo'
import TodoList from '../TodoList'

import styles from './styles.module.css'

export default function TodoArea() {
  return (
    <main className={styles.wrapper}>
      <NewTodo />

      <InfoTodo />

      <TodoList />
    </main>
  )
}
