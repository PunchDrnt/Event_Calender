import { useState } from 'react'
import { BiMenuAltLeft, BiFilterAlt } from 'react-icons/bi'
import styles from './Filter.module.css'

const Filter = () => {
  const [isStatus, setIsStatus] = useState(true)

  const handlerActive = () => {
    setIsStatus(true)
  }

  const handlerInActive = () => {
    setIsStatus(false)
  }

  return (
    <div className={styles.filter_container}>
      <div className={styles.filter_status}>
        <div
          className={
            isStatus
              ? `${styles.status_active} ${styles.active}`
              : styles.status_active
          }
          onClick={handlerActive}
        >
          Active
        </div>
        <div
          className={
            isStatus
              ? styles.status_active
              : `${styles.status_active} ${styles.active}`
          }
          onClick={handlerInActive}
        >
          Inactive
        </div>
      </div>
      <div className={styles.filter_btngroup}>
        <button className={styles.filterbtn}>
          <BiFilterAlt />
        </button>
        <button className={styles.altleftbtn}>
          <BiMenuAltLeft />
        </button>
      </div>
    </div>
  )
}

export default Filter
