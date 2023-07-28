import { react } from "react";
import Caracteres from "./components/caracteres.jsx";
import ListaCaracteres from "./components/ListaCaracteres.jsx";

function App() {
  return (
    <div className="text-white">
      <h1 className="text-center display-1 py-4">The Simpsons</h1>
      <ListaCaracteres />
    </div>
  );
}
export default App;
