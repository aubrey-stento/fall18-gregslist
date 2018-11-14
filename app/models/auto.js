export default class Auto {
  constructor(data) {
    if (!data._id || !data.make || !data.model || !data.year || !data.price) {
      throw new Error("Invalid Auto Creation")
    }
    this._id = data._id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.description = data.description || 'No Description'
    this.imgUrl = data.imgUrl
  }
  getAutoHTML() {
    return `<div class="col-sm-4 my-1 card">
        <div class="">
          <img class="card-img-top" src="${this.imgUrl}">
          <div class="card-body">
            <h5 class="card-title">${this.make} - ${this.model}</h5>
            <div class="card-text">
              <p>Price: ${this.price}</p>
              <p>${this.description}</p>
            <div>
            <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.autosController.destroyAuto('${this._id}')"></i>
          </div>
      </div>
      </div>
      </div>
    </div>
    `
  }
}