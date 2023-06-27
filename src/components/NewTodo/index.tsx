import { PlusCircle } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid'

import styles from './styles.module.css'
import { ITodo } from '../TodoArea'
import { ChangeEvent, FormEvent, useState } from 'react'

interface INewTodoProps {
  onNewTodo: (newTodo: ITodo) => void
}

export default function NewTodo({ onNewTodo }: INewTodoProps) {
  const [todoText, setTodoText] = useState('')

  function handleChangeTodoText(event: ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value)
  }

  function handleAddNewTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newTodo: ITodo = {
      id: uuidv4(),
      title: todoText,
      isCompleted: false,
    }

    onNewTodo?.(newTodo)
    setTodoText('')
  }

  return (
    <form className={styles.form} onSubmit={handleAddNewTodo}>
      <input
        type="text"
        value={todoText}
        onChange={handleChangeTodoText}
        placeholder="Adicione uma nova tarefa"
      />

      <button>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  )
}
