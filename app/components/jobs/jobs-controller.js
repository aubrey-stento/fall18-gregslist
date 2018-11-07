import JobsService from "./jobs-service.js";

let _jobsService = new JobsService()

export default class JobsController {
  showJobs() {

    let jobs = _jobsService.getJobs()
    let template = ""
    jobs.forEach(job => {
      template += `
        <div class="col card">
          <h5>${job.company} - ${job.position}</h5>
          <p>${job.location}</p>
          <p>${job.duties} - ${job.pay}</p>

        </div>
        `


    })
    document.getElementById('job-content').innerHTML = template

  }

  addJobs(event) {

  }

}