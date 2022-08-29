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

  const hamburger = new Product("Hamburger", 11);  
  const hotdog = new Product("Hot Dog", 7);  

  const products: Product[] = [];
  products.push(hamburger);
  products.push(hotdog);

  
  console.log(products.toString()); // person.name isn't accessible from outside the class since it's private