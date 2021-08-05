import React from "react";
import { useContext } from "react";
import { KisilerContext } from "./context/KisilerContext";
import Kisi from "./Kisi";

function KisiList(props) {
  //props destrructring
  // const { kisiler, renkDegistir } = props;
  // const { kisiler } = props;

  const context = useContext(KisilerContext);
  const { kisiler } = context;
  return (
    <div>
      <h2>Kisi Listesi</h2>
      {kisiler.map((kisi) => (
        // <Kisi key={kisi.id} kisi={kisi} renkDegistir={renkDegistir} />
        <Kisi key={kisi.id} kisi={kisi} />
      ))}
    </div>
  );
}

export default KisiList;
