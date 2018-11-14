export default class Job {
  constructor(data) {

    if (!data.hasOwnProperty('_id') || !data.company || !data.jobTitle || !data.hours || !data.hasOwnProperty('rate')) {
      throw new Error("Missing Job Data Field")
    }
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }
  getJobHTML() {
    return `<div class="col-sm-4 my-1 card">
    <div class="">
    <div class="card-body">
    <h5 class="card-title">${this.company} - ${this.jobTitle}</h5>
    <div class="card-text">
    <p>Hours: ${this.hours}</p>
    <p>Rate: ${this.rate}</p>
    <p>${this.description}</p>
    <div>
    <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.jobsController.destroyJob('${this._id}')"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
`
  }
}