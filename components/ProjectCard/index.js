import { useState } from 'react'
import { BiGridAlt, BiShareAlt } from 'react-icons/bi'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa'
import { RiShareBoxLine } from 'react-icons/ri'
import styles from './Project.module.css'

const ProjectCard = ({ item }) => {
  const [isActive, setIsActive] = useState(false)

  // Effect
  const activeClass = () => {
    return isActive
      ? `${styles.card_wrapper} ${styles.active}`
      : styles.card_wrapper
  }

  return (
    <div className={styles.card_container}>
      <div className={activeClass()} onClick={() => setIsActive(!isActive)}>
        <div className={styles.card_header}>
          <div>
            <p className={styles.card_name}>{item.name}</p>
            <div className={styles.card_organisation}>{item.client}</div>
          </div>
          <div>
            <RiShareBoxLine />
          </div>
        </div>
        <div className={styles.card_footer}>
          <div className={styles.icon_group}>
            <BiGridAlt />
            2/5
            <div className={styles.slash_line} />
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaInstagramSquare />
            <BiShareAlt />
          </div>
          <div className={styles.card_image}>
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
