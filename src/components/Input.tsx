import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, useCallback, useState } from 'react'

import styles from './Input.module.css'

interface Props {
  onAddNewTask: (content: string) => void
}

export function Input({ onAddNewTask }: Props) {
  const [content, setContent] = useState('')

  const handleAddTaskAndClearState = useCallback(() => {
    onAddNewTask(content)
    setContent('')
  }, [content])

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        ref={(input) => input && input.focus()}
        onChange={
          (e: ChangeEvent<HTMLInputElement>) => setContent(e.currentTarget.value)
        }
        value={content}
      />
      <button
        className={styles.button}
        onClick={handleAddTaskAndClearState}
      >
        Criar
        <PlusCircle size={24} />
      </button>
    </div>
  )
}
