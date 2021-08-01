import "./App.css";
import Person from "./Person";

function App() {
  return (
    <div className="App">
      <Person
        Name="Teressa"
        phone="9808876655"
        foto="https://images.unsplash.com/photo-1574108233269-86d1199d28de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
      <Person
        Name="Alex"
        phone="9808876655"
        foto="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
      <Person
        Name="Emily"
        phone="9808876655"
        foto="https://images.unsplash.com/photo-1616065298043-67646192dcb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
      <Person
        Name="David"
        phone="9808876655"
        foto="https://images.unsplash.com/photo-1612213467906-20440d15bdb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
    </div>
  );
}

export default App;
