import { PlusCircle, Trash } from '@phosphor-icons/react'
import styles from './styles.module.css'

export default function TodoArea() {
  return (
    <main className={styles.wrapper}>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button>
          Criar <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.infoTodo}>
        <span>
          Tarefas criadas <small>5</small>
        </span>

        <span>
          Concluídas <small>2 de 5</small>
        </span>
      </div>
      <div className={styles.todoList}>
        <button className={styles.todo}>
          <div className={styles.checkboxChecked} />
          <span className={styles.todoCompleted}>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </span>

          <div className={styles.trash}>
            <Trash size={24} />
          </div>
        </button>

        <button className={styles.todo}>
          <div className={styles.checkbox} />
          <span>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </span>

          <div className={styles.trash}>
            <Trash size={24} />
          </div>
        </button>
      </div>
    </main>
  )
}
