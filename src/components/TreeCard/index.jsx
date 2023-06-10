import styles from './TreeCard.module.css';
import LinkButton from '../layout/LinkButton';

import { BsFillTrashFill } from 'react-icons/bs';

export default function TreeCard({ id, name, handleRemove }) {
  const remove = e => {
    e.preventDefault();
    handleRemove(id);
  }

  return (
    <div className={styles.treecard_container}>
        <h2>{name}</h2>
        <span className={styles.options_container}>
          <LinkButton
            to={`/tree/${id}`}
            text="visualizar"
          />
          <button onClick={remove} ><BsFillTrashFill /></button>
        </span>
    </div>
  )
}
