import dayjs from 'dayjs'

export const getMonth = (month = dayjs().month(), year = dayjs().year()) => {
  month = Math.floor(month) // Accepts numbers from 0 to 11. If the range is exceeded, it will bubble up to the year
  // const year = dayjs().year() // Gets the year.
  const firstDayOftheMonth = dayjs(new Date(year, month, 1)).day() // Get first Day Of the Month
  let DayCount = 0 - firstDayOftheMonth // first Day in Sunday
  // create 6 row and 7 column to make calender
  const calender = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      DayCount++
      return dayjs(new Date(year, month, DayCount))
    })
  })
  return calender
}
