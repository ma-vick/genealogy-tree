import styles from './Home.module.css';
import family from '../../../imgs/family.png';
import LinkButton from '../../LinkButton';

export default function Home() {
  return (
    <main className={styles.home_container}>
      <h1>Ilustre sua Árvore Genealógica</h1>
      <p>Crie sua própria árvore genealógica com facilidade e carinho.</p>
      <img src={family} alt="Família" />
      <LinkButton
        to="tree"
        text="Criar árvore genealógica"
      />
    </main>
  )
}
