import styles from '../css/modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;