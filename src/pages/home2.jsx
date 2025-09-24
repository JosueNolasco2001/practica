import React, { useEffect, useState } from 'react';
import Button from "../components/buttonComponents";

function Home2() {

  function prueba() {
    return console.log("pagina2")
  }


useEffect(() => {


 prueba();

  }, [
 
  ]);

  return (
<div>
  <div>hola mnundo2</div>
<Button text="Eliminar" />
</div>
    
  );
}

export default Home2;