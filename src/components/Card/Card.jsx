import {person1} from "./data";
import "./styles.css";
function Card() {
  return (
    <div className="person_card">
      <img
        className="avatar"
        src={person1.avatarURL}
        alt="Homer_Simpson_avatar"
      />
      <p className="card_info">Name: {person1.name}</p>
      <p className="card_info">Occupation: {person1.occupation}</p>
      <p className="card_info">Hobby: {person1.hobby}</p>
    </div>
  );
}

export default Card;
