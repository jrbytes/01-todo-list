import styles from './Tasks.module.css'

import clipboard from '../assets/clipboard.svg'

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
        <div className={styles.empty}>
          <img src={clipboard} alt="" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </div>
      </main>
    </>
  )
}
