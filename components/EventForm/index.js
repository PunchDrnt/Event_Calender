import { AppContext } from 'context/ContextWrapper'
import { useContext, useEffect, useState } from 'react'
import {
  BiAlignLeft,
  BiArrowFromBottom,
  BiFile,
  BiFilm,
  BiGridAlt,
  BiImageAlt,
  BiTask,
} from 'react-icons/bi'
import styles from './EventForm.module.css'
import DatePicker from '@components/DatePicker'
import dayjs from 'dayjs'

const EventForm = ({ project }) => {
  const { showEvent, setShowEvent, selectEvent, selectDate } =
    useContext(AppContext)

  const [topic, setTopic] = useState('')
  const [startDate, setStartDate] = useState(selectDate)
  const [endDate, setEndDate] = useState(selectDate)
  const [keyMsg, setKeyMsg] = useState('')
  const [description, setDescription] = useState('')
  const [contentFormat, setContentFormat] = useState('image')
  const [postType, setPostType] = useState('boost')

  // set Data
  useEffect(() => {
    setTopic(selectEvent ? selectEvent.topic : '')
    setStartDate(
      selectEvent ? dayjs(selectEvent.start).format('DD MMMM YYYY') : selectDate
    )
    setEndDate(
      selectEvent ? dayjs(selectEvent.end).format('DD MMMM YYYY') : selectDate
    )
    setKeyMsg(selectEvent ? selectEvent.keymsg : '')
    setDescription(selectEvent ? selectEvent.description : '')
    setContentFormat(selectEvent ? selectEvent.contentformat : 'image')
    setPostType(selectEvent ? selectEvent.posttype : 'boost')
  }, [showEvent])

  // get startDate and endDate from datepicker
  const getValue = (e) => {
    setStartDate(e)
    console.log('date2', e)
  }

  const getValue2 = (e) => {
    setEndDate(e)
    console.log('date2', e)
  }

  return (
    <div
      className={
        showEvent
          ? `${styles.event_container} ${styles.active}`
          : styles.event_container
      }
    >
      <div className={styles.blank} onClick={() => setShowEvent(false)} />
      <form className={styles.event_form}>
        <header className={styles.event_header}>
          <div className={styles.event_title}>
            <BiGridAlt />
            Create Content
          </div>
          <button
            type="submit"
            className={styles.event_contentBtn}
            onClick={() => setShowEvent(false)}
          >
            <div className={styles.event_icon}>
              <BiTask />
            </div>
            Create Content
          </button>
        </header>

        <div className={styles.select_box}>
          <select name="name" value={selectEvent?.name} required>
            {selectEvent && (
              <option value={selectEvent?.name} disabled hidden>
                {selectEvent?.name}
              </option>
            )}
            {project.map((item, idx) => (
              <option key={idx} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <span>Select Project</span>
        </div>

        <div className={styles.input_box}>
          <input
            type="text"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
          <span>Topic name</span>
        </div>

        <div className={styles.datepicker_box}>
          <DatePicker
            placeholder={'Due date & time'}
            isDate={startDate}
            isValue={getValue}
          />
          <DatePicker
            placeholder={'Publishing date & time'}
            isDate={endDate}
            isValue={getValue2}
          />
        </div>

        <div className={styles.input_box}>
          <input
            type="text"
            name="keymsg"
            value={keyMsg}
            onChange={(e) => setKeyMsg(e.target.value)}
            required
          />
          <span>Key message</span>
        </div>
        <div className={styles.input_box}>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <span>Description</span>
        </div>

        <div className={styles.btn_wrap}>
          <p>Content Format</p>
          <div className={styles.group_btn}>
            <button
              className={contentFormat === 'image' ? `${styles.active}` : ''}
              onClick={() => setContentFormat('image')}
            >
              <BiImageAlt />
              <span>Image</span>
            </button>
            <button
              className={contentFormat === 'video' ? `${styles.active}` : ''}
              onClick={() => setContentFormat('video')}
            >
              <BiFilm />
              <span>Video</span>
            </button>
            <button
              className={contentFormat === 'writing' ? `${styles.active}` : ''}
              onClick={() => setContentFormat('writing')}
            >
              <BiFile />
              <span>Writing</span>
            </button>
          </div>
        </div>

        <div className={styles.btn_wrap}>
          <p>Post type</p>
          <div className={styles.group_btn}>
            <button
              className={postType === 'boost' ? `${styles.active}` : ''}
              onClick={() => setPostType('boost')}
            >
              <BiArrowFromBottom />
              <span>Boost post</span>
            </button>
            <button
              className={postType === 'non-boost' ? `${styles.active}` : ''}
              onClick={() => setPostType('non-boost')}
            >
              <BiAlignLeft />
              <span>Non-boost post</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EventForm
