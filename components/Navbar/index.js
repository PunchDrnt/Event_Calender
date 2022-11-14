import styles from './Navbar.module.css'
import { BsSearch, BsBell, BsChevronDown } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { useContext } from 'react'
import { AppContext } from 'context/ContextWrapper'

const Navbar = () => {
  const { setIsSearch } = useContext(AppContext)

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_wrapper}>
        <div className={styles.bar_icon}>
          <FaBars />
        </div>
        <div className={styles.nav_logo}>
          <span>K</span>
          <span>r</span>
          <span>o</span>
          <span>s</span>
          <span>s</span>
        </div>
        <div className={styles.search_wrap}>
          <div className={styles.search_bar}>
            <div className={styles.search_icon}>
              <BsSearch />
            </div>
            <input
              className={styles.search}
              type="search"
              placeholder="Search project, content or client"
              onChange={(e) => setIsSearch(e.target.value)}
            />
          </div>
          <div className={styles.bell_icon}>
            <BsBell />
          </div>
          <div className={styles.nav_profile}>
            <div className={styles.profile_image} />
            <div>
              <p className={styles.profile_name}>Austin Anderson</p>
              <p className={styles.profile_position}>Account Manager</p>
            </div>
          </div>
          <div className={styles.arrow_icon}>
            <BsChevronDown />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
