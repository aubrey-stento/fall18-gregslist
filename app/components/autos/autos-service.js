import Auto from "../../models/auto.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/cars"
})
/**@type {Array<Auto}*/
let _autos = []

function handleError(err) {
  throw new Error(err)
}

export default class AutosService {
  // HTTP
  destroyAuto(id, showAutos) {
    _api.delete(id)
      .then(res => {
        this.getAutos(showAutos)
      })
      .catch(handleError)
  }
  // HTTP
  addAuto(formData, fntoRunOnSuccess) {
    // send formData to api (SERVER)
    // wait for server to respond
    // when the server responds
    // handle the response
    if (!formData) {
      throw new Error("You must supply form data")
    }
    if (typeof fntoRunOnSuccess != 'function') {
      throw new Error("you must supply a success funtion")
    }

    _api.post(' ', formData)
      .then(res => {
        // tell me via a callback
        this.getAutos(fntoRunOnSuccess)
      }) //successful
      .catch(handleError)
  }
  // HTTP
  getAutos(fntoRunOnSuccess) {
    if (typeof fntoRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    _api.get('')
      .then(res => {
        _autos = res.data.data.map(item => new Auto(item))
        fntoRunOnSuccess()
      })
      .catch(handleError)
  }
  get autos() {
    return _autos
  }


}