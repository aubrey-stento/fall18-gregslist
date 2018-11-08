import JobsService from "./jobs-service.js";

let _jobsService = new JobsService()

export default class JobsController {
  showJobs() {

    let jobs = _jobsService.getJobs()
    let template = `<form onsubmit="app.controllers.jobsController.addJob(event)">
      <div class="form-group">
        <label for="company">Company:</label>
        <input type="text" name="company" />
      </div>
      <div class="form-group">
        <label for="position">Position:</label>
        <input type="text" name="position" />
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input type="text" name="location" />
      </div>
      <div class="form-group">
        <label for="duties">Duties:</label>
        <input type="text" name="duties" />
      </div>
      <div class="form-group">
        <label for="pay">Pay:</label>
        <input type="number" name="pay" />
      </div>
      <button type="submit">Add Job</button>
    </form>`
    jobs.forEach(job => {
      template += `
        <div class="col card">
          <h5>${job.company} - ${job.position}</h5>
          <p>${job.location}</p>
          <p>${job.duties} - ${job.pay}</p>

        </div>
        `


    })
    document.getElementById('main-content').innerHTML = template

  }

  addJob(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      company: form.company.value,
      position: form.position.value,
      location: form.location.value,
      duties: form.duties.value,
      pay: form.pay.value
    }
    _jobsService.addJob(formData)
    this.showJobs()
    form.reset()
  }

}