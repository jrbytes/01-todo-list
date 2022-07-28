import styles from './Tasks.module.css'

import clipboard from '../assets/clipboard.svg'
import check from '../assets/check.svg'
import checked from '../assets/checked.svg'
import { Trash } from 'phosphor-react'

export function Tasks() {
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.tasksCreated}>
            Tarefas criadas
            <span>0</span>
          </div>
          <div className={styles.tasksFinished}>
            Concluídas
            <span>0</span>
          </div>
        </header>
      </div>
      <main className={styles.main}>
        {/* <div className={styles.empty}>
          <img src={clipboard} alt="" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </div> */}

        <div className={styles.tasks}>
          <div className={styles.task}>
            <img src={check} alt="" />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={20} />
          </div>
          <div className={`${styles.task} ${styles.taskCompleted}`}>
            <img src={checked} />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={20} />
          </div>
        </div>
      </main>
    </>
  )
}
