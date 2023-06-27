import styles from './styles.module.css'

export default function InfoTodo() {
  return (
    <div className={styles.infoTodo}>
      <span>
        Tarefas criadas <small>5</small>
      </span>

      <span>
        Concluídas <small>2 de 5</small>
      </span>
    </div>
  )
}
