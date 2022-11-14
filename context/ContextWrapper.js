import dayjs from 'dayjs'
import { useState, createContext, useEffect } from 'react'

export const AppContext = createContext()

const ContextWrapper = ({ children }) => {
  const [isSearch, setIsSearch] = useState('')
  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [showEvent, setShowEvent] = useState(false)
  const [saveEvents, setSaveEvents] = useState([])
  const [selectEvent, setSelectEvent] = useState(null)
  const [selectDate, setSelectDate] = useState('')

  // When EventForm close clear data in form
  useEffect(() => {
    if (!showEvent) {
      setSelectEvent(null)
    }
  }, [showEvent])

  return (
    <AppContext.Provider
      value={{
        isSearch,
        setIsSearch,
        monthIndex,
        setMonthIndex,
        showEvent,
        setShowEvent,
        saveEvents,
        setSaveEvents,
        selectEvent,
        setSelectEvent,
        selectDate,
        setSelectDate,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default ContextWrapper
