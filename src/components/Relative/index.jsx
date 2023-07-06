import { useState } from "react";

import Modal from "../layout/Modal";
import Edit from "../Edit";

import styles from "./Relative.module.css";

export default function Relative({ data, handleRemove }) {
  const [openModal, setOpenModal] = useState(false);

  function remove(e) {
    e.preventDefault();
    handleRemove(data.id);
  }

  function options() {
    setOpenModal(!openModal);
  }

  return (
    <div className={styles.relative_wrapper}>
      <Modal
        isOpen={openModal}
        children={<Edit handleRemove={handleRemove} />}
      />
      <div onClick={options} className={styles.relative_container}>
        <div className={styles.relative_img}>
          {console.log(data.img)}
          <img
            src={data.img && require(`../../imgs/${data.img}`)}
            alt={data.name}
          />
        </div>
        <h4>{data.name}</h4>
      </div>
    </div>
  );
}
