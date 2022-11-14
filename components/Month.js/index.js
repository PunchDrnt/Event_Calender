import Day from '@components/Day.js'
import React from 'react'
import styles from './Month.module.css'

const Month = ({ month }) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className={styles.month_container}>
      <div className={styles.month_header}>
        {days.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
      <div className={styles.month_wrapper}>
        {month.map((row, idx) => (
          <React.Fragment key={idx}>
            {row.map((day, idx) => (
              <Day key={idx} day={day} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Month
