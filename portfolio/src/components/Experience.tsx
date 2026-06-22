import { useApp } from '@/context/AppContext'
import styles from './Experience.module.css'

export function Experience() {
  const { t } = useApp()

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.inner}>
        <p className={styles.label}>{t.experience.label}</p>
        <h2 className={styles.title}>{t.experience.title}</h2>

        <div className={styles.list}>
          {t.experience.items.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.header}>
                <div>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.role}>{item.role}</p>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
              <ul className={styles.bullets}>
                {item.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
