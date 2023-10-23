
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    desc: string;
    close: string;
  }

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, desc, close }) => {
    if (!isOpen) return null;
    return (
      <div className="forms__modal">
        <div className="modal_content">
  
          <img className="forms__modal_button" src={close} alt="close" onClick={onClose} />
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    );
  };

  export default Modal;