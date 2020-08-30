const display = document.querySelector('#app ul');
const btnXml = document.getElementById('xml')
const btnAxios = document.getElementById('axios')
const imgEl = document.createElement('img');
const liEl = document.createElement('li');
const url = "https://dog.ceo/api/breeds/image/random"

//create img element function
const createEl = (imgSRC) => {
  // const imgEl = document.createElement('img');
  imgEl.src = imgSRC
  // const liEl = document.createElement('li');
  liEl.appendChild(imgEl)
  display.appendChild(liEl)

  //style the image

  imgEl.style.width = "400px";
  imgEl.style.margin = 'auto';
  imgEl.style.display = 'block';
  imgEl.style.border = " 10px solid red";
  liEl.style.listStyleType = 'none'
}

const getDogPhoto = (method, api) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open(method, api)
  xhr.onload = () => {
    const data = xhr.response;
    if (xhr.status == 200) {
      const randomImg = data.message
      createEl(randomImg)
    }
  }
  xhr.send()
}
btnXml.addEventListener('click', () => {
  getDogPhoto('Get', url)
})


const addDogGallery = (api) => {
  axios.get(api)
    .then(response => {
      const image = response.data.message
      createEl(image)
    }).catch(error => console.log(error))
}
btnAxios.addEventListener('click', () => {
  addDogGallery(url)
})