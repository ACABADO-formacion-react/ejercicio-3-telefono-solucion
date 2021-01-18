import { useState } from "react";
import { Acciones } from "./componentes/Acciones";
import { Display } from "./componentes/Display";
import { Info } from "./componentes/Info";
import { Teclado } from "./componentes/Teclado";

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
    if (!esCompleto()) {
      return;
    }
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
      <Info llamando={llamando} />
      <main className="telefono">
        <div className="botones">
          <Teclado
            teclas={teclas}
            llamando={llamando}
            borrar={borrar}
            anyadeDigito={anyadeDigito}
          />
        </div>
        <div className="acciones">
          <Display telefono={telefono} />
          <Acciones
            llamando={llamando}
            colgar={colgar}
            llamar={llamar}
            esCompleto={esCompleto}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
