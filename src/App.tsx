import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
function App() {
  const [imageURL, setimageURL] = useState(null);

  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
  useEffect(() =>{
    axios.get(baseURL).then((response) => {
      setimageURL(response.data);
    });

  }, []);
/*   Para realizar esta solicitud, cuando se monta el componente, utiliza el hook useEffect. 
  Esto implica importar Axios, usar el método .get() 
  para realizar una solicitud GET a su endpoint y usar el callback .then()
   para recuperar todos los datos de respuesta. */
  return (
    imageURL && (
      <>
      <h1>{imageURL.title}</h1>
      <h1>{imageURL.body}</h1>
      </>
    )
  )
}

export default App