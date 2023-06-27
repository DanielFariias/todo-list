import { ITodo } from '../TodoArea'
import styles from './styles.module.css'

interface IInfoTodo {
  todos: ITodo[]
}

export default function InfoTodo({ todos }: IInfoTodo) {
  const hasTodos = todos.length > 0

  const todosCompleted = todos.filter((todo) => todo.isCompleted)

  return (
    <div className={styles.infoTodo}>
      <span>
        Tarefas criadas <small>{todos.length}</small>
      </span>

      <span>
        Concluídas
        <small>
          {hasTodos ? `${todosCompleted.length} de ${todos.length}` : 0}
        </small>
      </span>
    </div>
  )
}
