import data from "./data";
import React, { useState } from "react";
import KisiList from "./KisiList";
import { KisilerContext } from "./context/KisilerContext";

function App() {
  const [kisiler, setKisiler] = useState(data);
  const renkDegistir = (id, renk) => {
    setKisiler(
      kisiler.map((kisi) => (kisi.id === id ? { ...kisi, renk: renk } : kisi))
    );
  };
  return (
    //olusturdugmuz contextProveider ile tum tum componentleri sarmaladik
    // bu sayede butun componentler context te bulunan degisken vb paylasabilir
    <KisilerContext.Provider value={{ kisiler, renkDegistir }}>
      <div className="App">
        <header>
          <h1>Merhaba</h1>
        </header>
        {/* <KisiList kisiler={kisiler} renkDegistir={renkDegistir} /> */}
        {/* <KisiList kisiler={kisiler} /> */}
        <KisiList />
      </div>
    </KisilerContext.Provider>
  );
}

export default App;
