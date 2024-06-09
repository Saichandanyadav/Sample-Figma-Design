import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import UploadPage from './pages/UploadPage'
import ConfigurationPage from './pages/ConfigurationPage'
import AccountSettingsPage from './pages/AccountSettingsPage'
import NavBar from './components/NavBar'
import './styles/NavBar.css'

const App = () => (
  <Router>
    <div>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/configuration" element={<ConfigurationPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  </Router>
)

export default App
