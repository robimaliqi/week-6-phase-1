class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price
  }

  getName() {;
    return this.name;
  }

  getPrice() {;
    return this.price;
  }

}

class ShoppingBasket {

  constructor() {
    this.basket = [];
  }

  addItem(item) {
    this.basket.push(item)
  }

  
  getTotalPrice() {
    let total = 0;
      this.basket.map((item) => {
      return total += item.getPrice();
    });
      return total;
  }
}

const candy = new Candy('Mars', 4.99);

const basket = new ShoppingBasket();

basket.addItem(candy);
basket.addItem(new Candy("chocolate", 5.99));
basket.addItem(new Candy("marshmallows", 1.99));

console.log(candy.getName());
console.log(candy.getPrice());

console.log(basket.getTotalPrice());