import { useState } from "react";

import Input from '../layout/Input';
import SubmitButton from '../layout/SubmitButton';

import styles from "./RelativeForm.module.css";

export default function RelativeForm({ handleSubmit, btnText, relativeData }) {
  const [relative, setRelative] = useState({});

  function submit(e) {
    e.preventDefault();
    relativeData.relatives.push(relative);
    handleSubmit(relativeData);
  }

  function handleChange(e) {
    setRelative({ ...relative, [e.target.name]: e.target.value });
    console.log(relative);
  }

  return (
    <form onSubmit={submit} className={styles.form_newrelative}>
      <Input
        text="Insira uma foto"
        type="file"
        name="img"
        placeholder="Imagem"
        handleOnChange={handleChange}
        value={relative.img ? relative.img : ""}
      />
      <Input
        text="Insira o nome"
        type="text"
        name="name"
        placeholder="Nome"
        handleOnChange={handleChange}
        value={relative.name ? relative.name : ""}
      />
      <Input
        text="Insira a data de nascimento"
        type="date"
        name="birthday"
        handleOnChange={handleChange}
        value={relative.birthday ? relative.birthday : ""}
      />
      <div className={styles.gender}>
        <label htmlFor="gender">Sexo:</label>
        <select id="gender" name="gender" onChange={handleChange}>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </select>
      </div>
      <SubmitButton text={btnText} />
    </form>
  );
}
