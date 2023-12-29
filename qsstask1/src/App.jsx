import { useContext, useState } from "react";
import "./App.css";
import Selection from "./components/Selection.jsx";
import RankContainer from "./components/RankContainer.jsx";
function App() {

  const [count, setCount] = useState(0);

  return (
    <>
        <div className="container">
          <Selection />
          <RankContainer />
        </div>
    </>
  );
}

export default App;
