export default class Job {
  constructor(data) {
    if (!data.company || !data.position || !data.location || !data.duties || !data.pay) {
      throw new Error("Missing Data Field")
    }
    this.company = data.company
    this.position = data.position
    this.location = data.location
    this.duties = data.duties
    this.pay = data.pay
  }
}