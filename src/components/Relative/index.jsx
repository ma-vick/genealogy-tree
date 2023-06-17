import { useState } from "react";

import Modal from '../layout/Modal';
import Container from '../layout/Container';
import Edit from "../Edit";

import styles from "./Relative.module.css";

export default function Relative({ data }) {
  const [openModal, setOpenModal] = useState(false);

  function options(){
    setOpenModal(!openModal);
  }

  return (
    <div className={styles.relative_wrapper}>
      <Modal isOpen={openModal} children={<Edit />} />
      <div onClick={options} className={styles.relative_container}>
        <div className={styles.relative_img}>
          <img src={data.img} alt={data.name} />
        </div>
        <h4>{data.name}</h4>
      </div>
    </div>
  );
}
