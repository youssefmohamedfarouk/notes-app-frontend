import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Note() {
  //   const { something, secondKey } = useParams(); // this function returns an object --> {id: "yo"}
  const paramsObj = useParams(); // this function returns an object --> {searchTerm: "milk"}
  //   console.log(something, secondKey);
  console.log(paramsObj.searchTerm);
  const [noteObject, setNoteObject] = useState({});

  useEffect(() => {
    // fetch("http://localhost:3000/notes/milk") //Promise
    fetch("http://localhost:3000/notes/" + paramsObj.searchTerm) //Promise
      .then((response) => {
        return response.json();
      }) //Promise
      .then((response2) => {
        setNoteObject(response2);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="single-note">
      <h1>{noteObject.title}</h1>
      <p>{noteObject.message}</p>
      <p>{noteObject.category}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
