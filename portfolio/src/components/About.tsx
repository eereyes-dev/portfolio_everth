import { useApp } from '@/context/AppContext'
import styles from './About.module.css'

export function About() {
  const { t } = useApp()

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <p className={styles.label}>{t.about.label}</p>
        <h2 className={styles.title}>{t.about.title}</h2>

        <div className={styles.grid}>
          <div className={styles.text}>
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className={styles.meta}>
            {t.about.meta.map((item, i) => (
              <li key={i} className={styles.metaItem}>
                <span className={styles.dot} />
                <span className={styles.metaLabel}>{item.label}</span>
                <span className={styles.metaValue}>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
