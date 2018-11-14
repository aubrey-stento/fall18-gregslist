import JobsService from "./jobs-service.js";

let _jobsService = new JobsService()

export default class JobsController {

  constructor() {
    _jobsService.getJobs(this.showJobs)
  }
  showJobs() {

    let jobs = _jobsService.jobs
    let formTemplate = `<form onsubmit="app.controllers.jobsController.addJob(event)">
      <div class="form-group">
        <label for="company">Company:</label>
        <input type="text" name="company" />
      </div>
      <div class="form-group">
        <label for="jobTitle">Job Title:</label>
        <input type="text" name="jobTitle" />
      </div>
      <div class="form-group">
        <label for="hours">Hours:</label>
        <input type="number" name="hours" />
      </div>
      <div class="form-group">
        <label for="rate">Rate:</label>
        <input type="number" name="rate" />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <input type="text" name="description" />
      </div>
      <button type="submit">Add Job</button>
    </form>`
    let jobsTemplate = ''
    jobs.forEach(job => {
      jobsTemplate += job.getJobHTML()
    })
    document.getElementById('form-content').innerHTML = formTemplate
    document.getElementById('main-content').innerHTML = jobsTemplate

  }

  addJob(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _jobsService.addJob(formData, this.showJobs)
    form.reset()
  }
  destroyJob(id) {
    _jobsService.destroyJob(id, this.showJobs)
  }
}