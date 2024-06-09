import {useState} from 'react'
import Modal from '../components/Modal'
import '../styles/UploadPage.css'

const UploadPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [uploadSource, setUploadSource] = useState('')
  const [projectName, setProjectName] = useState('')
  const [projectLink, setProjectLink] = useState('')

  const handleUploadClick = source => {
    setUploadSource(source)
    setShowModal(true)
  }

  const handleUploadSubmit = () => {
    // Handle the upload logic here
    setShowModal(false)
    setProjectName('')
    setProjectLink('')
  }

  const handleKeyPress = (event, source) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleUploadClick(source)
    }
  }

  return (
    <div className="upload-page">
      <h1>Upload</h1>
      <div className="card-grid">
        <div
          className="card"
          onClick={() => handleUploadClick('YouTube')}
          onKeyPress={event => handleKeyPress(event, 'YouTube')}
          role="button"
          tabIndex="0"
        >
          <img src="/path-to-youtube-icon.png" alt="YouTube" />
          <h2>Uploaded from YouTube</h2>
        </div>
        <div
          className="card"
          onClick={() => handleUploadClick('Spotify')}
          onKeyPress={event => handleKeyPress(event, 'Spotify')}
          role="button"
          tabIndex="0"
        >
          <img src="/path-to-spotify-icon.png" alt="Spotify" />
          <h2>Uploaded from Spotify Podcast</h2>
        </div>
        <div
          className="card"
          onClick={() => handleUploadClick('RSS Feed')}
          onKeyPress={event => handleKeyPress(event, 'RSS Feed')}
          role="button"
          tabIndex="0"
        >
          <img src="/path-to-rss-icon.png" alt="RSS Feed" />
          <h2>Uploaded from RSS Feed</h2>
        </div>
      </div>
      <div className="drag-drop-box">
        <p>Drag and drop files here</p>
        <button type="submit" onClick={() => handleUploadClick('')}>
          Select File
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Upload from {uploadSource}</h2>
          <input
            type="text"
            placeholder="Name"
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link"
            value={projectLink}
            onChange={e => setProjectLink(e.target.value)}
          />
          <button type="button" onClick={handleUploadSubmit}>
            Upload
          </button>
        </Modal>
      )}
    </div>
  )
}

export default UploadPage
