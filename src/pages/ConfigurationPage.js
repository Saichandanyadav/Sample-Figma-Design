import {useState} from 'react'
import '../styles/ConfigurationPage.css'

const ConfigurationPage = () => {
  const [activeTab, setActiveTab] = useState('General')

  const renderGeneralSettings = () => (
    <>
      <h2>Chatbot Name</h2>
      <input type="text" placeholder="Enter Chatbot Name" />
      <h2>Welcome Name</h2>
      <input type="text" placeholder="Enter Welcome Name" />
      <h2>Input Placeholder Name</h2>
      <input type="text" placeholder="Enter Placeholder Name" />
    </>
  )

  const renderDisplaySettings = () => (
    <>
      <h2>Primary Color</h2>
      <input type="color" />
      <h2>Font Color</h2>
      <input type="color" />
      <h2>Font Size</h2>
      <input type="text" placeholder="Enter Font Size" />
      <h2>Chat Height</h2>
      <input type="text" placeholder="Enter Chat Height" />
      <h2>Chat Icon Size</h2>
      <select>
        <option>16px</option>
        <option>24px</option>
        <option>32px</option>
      </select>
      <h2>Position on Screen</h2>
      <select>
        <option>Bottom Right</option>
        <option>Bottom Left</option>
      </select>
      <h2>Distance from Bottom</h2>
      <input type="text" placeholder="Enter Distance from Bottom" />
      <h2>Horizontal Distance</h2>
      <input type="text" placeholder="Enter Horizontal Distance" />
      <h2>Upload Image/Icon</h2>
      <button type="button">Upload Image</button>
    </>
  )

  const renderAdvancedSettings = () => (
    <p>There are no advanced features available.</p>
  )

  const renderSettings = () => {
    switch (activeTab) {
      case 'General':
        return renderGeneralSettings()
      case 'Display':
        return renderDisplaySettings()
      case 'Advanced':
        return renderAdvancedSettings()
      default:
        return null
    }
  }

  return (
    <div className="configuration-page">
      <h1>Configuration</h1>
      <div className="nav-tabs">
        <button type="button" onClick={() => setActiveTab('General')}>
          General
        </button>
        <button type="button" onClick={() => setActiveTab('Display')}>
          Display
        </button>
        <button type="button" onClick={() => setActiveTab('Advanced')}>
          Advanced
        </button>
      </div>
      <div className="settings-content">{renderSettings()}</div>
    </div>
  )
}

export default ConfigurationPage
