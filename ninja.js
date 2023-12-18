class Ninja {
  constructor(name) {
    this.name = name;
    this.hp = 100;
    this.str = 3;
    this.spd = 3;
  }
  sayName() {
    console.log(`Mi nombre ninja ${this.name}.`);
    return this;
  }
  showStats() {
    console.log(
      `Name: ${this.name}, hp: ${this.hp}, str: ${this.str}, spd: ${this.spd}`
    );
    return this;
  }
  drinkSake() {
    this.hp += 10;
    console.log(`${this.name} consumió sake y gano 10hp`);
    return this;
  }
}

