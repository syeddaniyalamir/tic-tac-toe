
import Style from "../assets/css/Home.module.css";
import DeveloperCredit from "./DeveloperCredit";

const Home = ({ onStart }) => {
  return (
    <div className={Style.home}>
      <h1>TIK TAC TOE</h1>
      <p>Welcome to the game!</p>
      <button onClick={onStart}>Start Game</button>
      <hr className="line" />
      <DeveloperCredit/>
    </div>
  );
};

export default Home;
