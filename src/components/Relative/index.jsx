import { useState } from "react";

import Modal from '../layout/Modal';
import RelativeForm from '../RelativeForm';

import styles from "./Relative.module.css";

export default function Relative({ data }) {
  const [openModal, setOpenModal] = useState(false);

  function editRelative(){
    setOpenModal(!openModal);
  }

  return (
    <>
      <div onClick={editRelative} className={styles.relative_container}>
        <div className={styles.relative_img}>
          <img src={data.img} alt={data.name} />
        </div>
        <h4>{data.name}</h4>
      </div>
      <Modal isOpen={openModal} children={<RelativeForm />} />
    </>
  );
}
