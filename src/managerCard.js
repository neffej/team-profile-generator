const  managerCard = (object) => { 
    return`<div class="card text-white bg-primary mb-3 col-2 ">
<div class="card-header text-center">${object.getRole()}  <i class="fa-solid fa-mug-saucer text-success"></i>   ID:<span class="text-info">  ${object.getID()}</span></div>
<div class="card-body">
  <h4 class="card-title">${object.name}</h4>
  <p class="card-text fs-6">${object.name}'s office number is: ${object.officeNumber}</p>
  <p class="card-text fs-6">${object.name}'s email is: ${object.getEmail()}</p>
</div>
</div>`}

module.exports = managerCard