import { useEffect, useState } from "react";
import "./NotesIndex.css";

export default function NotesIndex() {
  const [notes, setNotes] = useState([]);
  //   let notes = [];
  const [pass, setPass] = useState(true);

  // Promise --> some code is async, it takes an indeterminate amount of time to finish running (while its running, you're given a special object called a Promise)

  // Stages of a Component's lifecycle
  // Component - Mounted (rendered on the page) ---> useEffect runs on component load, dependency array empty
  // Component - Updated (re-rendered) --> useEffect runs when component updates, dependency array with something inside
  // Component - About to be unmounted (in the process of being removed from the page) --> in the return callback of your useEffect, some things can happen
  // Component - Unmounted (not on the page)

  useEffect(() => {
    // We're here
    fetch("http://localhost:3000/notes") // Promise (wait for this to resolve/fail) Asynchronous
      .then((response) => {
        console.log(response);
        return response.json(); // Asynchronous --> promise
      })
      .then((x) => {
        console.log(x);
        setNotes(x);
        // notes = x;
      })
      .catch((error) => {
        console.error(error);
        setPass(false);
      });
  }, []);

  return pass ? (
    <ul className="notes-container">
      {notes.map((note) => {
        return (
          <div className="notes-container__note">
            <h3>{note.title}</h3>
            <p>{note.message}</p>
            <p>{note.category}</p>
          </div>
        );
      })}
    </ul>
  ) : (
    <div>
      <p>SOMETHING WENT HORRIBLY WRONG</p>
    </div>
  );
}
