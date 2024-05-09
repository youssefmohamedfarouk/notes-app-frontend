import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import Example from "./Components/Example";
import NotesIndex from "./Components/NotesIndex";
import Note from "./Components/Note";

function App() {
  const [count, setCount] = useState(0);
  const [renderNotes, setRenderNotes] = useState(true);

  return (
    <>
      <NavBar />
      <Search />
      <Router>
        <Routes>
          <Route path="/" element={<NotesIndex />} />
          {/* <Route path="/:something" element={<NotesIndex />} />  */}
          <Route path="/notes/:searchTerm" element={<Note />} />
          <Route path="/example/" element={<Example />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
