import logo from '../../assets/logo.svg'

import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo com um foguete e um texto escrito to do" />
    </header>
  )
}
