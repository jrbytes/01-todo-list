import { PlusCircle } from 'phosphor-react'

import styles from './Input.module.css'

export function Input() {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
      />
      <button className={styles.button}>
        Criar
        <PlusCircle size={24} />
      </button>
    </div>
  )
}
