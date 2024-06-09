import '../styles/Modal.css'

const Modal = ({children, onClose}) => (
  <div className="modal-backdrop">
    <div className="modal-content">
      <button type="button" className="close-button" onClick={onClose}>
        ✖
      </button>
      {children}
    </div>
  </div>
)

export default Modal
