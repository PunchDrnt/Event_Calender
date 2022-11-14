import { AppContext } from 'context/ContextWrapper'
import dayjs from 'dayjs'
import { useContext } from 'react'
import {
  BiPlus,
  BiCalendar,
  BiColumns,
  BiTask,
  BiChevronLeft,
  BiChevronRight,
} from 'react-icons/bi'
import styles from './CalenderHeader.module.css'

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex, setShowEvent, setSelectDate } =
    useContext(AppContext)

  // split month and year
  const text = dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')
  const YandM = text.split(' ')

  // Go to previous month
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1)
  }

  // Go to next month
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1)
  }

  // reset day to today
  const handleReset = () => {
    setMonthIndex(dayjs().month())
  }

  const handleEvent = () => {
    setShowEvent(true)
    setSelectDate('')
  }

  return (
    <div className={styles.header_container}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_wrap}>
          <div className={styles.header_title}>Content</div>
          <div className={styles.line} />
          <button className={`${styles.header_itemsBtn} ${styles.active}`}>
            <div className={styles.header_icon}>
              <BiCalendar />
            </div>
            Calendar
          </button>
          <button className={styles.header_itemsBtn}>
            <div className={styles.header_icon}>
              <BiColumns />
            </div>
            Board
          </button>
        </div>
        {/* Month header */}
        <div className={styles.header_wrap}>
          <div className={styles.header_text}>
            <div className={styles.header_icon}>
              <BiTask />
            </div>
            Submit for review
          </div>
          <button className={styles.header_contentBtn} onClick={handleEvent}>
            <div className={styles.header_icon}>
              <BiPlus />
            </div>
            Create Content
          </button>
        </div>
      </div>
      <div
        style={{ backgroundColor: 'rgba(103, 203, 255, 0.1)' }}
        className={styles.header_wrapper}
      >
        <div className={styles.header_wrap}>
          <div className={styles.year_month}>
            <span>{YandM[0]}</span>&nbsp;
            <span>{YandM[1]}</span>
          </div>
          <button className={styles.PrevAndNextBtn} onClick={handlePrevMonth}>
            <BiChevronLeft />
          </button>
          <button className={styles.PrevAndNextBtn} onClick={handleNextMonth}>
            <BiChevronRight />
          </button>
          <select className={styles.selector}>
            <option value="month">Month</option>
            <option value="year">Day</option>
          </select>
          <button className={styles.header_itemsBtn} onClick={handleReset}>
            Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default CalendarHeader
