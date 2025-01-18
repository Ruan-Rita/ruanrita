import { LanguageProvider } from '../context/language-context'
// These styles apply to every route in the application
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  ) 
}