import { Trash } from '@phosphor-icons/react'
import styles from './styles.module.css'

export default function TodoList() {
  return (
    <div className={styles.todoList}>
      <button className={styles.todo}>
        <div className={styles.checkboxChecked} />
        <span className={styles.todoCompleted}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>

        <div className={styles.trash}>
          <Trash size={24} />
        </div>
      </button>

      <button className={styles.todo}>
        <div className={styles.checkbox} />
        <span>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>

        <div className={styles.trash}>
          <Trash size={24} />
        </div>
      </button>
    </div>
  )
}
