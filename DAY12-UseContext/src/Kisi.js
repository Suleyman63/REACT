import React, { useContext } from "react";
import { KisilerContext } from "./context/KisilerContext";

function Kisi(props) {
  // const { kisi, renkDegistir } = props;
  const { kisi } = props;
  const { id, isim, yas, renk, email } = kisi;

  const context = useContext(KisilerContext);

  // renk degistir methodunu destructer yaptik
  const { renkDegistir } = context;

  return (
    <div style={{ background: renk }}>
      <h3>isim: {isim}</h3>
      <p>email: {email}</p>
      <p>yas: {yas}</p>
      <p>renk:</p>
      <input
        type="text"
        value={renk}
        onChange={(e) => renkDegistir(id, e.target.value)}
      />
    </div>
  );
}

export default Kisi;
