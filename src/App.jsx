import './App.css'
import Home from './pages/Home/Home'
import DentistPage from './pages/DentistPage/DentistPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NoPage from './pages/404/404'
import { BrowserRouter as Router, redirect, Route, Routes, Navigate } from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Videos from './components/videos/Videos'
import Photos from './components/photos/Photos'
import Documents from './components/documents/Documents'
import Photo from './pages/Photo/Photo'
import Video from './pages/Video/Video'
import DocumentPage from './pages/Document/DocumentPage'
import Search from './pages/Search/Search'
import Video2 from './pages/Video/Video2'
import Photo2 from './pages/Photo/Photo2'
import DocChildItems from './pages/DocChildItems/DocChildItems'
import DocSubItems from './pages/DocSubItems/DocSubItems'
import PrivateRoute from './components/PrivateRoute'
import Documents1 from './components/documents/Documents1'
import VideoChildItems from './pages/DocChildItems/VideoChildItems'
import VideoSubItems from './pages/DocSubItems/VideoSubItems'
import PhotoChildItems from './pages/DocChildItems/PhotoChildItems'
import PhotoSubItems from './pages/DocSubItems/PhotoSubItems'
import LoginAvita from './pages/Login/LoginAvita'

import { UserProvider, useUserType } from './context/userContext';  // Import UserProvider for context
import { useContext, useEffect, useState } from 'react'


function App() {




  return (


    <UserProvider>
      {/* <Router> */}
      {/* <Router basename="/profile"> */}
      <Router basename="/KFP-Profile">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="login-kfp" element={<Login />} />
          <Route path="login-avita" element={<LoginAvita />} />

          {/* Private Routes (Protect parent and all nested routes) */}
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/search/:query" element={<PrivateRoute><Search /></PrivateRoute>} />

          <Route exact path="dentists" element={<PrivateRoute><DentistPage /></PrivateRoute>}>

            {/* Nested Private Routes */}
            <Route path="documents" element={<Documents />} />

            <Route path="documents/:child" element={<DocChildItems />} />
            <Route path="documents/categoryItems/:item" element={<DocSubItems />} />
            {/* <Route path="document/:doc" element={<DocumentPage />} /> */}


            <Route path="videos" element={<Videos />} />

            <Route path="videos/:child" element={<VideoChildItems />} />
            <Route path="videos/categoryItems/:item" element={<VideoSubItems />} />
            {/* <Route path="videos/:video" element={<Video />} /> */}


            <Route path="photos" element={<Photos />} />

            <Route path="photos/:child" element={<PhotoChildItems />} />
            <Route path="photos/categoryItems/:item" element={<PhotoSubItems />} />
            {/* <Route path="photos/:id" element={<Photo />} /> */}

          </Route>



          {/* Catch-all route for undefined exact  paths */}
          <Route exact path="*" element={<NoPage />} />
        </Routes>
      </Router>

    </UserProvider>

  )
}

export default App
