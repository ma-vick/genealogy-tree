import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsPlusSquare } from "react-icons/bs";

import Relative from "../../Relative";

import styles from "./Tree.module.css";
import RelativeForm from "../../../RelativeForm";

export default function Tree() {
  const { id } = useParams();
  const [tree, setTree] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/trees/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTree(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={styles.tree_container}>
      {tree ? (
        <>
          <div className={styles.title_tree}>
            <h1>{tree.surname}</h1>
            <button onClick={() => setOpenModal(true)}>
              <BsPlusSquare color="rgb(86, 9, 157)" size={28} />
            </button>
          </div>
          <RelativeForm
            isOpen={openModal}
            setOpenModal={() => setOpenModal(!openModal)}
            btnText="Criar parente"
          />
          <div>
            {tree.relatives.map((relative) => (
              <Relative key={relative.name} data={relative} />
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
