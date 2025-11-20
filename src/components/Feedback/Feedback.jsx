import { useState } from "react";

import Button from "../Button/Button";

import "./styles.css";

function Feedback() {
  const [lickes, setLickes] = useState(0);
  const [dislickes, setDislickes] = useState(0);

  const quantityLicke = () => {
    setLickes((lickeValue) => {
      return lickeValue + 1;
    });
  };
  const quantityDislicke = () => {
    setDislickes((dislickeValue) => {
      return dislickeValue + 1;
    });
  };
  const resetResult = () => {
    setLickes(0);
    setDislickes(0);
  };

  return (
    <div className="feedback_wrapper">
      <h2>Feedback</h2>
      <div className="buttons">
        <Button name=" 👍 Like" onClick={quantityLicke} />

        <p className="counter">{lickes}</p>
      </div>
      <div className="buttons">
        <Button name=" 👎 Dislike" onClick={quantityDislicke} />

        <p className="counter">{dislickes}</p>
      </div>
      <div className="reset_button">
        <Button name="Reset Result" onClick={resetResult} />
      </div>
    </div>
  );
}
export default Feedback;
