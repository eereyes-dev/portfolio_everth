import { useApp } from '@/context/AppContext'
import { useTypingAnimation } from '@/hooks/useTypingAnimation'
import styles from './Hero.module.css'

export function Hero() {
  const { t } = useApp()
  const typed = useTypingAnimation(t.hero.typedPhrases)

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
        <h1 className={styles.name}>
          Everth<br />
          <span>Reyes Espinoza</span>
        </h1>
        <div className={styles.terminalLine}>
          <span className={styles.prompt}>$ </span>
          <span>{typed}</span>
          <span className={styles.cursor} />
        </div>
        <p className={styles.description}>{t.hero.description}</p>
        <div className={styles.btnRow}>
          <a href="#projects" className={styles.btnPrimary}>{t.hero.btnProjects}</a>
          <a href="#contact" className={styles.btnGhost}>{t.hero.btnContact}</a>
        </div>
      </div>
    </section>
  )
}
