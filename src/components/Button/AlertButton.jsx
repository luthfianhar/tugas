import { useState } from "react";

export default function AlertButton({ text, message }) {
  const [isDouble, setIsDouble] = useState(false);

  function handleClick() {
    if (!isDouble) {
      alert(message);
      setIsDouble(true);
    } else {
      setIsDouble(false);
    }
  }

  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <p>{isDouble ? "data sudah berubah" : "data bisa berubah"}</p>
    </>
  );
}
