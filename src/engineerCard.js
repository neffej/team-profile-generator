const engineerCard = `<div class="card text-white bg-primary mb-3 col-2 ">
<div class="card-header text-center">{getRole()}  <i class="fa-solid fa-glasses text-success"></i>   ID:<span class="text-info">  1{getID()}</span></div>
<div class="card-body">
  <h4 class="card-title">1{getName}</h4>
  <p class="card-text fs-6">1{getName}'s repo is at: https://www.github.com/{getGithub}</p>
</div>
</div>`

module.exports = engineerCard