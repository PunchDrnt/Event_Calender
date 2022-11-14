import CalendarHeader from '@components/CalenderHeader.js'
import Month from '@components/Month.js'
import { AppContext } from 'context/ContextWrapper'
import { getMonth } from 'lib/getMonth'
import { useState, useEffect, useContext } from 'react'

import styles from './Calender.module.css'

const Calender = () => {
  const { monthIndex } = useContext(AppContext)
  const [currenMonth, setCurrentMonth] = useState(getMonth())

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <div className={styles.calender_container}>
      <CalendarHeader />
      <Month month={currenMonth} />
    </div>
  )
}

export default Calender
