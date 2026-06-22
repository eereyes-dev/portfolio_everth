import { useApp } from '@/context/AppContext'
import { contactLinks } from '@/data/translations'
import styles from './Contact.module.css'

export function Contact() {
  const { t } = useApp()

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <p className={styles.label}>{t.contact.label}</p>
        <h2 className={styles.title}>{t.contact.title}</h2>
        <p className={styles.description}>{t.contact.description}</p>
        <div className={styles.links}>
          {contactLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
