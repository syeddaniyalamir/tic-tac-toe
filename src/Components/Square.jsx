
import Style from "../assets/css/Square.module.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className={Style.square}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
