export class Pokemon {
  name: string;
  image: string;
  strength: number;

  constructor(name, image, strength) {
    this.name = name;
    this.image = image;
    this.strength = strength;
  }

  getStrength() {
    return this.strength;
  }
}
