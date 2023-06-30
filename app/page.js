import "@/app/globals.css"
import CardPokemon from "@/component/CardPokemon";

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default async function Home() {
  const data = await getData(`http://pokeapi.co/api/v2/pokemon?limit=150`);
  const firstData = data.results;

   return (
    <div id="contenedor">
    {
      firstData.map((el, i) => (
        <CardPokemon key={i} url={el.url}/>
      ))
    }
    </div>
  )

}
 

