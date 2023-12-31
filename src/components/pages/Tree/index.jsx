import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsPlusSquare } from "react-icons/bs";

import Relative from "../../Relative";

import styles from "./Tree.module.css";
import RelativeForm from "../../RelativeForm";
import Modal from "../../layout/Modal";

export default function Tree() {
  const { id } = useParams();
  const [tree, setTree] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [relatives, setRelatives] = useState([]);

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

  function createRelative() {
    fetch(`http://localhost:5000/trees/${tree.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tree),
    })
      .then((res) => res.json())
      .then((data) => {
        setOpenModal(false);
      })
      .catch((err) => console.log(err));
  }

  function removeRelative(id) {
    const relativesUpdated = tree.relatives.filter(
      (relative) => relative.name !== id
    );
    const treeUpdated = tree;

    treeUpdated.relatives = relativesUpdated;

    fetch(`http://localhost:5000/trees/${treeUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(treeUpdated),
    })
      .then((res) => res.json())
      .then((data) => {
        setTree(treeUpdated);
        setRelatives(relativesUpdated);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.tree_container}>
      {tree ? (
        <>
          <div className={styles.title_tree}>
            <h1>{tree.surname}</h1>
            <button onClick={() => setOpenModal(!openModal)}>
              <BsPlusSquare color="rgb(86, 9, 157)" size={28} />
            </button>
          </div>
          <Modal
            isOpen={openModal}
            children={
              <RelativeForm
                isOpen={openModal}
                setOpenModal={() => setOpenModal(!openModal)}
                handleSubmit={createRelative}
                btnText="Criar parente"
                relativeData={tree}
              />
            }
          />
          <div className={styles.relatives_container}>
            {tree.relatives.map((relative) => (
              <Relative key={relative.name} data={relative} handleRemove={() => removeRelative(relative.name)} />
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
