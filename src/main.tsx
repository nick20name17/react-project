import { createRoot } from 'react-dom/client'
import { App } from './app'
import './index.css'
import { ReactQueryProvider } from './providers/react-query-provider'

createRoot(document.getElementById('root')!).render(
    <ReactQueryProvider>
        <App />
    </ReactQueryProvider>
)
