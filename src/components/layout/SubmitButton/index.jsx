import styles from './SubmitButton.module.css';

export default function SubmitButton({ text, handleClick }) {
  return (
    <div>
        <button onClick={handleClick} className={styles.btn}>{text}</button>
    </div>
  )
}