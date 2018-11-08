import RealEstatesService from "./real-estates-service.js";

let _realEstateService = new RealEstatesService()

export default class RealEstatesController {
  showRealEstates() {
    let realEstates = _realEstateService.getRealEstate()
    let template = `<form onsubmit="app.controllers.realEstatesController.addRealEstate(event)">
        <div class="form-group">
          <label for="bedrooms">Bedrooms:</label>
          <input type="number" name="bedrooms" />
        </div>
        <div class="form-group">
          <label for="bathrooms">Bathrooms:</label>
          <input type="number" name="bathrooms" />
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" name="price" />
        </div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="number" name="phone" />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea type="text" name="description"></textarea>
        </div>
        <div class="form-group">
          <label for="img">Image:</label>
          <input type="url" name="img" />
        </div>

        <button type="submit">Add Real Estate</button>

      </form>
`
    realEstates.forEach(realEstate => {
      template += `
      <div class="col-card">
        <img src = "${realEstate.img}" >
        <h5> Bedrooms: ${realEstate.bedrooms} - Bathrooms: ${realEstate.bathrooms}</h5>
        <p> Price: ${realEstate.price}</p>
        <p> Contact: ${realEstate.name} - ${realEstate.phone}</p>
      </div>
      `
    })
    document.getElementById('main-content').innerHTML = template;
  }
  addRealEstate(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      price: form.price.value,
      name: form.name.value,
      phone: form.phone.value,
      description: form.description.value,
      img: form.img.value
    }
    _realEstateService.addRealEstate(formData)
    this.showRealEstates()
    form.reset()

  }
}