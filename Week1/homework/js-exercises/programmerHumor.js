const display = document.getElementById('app');
const url = 'https://xkcd.now.sh/?comic=latest'

//create element function
const createEl = (image) => {
  const imgEl = document.createElement('img')
  imgEl.src = image
  display.appendChild(imgEl)
}

// send Api request using XMLHttpRequest
const getJoke = (method, api) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json'
  xhr.open(method, api)

  xhr.onload = () => {
    const data = xhr.response;
    if (xhr.status == 200) {
      const image = data.img
      createEl(image)
    } else {
      console.log(`something went wrong ${xhr.status}`)
    }
  }

  xhr.send()
}
getJoke('Get', url)


// send Api request using Axios
const makeJoke = (api) => {
  axios.get(api)
    .then(response => {
      const image = response.data.img;
      createEl(image)
    }).catch(error => {
      console.log(error)
    })
}
makeJoke(url)