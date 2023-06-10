import styles from "./Relative.module.css";

export default function Relative({ data, img }) {

  return (
    <div className={styles.relative_container}>
        <div className={styles.relative_img}>
          <img src={data.img} alt={data.name} />
        </div>
        <h4>{data.name}</h4>
    </div>
  );
}
