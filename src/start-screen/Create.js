import { useState } from "react";
import AnimalScreen from "../animal-screen/AnimalScreen";

const Create = () => {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameForm = { name };

    fetch("http://localhost:8081/tamagochi/animal", {
      method: "POST",
      body: JSON.stringify(nameForm),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setAnimal(response);
      });
  };

  return (
    <div className="create">
      <h2>Input Animal Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button>Start game</button>
      </form>
      <AnimalScreen animal={animal} />
    </div>
  );
};

export default Create;
