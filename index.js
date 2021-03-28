// Add your code here
const body = document.querySelector('body') 
function submitData(name, email){
  let formData = {
    name: name,
    email:  email
  };

  let configData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configData)
  .then(function(response) {
        return response.json();
      })
      .then(function(object) {
       const paragraph = document.createElement('p') 
        paragraph.innerHTML = `ID: ${object.id} <br> Name: ${object.name} <br> Email: ${object.email} <br>`
        body.appendChild(paragraph)
      })
      .catch(function(error) {
         debugger
        const errormsg = document.createElement('h2') 
        errormsg.innerHTML = `Error: ${error.message} >`
        body.appendChild(errormsg) 
      }); 
 }

 submitData("David", "teste@test.com")
// let formData = {
//     dogName: "Byrin",
//     dogBreed: "Poodle"
//   };
  
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   }); 