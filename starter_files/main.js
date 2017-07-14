let pgContent = document.querySelector('header');
let h1 = document.createElement('h1');
let pgTitle = document.createTextNode('Internal Company Directory');

pgContent.appendChild(h1);
h1.appendChild(pgTitle);
for (let i = 0; i < customers.results.length; i++) {

 const employees = `
  <div class = "profile">

      <img src= ${customers.results[i].picture.large}>
      <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
      <div class='email'><a href='email'>${customers.results[i].email}</a></div>
      <br>
     <div class = "info">
      ${customers.results[i].location.street}
      </div>
      <div class = "info">
        ${customers.results[i].location.city},
        ${customers.results[i].location.state}       ${customers.results[i].location.postcode}
      </div>
      <div class = "info">
        ${customers.results[i].phone}
      </div>
      <br>
      <div class = "ssn">
        ${customers.results[i].id.value}
      </div>

`;
  document.querySelector('.container1').innerHTML += employees;
}
