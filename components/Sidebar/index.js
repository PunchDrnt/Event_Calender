import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  BiBriefcaseAlt,
  BiGift,
  BiShareAlt,
  BiBarChartAlt2,
  BiBook,
  BiUser,
  BiTable,
  BiTrash,
} from 'react-icons/bi'
import { BsGear } from 'react-icons/bs'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  const router = useRouter()

  return (
    <aside className={styles.side_container}>
      <div className={styles.side_wrapper}>
        <ul className={styles.side_menu}>
          <li
            className={
              router.pathname === '/'
                ? `${styles.side_item} ${styles.active}`
                : styles.side_item
            }
          >
            <Link href="./">
              <BiBriefcaseAlt />
            </Link>
          </li>
          <div className={styles.underline}></div>
          <li
            className={
              router.pathname === '/Page2'
                ? `${styles.side_item} ${styles.active}`
                : styles.side_item
            }
          >
            <Link href="./Page2">
              <BiBook />
            </Link>
          </li>
          <li className={styles.side_item}>
            <Link href="./">
              <BiGift />
            </Link>
          </li>
          <li className={styles.side_item}>
            <Link href="./">
              <BiTrash />
            </Link>
          </li>
          <li className={styles.side_item}>
            <Link href="./">
              <BiShareAlt />
            </Link>
          </li>
          <div className={styles.underline}></div>
          <li className={styles.side_item}>
            <Link href="./">
              <BiBarChartAlt2 />
            </Link>
          </li>
          <li className={styles.side_item}>
            <Link href="./">
              <BiTable />
            </Link>
          </li>
          <div className={styles.underline}></div>
          <li className={styles.side_item}>
            <Link href="./">
              <BiUser />
            </Link>
          </li>
        </ul>
        <div className={styles.side_item}>
          <Link href="./">
            <BsGear />
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
