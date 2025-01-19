import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Experiences from './pages/Experiences.jsx';
import PageNotFound from './pages/PageNotFound.jsx'
import MoreProjects from './pages/MoreProjects.jsx';
import Skills from './pages/Skills.jsx'
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import TopNavbar from './components/TopNavbar.jsx';
import SideNavbar from './components/SideNavbar';
import './index.css';
import './styles/fontStyle.css'
export default function App() {
  return (

    <div>
      <Router>
        <div className='bg-primary_dark text-primary_white'>
          <TopNavbar />
          <div className='flex'>
            <div className='bg-medium_dark sm:ml-7 ml-0 rounded-sm'>
              <SideNavbar />
            </div>
            <div className='w-[100vw] md:w-[80vw] bg-primary_dark'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/experiences' element={<Experiences />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/more-projects' element={<MoreProjects />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  )
}