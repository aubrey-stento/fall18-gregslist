import realEstatesService from "./real-estates-service.js";
import Job from "../../models/job.js";

let _realEstateService = new realEstatesService()

export default class RealEstatesController {

  constructor() {
    _realEstateService.getrealEstates(this.showrealEstates)
  }
  showrealEstates() {

    let realEstates = _realEstateService.realEstates

    let formTemplate = `<form onsubmit="app.controllers.realEstatesController.addrealEstate(event)">
        <div class="form-group">
          <label for="bedrooms">Bedrooms:</label>
          <input type="number" name="bedrooms" />
        </div>
        <div class="form-group">
          <label for="bathrooms">Bathrooms:</label>
          <input type="number" name="bathrooms" />
          </div>
          <div class="form-group">
            <label for="imgUrl">Image:</label>
            <input type="url" name="imgUrl" />
          </div>
          <div class="form-group">
            <label for="levels">Levels:</label>
            <input type="number" name="levels" />
          </div>
          <div class="form-group">
            <label for="year">Year:</label>
            <input type="number" name="year" />
          </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" name="price" />
          </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea type="text" name="description"></textarea>
        </div>

        <button type="submit">Add Real Estate</button>

      </form>
`
    let realEstatesTemplate = ''
    realEstates.forEach(realEstate => {
      realEstatesTemplate += realEstate.getrealEstateHTML()
    })
    document.getElementById('form-content').innerHTML = formTemplate
    document.getElementById('main-content').innerHTML = realEstatesTemplate

  }
  addrealEstate(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      imgUrl: form.imgUrl.value,
      levels: form.levels.value,
      years: form.years.value,
      price: form.price.value,
      description: form.description.value
    }

    _realEstateService.addrealEstate(formData, this.showrealEstates)
    form.reset()
  }
  destroyrealEstate(id) {
    _realEstateService.destroyrealEstate(id, this.showrealEstates)
  }
}