import React, { useState } from "react";
import Card from "../component/Card.jsx";

//create your first component
const Home = () => {
  /// funcion que modifica el estado y el valor inicial
  const [nombre, setNombre] = useState("Nombre");
  const [apellido, setapellido]= useState("Apellido");
  const [rol, setRol] = useState ("Rol");
  const [tieneImagen,setTieneImagen] = useState (false);
  const [status,setStatus]=useState("Activo") //boton Verde
  // tenemos que utilizar el evento ON Change Cuando el Imput Cambie
  // poner la foto o mo handleChance
 const handleChange = (event) => {  
  console.log (event.target.value);
if (event.target.value === "true"){
     setTieneImagen(true);
}else {
	   setTieneImagen(false);
}};
  //Direcion al Nombre uniendo state con hanleName para que se escuche el estado del evento
  const handleName = (event) => {
    setNombre(event.target.value);
  };
 // Para el Apellido
  const hanledLastName = (event) => {
   	setapellido (event.target.value);
	
  };
  //Para el Roll
  const hanledRoll = (event) => {
	setRol(event.target.value);
  };
	// Evento CLick del Boton
  const handleClick = (statusParametro) => {
  setStatus(statusParametro);

  };
  return (
    <div className="row">
      <div className="col-3 m-2">Tienes Foto?
        <select
          className="form-select"
          onChange={(event) => handleChange(event)}
        >
          <option selected></option>
          <option value={"true"}>Si Tiene</option>
          <option value={"false"}>No tiene</option>
        </select>
      </div>
      <div className="col-3 m-2"> Nombre
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          onChange={(event) => handleName(event)}
        />
      </div>
      <div className="col-3 m-2">Apellido
        <input
          type="text"
          className="form-control"
          placeholder="Apellido"
          onChange={(event) => hanledLastName(event)}
        /> 
      </div>
      <div className="col-3 m-2">Rol
        <input
          type="text"
          className="form-control"
          placeholder="Rol"
          onChange={(event) => hanledRoll(event)}
        />
      </div>
      <div>
        <div className="d-flex gap-2">
          <button onClick={() => handleClick ("activado")}>Activar</button>
          <button onClick={() => handleClick("suspendido")}>Suspender</button>
          <button onClick={() => handleClick("cancelado")}>Cancelar</button>
        </div>
      </div>
      <div>
        <Card carPicture={tieneImagen} 
        name={nombre} apellido={apellido} 
        roll={rol} status={status}/>
      </div>
    </div>
  );
};

export default Home;
