import style from "./index.module.css";

export default function NavBar() {
  return (
      <>
    <div className={style.container}>
        <Link to={""}>
          <h2>PSICONNECT</h2>
        </Link>
      </div>
      <div>
        <Link to={""}>
          <h3>Conocenos</h3>
        </Link>
      </div>
      <div >
        <Link to={""}>
          <img className={styles.image} src={img} alt="Earth img" />
        </Link>
    </div>
      </>
  );
}
