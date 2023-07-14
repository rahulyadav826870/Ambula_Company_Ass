import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ContaxtProvider } from './Components/Context/UseContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ContaxtProvider>

<App />
</ContaxtProvider>
</BrowserRouter>

)
