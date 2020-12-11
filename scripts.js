const baseEndPoint = "http://www.recipepuppy.com/api";
const proxy = "https://cors-anywhere.herokuapp.com/";

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndPoint}?q=${query}`);
  const data = await res.json();
  return data;
}

fetchRecipes("pizza");
