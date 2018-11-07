export default class Realestate {
  constructor(data) {
    if (!data.bedrooms || !data.bathrooms || !data.price || !data.name || !data.phone || !data.description) {
      throw new Error("Invalid Real Estate Creation")
    }
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.price = data.price
    this.name = data.name
    this.phone = data.phone
    this.description = data.description
    this.img = data.img
  }
}