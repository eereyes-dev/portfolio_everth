import { useApp } from '@/context/AppContext'
import styles from './Navbar.module.css'

export function Navbar() {
  const { t, theme, lang, toggleTheme, toggleLang } = useApp()

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.logo}>everth.dev</span>

        <ul className={styles.links}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.controls}>
          {/* Language toggle */}
          <div className={styles.toggleGroup}>
            <span className={styles.icon}>🇨🇷</span>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={lang === 'en'}
                onChange={toggleLang}
                aria-label="Toggle language"
              />
              <span className={styles.track} />
              <span className={styles.thumb} />
            </label>
            <span className={styles.icon}>🇺🇸</span>
          </div>

          <div className={styles.divider} />

          {/* Theme toggle */}
          <div className={styles.toggleGroup}>
            <span className={styles.icon}>🌙</span>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={theme === 'light'}
                onChange={toggleTheme}
                aria-label="Toggle theme"
              />
              <span className={styles.track} />
              <span className={styles.thumb} />
            </label>
            <span className={styles.icon}>☀️</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
