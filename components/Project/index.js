import Filter from '@components/Filter'
import ProjectCard from '@components/ProjectCard'
import { AppContext } from 'context/ContextWrapper'
import { useContext } from 'react'
import { BiBriefcaseAlt, BiPlus } from 'react-icons/bi'

import styles from './Project.module.css'

const Project = ({ project }) => {
  const { isSearch } = useContext(AppContext)

  return (
    <div className={styles.project_container}>
      <div className={styles.project_header}>
        <div className={styles.project_title}>
          <div className={styles.header_icon}>
            <BiBriefcaseAlt />
          </div>
          <span>Project</span>
        </div>
        <button className={styles.project_createBtn}>
          <div className={styles.header_icon}>
            <BiPlus />
          </div>
          <span>Create Project</span>
        </button>
      </div>
      <Filter />
      {project
        .filter(
          (item) =>
            item.name.toLowerCase().includes(isSearch.toLowerCase()) ||
            item.client.toLowerCase().includes(isSearch.toLowerCase())
        )
        .map((item, idx) => (
          <ProjectCard key={idx} item={item} />
        ))}
    </div>
  )
}

export default Project
