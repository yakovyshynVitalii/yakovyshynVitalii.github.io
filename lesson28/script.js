// ЗАВДАННЯ 1

class Circle {
  constructor(radius){
    this._radius = radius;
    this._diameter = this._radius * this._radius;
  }
  get radius(){
    return this._radius;
  }
  set radius (value){
    if(value !== undefined && typeof value === `boolean` ){
      this._radius = value;
    }else{
      console.error(`Помилка.Введіть радіус кола`);
    }
  }
  
  get diameter(){
    return this._diameter;
  }
  set diameter(value){
    if(value !== undefined && typeof value === `boolean` ){
      this._radius = value;
    }else{
      console.error(`Помилка. Можливо ви не ввели радіус`);
    }
  }
  ploshcza (){
    this.ploshcza = 3.1415 * (this._radius * this._radius);
    console.log(`Площа цього кола ${this.ploshcza}`);
  }
  perymeter(){
    this.perymeter = this._diameter * this._radius;
    console.log(`Периметер цього кола ${this.perymeter}`);
  }
}

let circle1 = new Circle (prompt(`radius`));
console.log(`Радіус кола ${circle1.radius}`);
console.log(`Діаметер кола ${circle1.diameter}`);
circle1.ploshcza();
circle1.perymeter();



// ЗАВДАННЯ 2

class Marker {
  constructor(color, amount){
    this._color = color;
    this._amount = amount;
  }
  writeText (string){
    string = string.replace(/\s+/g, '');
    let letter = 0.5;
    for (let i = 0; i < string.length; i++){
      if(this._amount < letter){
        console.log (`Ой! Маркер закінчився`);
        break;
      }
      this._amount = this._amount - (letter);
      console.log(string[i]);
    }
  }
  refuel(refuelMarker){
    this._amount += refuelMarker;
    console.log (`Маркери було заправлено на ${this._amount}`);
  }
}

let newMarker = new Marker("Red", 5);
newMarker.writeText("Cxvfbvqweqweqwe");
newMarker.refuel(20);

