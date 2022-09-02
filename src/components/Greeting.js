import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
  const [changedText, setCHangedText] = useState(false);

  const changedTextHandler = () => {
    setCHangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
