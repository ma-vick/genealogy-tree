import styles from './TreeCard.module.css';
import LinkButton from '../layout/LinkButton';

export default function TreeCard({ id, name }) {
  return (
    <div className={styles.treecard_container}>
        <h2>{name}</h2>
        <LinkButton
          to={`/tree/${id}`}
          text="visualizar"
        />
    </div>
  )
}
