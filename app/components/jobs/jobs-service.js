import Job from "../../models/job.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/jobs"
})

let _jobs = []

function handleError(err) {
  throw new Error(err)
}

export default class JobsService {
  destroyJob(id, showJobs) {
    _api.delete(id)
      .then(res => {
        this.getJobs(showJobs)
      })
      .catch(handleError)
  }
  addJob(formData, fntoRunOnSuccess) {
    if (!formData) {
      throw new Error("You must supply form data")
    }
    if (typeof fntoRunOnSuccess != 'function') {
      throw new Error("you must supply a success function")
    }
    _api.post(' ', formData)
      .then(res => {
        this.getJobs(fntoRunOnSuccess)
      })
      .catch(handleError)
  }
  getJobs(fntoRunOnSuccess) {
    if (typeof fntoRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    _api.get('')
      .then(res => {
        _jobs = res.data.data.map(item => new Job(item))

        fntoRunOnSuccess
      })
      .catch(handleError)
  }
  get jobs() {
    return _jobs
  }
}