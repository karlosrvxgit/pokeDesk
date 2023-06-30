import React from "react";

async function getData(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return data;
}

async function page({params}) {
    const data = await getData(params.id);

  return (
    <div 
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        border: "1px solid"
    }}>
        <h1>Name: {data.name}</h1>
        <p>Base experience: {data.base_experience}</p>
        <p>Type: {data.types[0].type.name}</p>
        <div>
            <img src={data.sprites.front_default} alt="Front" />
             <img src={data.sprites.back_default} alt="Back" />
        </div>
    </div>
  )
}

export default page
