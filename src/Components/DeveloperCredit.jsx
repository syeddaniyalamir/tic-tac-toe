import Style from "../assets/css/DeveloperCredit.module.css";

const DeveloperCredit = () => {
  return (
    <footer className={Style.credit}>
      <span className={Style.subtitle}>CRAFTED WITH PASSION</span>

      <p>DEVELOPED BY</p>

      <h3>SYED DANIYAL AMIR</h3>

      <span className={Style.copyright}>
        © 2026 • TIC TAC TOE
      </span>
    </footer>
  );
};

export default DeveloperCredit;