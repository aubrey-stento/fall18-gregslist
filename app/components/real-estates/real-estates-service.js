import RealEstate from "../../models/real-estate.js"

let _realEstates = []

export default class RealEstatesService {
  addRealEstate(formData) {
    let newRealEstate = new RealEstate(formData)
    _realEstates.push(newRealEstate)
  }
  getRealEstate() {
    return _realEstates
  }
}