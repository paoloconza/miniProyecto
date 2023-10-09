import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);

  const filtrado = (ele) => {
    const filtro = data.filter((element) => element.city.includes(ele));
    return filtro;
  }

  const handleFormFilter = (text) => {
    const filtro = filtrado(text);
    setData(filtro);
  };

  return (
    <>
      <div className="contenedor">
        <Nav fn={handleFormFilter} />
        <main>
          {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
          {data.map((el, i) => {
            return (
              <div className="grup" key={i}>
                <div className="imag">
                  <img src={el.photo} alt={el.title} />
                </div>
                <div className="text">
                  <div className="divblo">
                    <div className="divdat">
                      <p>
                        {el.superHost ? (
                          <p><strong>SUPER HOST</strong></p>
                        ) : (
                          <div></div>
                        )}
                      </p>
                      <p><strong>{el.type}.{el.beds}beds</strong></p>
                    </div>
                    <p>
                      <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" /></svg>
                      {el.rating}
                    </p>
                  </div>
                  <h5>{el.title}</h5>
                </div>
              </div>
            )
          })}
        </main>
      </div>
    </>
  );
}

export default App;
