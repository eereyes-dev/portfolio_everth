import { useApp } from '@/context/AppContext'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useApp()
  return (
    <footer className={styles.footer}>
      <span>{t.footer}</span>
    </footer>
  )
}
