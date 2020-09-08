// Exercise 1: John who ?
//   Take a look at the following function (and try it out in your console):

// const getAnonName = (firstName, callback) => {
//   setTimeout(() => {
//     if (!firstName)
//       return callback(new Error("You didn't pass in a first name!"));

//     const fullName = `${firstName} Doe`;

//     return callback(fullName);
//   }, 2000);
// };

// getAnonName('John', console.log);

// Rewrite this function, but replace the callback syntax with the Promise syntax:

//  1- Have the getAnonName function return a new Promise that uses the firstName parameter
// 2- If the Promise resolves, pass the full name as an argument to resolve with
//  3-If the Promise rejects, pass an error as the argument to reject with: "You didn't pass in a first name!"

function getAnonName(firstName) {
  const promiseName = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstName) {
        const fulName = `${firstName} Doe`
        resolve(fulName)
      } else {
        const error = new Error('You did not pass in a first name')
        reject(error)
      }
    }, 2000);
  })
  return promiseName;
}
getAnonName('John')
  .then(response => console.log(response))
  .catch(error => console.log(error))