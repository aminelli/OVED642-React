
type User = {
    id: number;
    name: string;
    roles: string[];
}

const user: User = {
    id: 1,
    name: "Mario",
    roles: ["admin", "user"]
}


interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
}

const product: Product = {
    id: 101,
    name: "Laptop",
    price: 999.99
}


class Cart {
    private items: Product[] = [];

    addItem(item: Product): void {
        this.items.push(item);
    }

    removeItem(itemId: number): void {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getItems(): Product[] {
        return this.items;
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

}

const cart = new Cart();
cart.addItem(product);
console.log(cart.getItems());
console.log("Total:", cart.getTotal()); 


console.log("Hello, TypeScript!");
console.log("Speriamo funzioni tutto correttamente.");