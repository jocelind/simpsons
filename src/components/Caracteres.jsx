function Caracteres({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.Nombre}</h3>
      <img
        className="img-fluid"
        src={character.Imagen}
        alt={character.Nombre}
      ></img>
    </div>
  );
}

export default Caracteres;
