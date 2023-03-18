import React from 'react'
import ReactDOM from 'react-dom/client'
import { CardApp } from './components/CardApp'
import { AppProvider } from './context/AppProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <CardApp />
        </AppProvider>
    </React.StrictMode>
)
