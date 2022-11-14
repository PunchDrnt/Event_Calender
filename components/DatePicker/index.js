import React, { useEffect, useRef, useState } from 'react'
import styles from './Datepicker.module.css'
import { getMonth } from 'lib/getMonth'
import dayjs from 'dayjs'
import { BsCalendar4Range, BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const DatePicker = ({ placeholder, isDate, isValue }) => {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [dpMonth, setDpMonth] = useState(getMonth())
  const [dpMonthIndex, setDpMonthIndex] = useState(dayjs().month())
  const [selectDate, setSelectDate] = useState(null)
  const [isActive, setIsActive] = useState(false)

  const ref = useRef(null)
  const inputRef = useRef()

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // Main fuction
  // Close when click background
  useEffect(() => {
    window.addEventListener('click', addBackDrop)

    return () => {
      window.removeEventListener('click', addBackDrop)
    }
  }, [])

  // make calender
  useEffect(() => {
    setDpMonth(getMonth(dpMonthIndex, dayjs(selectDate || new Date()).year()))
  }, [dpMonthIndex])

  // show calender with select Date
  useEffect(() => {
    if (!showDatePicker) {
      setDpMonthIndex(dayjs().month())
    }
    if (selectDate) {
      setDpMonthIndex(dayjs(selectDate || new Date()).month())
    }
  }, [showDatePicker])

  // get data from parent component
  useEffect(() => {
    if (isDate) {
      inputRef.current.value = dayjs(isDate).format('DD MMMM YYYY')
      setIsActive(true)
    } else {
      inputRef.current.value = null
      setIsActive(false)
    }
    setSelectDate(inputRef.current.value)
    isValue = inputRef.current.value
  }, [isDate])

  const addBackDrop = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowDatePicker(false)
    }
  }

  // get data from datepicker calender
  const setDateToInput = (day) => {
    inputRef.current.value = day.format('DD MMMM YYYY')
    setSelectDate(inputRef.current.value)
    setIsActive(true)
    setShowDatePicker(false)
    isValue = inputRef.current.value
  }

  // Style

  const getNotCurrentMonth = (e) => {
    return dayjs(
      new Date(dayjs(selectDate || new Date()).year(), dpMonthIndex)
    ).format('MM-YY') !== e.format('MM-YY')
      ? `${styles.c_day} ${styles.active}`
      : `${styles.c_day}`
  }

  const getCurrentDay = (e) => {
    return dayjs().format('DD-MM-YY') === e.format('DD-MM-YY')
      ? `${styles.active}`
      : ``
  }

  const getSelectDay = (e) => {
    return dayjs(selectDate).format('DD-MM-YY') === e.format('DD-MM-YY')
      ? `${styles.highlight}`
      : ``
  }

  return (
    <div className={styles.datepicker} ref={ref}>
      <div className={styles.dp_input} onClick={() => setShowDatePicker(true)}>
        <div>
          <input type="text" ref={inputRef} readOnly disabled />
          <BsCalendar4Range />
        </div>
        <span className={isActive || showDatePicker ? styles.active : ''}>
          {placeholder}
        </span>
      </div>

      {showDatePicker && (
        <div className={styles.dpc_container}>
          <div className={styles.dpc_header}>
            <div
              className={styles.dpc_button}
              onClick={() => setDpMonthIndex(dpMonthIndex - 1)}
            >
              <BsChevronLeft />
            </div>
            <div className={styles.dpc_head}>
              <div>
                {dayjs(new Date(dayjs().year(), dpMonthIndex)).format('MMMM')}
              </div>
              <div>
                {dayjs(
                  new Date(dayjs(selectDate || new Date()).year(), dpMonthIndex)
                ).format('YYYY')}
              </div>
            </div>
            <div
              className={styles.dpc_button}
              onClick={() => setDpMonthIndex(dpMonthIndex + 1)}
            >
              <BsChevronRight />
            </div>
          </div>

          <div className={styles.dpc_body}>
            <div className={styles.c_container}>
              {days.map((item, idx) => (
                <div className={styles.c_head} key={idx}>
                  {item}
                </div>
              ))}
              {dpMonth.map((month, idx) => (
                <React.Fragment key={idx}>
                  {month.map((day, idx) => (
                    <div key={idx} className={getNotCurrentMonth(day)}>
                      <div
                        className={`${getCurrentDay(day)} ${getSelectDay(day)}`}
                        onClick={() => setDateToInput(day)}
                      >
                        {day.format('D')}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DatePicker
