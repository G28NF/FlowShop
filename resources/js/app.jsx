import './bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './react/App'

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)