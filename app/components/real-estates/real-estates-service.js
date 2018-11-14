import realEstate from "../../models/real-estate.js"

let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/houses"
})

let _realEstates = []

function handleError(err) {
  throw new Error(err)
}

export default class realEstatesService {
  destroyrealEstate(id, showrealEstates) {
    _api.delete(id)
      .then(res => {
        this.getrealEstates(showrealEstates)
      })
      .catch(handleError)
  }
  addrealEstate(formData, fntoRunOnSuccess) {
    if (!formData) {
      throw new Error("You must supply form data")
    }
    if (typeof fntoRunOnSuccess != 'function') {
      throw new Error("You must supplye a success function")
    }
    _api.post(' ', formData)
      .then(res => {
        this.getrealEstates(fntoRunOnSuccess)
      })
      .catch(handleError)
  }
  getrealEstates(fntoRunOnSuccess) {
    if (typeof fntoRunOnSuccess != 'function') {
      throw new Error("you must supply a success function")
    }
    _api.get('')
      .then(res => {
        _realEstates = res.data.data.map(item => new realEstate(item))
        fntoRunOnSuccess
      })
      .catch(handleError)
  }

  get realEstates() {
    return _realEstates
  }
}