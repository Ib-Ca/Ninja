class Ninja {
  constructor(name) {
    this.name = name;
    this.hp = 100;
    this.str = 3;
    this.spd = 3;
  }
  sayName() {
    console.log(`Mi nombre ninja es ${this.name}.`);
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
//const musashi = new Ninja("Musashi");
//musashi.sayName().showStats().drinkSake();

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.hp = 200;
    this.str = 10;
    this.spd = 10;
    this.wis = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log(
      "Lo que un programador hace en un mes, dos programadores lo harán en dos meses"
    );
    return this
  }
  drinkSake() {
    super.drinkSake();
    return this
  }
}

//const sensei = new Sensei("SolidSnake");
//sensei.speakWisdom().showStats();
