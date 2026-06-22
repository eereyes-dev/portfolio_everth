import { useApp } from '@/context/AppContext'
import styles from './Projects.module.css'

export function Projects() {
  const { t } = useApp()

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <p className={styles.label}>{t.projects.label}</p>
        <h2 className={styles.title}>{t.projects.title}</h2>

        <div className={styles.grid}>
          {t.projects.items.map((project, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.stack}>
                {project.stack.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {t.projects.viewOnGithub}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
