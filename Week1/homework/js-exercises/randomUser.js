const url = `https://www.randomuser.me/api`

//send a request using XMLHttpRequest
const getRandomUser = (method, api) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open(method, api)

  xhr.onload = () => {
    const data = xhr.response;
    if (xhr.status == 200) {
      console.log(data.results[0])
    } else {
      console.log(`something went wrong : ${xhr.status}`)
    }
  }

  xhr.onerror = (error) => {
    console.log(` something went wrong : ${ error }`)
  }
  xhr.send()
}
getRandomUser('Get', url)

//send a request using Axios
const getRandomUserWithAxios = (api) => {
  axios.get(api).then(response => {
    console.log(response.data.results[0])
  }).catch(error => {
    console.log(`something went wrong : ${error}`)
  })
}

getRandomUserWithAxios(url)