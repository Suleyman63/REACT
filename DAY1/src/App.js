import Component from "./Component";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Component />
      </Router>
    </div>
  );
}
export default App;
