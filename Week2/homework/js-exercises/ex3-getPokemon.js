// the pokemon API
const pokeApi = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
//parse the promise data to json
function fetchData(url) {
  return fetch(url).then(response => response.json())
}
// add DOM elements
function main() {
  // create dom element
  const appContainer = document.createElement('div');
  const content = document.createElement('div');
  const btn = document.createElement('button');
  const selector = document.createElement('select');
  const image = document.createElement('img');

  // append element 
  document.body.appendChild(appContainer);
  appContainer.appendChild(btn);
  btn.innerText = 'Get Pokemon'
  // add event to the btn and make the first fetch
  btn.addEventListener('click', addToDom)

  function addToDom() {
    fetchData(pokeApi).then(data => {
      const results = data.results
      let option;
      results.forEach(pokemonList => {
        option += `<option value="${pokemonList.name}">${pokemonList.name}</option>`
      });
      appContainer.appendChild(selector)
      selector.innerHTML = option
    })
  }

  // added event to select element and make 2nd fetch
  selector.addEventListener("change", getPokeImage)
  // this function seems has a callback hell
  function getPokeImage(e) {
    let selectValue = e.target.value
    fetchData(pokeApi).then(data => {
      const results = data.results
      results.forEach(pokemonImage => {
        if (selectValue === pokemonImage.name) {
          fetchData(pokemonImage.url).then(data => {
            const singlePokeImg = data.sprites.other.dream_world.front_default
            appContainer.appendChild(content)
            content.appendChild(image)
            image.srcset = singlePokeImg
          })
        }
      })
    })
  }
}

main()