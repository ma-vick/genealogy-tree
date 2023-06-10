import { useState } from "react";
import Input from "../layout/Input";
import SubmitButton from "../layout/SubmitButton";

import styles from "./TreeForm.module.css";

export default function ProjectForm({ handleSubmit, btnText, treeData }) {
  const [tree, setTree] = useState(treeData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(tree);
  }

  function handleChange(e){
    setTree({ ...tree, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        text="Insira o sobrenome da família"
        type="text"
        name="surname"
        placeholder="Sobrenome"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
