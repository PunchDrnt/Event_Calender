import styles from './Day.module.css'
import dayjs from 'dayjs'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from 'context/ContextWrapper'

const Day = ({ day }) => {
  const {
    monthIndex,
    saveEvents,
    setSelectEvent,
    setShowEvent,
    setSelectDate,
  } = useContext(AppContext)
  const [dayEvents, setDayEvents] = useState([])

  // find today is event
  useEffect(() => {
    const events = saveEvents.filter(
      (evt) => dayjs(evt.start).format('YY-MM-DD') === day.format('YY-MM-DD')
    )
    setDayEvents(events)
  }, [saveEvents, day])

  // Effect
  const getToday = () => {
    return dayjs().format('DD-MM-YY') === day.format('DD-MM-YY')
      ? `${styles.day_text} ${styles.active}`
      : `${styles.day_text}`
  }

  const getNotCurrentMonth = () => {
    return dayjs(new Date(dayjs().year(), monthIndex)).format('MM-YY') !==
      day.format('MM-YY')
      ? `${styles.day_container} ${styles.active}`
      : `${styles.day_container}`
  }

  // Show form
  const handleOnClick = () => {
    setShowEvent(true)
    setSelectDate(day.format('DD MMMM YYYY'))
  }

  return (
    <div className={getNotCurrentMonth()} onClick={handleOnClick}>
      <span className={getToday()}>{day.format('D')}</span>
      {dayEvents.map((event, idx) => (
        <div
          style={{ backgroundColor: `${event.color}` }}
          className={styles.day_event}
          key={idx}
          onClick={() => setSelectEvent(event)}
        >
          <div className={styles.day_label}>P</div>
          <span>#{event.id}</span>
          <span>Topic {event.topic}</span>
        </div>
      ))}
    </div>
  )
}

export default Day
