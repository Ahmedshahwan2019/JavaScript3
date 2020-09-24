// ex-A

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// ex-B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

async function makeAllCaps(array) {
  try {
    const capsArray = await array.map((word) => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      }
    });
    return capsArray;
  } catch (error) {
    console.log(`Error:m words must be captail letter ${error}`);
  }
}
makeAllCaps(arrayOfWords);
