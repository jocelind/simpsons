import { useEffect, useState } from "react";
import Caracteres from "./Caracteres";

function Navegador(props) {
  return (
    <div className="d-flex justify-content-between aling-items-center">
      <p>Pagina {props.page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1)}
      >
        Siguiente
      </button>
    </div>
  );
}

function ListaCaracteres() {
  const [character, setcharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://apisimpsons.fly.dev/api/personajes?limit=20&page=" + page
      );
      const data = await response.json();
      setLoading(false);
      setcharacter(data.docs);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      <Navegador page={page} setPage={setPage} />
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="row">
          {character.map((character) => {
            return (
              <div className="col-md-4" key={character._id}>
                <Caracteres character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ListaCaracteres;
