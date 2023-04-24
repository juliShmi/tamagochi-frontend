const AnimalScreen = (props) => {
  const animal = props.animal;
  return (
    <>
      <p>Name: {animal.name}</p>
      <p>Age: {animal.age}</p>
      <p>Health: {animal.health}</p>
      <p>Satiation: {animal.satiation}</p>
    </>
  );
};

export default AnimalScreen;
