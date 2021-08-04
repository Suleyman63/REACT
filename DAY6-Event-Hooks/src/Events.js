import React from "react";

// * EVENTS (Olaylar) Javascriptteki benzer olarak camelCase ile kullanilirlar.
// ! Event fonksiyonu yazilirken dikkat edilmelidir. Fonksiyon referans olarak gonderilmelidir. Ornegin:  onClick={handleTikla}
// * Eger onClick={handleTikla()} seklinde yazilirsa sayfa her render edildiginde dogrudan calismis olur.
// ? Peki parametreli bir fonksiyon ise ne yapmak gerekir.
// ? Parametreli fonksiyonlar bir baska isimsiz fonksiyon ile cagrilmalidir.
function Events() {
  let baslik = "OLAYLAR";

  function handleTikla() {
    alert("Tikla butonuna Tiklandi");
  }

  function handleSil() {
    alert("Sil butonuna Tiklandi");
  }

  function handleYaz(isim) {
    alert("Ben" + isim);
  }

  function handleDegistir() {
    baslik = "EVENTS";
    alert(baslik);
  }

  // ? SORU: Degistir Butonuna tiklandiginda baslik yazisini EVENTS olarak degisitirmesini istiyoruz.
  // ! Degisikligi log'da gorsek de web sayfasında render edilmiyor.
  // * Bunun sebebi REACT icin bu nesnenin hareketli bir nesne olup olmadigini bilmemesidir.
  // * React minimum DOM islemi icin default olarak nesneleri guncellemiyor.
  // ? Guncellenecekleri (interaktif) olanlari biz ona bildirmeliyiz. Bunun için iki yöntem var.
  // TODO: 1.Yontem Statefull Nesneler kullanmak. Yani state'ler ile degisimi gostermek. (KARMAŞIK)
  // ! 2. Yontem Hooks adi verilen fonksiyonel yaklasimi kullanmak.

  return (
    <div className="text-center text-success mt-5">
      <h1>{baslik}</h1>
      <button className="m-2 btn btn-outline-dark" onClick={handleTikla()}>
        Tikla
      </button>
      <button
        className="m-2 btn btn-outline-danger"
        onClick={() => handleSil("Sil butonuna tiklandi")}
      >
        {" "}
        Sil
      </button>
      <button
        className="m-2 btn btn-outline-warning"
        onClick={() => handleYaz("Mehmet")}
      >
        Yaz
      </button>
      <button className="m-2 btn btn-outline-primary" onClick={handleDegistir}>
        Degistir
      </button>
    </div>
  );
}
export default Events;
