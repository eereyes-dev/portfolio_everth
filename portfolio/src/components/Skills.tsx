import { useApp } from '@/context/AppContext'
import styles from './Skills.module.css'

export function Skills() {
  const { t } = useApp()

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <p className={styles.label}>{t.skills.label}</p>
        <h2 className={styles.title}>{t.skills.title}</h2>

        <div className={styles.grid}>
          {t.skills.categories.map((cat, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <div className={styles.tags}>
                {cat.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
