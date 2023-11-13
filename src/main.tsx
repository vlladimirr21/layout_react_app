import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import './styles/App.css'

import './styles/header.css'
import './styles/clientBase.css'
import './styles/aboutCompany.css'
import './styles/prices.css'
import './styles/reviews.css'
import './styles/privelege.css'
import './styles/footer.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
