import React, { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  // useRef
  const number = useRef(0);
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(0);

  useEffect(() => {
    number.current = number.current + 1;
  });

  // useRef e DOM
  const inputRef = useRef();
  const [text, setText] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    setText("");

    inputRef.current.focus()
  };

  return (
    <div>
      <h2>HookUseRef</h2>
      <p>useRef = {number.current}</p>
      <p>count = {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>countB = {countB}</p>
      <button onClick={() => setCountB(countB + 1)}>add</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
        />
        <input type="submit" value="enviar" />
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
