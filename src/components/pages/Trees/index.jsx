import { useEffect, useState } from "react";
import { BsPlusSquare } from 'react-icons/bs';

import TreeCard from "../../TreeCard";
import LinkButton from "../../layout/LinkButton";

import empty from "../../../imgs/empty.png";

import styles from "./Trees.module.css";
import { Link } from "react-router-dom";

export default function Trees() {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/trees", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTrees(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className={styles.trees_container}>
      <div className={styles.title_trees}>
        <h1>trees</h1>
        <Link to='/newtree'><BsPlusSquare color="rgb(86, 9, 157)" size={28} /></Link>
      </div>
      <div className={styles.treescards_container}>
        {trees.length > 0 &&
          trees.map((tree) => <TreeCard name={tree.surname} id={tree.id} />)}
      </div>
      {trees.length === 0 && (
        <div className={styles.empty_container}>
          <p>Não há árvores registradas.</p>
          <img src={empty} alt="Vazio" />
          <LinkButton to="/newtree" text="Criar árvore genealógica" />
        </div>
      )}
    </main>
  );
}
