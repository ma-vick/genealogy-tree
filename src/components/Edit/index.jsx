import { BsFillTrashFill } from 'react-icons/bs';
import styles from './Edit.module.css';

export default function Edit({ handleEdit, handleRemove }) {
  return (
    <>
      <span className={styles.editoptions_container}>
        <button onClick={handleEdit} className={styles.editoptions}>Editar</button>
        <button onClick={handleRemove} className={styles.editoptions}><BsFillTrashFill color='rgb(93,68,156)' /></button>
      </span>
    </>
  )
}
