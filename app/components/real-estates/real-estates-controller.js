import RealEstatesService from "./real-estates-service.js";

let _realEstateService = new RealEstatesService()

export default class RealEstatesController {
  showRealEstates() {
    let realEstates = _realEstateService.getRealEstate()
    let template = ""
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
    document.getElementById('estate-content').innerHTML = template;
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