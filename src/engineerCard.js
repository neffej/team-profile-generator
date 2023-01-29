const engineerCard = (object) => {
    return`<div class="card text-white bg-primary mb-3 col-2 ">
<div class="card-header text-center">${object.getRole()}  <i class="fa-solid fa-glasses text-success"></i>   ID:<span class="text-info">  ${object.getID()}</span></div>
<div class="card-body">
  <h4 class="card-title">${object.name}</h4>
  <p class="card-text fs-6">${object.name}'s gitHub account is: <a href="https://www.github.com/${object.getGithub()}" target="_blank">${object.getGithub()}</a></p>
  <p class="card-text fs-6">${object.name}'s email is: <a href="mailto:${object.getEmail()}">${object.getEmail()}</a></p>
</div>
</div>`}

module.exports = engineerCard