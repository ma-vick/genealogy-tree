import { useNavigate } from 'react-router-dom';

import TreeForm from '../../TreeForm';

import styles from './NewTree.module.css';

export default function NewTree() {
  const history = useNavigate();
  
  function createPost(tree) {
    tree.relatives = [];

    fetch("http://localhost:5000/trees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(tree),
    })
      .then((res) => res.json())
      .then((data) => {
        //redirect
        history('/trees');
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className={styles.newtree_container}>
      <h1>Criar Árvore Genealógica</h1>
      <p>Crie sua própria árvore genealógica com facilidade e carinho.</p>
      <TreeForm 
        handleSubmit={createPost}
        btnText="Criar"
      />
    </section>
  )
}
