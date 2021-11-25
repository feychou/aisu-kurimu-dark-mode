import { StateContext } from "../../stateContext";
import { Ghost, IceCream } from "react-kawaii";
import { useContext } from "react";

import styles from "./LightToggler.module.css";

export default function LightToggler() {
  const { darkModeOn, setDarkModeOn } = useContext(StateContext);

  return (
    <div
      onClick={() => {
        setDarkModeOn(!darkModeOn);
      }}
      className={styles.LightToggler}
    >
      {darkModeOn ? <IceCream size={50} /> : <Ghost size={45} />}
    </div>
  );
}
