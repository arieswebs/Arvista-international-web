import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ServicePage from './components/ServicePage.jsx'
import AboutPage from './components/AboutPage.jsx'
import CareersPage from './components/CareersPage.jsx'
import BlogsPage from './components/BlogsPage.jsx'
import BlogPostPage from './components/BlogPostPage.jsx'
import '../style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
