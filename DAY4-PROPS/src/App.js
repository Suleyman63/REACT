import "./App.css";
import Header from "./header/Header";
import Yorum from "./comment/Yorum";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Yorum indeks="0" />
        <Yorum indeks="1" />
        <Yorum indeks="2" />
        <Yorum indeks="3" />
        <Yorum indeks="4" />
        <Yorum indeks="5" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
