import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CampusPage } from './pages/CampusPage'
import { ContactPage } from './pages/ContactPage'
import { EventsPage } from './pages/EventsPage'
import { FocusPage } from './pages/FocusPage'
import { HomePage } from './pages/HomePage'
import { LocationsPage } from './pages/LocationsPage'
import { MissionPage } from './pages/MissionPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ParticipatePage } from './pages/ParticipatePage'
import { ResourcesPage } from './pages/ResourcesPage'
import { RoadmapPage } from './pages/RoadmapPage'
import { TeamPage } from './pages/TeamPage'
import './App.css'

function basename() {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/') return undefined
  return base.replace(/\/$/, '')
}

function App() {
  return (
    <BrowserRouter basename={basename()}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mission" element={<MissionPage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="ambition" element={<Navigate to="/roadmap" replace />} />
          <Route path="focus" element={<FocusPage />} />
          <Route path="campus" element={<CampusPage />} />
          <Route path="albertasat" element={<Navigate to="/campus" replace />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="locations" element={<LocationsPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="participate" element={<ParticipatePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
