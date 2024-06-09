import {useState} from 'react'
import Modal from '../components/Modal'
import '../styles/HomePage.css'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [error, setError] = useState('')

  const handleCreateClick = () => {
    if (!projectName.trim()) {
      setError("Project Name Can't be Empty")
    } else {
      // Handle project creation logic here
      // e.g., save to localStorage or update state
      setShowModal(false)
      setError('')
      setProjectName('')
    }
  }

  return (
    <div className="home-page">
      <h1>Create a New Project</h1>
      <img src="/path-to-your-image.png" alt="Create Project" />
      <p>Welcome to the project management tool. Click below to get started.</p>
      <button type="submit" onClick={() => setShowModal(true)}>
        Create New Project
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Create Project</h2>
          <input
            type="text"
            placeholder="Type here"
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" onClick={handleCreateClick}>
            Create
          </button>
          <button type="button" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </Modal>
      )}
    </div>
  )
}

export default HomePage
