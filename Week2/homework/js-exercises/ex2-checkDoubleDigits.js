function checkDoubleDigits(num) {
  const promise = new Promise((resolve, reject) => {
    if (num >= 10) {
      resolve('The number is bigger than 10!')
    } else {
      const error = new Error('Error! The number is smaller than 10...')
      reject(error)
    }
  })

  return promise;
}

checkDoubleDigits(10)
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })