import React from "react";
import { useEffect, useState } from "react";

function UseEffectFetchError() {
  const [kisiler, setKisiler] = useState([]);
  const [hata, setHata] = useState(false);
  const [status, setstatus] = useState(200);
  const url = "https://api.github.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setstatus(res.status);
          setHata(true);
        }
      })
      .then((data) => setKisiler(data));
  }, []);

  if (!hata) {
    return (
      <div>
        <h1>GITHUB KULLANICILARI</h1>
        {kisiler.map((kisi) => {
          const { id, login, avatar_url, html_url } = kisi;
          return (
            <div key={id}>
              <h2>{login}</h2>
              <img src={avatar_url} width="250px" />
              <p>{html_url}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h1>VERILER CEKILEMEDI</h1>
        <h2>Status Kod: {status}</h2>
      </div>
    );
  }
}

export default UseEffectFetchError;
