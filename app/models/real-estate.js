export default class realEstate {
  constructor(data) {

    if (!data.hasOwnProperty('_id') || !data.bedrooms || !data.hasOwnProperty('bathrooms') || !data.price) {
      throw new Error("Missing Real Estate Data Field")
    }
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }
  getrealEstateHTML() {
    return `<div class="col-sm-4 my-1 card">
        <div class="">
          <img class="card-img-top" src="${this.imgUrl}">
          <div class="card-body">
            <h5 class="card-title"> Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms}</h5>
            <div class="card-text">
              <p>Price: ${this.price}</p>
              <p>Year: ${this.year}</p>
              <p>Levels: ${this.levels}</p>
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