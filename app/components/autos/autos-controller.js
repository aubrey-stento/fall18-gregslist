import AutosService from "./autos-service.js";

let _autosService = new AutosService()


export default class AutosController {

  constructor() {
    _autosService.getAutos(this.showAutos)
  }
  showAutos() {
    let autos = _autosService.autos
    let formTemplate = `
       <form onsubmit="app.controllers.autosController.addAuto(event)" >
        <div class="form-group">
          <label for="make">Make:</label>
          <input type="text" name="make" />
        </div>
        <div class="form-group">
          <label for="model">Model:</label>
          <input type="text" name="model" />
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
          <label for="imgUrl">Image:</label>
          <input type="url" name="imgUrl" />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <input type="text" name="description" />
        </div>
        <button type="submit">Add Auto</button>
    </form >`
    let autosTemplate = ''
    autos.forEach(auto => {
      autosTemplate += auto.getAutoHTML()
    })
    document.getElementById('form-content').innerHTML = formTemplate
    document.getElementById('main-content').innerHTML = autosTemplate
  }

  addAuto(event) {
    event.preventDefault(); //prevents the page from reloading
    let form = event.target // the element that triggers the event
    let formData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.PRICE.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    _autosService.addAuto(formData, this.showAutos)
    form.reset()
  }
  destroyAuto(id) {
    _autosService.destroyAuto(id, this.showAutos)
  }
}