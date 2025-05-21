import { createRoot } from 'react-dom/client'

import { App } from './app'
import './index.css'
import { AuthProvider } from './providers/auth-provider'
import { ReactQueryProvider } from './providers/react-query-provider'
import { ThemeProvider } from './providers/theme-provider'

createRoot(document.getElementById('root')!).render(
  <ReactQueryProvider>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </ReactQueryProvider>
)

