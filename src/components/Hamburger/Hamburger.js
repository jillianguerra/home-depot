import styles from "./Hamburger.module.scss";
import { useState } from "react";

export default function Hamburger() {
  const [drop, setDrop] = useState(false);

  const handleHover = () => {
    setDrop(!drop);
  };

  return (
    <div className={styles.hamburger} onMouseEnter={handleHover}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}