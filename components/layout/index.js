import Navbar from '@components/Navbar'
import Sidebar from '@components/Sidebar'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.layout_wrapper}>
        <Sidebar />
        {children}
      </main>
    </>
  )
}

export default Layout
