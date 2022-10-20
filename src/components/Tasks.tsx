import { v4 } from 'uuid'

import clipboard from '../assets/clipboard.svg'
import check from '../assets/check.svg'
import checked from '../assets/checked.svg'
import styles from './Tasks.module.css'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { Input } from './Input'

type TaskProps = {
  id: string
  content: string
  done: boolean
}

export function Tasks() {
  const [task, setTask] = useState<TaskProps[]>([])

  function handleAddNewTask(content: string) {
    if (content.length > 0) {
      setTask([{ id: v4(), content, done: false }, ...task])
    }
  }

  function toggleCheckedTask(id: string) {
    setTask(task.map(task => task.id === id ? { ...task, done: !task.done } : task))
  }

  function handleDeleteTask(id: string) {
    setTask(task.filter(task => task.id !== id))
  }

  const tasksTotal = task.length
  const tasksCompleted = task.filter(task => task.done).length

  const hasTasks = task.length > 0

  return (
    <>
      <Input onAddNewTask={handleAddNewTask} />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.tasksCreated}>
            Tarefas criadas
            <span>{tasksTotal}</span>
          </div>
          <div className={styles.tasksFinished}>
            Concluídas
            <span>{tasksCompleted}</span>
          </div>
        </header>
      </div>
      <main className={styles.main}>
        {!hasTasks ? (
          <div className={styles.empty}>
            <img src={clipboard} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </div>
        ) : (
          <div className={styles.tasks}>
            {task.map((task) => (
              <div
                key={task.id}
                className={`${styles.task} ${task.done ? styles.taskCompleted : ''}`}
              >
                <img
                  src={task.done ? checked : check}
                  onClick={() => toggleCheckedTask(task.id)}
                />
                <p>{task.content}</p>
                <Trash size={20} onClick={() => handleDeleteTask(task.id)} />
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
