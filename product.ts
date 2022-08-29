class Product {
    private name: string;
    private price: number;
  
    public constructor(name: string, price:number) {
      this.name = name;
      this.price = price;
    }
  
    public getName(): string {
      return this.name;
    }

    public toString(): string {
        return `Product Name: ${this.name} Price: ${this.price}`;
    }
  }

  class Drink extends Product {
    containsAlcohol: boolean;
    public constructor(name:string, price:number, containsAlcohol:boolean) {
        super(name, price);
        this.containsAlcohol = containsAlcohol;
      }
  }

  class Food extends Product {
    type: string;
    calories: number;

    public constructor(name:string, price:number, type:string, calories:number) {
        super(name, price);
        this.type = type;
        this.calories = calories;
      }
  }

  const hamburger = new Food("Classic Hamburger", 11, "Burgers", 900);  
  const gardenSalad = new Food("Garden Salad", 7, "Soups & Salads", 600); 
  const lemonade = new Drink("Lemonade", 7, false); 
  const beer = new Drink("Beer", 7, true); 

  const products: Product[] = [];
  products.push(hamburger);
  products.push(gardenSalad);
  products.push(lemonade);
  products.push(beer);

  
  console.log(products.toString()); // person.name isn't accessible from outside the class since it's private