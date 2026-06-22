import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Theme, Lang } from '@/types'
import { translations } from '@/data/translations'

interface AppContextValue {
  theme: Theme
  lang: Lang
  t: (typeof translations)['es']
  toggleTheme: () => void
  toggleLang: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  const toggleLang = () => setLang(prev => (prev === 'es' ? 'en' : 'es'))

  return (
    <AppContext.Provider value={{ theme, lang, t: translations[lang], toggleTheme, toggleLang }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
