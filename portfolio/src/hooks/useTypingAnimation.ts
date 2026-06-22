import { useState, useEffect, useRef } from 'react'

export function useTypingAnimation(phrases: string[]) {
  const [displayed, setDisplayed] = useState('')
  const stateRef = useRef({ idx: 0, char: 0, deleting: false, wait: 0 })
  const phrasesRef = useRef(phrases)

  // Keep phrasesRef in sync and reset on phrase change
  useEffect(() => {
    phrasesRef.current = phrases
    stateRef.current = { idx: 0, char: 0, deleting: false, wait: 0 }
    setDisplayed('')
  }, [phrases])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const step = () => {
      const s = stateRef.current
      const phrase = phrasesRef.current[s.idx]

      if (s.wait > 0) {
        s.wait--
        timer = setTimeout(step, 80)
        return
      }

      if (!s.deleting) {
        const next = phrase.slice(0, s.char + 1)
        setDisplayed(next)
        s.char++
        if (s.char === phrase.length) { s.deleting = true; s.wait = 22 }
        timer = setTimeout(step, 90)
      } else {
        const next = phrase.slice(0, s.char - 1)
        setDisplayed(next)
        s.char--
        if (s.char === 0) {
          s.deleting = false
          s.idx = (s.idx + 1) % phrasesRef.current.length
          s.wait = 5
        }
        timer = setTimeout(step, 50)
      }
    }

    timer = setTimeout(step, 120)
    return () => clearTimeout(timer)
  }, [phrases])

  return displayed
}
