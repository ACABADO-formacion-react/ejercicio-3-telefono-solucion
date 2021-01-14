import { useState } from "react";

function App() {
  const teclas = [...[...Array(10)].map((x, i) => i).slice(1), 0];
  const [telefono, setTelefono] = useState("");
  const [llamando, setLlamando] = useState(false);
  const [timer, setTimer] = useState(null);
  const esCompleto = () => telefono.length === 9;
  const anyadeDigito = (digito) => {
    if (esCompleto()) {
      return;
    }
    setTelefono(`${telefono}${digito}`);
  }
  const borrar = () => {
    setTelefono("");
  }
  const llamar = (e) => {
    e.preventDefault();
    setLlamando(true);
    setTimer(setTimeout(() => {
      console.log("Cuelgo automáticamente");
      colgar()
    }, 5000));
  }
  const colgar = (e) => {
    if (typeof e !== "undefined") {
      e.preventDefault();
    }
    clearTimeout(timer);
    setLlamando(false);
    borrar();
  }
  return (
    <div className="contenedor">
      <span className={`mensaje${llamando ? "" : " off"}`}>Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {
              teclas.map(tecla => (
                <li key={tecla} onClick={() => anyadeDigito(tecla)}>
                  <button disabled={llamando}>{tecla}</button>
                </li>
              ))
            }
            <li>
              <button className="big" onClick={borrar} disabled={llamando}>borrar</button>
            </li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">{telefono}</span>
          {!llamando && <a href="llamar" onClick={llamar} className={`llamar${esCompleto() ? " activo" : ""}`}>Llamar</a>}
          {llamando && <a href="colgar" onClick={colgar} className="colgar activo">Colgar</a>}
        </div>
      </main>
    </div>
  );
}

export default App;
