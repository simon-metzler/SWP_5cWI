interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}


const cars: Car[] = [
  {
    brand: "Volkswagen",
    model: "Golf 8",
    price: 28990,
    year: 2023
  },
  {
    brand: "BMW",
    model: "320i",
    price: 45900,
    year: 2022
  },
  {
    brand: "Mercedes-Benz",
    model: "C200",
    price: 51200,
    year: 2024
  },
  {
    brand: "Audi",
    model: "A3 Sportback",
    price: 33450,
    year: 2023
  },
  {
    brand: "Tesla",
    model: "Model 3",
    price: 39990,
    year: 2024
  },
  {
    brand: "Toyota",
    model: "Corolla Hybrid",
    price: 27900,
    year: 2021
  },
  {
    brand: "Ford",
    model: "Mustang GT",
    price: 55900,
    year: 2022
  },
  {
    brand: "Hyundai",
    model: "Ioniq 6",
    price: 44900,
    year: 2024
  },
  {
    brand: "Kia",
    model: "Sportage",
    price: 31900,
    year: 2023
  },
  {
    brand: "Porsche",
    model: "911 Carrera",
    price: 118900,
    year: 2024
  }
];


function getTotalPrice(cars: Car[]): number {
    let totalPrice = 0;
    for (const car of cars) {
        totalPrice += car.price;
    }
    return totalPrice;
}

function printCars(cars: Car[]) {
    for (const car of cars) {
        console.log(`Car from ${car.brand} of model ${car.model}. Priced at ${car.price}. Released ${car.year}.`);
    }
}

function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
    let expensiveCars: Car[] = [];
    for (const car of cars) {
        if (car.price > minPrice) {
            expensiveCars.push(car);
        }
    }
    return expensiveCars;
}


function getTotalPrice2(cars: Car[]): number {
    return cars.reduce((totalPrice: number, car: Car) => {
      return totalPrice + car.price;
    }, 0);

}


function printCars2(cars: Car[]) {
    cars.map(car => {
        console.log(`Car from ${car.brand} of model ${car.model}. Priced at ${car.price}. Released ${car.year}.`);
    });
}

function getExpensiveCars2(cars: Car[], minPrice: number): Car[] {
    return cars.filter(car => car.price > minPrice);
}


console.log(getTotalPrice(cars));
console.log(getTotalPrice2(cars));

// printCars(cars);
// printCars2(cars);


// console.log(getExpensiveCars(cars, 50000))
// console.log(getExpensiveCars2(cars, 50000))