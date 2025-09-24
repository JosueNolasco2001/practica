import React, { useEffect, useState } from 'react';
import Button from "../components/buttonComponents";


function Home() {

  function prueba() {
    return console.log("hola")
  }


useEffect(() => {


 prueba();

  }, [
 
  ]);

  return (
<div>

    <div>hola mnundo</div>
<Button text="Eliminar" />
</div>
    
  );
}

export default Home;