import {useState} from 'react'
import Modal from '../components/Modal'
import '../styles/ProjectPage.css'

const ProjectPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [projects, setProjects] = useState(
    [...Array(9).keys()].map(i => ({
      id: i,
      title: `Project ${i + 1}`,
      description: `Description of project ${i + 1}`,
      time: new Date().toLocaleString(),
    })),
  )
  const [projectName, setProjectName] = useState('')
  const [error, setError] = useState('')

  const handleCreateClick = () => {
    if (!projectName.trim()) {
      setError("Project Name Can't be Empty")
    } else {
      const newProject = {
        id: projects.length,
        title: projectName,
        description: 'New project description',
        time: new Date().toLocaleString(),
      }
      setProjects([...projects, newProject])
      setShowModal(false)
      setError('')
      setProjectName('')
    }
  }

  return (
    <div className="project-page">
      <div className="header">
        <h1>Projects</h1>
        <button type="button" onClick={() => setShowModal(true)}>
          Create New Project
        </button>
      </div>
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src="/path-to-project-image.png" alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.time}</p>
          </div>
        ))}
      </div>
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

export default ProjectPage
