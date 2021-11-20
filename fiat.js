let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Синий",
  passengers: 2,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function () {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.fuel <= 0) {
      alert("!!!");
      this.started = false;
    }
    if (this.started) {
      alert("Бип!");
      this.fuel -= 2;
    } else {
      alert("Сначала запустите двигатель!");
    }
    if (this.fuel < 0) {
      this.fuel = 0;
    }
  },
  showFuel: function () {
    alert("У меня в баке " + this.fuel + " литров бензина!");
  },
  addFuel: function (amount) {
    amount = prompt("Введите кол-во бензина");
    this.fuel += amount;
  },
  toString: function() {
    return 'Автомобиль: ' + this.make + ' Год: ' + this.year + ' Цвет: ' + this.color + ' Пассажиров: ' + this.passengers;
  },
};
let k = 0;
fiat.showFuel();
fiat.addFuel(k);
fiat.showFuel();
fiat.start();
let n = prompt("Сколько поездок вы хотите проехать?")
for (i = 0; i < n; i++) {
fiat.drive();
fiat.showFuel();
}
//