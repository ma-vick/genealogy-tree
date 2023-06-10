import styles from './Modal.module.css';

export default function Modal({ isOpen, children }) {
  if(isOpen){
    return (
        <div>
            {children}
        </div>
      )
  }
}
