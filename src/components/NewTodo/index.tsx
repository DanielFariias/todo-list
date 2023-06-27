import { PlusCircle } from '@phosphor-icons/react'

import styles from './styles.module.css'

export default function NewTodo() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  )
}
